package com.scut.mall.service;

import com.scut.mall.entity.OrderItem;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/22 23:42
 * @ Description：购物车业务逻辑接口
 * @ Modified By：
 */

public interface ShopCartService {
    String NAME_PREFIX = "shop_cart_";

    /**
     * create by: Bin Liu
     * description: 加购物车
     * create time: 2018/11/22 23:54
     * @Param: productId
     * @Param: request
     * @return
     */
    void addCart(int productId, HttpServletRequest request) throws Exception;

    /**
     * create by: Bin Liu
     * description: 移除
     * create time: 2018/11/22 23:54
     * @Param: productId
     * @param request
     * @return
     */
    void remove(int productId, HttpServletRequest request) throws Exception;

    /**
     * create by: Bin Liu
     * description: 查看购物车
     * create time: 2018/11/22 23:55
     * @Param: request
     * @return
     */
    List<OrderItem> listCart(HttpServletRequest request) throws Exception;
}
