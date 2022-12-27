select * from language
select * from film

select film.title, language.name from film
left join language
on film.language_id=language.language_id

select film.title, language.name from language
right join film
on film.language_id=language.language_id

select film.title, language.name from film
inner join language
on film.language_id=language.language_id

create table new_film(
	id serial primary key,
	name varchar(255) not null
)

insert into new_film (name)
values ('Star Wars'), ('Jurrasic Park'), ('White Chicks')

select * from new_film

create table customer_review(
	id serial primary key,
	review varchar(500),
	language_id int references language(language_id),
	title varchar(255),
	score int,
	review_text text,
	last_update date
)

select * from customer_review

insert into customer_review(language_id, title, score, review_text)
values (1, 'Jurrasic Park', 8, 'Boring Movie'), (2 'White Chicks', 10, 'Funny')

delete from new_film
where name = 'Star Wars'
