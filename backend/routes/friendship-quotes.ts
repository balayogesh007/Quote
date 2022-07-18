import express from "express";

const Friendship = express.Router();

Friendship.get('/friendship-quotes',function(req:any,res:any){
  res.send([
    {
      "id": "1",
      "content": "Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.",
      "author": "Thomas J. Watson"
    },
    {
      "id": 2,
      "content": "A real friend is one who walks in when the rest of the world walks out.",
      "author": "Walter Winchell"
    },
    {
      "id": 3,
      "content": "To the world you may be just one person, but to one person you may be the world.",
      "author": "Dr. Seuss"
    },
    {
      "id": 4,
      "content": "A friend is one of the best things you can be and the greatest things you can have.",
      "author": "Sarah Valdez"
    },
    {
      "id": 5,
      "content": "I would rather walk with a friend in the dark, than alone in the light.",
      "author": "Helen Keller"
    },
    {
      "id": 6,
      "content": "A true friend never gets in your way unless you happen to be going down.",
      "author": "Arnold H. Glasgow"
    },
    {
      "id": 7,
      "content": "Friendship is always a sweet responsibility, never an opportunity.",
      "author": "Khalil Gibran"
    },
    {
      "id": 8,
      "content": "My best friend is the man who in wishing me well wishes it for my sake.",
      "author": "Aristotle"
    },
    {
      "id": 9,
      "content": "Every new friend is a new adventure… the start of more memories.",
      "author": "Patrick Lindsay"
    },
    {
      "id": 10,
      "content": "My best friend is the one who brings out the best in me.",
      "author": "Henry Ford"
    }
  ])
})

export default Friendship;