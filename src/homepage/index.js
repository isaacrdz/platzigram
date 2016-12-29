var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next){
  title('Platzigram')
  var main = document.getElementById('main-container');

  pictures = [
    {
      user:{
        username:"zackrdz",
        avatar:"https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c0.94.308.308/1918648_311187890598_6661099_n.jpg?oh=e6c4d792b8703c041fc40bebe3b02fef&oe=5920447D",
      },
      url:"http://materializecss.com/images/office.jpg",
      likes:125,
      liked:true,
      createdAt: new Date()
    },
    {
      user:{
        username:"zackrdz",
        avatar:"https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-1/c0.94.308.308/1918648_311187890598_6661099_n.jpg?oh=e6c4d792b8703c041fc40bebe3b02fef&oe=5920447D",
      },
      url:"http://materializecss.com/images/office.jpg",
      likes:1234,
      liked:true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    },
  ];
  empty(main).appendChild(template(pictures));
})
