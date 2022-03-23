select "releaseYear",
       "genres"."name" as "genreName",
       "title"
  from "filmGenre"
  join "films" using ("filmId")
  join "genres" using ("genreId")
  where "title" = 'Boogie Amelie';
