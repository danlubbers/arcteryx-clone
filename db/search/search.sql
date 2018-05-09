select * from products
where title ~* $1 or 
description ~* $1