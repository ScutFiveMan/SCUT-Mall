package com.scut.mall.dao;

import com.scut.mall.entity.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminUserDao extends JpaRepository<AdminUser,Integer> {
    AdminUser findAdminUserByUserNameAndPassword(String userName,String password);

    List<AdminUser> findAdminUserByUserName(String userName);
}
