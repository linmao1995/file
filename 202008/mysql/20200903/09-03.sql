#创建数据库,设置编码
set names utf8;
drop database AA if exists AA;
create database AA charset=utf8;
use AA;
create table BB(
id int primary key auto_increment,
name varchar(16),
age int,
addr varchar(128)
)default charset=utf8;
