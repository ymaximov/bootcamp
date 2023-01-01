-- SUBQUERIES

-- 1
select first_name, last_name, salary from employees 
where salary >
(select salary from employees
where last_name ilike 'bell')

select * from employees
select * from jobs

-- 3
(select employees.first_name, employees.last_name, jobs.job_title
from employees 
inner join jobs
on employees.job_id=jobs.job_id
where jobs.job_title ilike '%Manager%')

-- 4
select first_name, last_name, salary from employees
where salary >
(select avg(salary) from employees)

-- 5
select min_salary

-- 6
select employees.first_name, employees.last_name, jobs.job_title
from employees
inner join jobs
on employees.job_id=jobs.job_id
where jobs.job_title != '%Manager%'

-- 7
select max_salary from jobs
order by max_salary desc


