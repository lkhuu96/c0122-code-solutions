select "genres"."name" as "genreName",
       count("genreId") as "genreCount"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
 where "actors"."firstName" = 'Lisa' and "actors"."lastName" = 'Monroe'
 group by "genreName"
