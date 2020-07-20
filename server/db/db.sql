CREATE TABLE sites (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR (100) NOT NULL,
    price_range INT NOT NULL check(price_range >= 1 and price_range <= 5)
);

CREATE TABLE reviews(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    site_id BIGINT NOT NULL REFERENCES sites(id),
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);