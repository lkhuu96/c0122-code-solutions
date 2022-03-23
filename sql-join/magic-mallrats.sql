select "firstName",
       "lastName"
  from "inventory"
  join "films" using ("filmId")
  join "rentals" using ("inventoryId")
  join "customers" using ("customerId")
  where "films"."title" = 'Magic Mallrats';
