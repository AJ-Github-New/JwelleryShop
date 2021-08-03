import express from 'express';
import data from './data.js';
const app=express();
app.get('/',(req,res)=>{
    res.send('Server is running');
});
const port=process.env.PORT || 5000;
app.get('/api/earrings',(req,res)=>{
    res.send(data.earrings);
});
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`)
})
