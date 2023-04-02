const express = require("express");
const app = express();
const { Pool } = require('pg')

// Pool of postgres clients to use for connecting to a postgres database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'q1w2e3r4',
    port: 5432,
})

app.use('/', express.static('../client/dist/client'));

app.get('/movies', async (request, response) => {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * from movie');
        response.send(res.rows);
    } catch (err) {
        console.log(err.stack)
    } finally {
        client.release()
    }
});

app.get('/movies/search', async (request, response) => {
    const client = await pool.connect();
    try {
        const searchString = request.query.searchString;
        const queryString = `SELECT * FROM movie WHERE title LIKE '%${searchString}%'`;
        console.log(queryString);
        const res = await client.query(queryString);
        response.send(res.rows);
    } catch (err) {
        console.log(err.stack)
    } finally {
        client.release()
    }
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});