import {Client} from "pg";

const client =new Client({
   connectionString: "postgresql://nitesh8174:Xga0ktWB7MPf@ep-green-pond-a14pwftj.ap-southeast-1.aws.neon.tech/Nitesh?sslmode=require"
})
async function connect(){
   await client.connect();
}

connect();
async function createUsersTable() {
   
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// createUsersTable();

//crud;
//1.insert

async function insertData(username:string,email:string,password:string){
    const querry= `INSERT INTO users (username, email, password) 
    VALUES ($1, $2,$3 )`;
    const value=[username,email,password];
   const result=await client.query(querry,value);
   console.log(result);
}
insertData("tushar","tushar@gmail.com","123456");
