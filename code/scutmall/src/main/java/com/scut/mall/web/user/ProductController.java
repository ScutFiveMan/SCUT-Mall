package com.scut.mall.web.user;

import com.scut.mall.entity.OrderItem;
import com.scut.mall.entity.Product;
import com.scut.mall.entity.ProductCategory;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.ProductCategoryService;
import com.scut.mall.service.ProductService;
import com.scut.mall.service.ShopCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/28 23:46
 * @ Description：产品控制层类
 * @ Modified By：
 */

@Controller
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductCategoryService productCategoryService;
    @Autowired
    private ShopCartService shopCartService;
    
    /**
     * create by: Bin Liu
     * description: 获取商品信息
     * create time: 2018/11/29 10:58
     * @param id
     * @return 
     */
    @RequestMapping("/get.do")
    public ResultBean<Product> getProduct(int id) {
        Product product = productService.findById(id);
        return new ResultBean<>(product);
    }
    
    /**
     * create by: Bin Liu
     * description: 打开商品详情页面
     * create time: 2018/11/29 11:01
     * @param id
     * @param map
     * @return 
     */
    @RequestMapping("/get.html")
    public String toProductPage(int id, Map<String, Object> map) {
        Product product = productService.findById(id);
        map.put("product", product);
        return "mall/product/info";
    }
    
    /**
     * create by: Bin Liu
     * description: 查找热门商品
     * create time: 2018/11/29 11:01
     * @Param: null
     * @return 
     */
    @ResponseBody
    @RequestMapping("/hot.do")
    public ResultBean<List<Product>> getHotProduct() {
        List<Product> products = productService.findHotProduct();
        return new ResultBean<>(products);
    }

    @ResponseBody
    @RequestMapping("/search.do")
    public ResultBean<List<Product>> findByTitleIsLike(String keyword, Pageable pageable) {
        List<Product> products = productService.findByTitleIsLike(keyword, pageable);
        return new ResultBean<>(products);
    }

    /**
     * create by: Bin Liu
     * description:
     * create time: 2018/11/29 11:02
     * @param pageNo
     * @param pageSize
     * @return
     */
    @ResponseBody
    @RequestMapping("/new.do")
    public ResultBean<List<Product>> getNewProduct(int pageNo, int pageSize) {
        Pageable pageable = new PageRequest(pageNo, pageSize);
        List<Product> products = productService.findNewProduct(pageable);
        return new ResultBean<>(products);
    }

    /**
     * create by: Bin Liu
     * description: 打开分类查看商品页面
     * create time: 2018/11/29 11:02
     * @Param: null
     * @return
     */
    @RequestMapping("/category.html")
    public String toCatePage(int cid, Map<String, Object> map) {
        ProductCategory productCategory = productCategoryService.findById(cid);
        map.put("productCategory", productCategory);
        return "mall/product/category";
    }

    @RequestMapping("/toCart.html")
    public String toCart(){
        return "mall/product/cart";
    }

    /**
     * create by: Bin Liu
     * description: 根据一级分类查找商品
     * create time: 2018/11/29 11:03
     * @param cid
     * @param pageNo
     * @param pageSize
     * @return
     */
    @ResponseBody
    @RequestMapping("/category.do")
    public ResultBean<List<Product>> getCategoryProduct(int cid, int pageNo, int pageSize) {
        Pageable pageable = new PageRequest(pageNo, pageSize);
        List<Product> products = productService.findByProductCategoryId(cid, pageable);
        return new ResultBean<>(products);
    }

    /**
     * create by: Bin Liu
     * description: 按二级分类查找商品
     * create time: 2018/12/5 19:23
     * @param csId
     * @param pageNo
     * @param pageSize
     * @return 
     */
    @ResponseBody
    @RequestMapping("/categorySec.do")
    public ResultBean<List<Product>> getCategorySecProduct(int csId, int pageNo, int pageSize) {
        Pageable pageable = new PageRequest(pageNo, pageSize);
        List<Product> products = productService.findByProductCategorySecondId(csId, pageable);
        return new ResultBean<>(products);
    }

    /**
     * 根据一级分类查询它所有的二级分类
     * @param cid
     * @return
     */
    @ResponseBody
    @RequestMapping("/getCategorySec.do")
    public ResultBean<List<ProductCategory>> getCategorySec(int cid){
        List<ProductCategory> list = productCategoryService.findByParentId(cid);
        return new ResultBean<>(list);
    }
    
    /**
     * create by: Bin Liu
     * description: 加购物车
     * create time: 2018/11/29 11:04
     * @param productId
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping("/addCart.do")
    public ResultBean<Boolean> addToCart(int productId, HttpServletRequest request) throws Exception {
        shopCartService.addCart(productId, request);
        return new ResultBean<>(true);
    }

    /**
     * create by: Bin Liu
     * description: 移除购物车
     * create time: 2018/11/29 11:04
     * @param productId
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping("/delCart.do")
    public ResultBean<Boolean> delToCart(int productId, HttpServletRequest request) throws Exception {
        shopCartService.remove(productId, request);
        return new ResultBean<>(true);
    }

    /**
     * create by: Bin Liu
     * description: 查看购物车商品
     * create time: 2018/11/29 11:05
     * @Param: request
     * @return
     */
    @ResponseBody
    @RequestMapping("/listCart.do")
    public ResultBean<List<OrderItem>> listCart(HttpServletRequest request) throws Exception {
        List<OrderItem> orderItems = shopCartService.listCart(request);
        return new ResultBean<>(orderItems);
    }
}
