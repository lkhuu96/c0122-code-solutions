select count("cities"."name") as "cityCount",
       "countries"."name" as "countryName"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."name";
