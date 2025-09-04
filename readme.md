# Interview Tasks App

This is a simple application for POST request in the backend that uses typescript with express.

## Features

- input and output schemas
- input validation using Ajv
- a mock generator
- Task review and feedback

## Scripts
For development use ```npm run dev```

For production ready use ```npm run build``` and ```npm run start```

## Getting Started

1. clone the repository.
2. Install dependencies:  
    ```sudo apt install npm
    npm init -y
    npm install express cors ajv
    npm install --save-dev typescript ts-node @types/node @types/express
    npx tsc --init
    ```

Note: for running you might need to give permission for the scripts, on linux use the command chmod +rwx "script_name"
3. Start the application:  
    in a terminal run the following
    ```./run_server.sh
    
    # to test out a correct post request (code 200)
    
    ./run_correct.sh
    
    # to test an incorrect post request (code 400)
    
    ./run_incorrect.sh
    ```

https://github.com/user-attachments/assets/27776376-bb4c-47ca-9ceb-ce76191fa141

<img width="895" height="112" alt="image" src="https://github.com/user-attachments/assets/fd08b2b3-ddb6-4d6a-8ea3-858f5906ae67" />
