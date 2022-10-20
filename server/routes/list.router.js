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


router.delete('/destroy', (req,res)=>{
    console.log('erasing everything');
    const sqlText = `
        DROP TABLE "list";

        CREATE TABLE "list" (
            "id" SERIAL PRIMARY KEY,
            "item" VARCHAR (80) NOT NULL,
            "quantity" DECIMAL NOT NULL,
            "unit" VARCHAR (20),
              "purchased" BOOLEAN DEFAULT FALSE
        );
    `
    pool.query(sqlText)
            .then(dbRes=>{
                console.log('destroying table', dbRes);
                res.sendStatus(200);
            })
            .catch(err =>{
                console.error('Error in destroying table', err)
                res.sendStatus(500);
            })
})


router.delete('/:id', (req,res)=>{
    console.log('in routerDelete')

    const taskId = req.params.id;
    const sqlText = `
        DELETE FROM "list"
        WHERE "id" = $1;
    `;
    const sqlParams = [taskId]
    pool.query(sqlText,sqlParams)
        .then(dbRes=>{
            console.log('deleting', dbRes);
            res.sendStatus(200);
        })
        .catch(err =>{
            console.error('Error in deleting', err);
            res.sendStatus(500);
        });
});



router.post('/', (req, res) => {

    const item = req.body;
    console.body(item);

    const sqlText = `INSERT INTO "list" ("item","quantity","unit")
	                VALUES ($1, $2, $3);`;



    const sqlParams = [
        item.item,
        item.quantity,
        item.unit
    ]


        pool.query(sqlText, [sqlParams])
            .then((dbRes) => {
                console.log('POST item complete', item)
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log('Error in list.router, ', error)
                res.sendStatus(500);
            })


});
