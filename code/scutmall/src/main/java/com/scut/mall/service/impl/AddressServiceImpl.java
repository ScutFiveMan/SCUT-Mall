package com.scut.mall.service.impl;

import com.scut.mall.dao.AddressDao;
import com.scut.mall.entity.Address;
import com.scut.mall.entity.User;
import com.scut.mall.service.AddressService;
import com.scut.mall.service.exception.LoginException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {
    @Autowired
    private AddressDao addressDao;

    @Override
    public int create(Address address) {
        return addressDao.save(address).getId();
    }




    @Override
    public Address findByIdAndUserId(Integer id, Integer userId) {
        return addressDao.findByIdAndUserId(id,userId);
    }

    @Override
    public Address findAddressById(Integer id) {
        return addressDao.getOne(id);
    }

    @Override
    public Page<Address> findByUserId(HttpServletRequest request,Pageable pageable) {
        Object user = request.getSession().getAttribute("user");
        if (user == null)
            throw new LoginException("请登录！");
        User loginUser = (User) user;
        Page<Address> addresses=addressDao.findByUserId(loginUser.getId(),pageable);
        return addresses;
    }

    @Override
    public List<Address> findByUserId(HttpServletRequest request) {
        Object user = request.getSession().getAttribute("user");
        if (user == null)
            throw new LoginException("请登录！");
        User loginUser = (User) user;
        List<Address> addresses=addressDao.findByUserId(loginUser.getId());
        return addresses;
    }

    @Override
    public Page<Address> findAll(Pageable pageable) {
        return addressDao.findAll(pageable);
    }

    @Override
    public void update(Address address) {
        addressDao.save(address);
    }

    @Override
    public void deleteById(Integer id) {
        addressDao.deleteById(id);
    }
}
