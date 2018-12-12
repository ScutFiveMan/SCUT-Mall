package com.scut.mall.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

//管理员和业务员
@Entity
public class AdminUser implements Serializable {
    @Id
    @GeneratedValue
    @Column
    private Integer id;

    @Column
    private String userName;

    @Column
    private String password;

    @Column
    private Integer isSaleMan=1;

    public AdminUser(Integer id,String userName,String password,Integer isSaleMan){
        this.id=id;
        this.userName=userName;
        this.password=password;
        this.isSaleMan=isSaleMan;
    }
    public AdminUser(){
        super();
    }
    //一系列get set操作
    public  void setId(Integer id){
        this.id=id;
    }
    public  Integer getId(){
        return id;
    }

    public void  setUserName(String userName){
        this.userName=userName;
    }
    public String getUserName(){
        return  userName;
    }

    public  void setPassword(String password)
    {
        this.password=password;
    }
    public  String getPassword(){
        return  password;
    }

    public void  setIsSaleMan(Integer isSaleMan){
        this.isSaleMan=isSaleMan;
    }
    public  Integer getIsSaleMan(){
        return  isSaleMan;
    }


}
