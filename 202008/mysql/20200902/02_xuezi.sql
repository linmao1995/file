set names utf8;
drop database if exists xuezi;
create database xuezi charset=utf8;
use xuezi;
#编号lid、标题title、价格price、库存量stockCount、上架时间shelfTime、是否为首页推荐商品isIndex、
create table laptop(
lid int,
title varchar(64),
price double(7,2),
stockCount smallint,
shelfTime datetime,
isIndex boolean
)default charset=utf8;

#插入数据
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1001,'联想笔记本电脑',7899.00,4621,'2020-09-10 00:00:00',true);
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1002,'华硕笔记本电脑',7899.00,4621,'2020-09-10 00:00:00',false);
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1003,'华为笔记本电脑',7899.00,4621,'2020-09-10 00:00:00',true);
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1004,'苹果笔记本电脑',7899.00,4621,'2020-09-10 00:00:00',false);
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1005,'笔记本电脑',7899.99,4621,'2020-09-10 00:00:00',true);
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1006,'笔记本电脑',7899.987,4621,'2020-09-10 00:00:00',false);
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1007,'笔记本电脑',7899.00,4621,'2020-09-10 00:00:00',true);
insert into laptop (lid,title,price,stockCount,shelfTime,isIndex) values(1008,'笔记本电脑',7899.00,4621,'2020-09-10 00:00:00',false);