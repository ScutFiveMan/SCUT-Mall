package com.scut.mall.web.adminUser;

import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.scut.mall.entity.AdminUser;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.AdminUserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminUserService adminUserService;

    /**
     * 访问首页
     *
     * @return
     */
    @RequestMapping("/toIndex.html")
    public String toIndex() {
        return "/admin/index";
    }

    /**
     * 访问登录页面
     *
     * @return
     */
    @RequestMapping("/toLogin.html")
    public String toLogin() {
        return "admin/login";
    }

    /**
     * 登录请求
     *
     * @param username
     * @param password
     */
    @RequestMapping(method = RequestMethod.POST, value = "/login.do")
    public void login(String username, String password, HttpServletRequest request, HttpServletResponse response) throws IOException {
        AdminUser adminUser = adminUserService.checkLogin(request, username, password);
        response.sendRedirect("/mall/admin/toIndex.html");
    }

    /**
     * 退出登录
     * @param request
     * @param response
     * @throws IOException
     */
    @RequestMapping("/logout.do")
    public void logout(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.getSession().removeAttribute("login_user");
        response.sendRedirect("toLogin.html");
    }
    /**
     * create by: Kobe
     * description:业务员信息界面
     * create time: 12:28 2018/11/30
     *
     * @return
     */
    @RequestMapping("admin/toList.html")
    public  String toAdminList(){
        return "/admin/adminUser/list";
    }
    /**
     * 获取所有订单的总数
     * @return
     */
    @ResponseBody
    @RequestMapping("admin/getTotal.do")
    public ResultBean<Integer> getTotal() {
        Pageable pageable =PageRequest.of(1, 15, Sort.by(Sort.Direction.ASC,"id"));
        int total = (int) adminUserService.findAll(pageable).getTotalElements();
        return new ResultBean<>(total);
    }
    /**
     * create by: Kobe
     * description:超级管理员查看业务员信息
     * create time: 12:33 2018/11/30
     * @return
     */

    @ResponseBody
    @RequestMapping("admin/list.do")
    public ResultBean<List<AdminUser>> findAllUser(int pageindex,
                                                   @RequestParam(value = "pageSize", defaultValue = "15") int pageSize){
        Pageable pageable =PageRequest.of(pageindex, pageSize, Sort.by(Sort.Direction.ASC,"id"));
        List<AdminUser> adminUsers=adminUserService.findAll(pageable).getContent();
        return new ResultBean<>(adminUsers);
    }


    @ResponseBody
    @RequestMapping("/addAdmin.do")
    public ResultBean<Boolean> addAdmin(String userName,String password,Integer isSaleman){
        AdminUser adminUser=new AdminUser();
        adminUser.setUserName(userName);
        adminUser.setPassword(password);
        adminUser.setIsSaleMan(isSaleman);
        adminUserService.create(adminUser);
        return new ResultBean<>(true);
    }

    @ResponseBody
    @RequestMapping("admin/del.do")
    public ResultBean<Boolean> delAdmin(Integer id){
        adminUserService.delById(id);
        return  new ResultBean<>(true);
    }

}
