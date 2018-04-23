create table users (
    user_id serial primary key,
    username varchar(45),
    password varchar(45)
);

create table products (
    product_id serial primary key,
    title text,
    description text,
    price decimal,
    colour text,
    img text,
    size text
);

create cart (
    user_id integer,
    product_id integer,
    quantity integer
);