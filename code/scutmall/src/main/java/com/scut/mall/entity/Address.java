package com.scut.mall.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Address implements Serializable {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    private Integer id;

    @Column
    private Integer userId;

    @Column
    private String province;

    @Column
    private String city;

    @Column
    private String district;

    @Column
    private String detail;

    @Column
    private String receiver;

    @Column
    private String phone;

    public Address(Integer userId, String province, String city, String district, String detail, String receiver, String phone) {
        this.userId = userId;
        this.province = province;
        this.city = city;
        this.district = district;
        this.detail = detail;
        this.receiver = receiver;
        this.phone = phone;
    }

    public Address(){
        super();
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) { this.detail = detail; }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
