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
- 6.1 - Update the dbconn.js file with PostgreSQL connection.
- 6.2 - Remove the old Mongo imports and any unused placeholder data including models.
- 6.4 - Update seedDb script to seed the PostgreSQL db.
- 6.5 - Update models to use PostgreSQL.
- 6.6 - Update endpoints to handle CRUD operations with PostgreSQL.


