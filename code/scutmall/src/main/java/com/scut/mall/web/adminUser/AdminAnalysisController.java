package com.scut.mall.web.adminUser;

import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @ Author     ：Shuo_Lin
 * @ Date       ：2018/12/1 21:11
 * @ Description：${统计模块的后台controller，历史订单总数，总金额，用户总数}
 * @ Modified By：
 */
@Controller
@RequestMapping("/admin/analysis")
public class AdminAnalysisController {
    @Autowired
    private OrderService orderService;

    /**
     * 获取历史订单总金额
     * @param
     * @return
     */
    @ResponseBody
    @RequestMapping("/getMoneySum.do")
    public ResultBean<Integer> getMoneySum() {
        int sum = orderService.getMoneySum();
        return new ResultBean<>(sum);
    }

    /**
     * 获取历史用户总数
     * @param
     * @return
     */
    @ResponseBody
    @RequestMapping("/getUserSum.do")
    public ResultBean<Integer> getUserSum() {
        int sum = orderService.getUserSum();
        return new ResultBean<>(sum);
    }

    /**
     * 获取每月订单金额
     * @param
     * @param
     * @return
     */

}
