create table items (
	id serial primary key unique ,
	product_name varchar(500) not null unique,
	price int not null 
)

create table product_orders (
	order_id serial primary key unique,
	customer_name varchar(500),
	item_id INT REFERENCES items(id)
)

create or replace function get_total
returns int
language plpgsql
as
$$

$$