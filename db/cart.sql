-- EXAMPLE
-- select title, quantity, price, products.id from cart
-- JOIN cart on products.id = cart.prod_id
-- where cart.user_id = 1;

-- Lloyd slacked out
-- SELECT products.id, title, price, quantity from products
-- JOIN carts ON products.id = carts.prod_id 
-- WHERE carts.user_id = $1 ;

-- CART is a MANY TO ONE