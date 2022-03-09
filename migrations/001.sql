CREATE TABLE orders (
    id integer primary key autoincrement,
    firstName varchar(64),
    lastName varchar(64),
    email varchar(32),
    country varchar(8),
    street varchar(32),
    city varchar(32),
    state varchar(32),
    zip varchar(16),
    items text
);

CREATE TABLE products (
  id integer primary key autoincrement,
  name varchar(16),
  price float,
  imageSrc varchar(128),
  imageAlt varchar(64),
  color varchar(16),
  description varchar(256),
  highlights varchar(256),
  details varchar(256),
  reviewAverage float,
  reviewCount integer
);

INSERT INTO products (id, name, price, imageSrc, imageAlt, color, description, highlights, details, reviewAverage, reviewCount) VALUES
(1, 'Basic Tee', 35, 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg', 'Basic Tee in black', 'Black', 'The Basic Tee 6-Pack allows you to fully express your vibrant personality', 'Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton', 'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.', 4, 117),
(2, 'Basic Tee', 35, 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg', 'Basic Tee in Aspen White', 'Aspen White', 'The Basic Tee allows you to fully express your vibrant personality', 'Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton', 'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.', 5, 23),
(3, 'Basic Tee', 35, 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg', 'Basic Tee in Charcoal', 'Charcoal', 'The Basic Tee allows you to fully express your vibrant personality', 'Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton', 'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.', 3, 227),
(4, 'Artwork Tee', 45, 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg', 'The iconic Iso Dots Artwork Tee', 'Iso Dots', 'The Basic Tee allows you to fully express your vibrant personality', 'Hand cut and sewn locally,Dyed with our proprietary colors,Pre-washed & pre-shrunk,Ultra-soft 100% cotton', 'The shirt should be washed cold. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.', 4, 17);
