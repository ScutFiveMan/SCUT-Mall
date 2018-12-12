package com.scut.mall.dao;

import com.scut.mall.entity.Address;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface AddressDao extends JpaRepository<Address,Integer> {

    /**
     * 根据用户useId查询地址
     * @param userId
     * @param id
     * @return
     * @author Kobe
     */
    Address findByIdAndUserId(Integer id,Integer userId);

    /**
     * create by: Kobe
     * description:通过id查找地址
     * create time: 17:06 2018/12/10
     * @return
     */


    /**
     * 根据用户id 返回其所有地址
     * @param userId
     * @return
     * @author Kobe
     */
    List<Address> findByUserId(Integer userId);

    /**
     * 删除地址
     * @param id
     * @param
     */
    void deleteById(Integer id);

    /**
     * create by: Bin Liu
     * description: 通过id找到address
     * create time: 2018/12/12 14:40
     * @Param: null
     * @return
     */
    Address findAddressById(Integer id);
}
