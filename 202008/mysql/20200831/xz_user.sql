#设置客户端连接服务器端编码为utf8
set name utf8;

drop database if exists linmao;
create database linmao;
use linmao;
#编号、登录名、登录密码、邮箱、手机号、头像路径、用户名、性别
drop table if exists xz_user;
create table xz_user(
id int primary key auto_increment,
uid int not null,
uloginname varchar(256) not null,
pwd varchar(256) not null,
email varchar(256) not null,
phone varchar(256) not null,
imgurl varchar(256) not null,
uname varchar(256) not null,
sex int not null,
regTime varchar(256) not null,
isOnline int not null
) default charset=utf8;

#插入数据
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100001','admin','123456','1314@qq.com','13101234567','img/001.jpg','超级管理员',0,'2020-09-01',0);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100002','zhangsan','123456','1314@qq.com','13101234567','img/002.jpg','张三',0,'2020-09-01',1);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100003','lisi','123456','1314@qq.com','13101234567','img/003.jpg','李四',1,'2020-09-01',0);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100004','wangwu','123456','1314@qq.com','13101234567','img/004.jpg','王五',1,'2020-09-01',0);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100005','zhaoliu','123456','1314@qq.com','13101234567','img/005.jpg','赵六',0,'2020-09-01',1);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100006','qianqi','123456','1314@qq.com','13101234567','img/006.jpg','钱七',1,'2020-09-01',1);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100007','sunba','123456','1314@qq.com','13101234567','img/007.jpg','孙八',0,'2020-09-01',0);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100008','lijiu','123456','1314@qq.com','13101234567','img/008.jpg','李九',1,'2020-09-01',1);
insert into xz_user (uid,uloginname,pwd,email,phone,imgurl,uname,sex,regTime,isOnline) values('100009','zhouyi','123456','1314@qq.com','13101234567','img/009.jpg','周一',0,'2020-09-01',0);