package com.scut.mall.web.user;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @Author kobe
 * @Date 2018/11/30 16:04
 * @Description:
 * @Modified By:
 */

@Controller
public class IndexController {
    /**
     * 打开首页
     * @return
     */
    @RequestMapping("/index.html")
    public String toIndex() {
        return "mall/index";
    }

    /**
     * 访问根目录转发到首页
     * @return
     */
    @RequestMapping("/")
    public String index(){
        return "forward:/index.html";
    }
}
