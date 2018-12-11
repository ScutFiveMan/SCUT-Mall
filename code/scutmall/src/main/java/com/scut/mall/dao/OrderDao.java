package com.scut.mall.dao;

import com.scut.mall.entity.Order;
import com.sun.org.apache.xalan.internal.xsltc.util.IntegerArray;
import org.hibernate.mapping.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Tuple;
import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/22 23:12
 * @ Description：订单数据访问层接口
 * @ Modified By：Shuo Lin
 * @ Date       : 2018/12/10 22:13
 * @ Description: 增加统计模块所需的内容
 */
public interface OrderDao extends JpaRepository<Order, Integer> {
    /**
     * create by: Bin Liu
     * description: 通过id查找订单
     * create time: 2018/11/23 9:45
     * @Param: null
     * @return
     */
    Order findOrderById(Integer id);

    /**
     * create by: Bin Liu
     * description: 更改订单状态
     * create time: 2018/11/22 23:39
     * @Param: state
     * @Param: id
     * @return 
     */
    @Modifying
    @Transactional
    @Query(value = "update `order` o set o.state=?1 where o.id=?2",nativeQuery = true)
    void updateState(int state,int id);

    /**
     * create by: Bin Liu
     * description: 查找用户的订单
     * create time: 2018/11/22 23:40
     * @Param: userId
     * @return 
     */
    List<Order> findByUserId(int userId);

    /**
     * create by: Shuo Lin
     * description: 获取历史订单总额
     * create time: 2018/12/2 21:59
     */
    @Query(value = "SELECT SUM(total)from `order`;",nativeQuery = true)
    float getMoneySum();

    /**
     * create by: Shuo Lin
     * description: 获取历史订单总额
     * create time: 2018/12/2 23:05
     */
    @Query(value = "SELECT COUNT(*) from `user`;",nativeQuery = true)
    int getUserSum();

    /**
     * create by: Shuo Lin
     * description: 获取每月订单量与每月订单总额
     * create time: 2018/12/9 20:06
     */
    @Query(value = "SELECT DATE_FORMAT(order_time,'%Y年-%m月') months,COUNT(MONTH(order_time)),SUM(total) FROM `order` GROUP BY months;",nativeQuery = true)
    List<Tuple> getMonthly();
}
