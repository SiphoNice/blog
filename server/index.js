const express = require("express"); 
const app = express();
app.use(express.json());
const db = require('./models');

// using Router as a middleware
const postRouter = require('./routes/posts');
app.use("/posts", postRouter);

//By doing this you checking if all tables created on the models exits, if not create the table on the database
db.sequelize.sync().then(()=>{
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
      });
});



