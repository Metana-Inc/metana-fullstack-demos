## Module 6 - PostgreSQL

Replace MongoDB with PostgreSQL in your app.

## Setup

1. Initialize Project
2. Remove MongoDB dependencies and configurations
3. Set up PostgreSQL Database
    - Install PostgreSQL natively or using Docker.
4. Install pgAdmin (Optional)
5. Install Node Postgres Library
    
    ```
    npm install pg
    ```
    
6. Setup Environment Variables
    - Add your PostgreSQL database connection details in `.env` file.
    
    ```
    DATABASE_URL=postgres://username:password@localhost:5432/yourdatabase
    ```


## Sections
- 6.01 - Update the dbconn.js file with PostgreSQL connection.
- 6.02 - Remove models folder, seedDb.js, old Mongo imports and any unused placeholder data, if it's not being used for data seeding.
- 6.03 - Write SQL statements to create tables in setup-db.sql file. In the scripts directory.
- 6.04 - In the scripts directory write a Node.js script to execute the setup-db.sql file, named initDb.js. Add `db:init` command in package.json.
- 6.05 - Create a seedDb.js script to seed the PostgreSQL db. Add `db:seed` command in package.json.
- 6.06 - Update endpoints to handle CRUD operations with PostgreSQL.
- 6.07 - Ensure that the server successfully connects to the PostgreSQL database before it starts listening for requests by calling db.connect() in an asynchronous function. Update the index.js.
- 6.08 - Handle graceful shutdown to close the database connection when the server is stopped.


