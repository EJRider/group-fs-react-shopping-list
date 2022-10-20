const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

    

module.exports = router;

// GET list
router.get('/', (req, res) => {
    // Get all list items from database
    const sqlText =    ` SELECT * FROM "list"
                        ORDER BY "item" ASC
                        `;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log(`Error making database query ${sqlText}`, err);
            res.sendStatus(500);
        })
});


