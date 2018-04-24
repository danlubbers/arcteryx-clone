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
    img text
);

create cart (
    user_id integer,
    product_id integer,
    quantity integer
);

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