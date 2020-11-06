#
set names utf8;
drop database if exists sina;
create database sina charset=utf8;
use sina;
create table sina_news(
id int primary key auto_increment,
nid int,
title varchar(64),
ctime varchar(64),
orgin varchar(64),
detail varchar(256)
) default charset=utf8;
#插入数据
insert into sina_news(nid,title,ctime,orgin,detail) values(1001,'小米','2020-09-02','北京市丰台区','小米在北京市丰台区居住');
insert into sina_news(nid,title,ctime,orgin,detail) values(1002,'小王','2020-09-02','湖北省恩施州','小王在湖北省恩施州居住');
insert into sina_news(nid,title,ctime,orgin,detail) values(1003,'小红','2020-09-02','湖北省武汉市','小红在湖北省武汉市居住');
insert into sina_news(nid,title,ctime,orgin,detail) values(1004,'小张','2020-09-02','天津市西青区','小张在天津市西青区居住');
insert into sina_news(nid,title,ctime,orgin,detail) values(1005,'小李','2020-09-02','北京市海淀区','小李在北京市海淀区居住');

#修改小王
update sina_news set title="小郑" where nid=1002;
#删除小米
delete from sina_news where nid=1001;