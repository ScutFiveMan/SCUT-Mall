package com.scut.mall.service.impl;

import com.scut.mall.dao.ProductCategoryDao;
import com.scut.mall.dao.ProductDao;
import com.scut.mall.entity.Product;
import com.scut.mall.entity.ProductCategory;
import com.scut.mall.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/23 9:30
 * @ Description：产品业务逻辑实现类
 * @ Modified By：
 */
@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductDao productDao;
    @Autowired
    private ProductCategoryDao productCategoryDao;

    @Override
    public Product findById(int id) {
        return productDao.findProductById(id);
    }

    @Override
    public Page<Product> findAll(Pageable pageable) {
        return productDao.findAll(pageable);
    }

    @Override
    public List<Product> findHotProduct() {
        return productDao.findByIsHot(1, null);
    }

    @Override
    public List<Product> findNewProduct(Pageable pageable) {
        return productDao.findNew(pageable);
    }

    /**
     * create by: Bin Liu
     * description: 根据一级分类查找商品
     * create time: 2018/12/5 19:06
     * @param cId
     * @param pageable
     * @return 
     */
    @Override
    public List<Product> findByProductCategoryId(int cId, Pageable pageable) {
        //查找出所有二级分类
        List<ProductCategory> productCategories = productCategoryDao.findByParentId(cId);
        List<Integer> secIds = new ArrayList<>();
        for (ProductCategory productCategory : productCategories) {
            secIds.add(productCategory.getId());
        }
        return productDao.findByCsIdIn(secIds,pageable);
    }

    /**
     * create by: Bin Liu
     * description: 根据二级分类查找商品
     * create time: 2018/12/5 19:08
     * @param csId
     * @param pageable
     * @return 
     */
    @Override
    public List<Product> findByProductCategorySecondId(int csId, Pageable pageable) {
        return productDao.findByCsId(csId,pageable);
    }


    @Override
    public void update(Product product) {
        productDao.save(product);
    }

    @Override
    public int create(Product product) {
        return productDao.save(product).getId();
    }


    @Override
    public void deleteById(int id) {
        productDao.deleteById(id);
    }

    @Override
    public List<Product> findByTitleIsLike(String keyword) {
        return productDao.findByTitleIsLike(keyword);
    }
}
