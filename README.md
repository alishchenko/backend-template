migrate create file 
db-migrate create file_name --sql-file --migrations-dir ./internal/assets/migrations

migrate up
 db-migrate up --migrations-dir ./internal/assets/migrations

migrate down
 db-migrate down --migrations-dir ./internal/assets/migrations