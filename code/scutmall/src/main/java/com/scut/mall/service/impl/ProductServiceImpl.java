package com.scut.mall.service.impl;

import com.scut.mall.dao.ProductCategoryDao;
import com.scut.mall.dao.ProductDao;
import com.scut.mall.entity.Product;
import com.scut.mall.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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

    @Override
    public List<Product> findByProductCategoryId(int productCategoryId, Pageable pageable) {
        return productDao.findByProductCategoryId(productCategoryId,pageable);
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
}
