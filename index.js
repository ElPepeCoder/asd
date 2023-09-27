const fs = require('node:fs');
const express = require('express');
const app = express();
let { pages, redirects, errorPage } = require("./public/pages/config.json");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let ejs = require('ejs');
app.use("/assets", express.static(__dirname + '/public/assets'));

app.get('*', (req, res) => {
  let path = req.url.toLowerCase()
  if (redirects[path]) {
    return res.redirect(301, redirects[path]);
  }
  
  let opts = {
    "variable": "data"
  };

  ejs.renderFile(__dirname + "/public/pages/" + pages[path], req.file, {...opts}, (err, html) => {
    if (err){
      let error = err;
      ejs.renderFile(__dirname + "/public/pages/" + errorPage, req.file, {...opts}, (err, html) => {
        if (err){
          console.log(error);
          return res.send("Something went wrong!");
        }
        return res.send(html);
      })
    }
    
    return res.send(html);
  });
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})

/// npm run dev