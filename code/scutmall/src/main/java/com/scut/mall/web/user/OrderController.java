package com.scut.mall.web.user;

import com.scut.mall.entity.Order;
import com.scut.mall.entity.OrderItem;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/22 23:47
 * @ Description：订单控制层类
 * @ Modified By：
 */
@Controller
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    /**
     * 打开订单列表页面
     *
     * @return
     */
    @RequestMapping("/toList.html")
    public String toOrderList() {
        return "mall/order/list";
    }

    /**
     * 查询用户订单列表
     *
     * @param request
     * @return
     */
    @RequestMapping("/list.do")
    @ResponseBody
    public ResultBean<List<Order>> listData(HttpServletRequest request) {
        List<Order> orders = orderService.findUserOrder(request);
        return new ResultBean<>(orders);
    }

    /**
     * 查询订单详情
     *
     * @param orderId
     * @return
     */
    @RequestMapping("/getDetail.do")
    @ResponseBody
    public ResultBean<List<OrderItem>> getDetail(int orderId) {
        List<OrderItem> orderItems = orderService.findItems(orderId);
        return new ResultBean<>(orderItems);
    }
//
//    /**
//     * 提交订单
//     *
//     * @param addressId
//     * @param request
//     * @param response
//     */
//    @RequestMapping("/submit.do")
//    public void submit(Integer addressId,
//                       HttpServletRequest request,
//                       HttpServletResponse response) throws Exception {
//        orderService.submit(addressId, request, response);
//    }

    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, value = "/submit.do")
    public ResultBean<Boolean> submit(int address, HttpServletRequest request, HttpServletResponse response) throws Exception{
    orderService.submit( address, request, response );

        return new ResultBean<>(true);
    }
    /**
     * 支付方法
     *
     * @param orderId
     */
    @RequestMapping("pay.do")
    @ResponseBody
    public ResultBean<Boolean> pay(int orderId, HttpServletResponse response) throws IOException {
        orderService.pay(orderId);
        return new ResultBean<>(true);
    }

    /**
     * 确认收货
     * @param orderId
     * @param response
     * @return
     * @throws IOException
     */
    @RequestMapping("receive.do")
    @ResponseBody
    public ResultBean<Boolean> receive(int orderId, HttpServletResponse response) throws IOException {
        orderService.receive(orderId);
        return new ResultBean<>(true);
    }
}
