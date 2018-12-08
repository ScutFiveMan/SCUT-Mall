package com.scut.mall.web.adminUser;

import com.scut.mall.entity.User;
import com.scut.mall.entity.pojo.ResultBean;
import com.scut.mall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @Author kobe
 * @Date 2018/11/27 19:18
 * @Description: 主要实现系统管理模块中与用户有关的用例
 * @Modified By:
 */

@Controller
@RequestMapping("/admin/user")
public class AdminUserController {
    @Autowired
    private UserService userService;

    /**
     * create by: Kobe
     * description:查看用户列表，映射前端路径
     * create time: 19:20 2018/11/27
     * @param
     * @return
     */
    @RequestMapping("/toList.html")
    public String toList(){
        return "admin/user/list";
    }

    /**
     * create by: Cillivian
     * description:page方法
     * create time: 13:57 2018/12/8 0008
     *
      * @Param: null
     * @return
     */
    @ResponseBody
    @RequestMapping("/getTotal.do")
    public ResultBean<Integer> getTotal() {
        Pageable pageable = new PageRequest(1, 15, null);
        int total = (int) userService.findAll(pageable).getTotalElements();
        return new ResultBean<>(total);
    }
    /**
     * create by: Kobe
     * description:查看所有用户
     * create time: 19:30 2018/11/27
     * @param  pageindex
     * @return
     */
    @ResponseBody
    @RequestMapping("/list.do")
    public ResultBean<List<User>> findAllUser(int pageindex,
                                              @RequestParam(value = "pageSize", defaultValue = "15") int pageSize){
        Pageable pageable =PageRequest.of(pageindex, pageSize, Sort.by(Sort.Direction.ASC,"id"));
        List<User> users=userService.findAll(pageable).getContent();
        return new ResultBean<>(users);
    }


    /**
     * create by: Kobe
     * description:对违规用户进行删除
     * create time: 19:24 2018/11/27
     * @param
     * @return
     */
    @ResponseBody
    @RequestMapping("/del.do")
    public ResultBean<Boolean> del(Integer id){
        userService.delById(id);
        return new ResultBean<>(true);
    }

}
