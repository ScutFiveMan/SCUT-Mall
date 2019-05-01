/*
Navicat MySQL Data Transfer

Source Server         : aliyun
Source Server Version : 80013
Source Host           : 
Source Database       : scutmall

Target Server Type    : MYSQL
Target Server Version : 80013
File Encoding         : 65001

Date: 2019-05-01 10:12:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `address`
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `receiver` varchar(255) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of address
-- ----------------------------
INSERT INTO `address` VALUES ('6', '北京市市辖区', '委屈问问去额', '东城区', '15113597631', '北京市', '林水泉', '2');

-- ----------------------------
-- Table structure for `admin_user`
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL,
  `is_sale_man` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES ('1', '1', '123456', 'admin');
INSERT INTO `admin_user` VALUES ('12', '1', '123', 'liu');
INSERT INTO `admin_user` VALUES ('13', '1', '123', 'lin');

-- ----------------------------
-- Table structure for `hibernate_sequence`
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
INSERT INTO `hibernate_sequence` VALUES ('14');
INSERT INTO `hibernate_sequence` VALUES ('14');
INSERT INTO `hibernate_sequence` VALUES ('14');
INSERT INTO `hibernate_sequence` VALUES ('14');
INSERT INTO `hibernate_sequence` VALUES ('14');
INSERT INTO `hibernate_sequence` VALUES ('14');
INSERT INTO `hibernate_sequence` VALUES ('14');

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `order_time` datetime DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `total_integral` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for `order_item`
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int(11) NOT NULL,
  `count` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `sub_integral` int(11) DEFAULT NULL,
  `sub_total` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_item
-- ----------------------------
INSERT INTO `order_item` VALUES ('8', '1', '7', '5', '19', '1999');

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `cs_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `image1` varchar(255) DEFAULT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  `image4` varchar(255) DEFAULT NULL,
  `integral` int(11) DEFAULT NULL,
  `is_hot` int(11) DEFAULT NULL,
  `market_price` double DEFAULT NULL,
  `shop_price` double DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('5', '4', '2018-12-16 07:56:55', '委屈饿问问去恶趣味去问我去饿发射点十分大师傅地方但是看到你快乐的能力当年克林顿诺福克零散的卡的既往不咎撒比十九点到十点扩散买电脑设备hi发吧凯撒八点九二偶分八八点九八四的氯化物i可能涉及编码不对把数据对比哦回复的年纪撒谎的七五八九八四当年咖啡吧就是可能是来得及啊失败的借口千万别是比较暗杀部队击败数据库的监控设备内部就是对爸爸说到播哦前往东北你去看很亲密比赛的', '/mall/admin/product/img/2F800E563A78B1B92743A10DE9F04B.jpg', '/mall/admin/product/img/86B8A197FD7D55346C27BCD61C30BA.jpg', '/mall/admin/product/img/91F70D89318DD5394390E19C70F251.jpg', '/mall/admin/product/img/202D1672ABB4DC55C16E8AB520DE1A.jpg', '19', '1', '2300', '1999', 'yeezy 350');
INSERT INTO `product` VALUES ('11', '10', '2018-12-16 10:46:34', '可口可乐 Coca-Cola 汽水 碳酸饮料 330ml*24罐 整箱装 可口可乐公司出品 新老包装随机发货', '/mall/admin/product/img/1C3425F9D28C0E24FFF4732CF5F353.jpg', '/mall/admin/product/img/B8D9088A35BE8304B3428C75DEF5FB.png', '/mall/admin/product/img/C93D814823BDF304C3EB4F42E7B201.png', '/mall/admin/product/img/C0B41C20BE78EC0D97FFCFBF60EB21.jpg', '5', '1', '48', '40', '可乐');

-- ----------------------------
-- Table structure for `product_category`
-- ----------------------------
DROP TABLE IF EXISTS `product_category`;
CREATE TABLE `product_category` (
  `id` int(11) NOT NULL,
  `cname` varchar(255) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_category
-- ----------------------------
INSERT INTO `product_category` VALUES ('3', '衣服', '0', '1');
INSERT INTO `product_category` VALUES ('4', '鞋子', '3', '2');
INSERT INTO `product_category` VALUES ('9', '食品', '0', '1');
INSERT INTO `product_category` VALUES ('10', '饮料', '9', '2');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `integration` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '0', '123', '15766345459', 'liu');
INSERT INTO `user` VALUES ('2', '19', '123', '15113597631', '123');
