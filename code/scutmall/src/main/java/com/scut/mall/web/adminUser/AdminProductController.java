package com.scut.mall.web.adminUser;


import com.scut.mall.entity.Product;
import com.scut.mall.entity.ProductCategory;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.ProductCategoryService;
import com.scut.mall.service.ProductService;
import com.scut.mall.utils.FileUtil;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/28 23:54
 * @ Description：后台商品管理控制层类
 * @ Modified By：
 */

@Controller
@RequestMapping("/admin/product")
public class AdminProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductCategoryService productCategoryService;

    @RequestMapping("/toList.html")
    public String toList() {
        return "admin/product/list";
    }

    @RequestMapping("/toAdd.html")
    public String toAdd() {
        return "admin/product/add";
    }

    @RequestMapping("/toEdit.html")
    public String toEdit(int id, Map<String, Object> map) {
        Product product = productService.findById(id);
        ProductCategory productCategory = productCategoryService.findById(product.getCsId());
        product.setCategorySec(productCategory);
        map.put("product", product);
        return "admin/product/edit";
    }

    @ResponseBody
    @RequestMapping("/list.do")
    public ResultBean<List<Product>> listProduct(int pageindex,
                                                 @RequestParam(value = "pageSize", defaultValue = "15") int pageSize) {
        Pageable pageable = PageRequest.of(pageindex, pageSize, Sort.by(Sort.Direction.ASC,"id"));
        List<Product> list = productService.findAll(pageable).getContent();
        return new ResultBean<>(list);
    }

    @ResponseBody
    @RequestMapping("/getTotal")
    public ResultBean<Integer> getTotal() {
        Pageable pageable =  PageRequest.of(1, 15, null);
        int total = (int) productService.findAll(pageable).getTotalElements();
        return new ResultBean<>(total);
    }

    @RequestMapping("/del.do")
    @ResponseBody
    public ResultBean<Boolean> del(int id) {
        productService.deleteById(id);
        return new ResultBean<>(true);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/add.do")
    public void add(MultipartFile image,
                    String title,
                    Double marketPrice,
                    Double shopPrice,
                    int isHot,
                    String desc,
                    int csId,
                    int integral,
                    HttpServletRequest request,
                    HttpServletResponse response) throws Exception {
        Product product = new Product();
        product.setTitle(title);
        product.setMarketPrice(marketPrice);
        product.setShopPrice(shopPrice);
        product.setDescription(desc);
        product.setIsHot(isHot);
        product.setIntegral(integral);
        product.setCsId(csId);
        product.setDate(new Date());
        String imgUrl = FileUtil.saveFile(image);
        product.setImage(imgUrl);
        int id = productService.create(product);
        if (id <= 0) {
            request.setAttribute("message", "添加失败！");
            request.getRequestDispatcher("toAdd.html").forward(request, response);
        } else {
            request.getRequestDispatcher("toList.html").forward(request, response);
        }
    }


    @RequestMapping(method = RequestMethod.POST, value = "/update.do")
    public void update(int id,
                       String title,
                       Double marketPrice,
                       Double shopPrice,
                       String desc,
                       int integral,
                       int csId,
                       int isHot,
                       MultipartFile image,
                       HttpServletRequest request,
                       HttpServletResponse response) throws Exception {
        Product product = productService.findById(id);
        product.setTitle(title);
        product.setMarketPrice(marketPrice);
        product.setShopPrice(shopPrice);
        product.setDescription(desc);
        product.setIntegral(integral);
        product.setIsHot(isHot);
        product.setCsId(csId);
        product.setDate(new Date());
        String imgUrl = FileUtil.saveFile(image);
        if (StringUtils.isNotBlank(imgUrl)) {
            product.setImage(imgUrl);
        }
        boolean flag = false;
        try {
            productService.update(product);
            flag = true;
        } catch (Exception e) {
            throw new Exception(e);
        }
        if (!flag) {
            request.setAttribute("message", "更新失败！");
        }
        response.sendRedirect("toList.html");
    }

    @RequestMapping(method = RequestMethod.GET, value = "/img/{filename:.+}")
    public void getImage(@PathVariable(name = "filename", required = true) String filename, HttpServletResponse res) throws IOException {
        File file = new File("file/" + filename);
        if (file != null && file.exists()) {
            res.setHeader("content-type", "application/octet-stream");
            res.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(filename, "UTF-8"));
            res.setContentLengthLong(file.length());
            Files.copy(Paths.get(file.toURI()), res.getOutputStream());
        }
    }
}
