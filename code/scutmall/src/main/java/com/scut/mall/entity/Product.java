package com.scut.mall.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * @ Author     ：Bin Liu
 * @ Date       ：2018/11/22 10:35
 * @ Description：订单项实体类
 * @ Modified By：
 */
@Entity
public class Product implements Serializable {
    @Id
    @GeneratedValue
    @Column
    private Integer id;

    /**
     * 商品标题
     */
    @Column
    private String title;

    @Column(columnDefinition = "varchar(1000) default null")
    private String description;

    @Column
    private String image1;

    @Column
    private String image2;

    @Column
    private String image3;

    @Column
    private String image4;

    @Column
    private Integer isHot;

    @Column
    private Double marketPrice;

    @Column
    private Double shopPrice;

    /**
     * 二级分类Id
     */
    @Column
    private Integer csId;

    //积分
    @Column Integer integral;

    @Column
    private Date date;

    @Transient
    private  ProductCategory categorySec;

    public Product(String title, String description, String image1, String image2, String image3, String image4, Integer isHot, Double marketPrice, Double shopPrice, Integer csId, Integer integral, Date date, ProductCategory categorySec) {
        this.title = title;
        this.description = description;
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.image4 = image4;
        this.isHot = isHot;
        this.marketPrice = marketPrice;
        this.shopPrice = shopPrice;
        this.csId = csId;
        this.integral = integral;
        this.date = date;
        this.categorySec = categorySec;
    }

    public Product() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getCsId() {
        return csId;
    }

    public void setCsId(Integer csId) {
        this.csId = csId;
    }

    public ProductCategory getCategorySec() {
        return categorySec;
    }

    public void setCategorySec(ProductCategory categorySec) {
        this.categorySec = categorySec;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage1() {
        return image1;
    }

    public void setImage1(String image1) {
        this.image1 = image1;
    }

    public String getImage2() {
        return image2;
    }

    public void setImage2(String image2) {
        this.image2 = image2;
    }

    public String getImage3() {
        return image3;
    }

    public void setImage3(String image3) {
        this.image3 = image3;
    }

    public String getImage4() {
        return image4;
    }

    public void setImage4(String image4) {
        this.image4 = image4;
    }

    public Integer getIsHot() {
        return isHot;
    }

    public void setIsHot(Integer isHot) {
        this.isHot = isHot;
    }

    public Double getMarketPrice() {
        return marketPrice;
    }

    public void setMarketPrice(Double marketPrice) {
        this.marketPrice = marketPrice;
    }

    public Double getShopPrice() {
        return shopPrice;
    }

    public void setShopPrice(Double shopPrice) {
        this.shopPrice = shopPrice;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getIntegral() {
        return integral;
    }

    public void setIntegral(Integer integral) {
        this.integral = integral;
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
        Product other = (Product) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
                && (this.getTitle() == null ? other.getTitle() == null : this.getTitle().equals(other.getTitle()))
                && (this.getMarketPrice() == null ? other.getMarketPrice() == null : this.getMarketPrice().equals(other.getMarketPrice()))
                && (this.getShopPrice() == null ? other.getShopPrice() == null : this.getShopPrice().equals(other.getShopPrice()))
                && (this.getImage1() == null ? other.getImage1() == null : this.getImage1().equals(other.getImage1()))
                && (this.getImage2() == null ? other.getImage2() == null : this.getImage2().equals(other.getImage2()))
                && (this.getImage3() == null ? other.getImage3() == null : this.getImage3().equals(other.getImage3()))
                && (this.getImage4() == null ? other.getImage4() == null : this.getImage4().equals(other.getImage4()))
                && (this.getDescription() == null ? other.getDescription() == null : this.getDescription().equals(other.getDescription()))
                && (this.getIsHot() == null ? other.getIsHot() == null : this.getIsHot().equals(other.getIsHot()))
                && (this.getCsId() == null ? other.getCsId() == null : this.getCsId().equals(other.getCsId()))
                && (this.getDate() == null ? other.getDate() == null : this.getDate().equals(other.getDate()))
                && (this.getIntegral() == null ? other.getIntegral() == null : this.getIntegral().equals(other.getIntegral()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getTitle() == null) ? 0 : getTitle().hashCode());
        result = prime * result + ((getMarketPrice() == null) ? 0 : getMarketPrice().hashCode());
        result = prime * result + ((getShopPrice() == null) ? 0 : getShopPrice().hashCode());
        result = prime * result + ((getImage1() == null) ? 0 : getImage1().hashCode());
        result = prime * result + ((getImage2() == null) ? 0 : getImage2().hashCode());
        result = prime * result + ((getImage3() == null) ? 0 : getImage3().hashCode());
        result = prime * result + ((getImage4() == null) ? 0 : getImage4().hashCode());
        result = prime * result + ((getDescription() == null) ? 0 : getDescription().hashCode());
        result = prime * result + ((getIsHot() == null) ? 0 : getIsHot().hashCode());
        result = prime * result + ((getCsId() == null) ? 0 : getCsId().hashCode());
        result = prime * result + ((getDate() == null) ? 0 : getDate().hashCode());
        result = prime * result + ((getIntegral() == null) ? 0 : getIntegral().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", title=").append(title);
        sb.append(", marketPrice=").append(marketPrice);
        sb.append(", shopPrice=").append(shopPrice);
        sb.append(", image1=").append(image1);
        sb.append(", image2=").append(image2);
        sb.append(", image3=").append(image3);
        sb.append(", image4=").append(image4);
        sb.append(", description=").append(description);
        sb.append(", isHot=").append(isHot);
        sb.append(", csId=").append(csId);
        sb.append(", date=").append(date);
        sb.append(", integral=").append(integral);
        sb.append("]");
        return sb.toString();
    }
}
