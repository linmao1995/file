#显示当前服务器下所有数据库
#show databases;
#进入到数据库phpmyadmin
#use phpmyadmin;
#显示当前数据库下所有数据表
#show tables;
#pma__history
#desc pma__history;


drop database if exists linmao;
create database linmao charset utf8;

use linmao;
drop table if exists user;
create table user(
id int primary key auto_increment,
uid int not null,
uname varchar(250) not null,
usex int not null,
birthday varchar(250) not null
);

insert into user(uid,uname,usex,birthday) value('100001','张三','0','1995-06-07');
insert into user(uid,uname,usex,birthday) value('100002','李四','0','1996-07-07');
insert into user(uid,uname,usex,birthday) value('100003','王五','1','1997-08-07');
insert into user(uid,uname,usex,birthday) value('100004','赵六','1','1998-09-10');
insert into user(uid,uname,usex,birthday) value('100005','钱七','0','1999-07-07');
insert into user(uid,uname,usex,birthday) value('100006','张八','1','2000-07-07');
insert into user(uid,uname,usex,birthday) value('100007','李九','0','2001-07-07');