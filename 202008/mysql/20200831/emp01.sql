use linmao;
drop table if exists emp;
create table emp (
id int,
ename varchar(255),
phone varchar(255),
address varchar(255)
);

insert into emp (id,ename,phone,address) values(1001,'����','15822286499','�����з�̨��');
#insert into emp values(1001,'����','15822286499','�����з�̨��');
insert into emp (id,ename,phone,address) values(1002,'����','15822286499','�����������');
insert into emp (id,ename,phone,address) values(1003,'����','15822286499','�����к�����');
insert into emp (id,ename,phone,address) values(1004,'����','15822286499','����и�����');