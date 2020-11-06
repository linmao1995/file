#首页轮播图表 xz_index_carousel

create table xz_index_carousel(
cid int primary key auto_increment,
img varchar(128) comment '图片路径',
title varchar(64) comment '图片描述',
href varchar(128) comment '图片链接'
);

#首页商品栏目表 xz_index_product 

create table xz_index_product(
pid int primary key auto_increment,
title varchar(64) comment '商品标题',
details varchar(128) comment '详细描述',
pic varchar(128) comment '图片',
price decimal(10,2) comment '商品价格',
href varchar(128),
seq_recommended tinyint,
seq_new_arrival tinyint,
seq_top_sale tinyint
);

#用户信息表 xz_user
create table xz_user(
uid int primary key not null auto_increment,
uname varchar(32),
pwd varchar(32),
email varchar(64),
phone varchar(16) not null unique comment '手机号码',
avatar varchar(128) comment '头像图片路径',
user_name varchar(32) comment '用户名',
gender int comment '性别 0：女，1：男'
);

#用户地址表 xz_receiver_address
create table xz_receiver_address(
aid int primary key auto_increment,
user_id int comment '用户编号',
receiver varchar(16) comment '接收人姓名',
province varchar(16) comment '省',
city varchar(16) comment '市',
county varchar(16) comment '县',
address varchar(128) comment '详细地址',
cellphone varchar(16) comment '手机',
fixedphone varchar(16) comment '固定电话',
postcode char(6) comment '邮编',
tag varchar(16) comment '标签名',
is_default boolean
);
#foreign key (user_id) references xz_user(uid)

#用户购物车表 xz_shopping_cart
create table xz_shopping_cart(
cid int primary key auto_increment,
user_id int comment '用户编号',
product_id int comment '商品编号',
count int comment '购买数量'
);
#foreign key (user_id) references xz_user(uid),
#foreign key (product_id) references xz_laptop(lid)

#用户订单表 xz_order
create table xz_order(
aid int primary key auto_increment,
user_id int comment '用户编号',
address_id int,
status int comment '订单状态, 1:等待付款,2:等待发货',
order_time bigint comment '下单时间',
pay_time bigint comment '付款时间',
deliver_time bigint comment '发货时间',
received_time bigint comment '签收时间'
);
#foreign key (user_id) references xz_user(uid),
#foreign key (address_id) references xz_receiver_address(aid)

#用户订单详情表 xz_order_detail
create table xz_order_detail(
did int primary key auto_increment,
order_id int comment '订单编号',
product_id int comment '产品编号',
count int comment '购买数量'
);
#foreign key (order_id) references xz_order(aid),
#foreign key (product_id) references xz_laptop(lid)

#商品类别表 xz_laptop_family
create table xz_laptop_family(
fid int primary key auto_increment,
name varchar(32) comment '类别名称'
);

#商品表 xz_laptop
create table xz_laptop(
lid int primary key auto_increment,
family_id int comment '所属型号家族编号',
product_id int comment '产品编号',
title varchar(128) comment '主标题',
subtitle varchar(128) comment '副标题',
price decimal(10,2) comment '价格',
promise varchar(64) comment '服务承诺',
spec varchar(64) comment '规格/颜色',
name varchar(32) comment '商品名称',
os varchar(32) comment '操作系统',
memory varchar(32) comment '内存容量',
resolution varchar(32) comment '分辨率',
video_card varchar(32) comment '显卡型号',
cpu varchar(32) comment '处理器',
video_memory varchar(32) comment '显存容量',
category varchar(32) comment '所属分类',
disk varchar(32) comment '硬盘容量及类型',
details varchar(1024) comment '产品详细说明',
shelf_time bigint comment '上架时间',
sold_count int comment '已售出的数量',
is_onsale boolean comment '是否促销中'
);
#foreign key (family_id) references xz_laptop_family(fid)

#商品详情图表 xz_laptop_pic
create table xz_laptop_pic(
pid int primary key auto_increment,
laptop_id int comment '笔记本电脑编号',
sm varchar(128) comment '小图片路径',
md varchar(128) comment '中图片路径',
lg varchar(128) comment '大图片路径'
);

