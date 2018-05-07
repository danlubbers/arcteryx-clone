update cart 
set quantity = $2
where cart_id = $1

-- this returns the one item changed
returning *;