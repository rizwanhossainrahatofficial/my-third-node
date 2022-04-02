const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors())
app.use(express.json()); 
const port=5000;

const users=[
    {id:0,name:'korim',email:'karim@gmail.com',phone:'11024544a'},
    {id:1,name:'solim',email:'solim@gmail.com',phone:'11024544a'},
    {id:2,name:'molim',email:'molim@gmail.com',phone:'11024544a'},
    {id:3,name:'olim',email:'olim@gmail.com',phone:'11024544a'},
    {id:4,name:'alim',email:'alim@gmail.com',phone:'11024544a'},
]


// react application thake data pawar jonno post korte hobe

app.post('/users',(req,res)=>{
     const newUsers=req.body;
     newUsers.id=users.length;
     users.push=newUsers;
    res.json(newUsers);
        console.log('hitting the post',req.body);
    // res.send(JSON.stringify(newUsers))
})

// react application thake data pathanor jonno post korte hobe
app.get('/users',(req,res)=>{
   const search=req.query.search;
   if(search){
       const searchResult=users.filter(user=>user.name.toLocaleLowerCase().includes(search));
       res.send(searchResult);
   }
   else{
    res.send(users)
   }
        
})

// dynamic api
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id]
    res.send(user)
    console.log(req.params.id)
})

app.get('/fruits',(req,res)=>{
    res.send('fol lage na valo')
})

app.get('/fruits/magoes/rupali',(req,res)=>{
    res.send('moja am')
})

app.get('/',(req,res)=>{
    res.send('this is my third node im exciting wow!')
})

app.listen(port,()=>{
    console.log('listening port',port)
})