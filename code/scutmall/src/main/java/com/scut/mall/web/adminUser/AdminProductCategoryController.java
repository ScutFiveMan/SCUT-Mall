package com.scut.mall.web.adminUser;

import com.scut.mall.entity.ProductCategory;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/28 23:54
 * @ Description：后台商品总类管理控制层类
 * @ Modified By：
 */

@Controller
@RequestMapping("/admin/productCategory")
public class AdminProductCategoryController {
    @Autowired
    private ProductCategoryService productCategoryService;

    /**
     * create by: Bin Liu
     * description: 返回列表页面
     * create time: 2018/11/29 10:43
     * @param
     * @return
     */
    @RequestMapping("/toList.html")
    public String toList(int type) {
        if (type == 1) {// 一级分类页面
            return "admin/category/list";
        } else if (type == 2) {// 二级分类页面
            return "admin/categorysec/list";
        } else {
            return "";
        }
    }

    /**
     * create by: Bin Liu
     * description: 打开添加分类页面
     * create time: 2018/11/29 10:44
     * @Param: null
     * @return
     */
    @RequestMapping("/toAdd.html")
    public String toAdd(int type) {
        if (type == 1) {// 一级分类页面
            return "admin/category/add";
        } else if (type == 2) {// 二级分类页面
            return "admin/categorysec/add";
        } else {
            return "";
        }
    }

    /**
     * create by: Bin Liu
     * description: 打开编辑页面
     * create time: 2018/11/29 10:45
     * @param id
     * @param map
     * @return
     */
    @RequestMapping("/toEdit.html")
    public String toEdit(int id,int type, Map<String, Object> map) {
        ProductCategory productCategory = productCategoryService.findById(id);
        map.put("cate", productCategory);
        if (type == 1) {// 一级分类页面
            return "admin/category/edit";
        } else if (type == 2) {// 二级分类页面
            ProductCategory productCategory1 = productCategoryService.findById(productCategory.getParentId());
            map.put("cate", productCategory1);
            map.put("catese",productCategory);
            return "admin/categorysec/edit";
        } else {
            return "";
        }
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/add.do")
    public ResultBean<Boolean> add(String cname, int parentId, int type) {
        ProductCategory productCategory=new ProductCategory();
        productCategory.setParentId(parentId);
        productCategory.setCname(cname);
        productCategory.setType(type);
        productCategoryService.create(productCategory);
        return new ResultBean<>(true);
    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/update.do")
    public ResultBean<Boolean> update(int id, String cname, int parentId, int type) {
        ProductCategory productCategory = productCategoryService.findById(id);
        productCategory.setCname(cname);
        productCategory.setParentId(parentId);
        productCategory.setType(type);
        productCategoryService.update(productCategory);
        return new ResultBean<>(true);
    }

    @ResponseBody
    @RequestMapping("/del.do")
    public ResultBean<Boolean> del(int id) {
        productCategoryService.delById(id);
        return new ResultBean<>(true);
    }

    @RequestMapping("/list.do")
    @ResponseBody
    public ResultBean<List<ProductCategory>> findAll(int type,
                                                     int pageindex, @RequestParam(value = "pageSize", defaultValue = "15") int pageSize) {
        List<ProductCategory> list = new ArrayList<>();
        if (pageindex == -1)
            list = productCategoryService.findAll(type);
        else {
            Pageable pageable = new PageRequest(pageindex, pageSize, null);
            list = productCategoryService.findAll(type,pageable).getContent();
        }
        return new ResultBean<>(list);
    }

    @ResponseBody
    @RequestMapping("/getTotal.do")
    public ResultBean<Integer> getTotal(int type) {
        Pageable pageable = new PageRequest(1, 15, null);
        int count = (int) productCategoryService.findAll(type,pageable).getTotalElements();
        return new ResultBean<>(count);
    }
}
