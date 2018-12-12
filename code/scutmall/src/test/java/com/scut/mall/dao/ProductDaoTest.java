package com.scut.mall.dao;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/23 10:02
 * @ Description：产品测试类
 * @ Modified By：
 */
@SpringBootTest
public class ProductDaoTest {
    @Autowired
    private ProductDao productDao;

    @Test
    public void findProductById() {
        productDao.findProductById(1);
    }

    @Test
    public void findByCsId() {
        productDao.findByCsId(1,null);
    }

    @Test
    public void findByTitleIsLike() {
        productDao.findByTitleIsLike("电脑");
    }

    @Test
    public void findByDateAfter() {
        productDao.findByDateAfter(new Date(),null);
    }

    @Test
    public void findByIsHot() {
        productDao.findByIsHot(1,null);
    }

    @Test
    public void findNew() {
        productDao.findNew(null);
    }
}