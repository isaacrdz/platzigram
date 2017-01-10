var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, + Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('port', (process.env.PORT || 5000));;
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/signup', function(req, res) {
    res.render('index');
});

app.get('/signin', function(req, res) {
    res.render('index');
});

app.get('/api/pictures', function(req,res,next){
  pictures = [
    {
      user:{
        username:"zackrdz",
        avatar:"https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c0.94.308.308/1918648_311187890598_6661099_n.jpg?oh=e6c4d792b8703c041fc40bebe3b02fef&oe=5920447D",
      },
      url:"http://materializecss.com/images/office.jpg",
      likes:0,
      liked:false,
      createdAt: new Date().getTime()
    },
    {
      user:{
        username:"kcamacho",
        avatar:"https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c0.94.308.308/1918648_311187890598_6661099_n.jpg?oh=e6c4d792b8703c041fc40bebe3b02fef&oe=5920447D",
      },
      url:"http://materializecss.com/images/office.jpg",
      likes:100,
      liked:true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    },
  ];

  res.send(pictures);



});

app.post('/api/pictures', function(req, res){
  upload(req, res, function(err){
    if(err){
      return res.send(500,"Error uploading file");
    }
    res.send("File uploaded");
  })
})

app.get('/api/user/:username', function(req,res){
  const user = {
    username:'zackrdz',
    avatar:'https://www.facebook.com/photo.php?fbid=311187890598&set=a.10150242222720599.512372.689510598&type=3&theater',
    pictures:[
      {
        id:1,
        src:'http://lorempixel.com/400/400/',
        likes:3
      },
      {
        id:2,
        src:'http://lorempixel.com/400/400/',
        likes:4
      },
      {
        id:3,
        src:'http://lorempixel.com/400/400/',
        likes:5
      }
    ]
  }
  res.send(user);
})

app.get('/:username', function(req,res){
  res.render('index', {title:`Platzigram - ${req.params.username}`})
})


app.listen(app.get('port'), function(err) {

    if (err) {
        return console.log("Hubo en error"), process.exit(1);
    } else {
        console.log('Node app is running on port', app.get('port'));
    }
});
