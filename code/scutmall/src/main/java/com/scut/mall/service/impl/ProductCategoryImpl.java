package com.scut.mall.service.impl;

import com.scut.mall.dao.ProductCategoryDao;
import com.scut.mall.entity.ProductCategory;
import com.scut.mall.service.ProductCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/28 23:51
 * @ Description：产品种类业务逻辑实现类
 * @ Modified By：
 */
@Service
public class ProductCategoryImpl implements ProductCategoryService {
    @Autowired
    private ProductCategoryDao productCategoryDao;

    @Override
    public ProductCategory findById(int id) {
        return productCategoryDao.findProductCategoryById(id);
    }

    @Override
    public List<ProductCategory> findAll() {
        return productCategoryDao.findAll();
    }

    @Override
    public Page<ProductCategory> findAll(Pageable pageable) {
        return productCategoryDao.findAll(pageable);
    }

    @Override
    public List<ProductCategory> findAllExample(Example<ProductCategory> example) {
        return productCategoryDao.findAll(example);
    }

    @Override
    public void update(ProductCategory productCategory) {
        productCategoryDao.save(productCategory);
    }

    @Override
    public int create(ProductCategory productCategory) {
        ProductCategory productCategory1=productCategoryDao.save(productCategory);
        return productCategory.getId();
    }

    @Override
    public void delById(int id) {
        productCategoryDao.deleteById(id);
    }
}
