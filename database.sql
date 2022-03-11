
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


INSERT INTO "bookable_items" ("id", "title", "summary", "detail", "rate", "unitTime", "location", "categoryId","clientId") 
VALUES (1, 'Jetski', 'great for recreational activities', 'please bring life jackets, conditions may be dangerous', 12, 'hour', 'Minneapolis, MN', 4,5);

INSERT INTO "categories"("id","name","parentId")
VALUES
(3,E'Boat',1),
(4,E'Jetski',1),
(5,E'racecar',2),
(6,E'Waterskis',1),
(7,E'Tubing',1);

INSERT INTO "photos"("id","url","itemId")
VALUES
(3,E'https://cdn.boatinternational.com/files/2021/11/60349330-4d30-11ec-af96-71b11d1b029c-jetblaster.jpg',1),
(1,E'https://images.unsplash.com/photo-1533827432537-70133748f5c8',1),
(2,E'https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/halcyon-2918-065c753b10c15d2b3e1f7151c5abfe40@1x.jpg',1),
(4,E'https://eadn-wc04-279213.nxedge.io/cdn/pub/media/mageplaza/blog/post/p/s/psa-tubing-from-towers-cover.jpg',4),
(5,E'https://cdn.hswstatic.com/gif/water-skiing-10.jpg',3);



INSERT INTO "user"("id","firstName","lastName","username","password","email","phoneNumber","companyName","address","city","state","zipcode","websiteUrl","authLevel")
VALUES
(1,E'Opal',E'Nebulosa',E'opalthecat',E'$2a$10$ryhJ5t96YXGJaQDs1r94ROKP2mH2ZbPjQQIaBeAkbh1pmrC3YDMUS',E'opal@cat.com',E'715-355-0741',E'Cats',E'123 cats ave',E'Minneapolis',E'Minnesota',E'55406',E'cats.com',E'admin'),
(2,E'Opalita',E'Cat',E'opalthecat2',E'$2a$10$8PtI9D5pdjBmD/ZWbciFx.lHcZ4xyoGQnFqzl/IyDrcRlaH9Gt48m',E'opalita@cat.com',E'715-651-2771',E'opals',E'123 diamond ave',E'Minneapolis',E'Minnesota',E'54476',E'opals.com',E'renter'),
(4,E'Ruby',E'Tanager',E'rubythetanager',E'$2a$10$8Z3NXErUJK4WjJiQiML2Ueo/LuMsKrJqxcFk8gAW7wDqK16Ywct6W',E'ruby@tanager.com',E'612-651-2771',E'birds',E'123 birds ave',E'Minneapolis',E'Minnesota',E'55406',E'birdon.com',E'admin'),
(5,E'Emerald',E'Goshawk',E'emeraldthegoshawk',E'$2a$10$ru4F8ofccfMwF.am3bLmf.njzU4drPgFfPK7QLlBmdNrgn9FgiCI2',E'emerald@goshawk.com',E'651-212-3310',E'emeralds',E'123 emerald ave',E'Minneapolis',E'Minnesota',E'55414',E'emerald.com',E'client'),
(6,E'Rowan',E'Boaterson',E'client2',E'$2a$10$WojDFwGlAIeKruZXcFeXuu1J4MBpwZ6rWH/KT1mphF.w.zz3jAAUa',E'boatsandcats@gmail.com',E'715-444-2131',E'Rowboaterson',E'123 row your boat dr',E'Minneapolis',E'Minnesota',E'55406',E'rowanyourboat.com',E'client');


INSERT INTO "bookable_items"("id","title","summary","detail","rate","unitTime","location","categoryId","clientId")
VALUES
(1,E'Jetski',E'great for recreational activities',E'please bring life jackets, conditions may be dangerous',12,E'hour',E'Minneapolis, MN',4,5),
(2,E'row boat',E'the best freaking row boat you\'ve ever seen float by',E'please bring life jackets, conditions may be dangerous',100,E'day',E'Minneapolis, MN',3,6),
(3,E'WaterSkis',E'oh what fun it is to ski on the water',E'lifejackets required, helmets suggested, participation required',100,E'day',E'Minneapolis, MN',4,5),
(4,E'Tubing',E'nothing but so much fun ',E'2 people maximum',50,E'day',E'Minneapolis, MN',4,5),
(5,E'DONKEY BOAT',E'HAPPY STUFF',E'BRING YOUR KIDS',12,E'DAY',E'minneapolis, mn',4,6);