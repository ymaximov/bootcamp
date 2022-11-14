SELECT * FROM customer

SELECT first_name, last_name AS full_name FROM CUSTOMER

SELECT DISTINCT create_date FROM customer

SELECT * FROM customer ORDER BY first_name DESC

SELECT film_id, title, description, release_year, rental_rate FROM film
ORDER BY rental_rate ASC

SELECT address, phone, district FROM address
WHERE district ILIKE 'texas'

SELECT * FROM film WHERE film_id = 50 OR film_id = 150

SELECT film_id, title, description, length, rental_rate FROM film
WHERE title ILIKE 'switch'

SELECT film_id, title, description, length, rental_rate FROM film
WHERE title ILIKE 'sw%'

SELECT title, rental_rate FROM film
ORDER BY rental_rate ASC
LIMIT 10

SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer, payment
ORDER BY customer.customer_id

select * from staff

SELECT customer.first_name, customer.last_name, staff.staff_id
FROM customer, staff
ORDER BY staff.staff_id
