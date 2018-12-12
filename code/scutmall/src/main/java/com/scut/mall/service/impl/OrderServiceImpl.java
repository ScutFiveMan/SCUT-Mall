package com.scut.mall.service.impl;

import com.scut.mall.dao.*;
import com.scut.mall.entity.*;
import com.scut.mall.service.AddressService;
import com.scut.mall.service.OrderService;
import com.scut.mall.service.ShopCartService;
import com.scut.mall.service.exception.LoginException;
import com.sun.org.apache.xalan.internal.xsltc.util.IntegerArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Tuple;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/22 23:44
 * @ Description：订单业务逻辑实现类
 * @ Modified By：
 */
@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderDao orderDao;
    @Autowired
    private OrderItemDao orderItemDao;
    @Autowired
    private ProductDao productDao;
    @Autowired
    private ShopCartService shopCartService;
    @Autowired
    private AddressDao addressDao;
    @Autowired
    private UserDao userDao;

    @Override
    public Order findById(int id) {
        return orderDao.findOrderById(id);
    }

    @Override
    public Page<Order> findAll(Pageable pageable) {
        return orderDao.findAll(pageable);
    }

    @Override
    public double getMoneySum(){
        return orderDao.getMoneySum();
    }
    @Override
    public int getUserSum(){
        return orderDao.getUserSum();
    }
    @Override
    public List<Tuple> getMonthly() {return orderDao.getMonthly();}

    @Override
    public List<Order> findAllExample(Example<Order> example) {
        return orderDao.findAll(example);
    }

    @Override
    public void update(Order order) {
        orderDao.save(order);
    }

    @Override
    public int create(Order order) {
        Order order1 = orderDao.save(order);
        return order1.getId();
    }

    @Override
    public void delById(int id) {
        orderDao.deleteById(id);
    }

    /**
     * 查询订单项详情
     * @param orderId
     * @return
     */
    @Override
    public List<OrderItem> findItems(int orderId) {
        List<OrderItem> list = orderItemDao.findByOrderId(orderId);
        for (OrderItem orderItem : list) {
            Product product = productDao.findProductById(orderItem.getProductId());
            orderItem.setProduct(product);
        }
        return list;
    }

    /**
     * 更改订单状态
     *
     * @param id
     * @param status
     */
    @Override
    public void updateStatus(int id, int status) {
        Order order = orderDao.findOrderById(id);
        order.setState(status);
        orderDao.save(order);
    }

    /**
     * 查找用户的订单列表
     *
     * @param request
     * @return
     */
    @Override
    public List<Order> findUserOrder(HttpServletRequest request) {
        //从session中获取登录用户的id，查找他的订单
        Object user = request.getSession().getAttribute("user");
        if (user == null)
            throw new LoginException("请登录！");
        User loginUser = (User) user;
        List<Order> orders = orderDao.findByUserId(loginUser.getId());
        for (Order order : orders) {
            Address address=addressDao.findAddressById(order.getAddressId());
            order.setAddress(address);
        }
        return orders;
    }

    /**
     * 支付
     *
     * @param orderId
     */
    @Override
    public void pay(int orderId,HttpServletRequest request,HttpServletResponse response) throws Exception{
        //具体逻辑就不实现了，直接更改状态为 待发货
        Order order = orderDao.findOrderById(orderId);
        Object user = request.getSession().getAttribute("user");
        User loginUser = (User) user;
        loginUser.setIntegration(order.getTotalIntegral()+loginUser.getIntegration());
        userDao.save(loginUser);
        if (order == null)
            throw new RuntimeException("订单不存在");
        orderDao.updateState(STATE_WAITE_SEND,order.getId());
    }

    /**
     * 提交订单
     *
     * @param addressId
     * @param request
     * @param response
     */
    @Override
    @Transactional
    public void submit(Integer addressId, HttpServletRequest request, HttpServletResponse response) throws Exception {
        Object user = request.getSession().getAttribute("user");
        if (user == null)
            throw new LoginException("请登录！");
        User loginUser = (User) user;
        Order order = new Order();
        order.setAddressId(addressId);
        order.setAddress(addressDao.findAddressById(addressId));
        order.setOrderTime(new Date());
        order.setUserId(loginUser.getId());
        order.setState(STATE_NO_PAY);
        List<OrderItem> orderItems = shopCartService.listCart(request);
        Double total = 0.0;
        Integer totalIntegral=0;
        order.setTotal(total);
        order.setTotalIntegral(totalIntegral);
        order = orderDao.save(order);
        for (OrderItem orderItem : orderItems) {
            orderItem.setOrderId(order.getId());
            total += orderItem.getSubTotal();
            totalIntegral +=orderItem.getSubIntegral();
            orderItemDao.save(orderItem);
        }
        order.setTotal(total);
        order.setTotalIntegral(totalIntegral);
        orderDao.save(order);
		//清空购物车
        List<Integer> productIds = (List<Integer>) request.getSession().getAttribute("shop_cart_"+ loginUser.getId());
        System.out.println(productIds);
        Iterator<Integer> iterator = productIds.iterator();
        while (iterator.hasNext()) {
            if (iterator.next()!=null) {
                iterator.remove();
            }
        }
    }

    /**
     * 确认收货
     *
     * @param orderId
     */
    @Override
    public void receive(int orderId) {
        Order order = orderDao.findOrderById(orderId);
        if (order == null)
            throw new RuntimeException("订单不存在");
        orderDao.updateState(STATE_COMPLETE,order.getId());
    }
}
