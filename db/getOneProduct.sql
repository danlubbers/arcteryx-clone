select * from products
inner join details on details.product_id = products.product_id
where details_id = $1;