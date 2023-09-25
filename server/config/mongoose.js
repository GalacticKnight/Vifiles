const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://vincentlaucs:Synthesis716411@clusterrepository.zx1h7u6.mongodb.net/test',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( ()=>console.log('Got a db!') )
    .catch( err=>console.log("Beep! Bad db! " + err) )