package com.scut.mall.entity;

import javax.persistence.*;
import java.io.Serializable;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/22 23:34
 * @ Description：订单项实体类
 * @ Modified By：
 */
@Entity
public class OrderItem implements Serializable {
    @Id
    @GeneratedValue
    @Column
    private Integer id;
    /**
     * 订单Id
     */
    @Column
    private Integer orderId;
    /**
     * 商品Id
     */
    @Column
    private Integer productId;
    /**
     * 数量
     */
    @Column
    private Integer count;
    /**
     * 总价
     */
    @Column
    private Double subTotal;

    /**
     * 积分
     */
    @Column
    private Integer subIntegral;

    @Transient
    private Product product;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    private static final long serialVersionUID = 1L;

    public OrderItem(Integer orderId, Integer productId, Integer count, Double subTotal, Integer subIntegral, Product product) {
        this.orderId = orderId;
        this.productId = productId;
        this.count = count;
        this.subTotal = subTotal;
        this.subIntegral = subIntegral;
        this.product = product;
    }

    public OrderItem() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public Integer getSubIntegral() {
        return subIntegral;
    }

    public void setSubIntegral(Integer subIntegral) {
        this.subIntegral = subIntegral;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        OrderItem other = (OrderItem) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
                && (this.getOrderId() == null ? other.getOrderId() == null : this.getOrderId().equals(other.getOrderId()))
                && (this.getProductId() == null ? other.getProductId() == null : this.getProductId().equals(other.getProductId()))
                && (this.getCount() == null ? other.getCount() == null : this.getCount().equals(other.getCount()))
                && (this.getSubTotal() == null ? other.getSubTotal() == null : this.getSubTotal().equals(other.getSubTotal()))
                && (this.getSubIntegral() == null ? other.getSubIntegral() == null : this.getSubIntegral().equals(other.getSubIntegral()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getOrderId() == null) ? 0 : getOrderId().hashCode());
        result = prime * result + ((getProductId() == null) ? 0 : getProductId().hashCode());
        result = prime * result + ((getCount() == null) ? 0 : getCount().hashCode());
        result = prime * result + ((getSubTotal() == null) ? 0 : getSubTotal().hashCode());
        result = prime * result + ((getSubIntegral() == null) ? 0 : getSubIntegral().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", orderId=").append(orderId);
        sb.append(", productId=").append(productId);
        sb.append(", count=").append(count);
        sb.append(", subTotal=").append(subTotal);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append(", subIntegral=").append(subIntegral);
        sb.append("]");
        return sb.toString();
    }
}
