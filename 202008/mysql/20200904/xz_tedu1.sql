/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 100119
 Source Host           : 127.0.0.1:3306
 Source Schema         : xz_tedu

 Target Server Type    : MySQL
 Target Server Version : 100119
 File Encoding         : 65001

 Date: 04/09/2020 20:18:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for xz_index_carousel
-- ----------------------------
DROP TABLE IF EXISTS `xz_index_carousel`;
CREATE TABLE `xz_index_carousel`  (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片路径',
  `title` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片描述',
  `href` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片链接',
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_index_product
-- ----------------------------
DROP TABLE IF EXISTS `xz_index_product`;
CREATE TABLE `xz_index_product`  (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品标题',
  `details` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '详细描述',
  `pic` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图片',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '商品价格',
  `href` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `seq_recommended` tinyint(4) NULL DEFAULT NULL,
  `seq_new_arrival` tinyint(4) NULL DEFAULT NULL,
  `seq_top_sale` tinyint(4) NULL DEFAULT NULL,
  PRIMARY KEY (`pid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_laptop
-- ----------------------------
DROP TABLE IF EXISTS `xz_laptop`;
CREATE TABLE `xz_laptop`  (
  `lid` int(11) NOT NULL AUTO_INCREMENT,
  `family_id` int(11) NULL DEFAULT NULL COMMENT '所属型号家族编号',
  `product_id` int(11) NULL DEFAULT NULL COMMENT '产品编号',
  `title` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '主标题',
  `subtitle` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '副标题',
  `price` decimal(10, 2) NULL DEFAULT NULL COMMENT '价格',
  `promise` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '服务承诺',
  `spec` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '规格/颜色',
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品名称',
  `os` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '操作系统',
  `memory` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '内存容量',
  `resolution` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '分辨率',
  `video_card` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '显卡型号',
  `cpu` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '处理器',
  `video_memory` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '显存容量',
  `category` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '所属分类',
  `disk` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '硬盘容量及类型',
  `details` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '产品详细说明',
  `shelf_time` bigint(20) NULL DEFAULT NULL COMMENT '上架时间',
  `sold_count` int(11) NULL DEFAULT NULL COMMENT '已售出的数量',
  `is_onsale` tinyint(1) NULL DEFAULT NULL COMMENT '是否促销中',
  PRIMARY KEY (`lid`) USING BTREE,
  INDEX `family_id`(`family_id`) USING BTREE,
  CONSTRAINT `xz_laptop_ibfk_1` FOREIGN KEY (`family_id`) REFERENCES `xz_laptop_family` (`fid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_laptop_family
-- ----------------------------
DROP TABLE IF EXISTS `xz_laptop_family`;
CREATE TABLE `xz_laptop_family`  (
  `fid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类别名称',
  PRIMARY KEY (`fid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_laptop_pic
-- ----------------------------
DROP TABLE IF EXISTS `xz_laptop_pic`;
CREATE TABLE `xz_laptop_pic`  (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `laptop_id` int(11) NULL DEFAULT NULL COMMENT '笔记本电脑编号',
  `sm` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '小图片路径',
  `md` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '中图片路径',
  `lg` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '大图片路径',
  PRIMARY KEY (`pid`) USING BTREE,
  INDEX `laptop_id`(`laptop_id`) USING BTREE,
  CONSTRAINT `xz_laptop_pic_ibfk_1` FOREIGN KEY (`laptop_id`) REFERENCES `xz_laptop` (`lid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_order
-- ----------------------------
DROP TABLE IF EXISTS `xz_order`;
CREATE TABLE `xz_order`  (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户编号',
  `address_id` int(11) NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL COMMENT '订单状态, 1:等待付款,2:等待发货',
  `order_time` bigint(20) NULL DEFAULT NULL COMMENT '下单时间',
  `pay_time` bigint(20) NULL DEFAULT NULL COMMENT '付款时间',
  `deliver_time` bigint(20) NULL DEFAULT NULL COMMENT '发货时间',
  `received_time` bigint(20) NULL DEFAULT NULL COMMENT '签收时间',
  PRIMARY KEY (`aid`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `address_id`(`address_id`) USING BTREE,
  CONSTRAINT `xz_order_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `xz_user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `xz_order_ibfk_2` FOREIGN KEY (`address_id`) REFERENCES `xz_receiver_address` (`aid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_order_detail
-- ----------------------------
DROP TABLE IF EXISTS `xz_order_detail`;
CREATE TABLE `xz_order_detail`  (
  `did` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NULL DEFAULT NULL COMMENT '订单编号',
  `product_id` int(11) NULL DEFAULT NULL COMMENT '产品编号',
  `count` int(11) NULL DEFAULT NULL COMMENT '购买数量',
  PRIMARY KEY (`did`) USING BTREE,
  INDEX `order_id`(`order_id`) USING BTREE,
  INDEX `product_id`(`product_id`) USING BTREE,
  CONSTRAINT `xz_order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `xz_order` (`aid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `xz_order_detail_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `xz_laptop` (`lid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_receiver_address
-- ----------------------------
DROP TABLE IF EXISTS `xz_receiver_address`;
CREATE TABLE `xz_receiver_address`  (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户编号',
  `receiver` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '接收人姓名',
  `province` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '省',
  `city` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '市',
  `county` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '县',
  `address` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '详细地址',
  `cellphone` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机',
  `fixedphone` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '固定电话',
  `postcode` char(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮编',
  `tag` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标签名',
  `is_default` tinyint(1) NULL DEFAULT NULL,
  PRIMARY KEY (`aid`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  CONSTRAINT `xz_receiver_address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `xz_user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_shopping_cart
-- ----------------------------
DROP TABLE IF EXISTS `xz_shopping_cart`;
CREATE TABLE `xz_shopping_cart`  (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL COMMENT '用户编号',
  `product_id` int(11) NULL DEFAULT NULL COMMENT '商品编号',
  `count` int(11) NULL DEFAULT NULL COMMENT '购买数量',
  PRIMARY KEY (`cid`) USING BTREE,
  INDEX `user_id`(`user_id`) USING BTREE,
  INDEX `product_id`(`product_id`) USING BTREE,
  CONSTRAINT `xz_shopping_cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `xz_user` (`uid`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `xz_shopping_cart_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `xz_laptop` (`lid`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for xz_user
-- ----------------------------
DROP TABLE IF EXISTS `xz_user`;
CREATE TABLE `xz_user`  (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `pwd` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `phone` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机号码',
  `avatar` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像图片路径',
  `user_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `gender` int(11) NULL DEFAULT NULL COMMENT '性别 0：女，1：男',
  PRIMARY KEY (`uid`) USING BTREE,
  UNIQUE INDEX `phone`(`phone`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
