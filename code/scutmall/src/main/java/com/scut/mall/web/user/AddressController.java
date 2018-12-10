package com.scut.mall.web.user;

import com.scut.mall.entity.Address;
import com.scut.mall.entity.User;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.AddressService;
import com.scut.mall.service.exception.LoginException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/address")
public class AddressController {
    @Autowired
    private AddressService addressService;

    /**
     * 地址管理页面
     * @return
     */
    @RequestMapping("/toAddress.html")
    public String toAddressList() {
        return "mall/address/list";
    }

    @ResponseBody
    @RequestMapping("/list.do")
    public ResultBean<List<Address>> list(HttpServletRequest request){
        List<Address> addresses = addressService.findByUserId(request);
        return new ResultBean<>(addresses);
    }

    /**
     * 增加地址页面
     * @return
     */
    @RequestMapping("/toAdd.html")
    public String toAddAddress(){
        return "mall/address/add";
    }

    /**
     * 修改地址页面
     * @return
     */
    @RequestMapping("/toEdit.html")
    public String toEditAddress(int id, Map<String, Object> map){
        Address address=addressService.findAddressById(id);
        map.put("address", address);
        return "mall/address/edit";
    }

    /**
     * 用户增加地址
     */
    @RequestMapping( method = RequestMethod.POST, value = "/add.do")
    public void addAddress(String province,String city,String district,String detail,
                            String receiver,String phone,HttpServletRequest request,
                            HttpServletResponse response)throws Exception{
        Address address= new Address();
        Object user = request.getSession().getAttribute("user");
        if (user == null)
            throw new LoginException("请登录！");
        User loginUser = (User) user;
        address.setUserId(loginUser.getId());
        address.setProvince(province);
        address.setCity(city);
        address.setDistrict(district);
        address.setDetail(detail);
        address.setReceiver(receiver);
        address.setPhone(phone);
        int id = addressService.create(address);
        if (id <= 0) {
            request.setAttribute("message", "添加失败！");
            request.getRequestDispatcher("toAdd.html").forward(request, response);
        } else {
            request.getRequestDispatcher("toAddress.html").forward(request, response);
        }
    }

    /**
     * 用户修改地址
     */
    @ResponseBody
    @RequestMapping("/edit.do")
    public ResultBean<Boolean> changeAddress(Integer id , String province,String city,
                                             String district,String detail,
                                             String receiver,String phone,HttpServletRequest request,
                                             HttpServletResponse response) throws Exception {
        Address address=addressService.findAddressById(id);
        address.setProvince(province);
        address.setCity(city);
        address.setDistrict(district);
        address.setDetail(detail);
        address.setReceiver(receiver);
        address.setPhone(phone);
        addressService.update(address);
        return new ResultBean<>(true);
    }

    /**
     * create by: Bin Liu
     * description: 用户删除地址
     * create time: 2018/12/8 16:55
     * @Param: id
     * @Param: response
     * @return
     */
    @ResponseBody
    @RequestMapping("/del.do")
    public ResultBean<Boolean> deleteAddress(Integer id,HttpServletResponse response){
        addressService.deleteById(id);
        return new ResultBean<>(true);
    }

}
