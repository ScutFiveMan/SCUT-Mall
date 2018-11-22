package com.scut.mall.web.user;

import com.scut.mall.entity.User;
import com.scut.mall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.security.auth.login.LoginException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Controller
@RequestMapping("/user")
public class userController {
    @Autowired
    private UserService userService;

    /**
     * 注册页面
     * @return
     */
     @RequestMapping("/toRegister.html")
     public  String toRegister(){
        return "mall/user/register";
    }

    /**
     * 登录页面
     * @return
     */
     @RequestMapping("/toLogin.html")
     public  String toLogin(){
          return  "mall/user/login";
      }

    /**
     * 用户登录
     *
     * @param  userName
     * @param  password
     */
     @RequestMapping("/login.do")
    public void login(String userName,String password,
                      HttpServletRequest request,HttpServletResponse response) throws IOException, LoginException {
         User user=userService.checkLogin(userName,password);
         if (user != null){
             //登录成功 重定向至首页
             request.getSession().setAttribute("user",user);
             response.sendRedirect("/scutmall/index.html");
         }
         else{
             throw  new LoginException("用户名或密码错误");
         }
     }

    /**
     * 注册
     */
     @RequestMapping("/register.do")
    public void register(String userName,String password,String phone,
                         HttpServletResponse response){
         User user=new User();
         user.setUserName(userName);
         user.setPassword(password);
         user.setIntegration(0);//注册时都初始化积分为0
         userService.create(user);
    }

    /**
     * 退出登录
     */
    @RequestMapping("logout.do")
    public void logout(HttpServletRequest request,
                       HttpServletResponse response) throws IOException{
        request.getSession().removeAttribute("user");
        //未登录的首页
        response.sendRedirect("/mall/index.html");
    }

    /**
     * 错误页面
     */
    @RequestMapping("/error.html")
    public String error(HttpServletResponse response,HttpServletRequest request){
        return "error!";
    }

}
