set names utf8;
drop database if exists xz;
create database xz charset=utf8;
use xz;
#编号cid、类别名称cname、笔记本数量cnumber
create table laptop_family(
cid int primary key  not null comment '类别编号',
cname varchar(256) comment '类别名称',
cnumber smallint comment '笔记本数量'
)default charset=utf8;

#插入数据
insert into laptop_family (cid,cname,cnumber) values(10,'联想',2);
insert into laptop_family (cid,cname,cnumber) values(20,'戴尔',2);
insert into laptop_family (cid,cname,cnumber) values(30,'小米',3);


#创建laptop数据表
#编号l_id、标题l_title、价格l_price、规格l_size、详情l_detail、上架时间shelftime、是否在售isonsale、所属类别编号c_number、
create table laptop(
l_id int primary key auto_increment not null comment '编号',
l_title varchar(255) not null comment '标题',
l_price decimal(7,2) not null comment '价格',
l_size varchar(255) not null comment '规格',
l_detail varchar(5000) not null comment '商品详情',
shelftime datetime not null comment '上架时间',
isonsale tinyint not null comment '是否在售 0：未售，1：开售',
c_number int not null comment '所属类别编号'
)default charset=utf8;

insert into laptop (l_title,l_price,l_size,l_detail,shelftime,isonsale,c_number) values('联想笔记本电脑一代',1237.76,'【E480C-2017新】i3 4G 500G独显','联想笔记本电脑详情','2020-11-11 00:00:00',1,10);
insert into laptop (l_title,l_price,l_size,l_detail,shelftime,isonsale,c_number) values('联想笔记本电脑二代',12374.76,'【E480C-2017新】i9 8G 500G独显','联想笔记本电脑详情','2020-12-12 00:00:00',0,10);
insert into laptop (l_title,l_price,l_size,l_detail,shelftime,isonsale,c_number) values('戴尔笔记本电脑一代',4421.76,'【E480C-2017新】i3 4G 500G独显','联想笔记本电脑详情','2020-11-11 00:00:00',1,20);
insert into laptop (l_title,l_price,l_size,l_detail,shelftime,isonsale,c_number) values('戴尔笔记本电脑二代',17543.76,'【E480C-2017新】i3 4G 500G独显','联想笔记本电脑详情','2020-11-11 00:00:00',1,20);
insert into laptop (l_title,l_price,l_size,l_detail,shelftime,isonsale,c_number) values('小米笔记本电脑一代',8753.76,'【E480C-2017新】i3 4G 500G独显','联想笔记本电脑详情','2020-11-11 00:00:00',1,30);
insert into laptop (l_title,l_price,l_size,l_detail,shelftime,isonsale,c_number) values('小米笔记本电脑二代',9866.76,'【E480C-2017新】i9 8G 500G独显','联想笔记本电脑详情','2020-12-12 00:00:00',0,30);
insert into laptop (l_title,l_price,l_size,l_detail,shelftime,isonsale,c_number) values('小米笔记本电脑三代',13567.76,'【E480C-2017新】i3 4G 500G独显','联想笔记本电脑详情','2020-11-11 00:00:00',1,30);