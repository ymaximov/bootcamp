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

-- JOINS

-- 1
select departments.department_id, locations.location_id, locations.street_address, locations.city, locations.state_province, locations.country_id
from departments
inner join locations
on locations.location_id=departments.location_id

-- 2
select employees.first_name, employees.last_name, departments.department_name, departments.department_id
from employees
inner join departments
on employees.department_id=departments.department_id

-- 3
select employees.first_name, employees.last_name, departments.department_name, employees.employee_id
from employees
inner join departments
on


select * from departments
