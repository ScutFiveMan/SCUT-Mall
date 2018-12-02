package com.scut.mall.web.user;

import com.scut.mall.entity.Address;
import com.scut.mall.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/address")
public class addressController {
    @Autowired
    private AddressService addressService;

    /**
     * 地址管理页面
     * @return
     */
    @RequestMapping("/toAddressManager.html")
    public  String toAddressManager(){
        return "/toAddressManager.html";
    }

    /**
     * 增加地址页面
     * @return
     */
    @RequestMapping("/toAddAddress.html")
    public String toAddAddress(){
        return "/toAddAddress.html";
    }

    /**
     * 修改地址页面
     * @return
     */
    @RequestMapping("/toChangeAddress.html")
    public String toChangeAddress(){
        return "/toChangeAddress.html";
    }

    /**
     * 用户增加地址
     */
    @RequestMapping("/addAddress.do")
    public void addAddress(Integer userId,String province,String city,String town,String street,String detail,
                            String recevier,String phone,
                            HttpServletResponse response){
        Address address= new Address();
        address.setUserId(userId);
        address.setProvince(province);
        address.setCity(city);
        address.setTown(town);
        address.setStreet(street);
        address.setDetail(detail);
        address.setRecevier(recevier);
        address.setPhone(phone);
        addressService.create(address);
    }

    /**
     * 用户修改地址
     */
    @RequestMapping("/changeAddress.do")
    public void changeAddress(Integer id ,Integer userId, String province,String city,
                                String town,String street,String detail,
                              String recevier,String phone,HttpServletResponse response){
        Address address=addressService.findByIdAndUserId(id,userId);
        address.setUserId(userId);
        address.setProvince(province);
        address.setCity(city);
        address.setTown(town);
        address.setStreet(street);
        address.setDetail(detail);
        address.setRecevier(recevier);
        address.setPhone(phone);
        addressService.update(address);
    }

    /**
     * 用户删除地址
     */
    @RequestMapping("/deleteAddress.do")
    public void deleteAddress(Integer id,Integer userId,HttpServletResponse response){
        addressService.deleteById(id);
    }

}
