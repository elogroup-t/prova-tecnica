var express  =  require("express");
var bodyParser  =  require("body-parser");
var app  =  express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static((__dirname,'public')));


app.get('/',function(req,res){
  res.sendfile("indexfinal.html");
});


app.post('/dados',function(req,res){

  var conteudo = JSON.stringify(req.body);
  console.log(conteudo);

  res.redirect('/');

});



app.listen(8080,function(){
  console.log("Started on PORT 8080");
})
