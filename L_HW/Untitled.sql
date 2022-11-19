SELECT * FROM employees
SELECT first_name AS first, last_name AS last FROM employees
SELECT DISTINCT department_id FROM employees
SELECT first_name, last_name FROM employees ORDER BY first_name DESC
SELECT first_name, last_name, salary FROM employees ORDER BY salary ASC
SELECT SUM(salary) AS Total_Salary FROM employees
SELECT MIN(salary), MAX(salary) FROM employees
SELECT AVG(salary) FROM employees
SELECT COUNT(employee_id)  FROM employees
SELECT UPPER(first_name) FROM employees
SELECT SUBSTRING(first_name, 1, 3) FROM employees
SELECT first_name || ' ' || last_name AS full_name FROM employees
SELECT first_name || ' ' || last_name AS full_name, length(first_name, last_name) FROM employees
SELECT * FROM employees LIMIT 10
SELECT * FROM jobs

SELECT first_name, last_name, salary FROM employees WHERE salary >= 10000 AND salary <= 15000

SELECT first_name, last_name, hire_date FROM employees WHERE hire_date ILIKE 1987
SELECT first_name FROM employees WHERE first_name iLIKE '%c%' OR first_name ILIKE '%d%'
SELECT last_name