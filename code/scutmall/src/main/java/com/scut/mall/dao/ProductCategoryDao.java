package com.scut.mall.dao;

import com.scut.mall.entity.ProductCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/23 9:32
 * @ Description：产品数据访问层接口
 * @ Modified By：
 */
public interface ProductCategoryDao extends JpaRepository<ProductCategory, Integer> {
    /**
     * create by: Bin Liu
     * description: 通过Type来查找分类信息
     * create time: 2018/11/23 10:07
     * @Param: type
     * @return
     */
    List<ProductCategory> findProductCategoriesByType(int type);

    /**
     * create by: Bin Liu
     * description: 通过Type来查找分类信息
     * create time: 2018/11/23 10:08
     * @Param: type
     * @Param: pageable
     * @return
     */
    Page<ProductCategory> findProductCategoriesByType(int type, Pageable pageable);

    /**
     * create by: Bin Liu
     * description: 通过上级分类id来查找分类信息
     * create time: 2018/11/23 10:09
     * @Param: parentId
     * @return
     */
    List<ProductCategory> findByParentId(int parentId);
}
