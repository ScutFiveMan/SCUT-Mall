package com.scut.mall.service;

import com.scut.mall.entity.Address;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * create time: 2018/11/20
 * @author Kobe
 * 一些地址相关操作的接口
 */

public interface AddressService {

    /**
     * 创建一个地址
     * @param address
     * @return
     */
    int create(Address address);

    /**
     * 查看地址
     * @param id
     * @param  userId
     * @return
     */
    Address findByIdAndUserId(Integer id,Integer userId);

    Address findAddressById(Integer id);

    /**
     * 查看用户所有相关的地址
     * @param request
     * @return
     */
    List<Address> findByUserId(HttpServletRequest request);

    /**
     * create by: Kobe
     * description:分页显示用户所有的地址
     * create time: 12:19 2018/12/3
     * @param
     * @return
     */
    Page<Address> findAll(Pageable pageable);

    /**
     * 更新一个地址
     * @param address
     */
    void update(Address address);

    /**
     * 删除一个地址
     * @param id
     * @param
     */
    void deleteById(Integer id);

}
