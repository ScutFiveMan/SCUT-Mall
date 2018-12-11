package com.scut.mall.web.adminUser;

import com.scut.mall.entity.OrderItem;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
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

    @RequestMapping("/toList.html")
    public  String toAnalysisList(ModelMap map){
        /* 获取历史订单总营业额 */
        map.addAttribute("moneySum", orderService.getMoneySum());
        /* 获取历史订单总用户量 */
        map.addAttribute("userSum", orderService.getUserSum());
        /* 获取每月订单量与营业额 */
        map.addAttribute("monthly",orderService.getMonthly());
        return "admin/analysis/list";
    }

}
