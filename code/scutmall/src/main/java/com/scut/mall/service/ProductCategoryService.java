package com.scut.mall.service;

import com.scut.mall.entity.ProductCategory;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/28 23:49
 * @ Description：产品种类业务逻辑接口
 * @ Modified By：
 */
public interface ProductCategoryService {
    /**
     * create by: Bin Liu
     * description: 根据id查询
     * create time: 2018/11/29 10:13
     * @Param: id
     * @return
     */
    ProductCategory findById(int id);

    /**
     * create by: Bin Liu
     * description: 找到所有分类
     * create time: 2018/11/29 10:52
     * @Param: null
     * @return
     */
    List<ProductCategory> findAll();

    /**
     * create by: Bin Liu
     * description: 按页查找所有分类
     * create time: 2018/11/29 10:53
     * @Param: null
     * @return
     */
    Page<ProductCategory> findAll(Pageable pageable);

    /**
     * create by: Bin Liu
     * description: 按条件查询
     * create time: 2018/11/29 10:14
     * @Param: example
     * @return
     */
    List<ProductCategory> findAllExample(Example<ProductCategory> example);

    /**
     * create by: Bin Liu
     * description: 更新
     * create time: 2018/11/29 10:15
     * @Param: productCategory
     * @return
     */
    void update(ProductCategory productCategory);

    /**
     * create by: Bin Liu
     * description: 创建
     * create time: 2018/11/29 10:16
     * @Param: productCategory
     * @return
     */
    int create(ProductCategory productCategory);

    /**
     * create by: Bin Liu
     * description: 根据Id删除
     * create time: 2018/11/29 10:17
     * @Param: id
     * @return
     */
    void delById(int id);
}
