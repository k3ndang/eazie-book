
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "firstName" VARCHAR(256),
  "lastName" VARCHAR(256),
  "username" VARCHAR (256) UNIQUE NOT NULL,
  "password" VARCHAR (2550) NOT NULL,
  "email" VARCHAR(256),
  "phoneNumber" VARCHAR(256),
  "companyName" VARCHAR(256),
  "address" VARCHAR(2560),
  "city"	VARCHAR(256),
  "state" VARCHAR(256),
  "zipcode" VARCHAR(30),
  "websiteUrl" VARCHAR(2560),
  "authLevel" VARCHAR(256) DEFAULT'renter'
);
CREATE TABLE "categories" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(2500),
	"parentId" INTEGER,
	FOREIGN KEY ("parentId") REFERENCES "categories"(id)
);
CREATE TABLE "bookable_items" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(2500),
	"summary" VARCHAR(2560),
	"detail" VARCHAR(2560),
	"rate" INTEGER,
	"unitTime" VARCHAR(2500),
	"location" VARCHAR(2500),
	"categoryId" INTEGER,
	FOREIGN KEY ("categoryId") REFERENCES "categories"(id),
	"clientId" INTEGER,
	FOREIGN KEY ("clientId") REFERENCES "user"(id)
);
CREATE TABLE "photos" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR(2500),
	"itemId" INTEGER,
	FOREIGN KEY ("itemId") REFERENCES "bookable_items"(id)
);
CREATE TABLE "renter_booking" (
	"id" SERIAL PRIMARY KEY,
	"startDate" DATE,
	"hours_book" INTEGER,
	"renterId" INTEGER,
	FOREIGN KEY ("renterId") REFERENCES "user"(id),
	"bookableId" INTEGER,
	FOREIGN KEY ("bookableId") REFERENCES "bookable_items"(id)
);

-- CLIENT LIST GET REQUEST SQL QUERY: 
		--GET REQUEST TO RETRIEVE ALL BOOKABLE ITEMS ACCORDING TO CLIENT ID--
--FOR CLIENT BOOKABLE ITEMS .JSX
SELECT 
"bookable_items"."title", 
"bookable_items"."summary", 
"bookable_items"."detail", 
"bookable_items"."rate", 
"bookable_items"."categoryId",
"bookable_items"."unitTime", 
"bookable_items"."location",
"categories"."name", 
"photos"."url",
"user"."email",
"user"."phoneNumber", 
"user"."companyName", 
"user"."address",
"user"."zipcode", 
"user"."websiteUrl"
FROM "bookable_items"
JOIN "categories" ON "categories"."id" = "bookable_items"."categoryId"
JOIN "photos" ON "photos"."itemId" = "bookable_items"."id"  
JOIN "user" ON "user".id ="bookable_items"."clientId" 
WHERE  "user"."id"= 5 ;
