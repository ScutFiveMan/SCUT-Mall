package com.scut.mall.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;

@Entity
public class Product implements Serializable {
    @Id
    @GeneratedValue
    @Column
    private Integer id;

    /**
     * 数据库相关字段参见ER图与类图
     */
    @Column
    private Integer productCategoryId;

    @Column
    private String description;

    @Column
    private String image;

    @Column
    private Integer isHot;

    @Column
    private Double marketPrice;

    @Column
    private Double shopPrice;

    @Column
    private Date date;

    public Product(Integer id,Integer productCategoryId,String description,String image,Integer isHot,Double marketPrice,Double shopPrice,Date date)
    {
        this.id=id;
        this.productCategoryId=productCategoryId;
        this.description=description;
        this.image=image;
        this.isHot=isHot;
        this.marketPrice=marketPrice;
        this.shopPrice=shopPrice;
        this.date=date;
    }

}
