create table users (
    user_id serial primary key,
    auth_id varchar(45),
    username varchar(45)
);

-- Table for Cold Weather Insulated Products
create table products (
    product_id serial primary key,
    category text,
    title text,
    description text,
    price decimal,
    colour text,
    img text,
    large_img text
);

-- Table for Cold Weather Insulated Products
-- create table details (
--     details_id serial primary key,
--     product_id integer,
--     large_img text, 
-- );

-- Table for xFunctional Products
-- create table xFunctional (
--     product_id serial primary key,
--     title text,
--     description text,
--     price decimal,
--     colour text,
--     img text, 
--     large_img text
-- );

create table cart (
    cart_id serial primary key,
    user_id integer,
    quantity integer default 1
);

-- INSERT FOR PRODUCT TABLE
-- Category Cold Weather
insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX PARKA SVX MENS', 'Exceptionally warm down parka, fully featured for cold weather conditions.', '1499.00', 'Harrier', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Parka-SVX-Harrier.gif','http://res.cloudinary.com/danlubbers/image/upload/v1524600909/Cold-WX-Parka-SVX-Harrier-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX JACKET SV MENS', 'A windproof cold and wet weather jacket with maximum insulating properties.', '799.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Jacket-SV-Black.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524602533/Cold-WX-Jacket-SV-Black-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX JACKET LT MULTICAM MENS', 'A windproof cold weather insulated MultiCam® jacket.', '449.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Jacket-LT-MultiCam-Multicam.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524602664/Cold-WX-Jacket-LT-MultiCam-Multicam-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX JACKET SV MULTICAM MENS', 'A windproof cold and wet weather MultiCam® jacket with maximum insulating properties.', '899.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Jacket-SV-MultiCam-Multicam.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524602764/Cold-WX-Jacket-SV-MultiCam-Multicam-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX HOODY LT MENS', 'A windproof cold weather insulated hooded jacket.', '389.00', 'Ranger Green', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Hoody-LT-Ranger-Green.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524602839/Cold-WX-Hoody-LT-Ranger-Green-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX HOODY LT MULTICAM MENS', 'A windproof cold weather insulated MultiCam® hooded jacket.', '489.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Hoody-LT-MultiCam-Multicam.gif', 
'http://res.cloudinary.com/danlubbers/image/upload/v1524602914/Cold-WX-Hoody-LT-MultiCam-Multicam-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX JACKET LT MENS', 'A windproof cold weather insulated jacket.', '349.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585916/Cold-WX-Jacket-LT-Crocodile.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524603031/Cold-WX-Jacket-LT-Crocodile-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX BIB PANT SVX MENS', 'Exceptionally warm down bib pant, fully featured for cold weather conditions.', '1299.00', 'Harrier', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585916/Cold-WX-Bib-Pant-SVX-Harrier.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524603113/Cold-WX-Bib-Pant-SVX-Harrier-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX PANT SV MENS', 'A synthetic insulated cold weather windproof pant.', '669.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Pant-SV-Black.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524603183/Cold-WX-Pant-SV-Black-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('Cold Weather', 'COLD WX PANT SV MULTICAM MENS', 'A windproof cold and wet weather pant with maximum insulating properties.', '749.00', 'Multicam', 'http://res.cloudinary.com/danlubbers/image/upload/v1524585915/Cold-WX-Pant-SV-MultiCam-Multicam.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1524603258/Cold-WX-Pant-SV-MultiCam-Multicam-large.png');

-- Category xFunctional
insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'XFUNCTIONAL PANT AR', 'Cross-functional technical pant with casual appearance.', '149.00', 'Greenstone', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654031/xFunctional/xFunctional-Pant-AR-Greenstone.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654920/xFunctional/xFunctional-Pant-AR-Greenstone-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'COURIER BAG 15', 'A messenger style bag capable of carrying a sub-gun platform in a secure and concealed manner.', '279.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654031/xFunctional/Courier-Bag-15-Black.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654921/xFunctional/Courier-Bag-15-Black-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'BLADE 28 BACKPACK', 'Streamlined overnight travel pack that carries and organizes laptops, digital tools, clothing and personal items.', '199.00', 'Pilot', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654031/xFunctional/Blade-28-Backpack-Pilot.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654920/xFunctional/Blade-28-Backpack-Pilot-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'BLADE 20 BACKPACK', 'Minimalist styled pack created to carry daily tools for the digital world.', '179.00', 'Pilot', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654031/xFunctional/Blade-20-Backpack-Pilot.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654921/xFunctional/Blade-20-Backpack-Pilot-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'BLADE 6 BACKPACK', 'Compact daypack with refined, clean styling. Created to carry smaller laptops, tablets and core essentials.', '139.00', 'Katalox', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654031/xFunctional/Blade-6-Backpack-Katalox.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654921/xFunctional/Blade-6-Backpack-Katalox-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'SLINGBLADE 4 SHOULDER BAG', 'Small, versatile, intelligently organized shoulder bag for travel and everyday use.', '79.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654920/xFunctional/Slingblade-4-Shoulder-Bag-Black.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654920/xFunctional/Slingblade-4-Shoulder-Bag-Black-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'V80 ROLLING DUFFLE', '80L rolling gear hauler with exceptional strength-to-weight ratio.', '425.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654031/xFunctional/V80-Rolling-Duffle-Black.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654920/xFunctional/V80-Rolling-Duffle-Black-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('xFunctional', 'V110 ROLLING DUFFLE', '110L rolling gear hauler with exceptional strength-to-weight ratio.', '449.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654031/xFunctional/V110-Rolling-Duffle-Black.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1525654920/xFunctional/V110-Rolling-Duffle-Black-large.png');

