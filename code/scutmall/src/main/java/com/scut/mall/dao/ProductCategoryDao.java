package com.scut.mall.dao;

import com.scut.mall.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/23 9:32
 * @ Description：产品数据访问层接口
 * @ Modified By：
 */
public interface ProductCategoryDao extends JpaRepository<ProductCategory, Integer> {
    /**
     * create by: Bin Liu
     * description: 通过id查找分类信息
     * create time: 2018/11/29 10:19
     * @Param: null
     * @return
     */
    ProductCategory findProductCategoryById(int id);

}
