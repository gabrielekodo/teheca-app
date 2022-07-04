const mongoose=require('mongoose')


//connect mongoose
const db=()=>{
    mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
    const db = mongoose.connection;
    
    // Check connection
    db.once("open", function () {
      console.log("Connected to MongoDB");
    });
    
    // Check for db errors
    db.on("error", function (err) {
      console.error(err);
    });
}

module.exports=db