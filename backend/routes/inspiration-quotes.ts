import express from "express";

const Inspiration = express.Router();


Inspiration.get('/inspiration-quotes',function(req:any,res:any){
  res.send([
    {
      "id": "1",
      "content": "Be the change that you wish to see in the world.",
      "author": "Mahatma Gandhi"
    },
    {
      "id": 2,
      "content": "I have not failed. I've just found 10,000 ways that won't work.",
      "author": "Thomas A. Edison"
    },
    {
      "id": 3,
      "content": "Life isn't about finding yourself. Life is about creating yourself.",
      "author": "George Bernard Shaw"
    },
    {
      "id": 4,
      "content": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      "author": "Winston S. Churchill"
    },
    {
      "id": 5,
      "content": "If I cannot do great things, I can do small things in a great way.",
      "author": "Martin Luther King Jr"
    },
    {
      "id": 6,
      "content": "The only limit to our realization of tomorrow will be our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "id": 7,
      "content": "Someone is sitting in the shade today because someone planted a tree a long time ago.",
      "author": "Warren Buffet"
    },
    {
      "id": 8,
      "content": "Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
      "author": "Swami Vivekananda"
    },
    {
      "id": 9,
      "content": "We know what we are, but know not what we may be.",
      "author": "William Shakespeare"
    },
    {
      "id": 10,
      "content": "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.",
      "author": "Ralph Waldo Emerson"
    }
  ])
});

export default Inspiration;