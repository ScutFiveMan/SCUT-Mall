package com.scut.mall.service.impl;

import com.scut.mall.dao.UserDao;
import com.scut.mall.entity.User;
import com.scut.mall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    @Override
    public User findById(int id) {
        return userDao.getOne(id);
    }

    @Override
    public Page<User> findAll(Pageable pageable) {
        return userDao.findAll(pageable);
    }

    @Override
    public List<User> findAllExample(Example<User> example) {
        return userDao.findAll(example);
    }

    @Override
    public void update(User user) {
           userDao.save(user);
    }

    @Override
    public int create(User user) {
        return userDao.save(user).getId();
    }

    @Override
    public void delById(int id) {
        userDao.deleteById(id);
    }

    /**
     * 根据用户名查询
     * @param username
     * @return
     */
    @Override
    public List<User> findByUsername(String username) {
        return userDao.findByUserName(username);
    }

    /**
     * @param username
     * @param password
     * @return
     */
    @Override
    public User checkLogin(String username, String password) {
        return userDao.findByUserNameAndAndPassword(username,password);
    }
}
