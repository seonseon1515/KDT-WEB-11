use kdt;
-- kdt DATABASE 사용

create table user(
	id int not null auto_increment primary key,
    username varchar(10) not null,
    age int not null,
    address varchar(100)
);
-- user table 생성


-- SELECT * FROM kdt.user;
-- select 문 
use kdt;
select * from user;

-- 문자는 홑따옴표
INSERT INTO user (username, age, address) VALUES ('나선경',26,'코딩온');
INSERT INTO user (username, age, address) VALUES ('성춘향',22,'코딩온');
INSERT INTO user (username, age, address) VALUES ('룰랄라',32,'코딩온');
INSERT INTO user (username, age, address) VALUES ('이몽룡',29,'코딩온');
INSERT INTO user (username, age, address) VALUES ('박건우',32,'코딩온');
INSERT INTO user (username, age, address) VALUES ('성춘향',23,'코딩온');
INSERT INTO user (username, age, address) VALUES ('성춘향',24,'코딩온');
INSERT INTO user (username, age, address) VALUES ('성춘향',25,'코딩온');


SELECT * FROM kdt.user;
use kdt;
select *from user;
select age, username from user;
-- select에 적은 순서대로 user 테이블에서 뽑아냄 

SELECT * FROM kdt.user;

select * from user where age <= 25 AND age >= 23;

select * from user where id = 7 ;

select * from user where username = '이몽룡';

select * from user where age >= 24 order by age desc;

-- where order by 순
-- asc: 오름차순 - 가나다라 순
 
 select * from user where address Like '%용산구';
-- 용산구로 끝나는 단어 찾음
-- %용산구%: 용산구가 중간에 들어가는 단어

select * from user where username like '__향';
-- 언더바 두개 : 마지막 글자가 향으로 끝나는 사람

select * from user where age between 25 and 22 and 25;
-- 사이 값


-- -------------------------------------------------------------
SELECT * FROM kdt.user;

-- in : 괄호 안이랑 똑같은 수
select * from user where age in (23, 25,24) order by age DESC Limit 5;

select * from user where address is null;
select * from user where address is not null;
-- 널값만 가져왕

SELECT * FROM kdt.user;
-- 테이블 선택 

update user set address = '부산시 해운대구', age=999 where id = 2;
-- set: 바꾸고 싶은 값 ','를 연결해서 계속 사용 가능

delete from user where id =11;
-- 그냥 delete from 붙여서 쓰고 where문 반드시 추가
-- update where 붙여서 쓰기
-- 엉뚱한 데이터와의 연결을 막기 위해 키를 삭제하는 순간 11번은 없어지고 새로 생기지 않음

--------------------------------------------------------------------------------
create table employees (
id int auto_increment primary key not null,
username varchar(31) not null,
department varchar(31) not null,
salary int
);


SELECT * FROM kdt.employees;

-- 중복데이터 제거
insert into employees (username, department, salary) values
('홍길동', 'it 개발팀', 4500),
('나선경', 'it 개발팀', 5000),
('김선경', '디자인팀', 4500),
('최션경', '재무팀', 5000),
('유유경', '디자인팀', 4500),
('가나경', '인사팀', 45500),
('다라경', '인사팀', 46500),
('마바경', '인사팀', 45070),
('아자차경', 'it 개발팀', 45080),
('카타파', '디자인', 45090),
('변사또', '디자인', 45000),
('오징어', 'it 개발팀', 4200),
('먹물', 'it 개발팀', 45300),
('치즈', 'it 개발팀', 45500),
('피자', 'it 개발팀', 5500),
('치킨', 'it 개발팀', 4200),
('샐러리', 'it 개발팀', 4100);

SELECT * FROM kdt.employees;

select distinct department from employees;

select department, avg(salary) as avg_salarys from employees group by department having avg(salary) > 5000;

-- as : 칼럼명 새로 만들어줌
-- having: groub by 뒤에서 조건을 적용시키는 역할

select salary, sum(salary) as sum_salary from employees;
select count(*) as count_employees from employees where department = 'it 개발팀';
-- 전체 행이 몇개인지 알고 싶을 때


use kdt;

create table practice1 (
id varchar(10) not null primary key,
pw varchar(20) not null,
name varchar(5) not null,
gender ENUM('F','M','') default '',
birthday DATE not null,
age int(3) not null default 0
);

--------------------------------------------------------------

SELECT * FROM kdt.practice1;

insert into practice1 (id, pw, name, gender,birthday,age) VALUES 
('nana1234', 12341234, '나선경','F' ,"1999-11-16",26),
('anjfqhk12', 1982334, '김선경','M' ,"1933-9-15",27),
('nasdfk4', 23423534, '송선경','F',"1944-8-14",27),
('rmalwl4', 13242344, '최선경','M' ,"1955-7-13",28),
('nwlqwnd4', 14, '유선경','F',"1966-6-12",29),
('nahfdlq4', 24134, '한선경','M',"1977-5-11",23);


SELECT * FROM kdt.practice1;

-- 1번 
select * from practice1 order by birthday asc;
-- 2번
select * from practice1 where gender='M' order by name DESC;
-- 3번
select id, name from practice1 where 1900 <= birthday <2000;
-- 4번 
select * from practice1 where month(birthday)='06' order by birthday ASC;
-- 5번
select * from practice1 where gender='M'AND YEAR(birthday)="1970";
-- 6번
select * from practice1 order by age DESC limit 3;
-- 7번
select * from practice1 where 25<= age <= 50;
-- 8번
update practice1 set pw=12345678 where id = 'nana1234';
-- 9번
delete from practice1 where id = 'nana1234';