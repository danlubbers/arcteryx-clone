-- select * from products
-- inner join details on details.product_id = products.product_id
-- where details_id = $1;

select * from products
where category = 'Cold Weather' and product_id = $1;