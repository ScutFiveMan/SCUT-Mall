package com.scut.mall.service.impl;

import com.scut.mall.dao.AddressDao;
import com.scut.mall.entity.Address;
import com.scut.mall.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
    public List<Address> findAllByUserId(Integer userId) {
        return addressDao.findAllByUserId(userId);
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