-- Mid Layers
insert into products (category, title, description, price, colour, img, large_img) values ('midLayers', 'ATOM LT HOODY LEAF', 'Exceptionally lightweight insulated mid layer that retains core warmth by blocking wind and trapping warm air next to the body, the Atom LT can also function as a wind resistant outer layer.', '259.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Atom-LT-Hoody-LEAF-Black.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155484/midLayers/Atom-LT-Hoody-LEAF-Black-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('midLayers', 'ATOM LT JACKET LEAF', 'Exceptionally lightweight insulated mid layer that retains core warmth by blocking wind and trapping warm air next to the body, the Atom LT can also function as a wind resistant outer layer.', '239.00', 'Wolf', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Atom-LT-Jacket-LEAF-Wolf.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Atom-LT-Jacket-LEAF-Wolf-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('midLayers', 'NAGA HOODY FULL ZIP', 'Warm technical mid layer with full zip closure, functional for everyday use.', '229.00', 'Wolf', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Naga-Hoody-Full-Zip-Wolf.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155484/midLayers/Naga-Hoody-Full-Zip-Wolf-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('midLayers', 'NAGA HOODY GEN 2', 'Warm technical thermal mid layer functional for everyday use.', '199.00', 'Ranger Green', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Naga-Hoody-Gen-2-Ranger-Green.gif', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Naga-Hoody-Gen-2-Ranger-Green-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('midLayers', 'NAGA PULOVER AR', 'A mid layer that is worn in conjunction with a wet weather protective jacket when conducting Special Reconnaissance tasks.', '249.00', 'Crocodile', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Naga-Pullover-AR-Crocodile.gif','http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Naga-Pullover-AR-Crocodile-large.png');

insert into products (category, title, description, price, colour, img, large_img) values ('midLayers', 'ATOM LT PANT LEAF', 'A lightweight and packable insulated mid layer bottom.', '229.00', 'Black', 'http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Atom-LT-Pant-LEAF-Black.gif','http://res.cloudinary.com/danlubbers/image/upload/v1526155491/midLayers/Atom-LT-Pant-LEAF-Black-large.png');

-- INSERT FOR DETAILS TABLE

-- insert into details (product_id, large_img) values (1, 'http://res.cloudinary.com/danlubbers/image/upload/v1524600909/Cold-WX-Parka-SVX-Harrier-large.png');

-- insert into details (product_id, large_img) values (2, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602533/Cold-WX-Jacket-SV-Black-large.png');

-- insert into details (product_id, large_img) values (3, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602664/Cold-WX-Jacket-LT-MultiCam-Multicam-large.png');

-- insert into details (product_id, large_img) values (4, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602764/Cold-WX-Jacket-SV-MultiCam-Multicam-large.png');

-- insert into details (product_id, large_img) values (5, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602839/Cold-WX-Hoody-LT-Ranger-Green-large.png');

-- insert into details (product_id, large_img) values (6, 'http://res.cloudinary.com/danlubbers/image/upload/v1524602914/Cold-WX-Hoody-LT-MultiCam-Multicam-large.png');

-- insert into details (product_id, large_img) values (7, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603031/Cold-WX-Jacket-LT-Crocodile-large.png');

-- insert into details (product_id, large_img) values (8, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603113/Cold-WX-Bib-Pant-SVX-Harrier-large.png');

-- insert into details (product_id, large_img) values (9, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603183/Cold-WX-Pant-SV-Black-large.png');

-- insert into details (product_id, large_img) values (10, 'http://res.cloudinary.com/danlubbers/image/upload/v1524603258/Cold-WX-Pant-SV-MultiCam-Multicam-large.png');




-- How to Join
-- not applicable now since i dropped and changed tables
-- select * from products
-- inner join details on details.product_id = products.product_id
-- where details_id = $1;

