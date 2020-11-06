set names utf8;
drop database if exists tedu;
create database tedu charset=utf8;
use tedu;

create table dept(
did int primary key AUTO_INCREMENT comment '部门编号',
dname varchar(64) comment  '部门名称'
)default charset=utf8;

#插入数据
insert into dept (did,dname) values(10,'研发部');
insert into dept (did,dname) values(20,'市场部');
insert into dept (did,dname) values(30,'运营部');
insert into dept (did,dname) values(40,'测试部');


create table emp(
eid int primary key auto_increment comment '员工编号',
ename varchar(64) not null comment '员工姓名',
sex tinyint default 1 comment '性别',
birthday datetime comment '生日',
salary decimal(6,2) comment '工资',
deptid int,
foreign key (deptid) references dept (did)
);

insert into emp(ename,sex,birthday,salary,deptid) values('张三',1,'1995-06-07 00:00:00',6000.00,10);
insert into emp(ename,sex,birthday,salary,deptid) values('李四',0,'1997-10-10 00:00:00',5000.00,10);
insert into emp(ename,sex,birthday,salary,deptid) values('石破天',1,'1989-06-07 00:00:00',1684.00,20);
insert into emp(ename,sex,birthday,salary,deptid) values('贝海石',0,'1964-06-07 00:00:00',6548.00,30);
insert into emp(ename,sex,birthday,salary,deptid) values('叮叮当当',0,'1999-06-07 00:00:00',5987.00,30);
insert into emp(ename,sex,birthday,salary,deptid) values('不三不四',1,'2010-06-07 00:00:00',3000.00,40);
insert into emp(ename,sex,birthday,salary,deptid) values('石清',1,'2000-06-07 00:00:00',9000.00,40);