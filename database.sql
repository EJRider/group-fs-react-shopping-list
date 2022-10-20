-- Don't forget to add your create table SQL 
-- Make database react-shopping-list
-- It is also helpful to include some test data

CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR (80) NOT NULL,
	"quantity" INTEGER NOT NULL,
	"unit" VARCHAR (20),
  	"purchased" BOOLEAN DEFAULT FALSE
);

