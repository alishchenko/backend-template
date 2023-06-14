// TODO: write more explaining readme and add changelog + .env.example
// TODO: fix dependencies, not everything goes to dev

migrate create file 
db-migrate create file_name --sql-file --migrations-dir ./internal/assets/migrations

migrate up
 db-migrate up --migrations-dir ./internal/assets/migrations

migrate down
 db-migrate down --migrations-dir ./internal/assets/migrations

generate
 npx openapi-generator-cli generate \
    -i ./docs/web_deploy/openapi.yaml \
    -g typescript-fetch -o ./resources