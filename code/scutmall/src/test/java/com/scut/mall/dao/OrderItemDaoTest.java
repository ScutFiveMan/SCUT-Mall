package com.scut.mall.dao;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.*;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/23 10:03
 * @ Description：订单项测试类
 * @ Modified By：
 */
@SpringBootTest
public class OrderItemDaoTest {
    @Autowired
    private OrderItemDao orderItemDao;

    @Test
    public void findByOrderId() {
        orderItemDao.findByOrderId(1);
    }
}