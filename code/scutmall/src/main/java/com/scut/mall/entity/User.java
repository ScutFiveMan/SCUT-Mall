package com.scut.mall.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class User implements Serializable {
    //用户id，作为主键
    @Id
    @GeneratedValue
    @Column
    private Integer id;

    //用户名
    @Column
    private String userName;

    //密码
    @Column
    private String password;

    //电话号码
    @Column
    private String phone;

    //积分
    @Column
    private Integer integration;

    //执行序列化接口
    private static final  long serialVersionUID=1L;

    //初始化,此时用户积分应该为0
    public  User(Integer id,String userName,String password)
    {
        this.id=id;
        this.userName=userName;
        this.password=password;
        this.integration=0;
    }

    public User(){
        super();
    }

    //一系列get，set操作，不做详细说明

    public Integer getId()
    {
        return  id;
    }

    public  void setId(Integer id){
        this.id=id;
    }

    public  String getUserName()
    {
        return userName;
    }
    public  void  setUserName(String userName){
        this.userName=userName;
    }
    //需检查是否为空
    public void setPassword(String password){
        this.password= password == null ? null : password.trim();
    }
    public  String getPassword(){
        return password;
     }

     public void setPhone(String phone){
        this.phone=phone;
     }
     public String getPhone(){
        return phone;
     }

    public  void setIntegration(Integer integration){
        this.integration=integration;
    }
    public Integer getIntegration(){return integration; }

}
