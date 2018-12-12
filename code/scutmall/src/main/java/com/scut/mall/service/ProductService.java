package com.scut.mall.service;

import com.scut.mall.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/23 9:25
 * @ Description：产品业务逻辑接口
 * @ Modified By：
 */
public interface ProductService {
    /**
     * create by: Bin Liu
     * description: 根据id查询
     * create time: 2018/11/23 9:26
     * @param id
     * @return
     */
    Product findById(int id);

    /**
     * create by: Bin Liu
     * description: 分页查询所有
     * create time: 2018/11/23 9:26
     * @param pageable
     * @return
     */
    Page<Product> findAll(Pageable pageable);

    /**
     * create by: Bin Liu
     * description: 查找热门商品
     * create time: 2018/11/23 9:27
     * @Param: null
     * @return
     */
    List<Product> findHotProduct();

    /**
     * create by: Bin Liu
     * description: 查找最新商品
     * create time: 2018/11/23 9:27
     * @param pageable
     * @return
     */
    List<Product> findNewProduct(Pageable pageable);

    /**
     * create by: Bin Liu
     * description: 根据一级分类查找商品
     * create time: 2018/11/23 9:28
     * @param cId
     * @param pageable
     * @return
     */
    List<Product> findByProductCategoryId(int cId,Pageable pageable);
    
    /**
     * create by: Bin Liu
     * description: 根据二级分类查找商品
     * create time: 2018/12/5 18:40
     * @param csId
     * @param pageable
     * @return 
     */
    List<Product> findByProductCategorySecondId(int csId,Pageable pageable);

    /**
     * create by: Bin Liu
     * description: 更新
     * create time: 2018/11/23 9:29
     * @Param: product
     * @return
     */
    void update(Product product);

    /**
     * create by: Bin Liu
     * description: 创建
     * create time: 2018/11/23 9:29
     * @Param: product
     * @return
     */
    int create(Product product);

    /**
     * create by: Bin Liu
     * description: 根据Id删除
     * create time: 2018/11/23 9:30
     * @Param: id
     * @return
     */

    void deleteById(int id);
    /**
     * create by: Bin Liu
     * description: 通过标题搜索商品
     * create time: 2018/12/1 21:39
     * @param keyword
     * @return 
     */
    List<Product> findByTitleIsLike(String keyword);
}
