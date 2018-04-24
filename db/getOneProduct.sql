select * from products
inner join details on details.product_id = products.product_id
where id=$1;