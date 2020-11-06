use linmao;
drop table if exists emp;
create table emp (
id int,
ename varchar(255),
phone varchar(255),
address varchar(255)
);

insert into emp (id,ename,phone,address) values(1001,'张三','15822286499','北京市丰台区');
#insert into emp values(1001,'张三','15822286499','北京市丰台区');
insert into emp (id,ename,phone,address) values(1002,'李四','15822286499','天津市西青区');
insert into emp (id,ename,phone,address) values(1003,'王五','15822286499','北京市海淀区');
insert into emp (id,ename,phone,address) values(1004,'赵六','15822286499','天津市高新区');