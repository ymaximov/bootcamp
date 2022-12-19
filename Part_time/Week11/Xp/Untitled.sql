create table items (
	item_id serial primary key,
	item_name varchar(255) not null,
	price integer not null
)

create table customers (
	customer_id serial primary key,
	first_name varchar(255) not null,
	last_name varchar(255) not null
)

insert into items (item_name, price)
values ('Small Desk', 100),
('Large Desk', 300),
('Fan', 80)

insert into customers (first_name, last_name)
values ('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson')

select * from items
select * from items where price > 80
select * from items where price < 300

select * from customers where last_name = 'Smith'
select * from customers where last_name = 'Jones'
select * from customers where last_name != 'Scott'