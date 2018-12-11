package com.scut.mall.service;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.scut.mall.entity.AdminUser;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface AdminUserService {
    /**
     * 根据id查询
     *
     * @param id
     * @return
     */
    AdminUser findById(int id);

    /**
     * create by: Kobe
     * description:根据用户名查找管理员
     * create time: 15:01 2018/12/11
     * @return
     */
    List<AdminUser> findByUserName(String userName);

    /**
     * 分页查询所有
     *
     * @param pageable
     * @return
     */
    Page<AdminUser> findAll(Pageable pageable);

    /**
     * 按条件查询
     *
     * @param example
     * @return
     */
    List<AdminUser> findAllExample(Example<AdminUser> example);

    /**
     * 更新
     *
     * @param adminUser
     * @return
     */
    void update(AdminUser adminUser);

    /**
     * 创建
     *
     * @param adminUser
     * @return
     */
    int create(AdminUser adminUser);

    /**
     * 根据Id删除
     *
     * @param id
     * @return
     */
    void delById(int id);

    /**
     * 检查登录
     * @param request
     * @param username
     * @param pwd
     * @return
     */
    AdminUser checkLogin(HttpServletRequest request,String username, String pwd);

}
