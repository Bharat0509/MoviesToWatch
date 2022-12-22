const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const axios=require('axios');
const cors=require('cors')
const mongoose=require('mongoose');
const PORT=4001;
mongoose.connect('mongodb+srv://bharat:bharat@cluster0.mfnma.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('MongoDb connected!! ');
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
app.use(cors());

const TodoSchema=new mongoose.Schema(
    {
        title:String
    }
)
const Todo=new mongoose.model("Todo",TodoSchema);




app.post('/todo/new',async (req,res)=>{
    const todo= await Todo.create(req.body);
    console.log(todo);
    res.status(200).json({
        success:true,
        todo
    })
})



app.get('/',async (req,res)=>{
    const data=await Todo.find();
    res.send(data);
})

app.put('/:id',async(req,res)=>{
    let todo=await Todo.findById(req.params.id);
    if(todo){
       todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true,useFindAndModify:true,runValidator:true});
        res.status(200).json({
            success:true,
            todo
        })
    }
    else{
    res.status(500).json({
        success:false
    })
}
})

app.delete('/:id',async (req,res)=>{
    let todo=await Todo.findById(req.params.id);
    if(!todo){
        res.status(400).json({
            success:false
        })
    }
    else{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success:true,
            message:"deleted succusefully"
        })
    }
    
    

})












app.get('/admin',(req,res)=>{

    res.send("HELLO admin bharat");
})


app.listen(PORT,()=>{
    console.log(`server is runnign on http://localhost:4001/`);

})