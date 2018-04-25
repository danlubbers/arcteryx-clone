create table users (
    user_id serial primary key,
    auth_id varchar(45),
    username varchar(45)
);

create table products (
    product_id serial primary key,
    title text,
    description text,
    price decimal,
    colour text,
    img text
);

create table details (
    details_id serial primary key,
    product_id integer,
    large_img text
);

create table cart (
    cart_id serial primary key,
    user_id integer,
    product_id integer,
    quantity integer
);

-- INSERT FOR PRODUCT TABLE

insert into products (title, description, price, colour, img) values ('COLD WX PARKA SVX MENS', 'Exceptionally warm down parka, fully featured for cold weather conditions.', '1499.00', 'Harrier', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Parka-SVX-Harrier.gif');

insert into products (title, description, price, colour, img) values ('COLD WX JACKET SV MENS', 'A windproof cold and wet weather jacket with maximum insulating properties.', '799.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Jacket-SV-Black.gif');

insert into products (title, description, price, colour, img) values ('COLD WX JACKET LT MULTICAM MENS', 'A windproof cold weather insulated MultiCam® jacket.', '449.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Jacket-LT-MultiCam-Multicam.gif');

insert into products (title, description, price, colour, img) values ('COLD WX JACKET SV MULTICAM MENS', 'A windproof cold and wet weather MultiCam® jacket with maximum insulating properties.', '899.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Jacket-SV-MultiCam-Multicam.gif');

insert into products (title, description, price, colour, img) values ('COLD WX HOODY LT MENS', 'A windproof cold weather insulated hooded jacket.', '389.00', 'Ranger Green', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Hoody-LT-Ranger-Green.gif');

insert into products (title, description, price, colour, img) values ('COLD WX HOODY LT MULTICAM MENS', 'A windproof cold weather insulated MultiCam® hooded jacket.', '489.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Hoody-LT-MultiCam-Multicam.gif');

insert into products (title, description, price, colour, img) values ('COLD WX JACKET LT MENS', 'A windproof cold weather insulated jacket.', '349.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585916/Cold-WX-Jacket-LT-Crocodile.gif');

insert into products (title, description, price, colour, img) values ('COLD WX BIB PANT SVX MENS', 'Exceptionally warm down bib pant, fully featured for cold weather conditions.', '1299.00', 'Harrier', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585916/Cold-WX-Bib-Pant-SVX-Harrier.gif');

insert into products (title, description, price, colour, img) values ('COLD WX PANT SV MENS', 'A synthetic insulated cold weather windproof pant.', '669.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Pant-SV-Black.gif');

insert into products (title, description, price, colour, img) values ('COLD WX PANT SV MULTICAM MENS', 'A windproof cold and wet weather pant with maximum insulating properties.', '749.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Pant-SV-MultiCam-Multicam.gif');

-- INSERT FOR DETAILS TABLE

insert into details (product_id, large_img) values (1, 'http://res.cloudinary.com/danlubbers/image/upload/v1524600909/Cold-WX-Parka-SVX-Harrier-large.png');

insert into details (product_id, large_img) values (2, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602533/Cold-WX-Jacket-SV-Black-large.png');

insert into details (product_id, large_img) values (3, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602664/Cold-WX-Jacket-LT-MultiCam-Multicam-large.png');

insert into details (product_id, large_img) values (4, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602764/Cold-WX-Jacket-SV-MultiCam-Multicam-large.png');

insert into details (product_id, large_img) values (5, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602839/Cold-WX-Hoody-LT-Ranger-Green-large.png');

insert into details (product_id, large_img) values (6, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602914/Cold-WX-Hoody-LT-MultiCam-Multicam-large.png');

insert into details (product_id, large_img) values (7, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603031/Cold-WX-Jacket-LT-Crocodile-large.png');

insert into details (product_id, large_img) values (8, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603113/Cold-WX-Bib-Pant-SVX-Harrier-large.png');

insert into details (product_id, large_img) values (9, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603183/Cold-WX-Pant-SV-Black-large.png');

insert into details (product_id, large_img) values (10, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603258/Cold-WX-Pant-SV-MultiCam-Multicam-large.png');

-- How to Join

select * from products
inner join details on details.product_id = products.product_id
where details_id = $1;

