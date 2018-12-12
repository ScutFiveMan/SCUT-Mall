package com.scut.mall.service;

import com.scut.mall.entity.Order;
import com.scut.mall.entity.OrderItem;
import com.sun.org.apache.xalan.internal.xsltc.util.IntegerArray;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.persistence.Tuple;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/22 23:40
 * @ Description：订单业务逻辑接口
 * @ Modified By：
 */
public interface OrderService {
    /**
     * 订单状态 1:未付款 2:等待发货 3:等待收货 4:订单完成
     */
    int STATE_NO_PAY = 1;
    int STATE_WAITE_SEND = 2;
    int STATE_WAITE_RECEIVE = 3;
    int STATE_COMPLETE = 4;

    /**
     * create by: Bin Liu
     * description: 根据id查询
     * create time: 2018/11/22 23:51
     * @Param: id
     * @return
     */
    Order findById(int id);

    /**
     * create by: Bin Liu
     * description: 分页查询所有
     * create time: 2018/11/22 23:51
     * @Param: pageable
     * @return
     */
    Page<Order> findAll(Pageable pageable);

    /**
     * create by: Shuo Lin
     * description: 获取历史订单总额
     * create time: 2018/12/2 21:56
     * @Param:
     * @return
     */
    double getMoneySum();
    /**
     * create by: Shuo Lin
     * description: 获取用户总数
     * create time: 2018/12/2 23:06
     * @Param:
     * @return
     */
    int getUserSum();
    /**
     * create by: Shuo Lin
     * description: 获取每月统计
     * create time: 2018/12/2 23:06
     * @Param:
     * @return
     */
    List<Tuple> getMonthly();

    /**
     * create by: Bin Liu
     * description: 按条件查询
     * create time: 2018/11/22 23:52
     * @Param: example
     * @return
     */
    List<Order> findAllExample(Example<Order> example);

    /**
     * create by: Bin Liu
     * description: 更新
     * create time: 2018/11/22 23:52
     * @Param: order
     * @return
     */
    void update(Order order);

    /**
     * create by: Bin Liu
     * description: 创建
     * create time: 2018/11/22 23:52
     * @Param: order
     * @return
     */
    int create(Order order);

    /**
     * create by: Bin Liu
     * description: 根据Id删除
     * create time: 2018/11/22 23:52
     * @Param: id
     * @return
     */
    void delById(int id);

    /**
     * create by: Bin Liu
     * description: 查询订单的订单项
     * create time: 2018/11/22 23:52
     * @Param: orderId
     * @return
     */
    List<OrderItem> findItems(int orderId);

    /**
     * create by: Bin Liu
     * description: 更改订单状态
     * create time: 2018/11/22 23:53
     * @param id
     * @param status
     * @return
     */
    void updateStatus(int id, int status);

    /**
     * create by: Bin Liu
     * description: 查找用户的订单列表
     * create time: 2018/11/22 23:53
     * @Param: request
     * @return
     */
    List<Order> findUserOrder(HttpServletRequest request);

    /**
     * create by: Bin Liu
     * description: 支付
     * create time: 2018/11/22 23:53
     * @Param: orderId
     * @return
     */
    void pay(int orderId, HttpServletRequest request, HttpServletResponse response)throws Exception;

    /**
     * create by: Bin Liu
     * description: 提交订单
     * create time: 2018/11/22 23:53
     * @param addressId
     * @param request
     * @param response
     * @return
     */
    void submit(Integer addressId, HttpServletRequest request, HttpServletResponse response) throws Exception;

    /**
     * create by: Bin Liu
     * description: 确认收货
     * create time: 2018/11/22 23:54
     * @Param: orderId
     * @return
     */
    void receive(int orderId);
}
