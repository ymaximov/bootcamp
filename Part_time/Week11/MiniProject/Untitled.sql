select first_name as first, last_name as last from employees
select * from employees order by first_name desc
select first_name, last_name, (salary * 0.015) as PF from employees
select employee_id, first_name || ' ' || last_name as name, salary from employees order by salary
select sum(salary) from employees
select min(salary) from employees
select max(salary) from employees
select avg(salary) from employees
select count(*) from employees
select upper(first_name) from employees
select left(first_name, 3) from employees
select first_name || ' ' || last_name as full_name, length(first_name || ' ' || last_name) from employees
select * from employees where first_name ~ '\d'
select * from employees limit 10 
select first_name, last_name, salary from employees where salary >= 10000 and salary <=15000
select first_name, last_name, hire_date from employees where hire_date between '1987-01-01' and '1987-12-31'
select first_name, last_name from employees where first_name ilike '%c%' or first_name ilike '%e%'
select first_name, last_name, salary from employees where job_id != 9 and job_id != 17 and salary != 4500
and salary != 10000 and salary != 15000
select last_name from employees where length(last_name) = 6
select last_name from employees where last_name like '__e%'
select first_name, job_title from employees
inner join jobs
on employees.job_id=jobs.job_id
select * from employees where last_name ilike 'jones' and last_name ilike 'blake' and last_name ilike 'scott'




