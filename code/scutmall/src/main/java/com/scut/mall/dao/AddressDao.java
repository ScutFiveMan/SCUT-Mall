package com.scut.mall.dao;

import com.scut.mall.entity.Address;
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
     * 根据用户id 返回其所有地址
     * @param userId
     * @return
     * @author Kobe
     */
    List<Address> findAllByUserId(Integer userId);

    /**
     * 删除地址
     * @param id
     * @param
     */
    void deleteById(Integer id);
}
