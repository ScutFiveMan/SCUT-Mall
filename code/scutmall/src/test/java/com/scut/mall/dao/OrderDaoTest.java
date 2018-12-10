package com.scut.mall.dao;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.*;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/23 10:02
 * @ Description：订单测试类
 * @ Modified By：
 */
@SpringBootTest
public class OrderDaoTest {
    @Autowired
    private OrderDao orderDao;

    @Test
    public void findOrderById() {
        orderDao.findOrderById(1);
    }

    @Test
    public void updateState() {
        orderDao.updateState(1,1);
    }

    @Test
    public void findByUserId() {
        orderDao.findByUserId(1);
    }
    @Test
    public  void getMoneySum(){ orderDao.getMoneySum(); }

}