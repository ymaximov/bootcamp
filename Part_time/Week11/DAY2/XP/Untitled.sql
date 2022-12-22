-- EX1
select * from payment order by amount asc
select * from payment where amount >= 80.00
select * from customer limit 3
select last_name from customer order by last_name desc

-- EX2
select * from customer
select first_name || ' ' || last_name as full_name from customer
select distinct create_date from customer
select * from customer order by first_name desc
select * from film
select film_id, title, description, release_year, rental_rate from film order by rental_rate asc
select * from address
select * from city
select address, phone, address.city_id from address
where city_id = 295
left join city on address.city_id = city.city_id
select * from film where film_id = 15 and film_id = 150
select film_id, title, description from film where title = 'white chicks'
select film_id, title, description from film where title = 'wh%'
select * from film order by rental_rate asc limit 10
select * from film where rental_rate > 0.99 limit 10



