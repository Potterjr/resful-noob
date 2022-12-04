DROP TABLE IF EXISTS book;

CREATE TABLE book(id INTEGER PRIMARY KEY,
                  created TIMESTAMP NOT NULL DEFAULT (datetime('now','localtime')),
                   title TEXT NOT NULL,
                   author TEXT NOT NULL
);