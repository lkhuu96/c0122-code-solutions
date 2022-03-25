const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const body = req.body;
  if (!body.name || !body.course || !body.score) {
    res.status(400).json({
      error: "must have 'name', 'course', and 'score'."
    });
  } else if (Number(body.score) > 100 || Number(body.score) < 0) {
    res.status(400).json({
      error: 'score must be between 0 and 100'
    });
  }
  const params = [body.name, body.course, body.score];
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *
  `;
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const body = req.body;
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || Number(gradeId) < 1) {
    res.status(400).json({
      error: '\'gradeId\' must be a positive integer'
    });
  } else if (!body.name || !body.course || !body.score) {
    res.status(400).json({
      error: "must have 'name', 'course', and 'score'."
    });
  } else if (Number(body.score) > 100 || Number(body.score) < 0) {
    res.status(400).json({
      error: 'score must be between 0 and 100'
    });
  }
  const params = [body.name, body.course, body.score, gradeId];
  const sql = `
  update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
   where "gradeId" = $4
  returning *
  `;
  db.query(sql, params)
    .then(result => {
      if (result.rows.length < 1) {
        res.status(404).json({
          error: `No grade with gradeId of ${gradeId} exists`
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'an unexpected error has occurred'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || Number(gradeId) < 1) {
    res.status(400).json({
      error: '\'gradeId\' must be a positive integer'
    });
  }
  const params = [gradeId];
  const sql = `
  delete from "grades"
   where "gradeId" = $1
   returning *
  `;
  db.query(sql, params)
    .then(result => {
      if (result.rows.length < 1) {
        res.status(404).json({
          error: `No grade with gradeId of ${gradeId} exists`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({
        error: 'an unexpected error has occurred'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
