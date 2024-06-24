## Module 6 - PostgreSQL

Replace MongoDB with PostgreSQL in your app.

## Setup

1. Initialize Project
2. Set up PostgreSQL Database
    - Install PostgreSQL natively or using Docker.
3. Install pgAdmin (Optional)
4. Install Node Postgres Library
    
    ```
    npm install pg
    ```
    
5. Setup Environment Variables**
    - Add your postgresql database connection details in `.env` file.
    
    ```
    DATABASE_URL=postgres://username:password@localhost:5432/yourdatabase
    ```
    

## Sections
- 6.1 - Update the dbconn.js file with PostgreSQL connection.
