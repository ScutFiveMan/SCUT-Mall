package com.scut.mall.dao;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.*;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/29 11:14
 * @ Description：产品种类测试类
 * @ Modified By：
 */
@SpringBootTest
public class ProductCategoryDaoTest {
    @Autowired
    private ProductCategoryDao productCategoryDao;

    @Test
    public void findProductCategoryById() {
        productCategoryDao.findProductCategoryById(1);
    }
}