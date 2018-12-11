package com.scut.mall.web.adminUser;

import com.scut.mall.entity.OrderItem;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.OrderService;
import com.sun.org.apache.xalan.internal.xsltc.util.IntegerArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.Tuple;
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
        List<Tuple> monthly = orderService.getMonthly();
        map.addAttribute("monthly",monthly);
        map.addAttribute("monthly01",monthly.get(0).get(1));
        map.addAttribute("monthly02",monthly.get(0).get(2));
        map.addAttribute("monthly11",monthly.get(1).get(1));
        map.addAttribute("monthly12",monthly.get(1).get(2));
        map.addAttribute("monthly21",monthly.get(2).get(1));
        map.addAttribute("monthly22",monthly.get(2).get(2));
        /* 获取历史总订单量 */
        int orderSum = 0;
        for (int i=0;i<monthly.size();i++){
            orderSum += Integer.parseInt(monthly.get(i).get(1).toString());
        }
        map.addAttribute("orderSum",orderSum);
        return "admin/analysis/list";
    }

}
