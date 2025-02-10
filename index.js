const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send("hello world")
})

app.post('/login',(req,res)=>{
    const {username,password} = req.body
    if (!username)
    {
        return res.status(400).json({message:"username is required"});
    }
    if(!password)
    {
        return res.status(400).json({message:"password is required"});
    }
    if(password.length<8 || password.length >40)
    {
        return res.status(400).json({message:"password must be between 8 and 40 characters"})
    }
    return res.status(200).json({message:"server is running succesfully"})
})



app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
})