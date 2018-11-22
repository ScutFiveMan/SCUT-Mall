package com.scut.mall.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "`order`")
public class Order implements Serializable {
    @Id
    @GeneratedValue
    @Column
    private Integer id;

    @Column
    private Integer productId;

    @Column
    private Integer userId;

    @Column
    private Integer number;

    public Order(Integer id,Integer productId,Integer userId,Integer number){
        this.id=id;
        this.productId=productId;
        this.userId=userId;
        this.number=number;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }
}
