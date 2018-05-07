-- EXAMPLE
-- select title, quantity, price, products.id from cart
-- JOIN cart on products.id = cart.prod_id
-- where cart.user_id = 1;

-- Lloyd slacked out
-- SELECT products.id, title, price, quantity from products
-- JOIN carts ON products.id = carts.prod_id 
-- WHERE carts.user_id = $1 ;

-- CART is a MANY TO ONE

-- cart_id, user_id, img, title, colour, price, quantity

select * from products
join cart on cart.product_id = products.product_id
where user_id = $1
-- Order by id maintains consistent order after updates database
order by cart_id;


