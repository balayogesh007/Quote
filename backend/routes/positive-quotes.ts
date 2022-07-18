import express from "express";
var Positive = express.Router();

Positive.get('/positive-quotes',function(req:any,res:any){
  res.send([
    {
      "id": "1",
      "content": "Be mindful. Be grateful. Be positive. Be true. Be kind.",
      "author": "Roy T. Bennett"
    },
    {
      "id": 2,
      "content": "You can, you should, and if you’re brave enough to start, you will. ",
      "author": "Stephen King"
    },
    {
      "id": 3,
      "content": "Being positive is a sign of intelligence.",
      "author": "Maxime Lagacé"
    },
    {
      "id": 4,
      "content": "I am thankful to all who said no to me. It is because of them that I’m doing it myself.",
      "author": "Albert Einstein"
    },
    {
      "id": 5,
      "content": "With the new day comes new strength and new thoughts.",
      "author": "Eleanor Roosevelt"
    },
    {
      "id": 6,
      "content": "Write it on your heart that every day is the best day in the year.",
      "author": "Ralph Waldo Emerson"
    },
    {
      "id": 7,
      "content": "No one is perfect - that’s why pencils have erasers.",
      "author": "AWolfgang Riebe"
    },
    {
      "id": 8,
      "content": "Hate comes from intimidation, love comes from appreciation.",
      "author": "Tyga"
    },
    {
      "id": 9,
      "content": "Hard work keeps the wrinkles out of the mind and spirit.",
      "author": "Helena Rubinstein"
    },
    {
      "id": 10,
      "content": "Happiness is the only thing that multiplies when you share it.",
      "author": "Albert Schweitzer"
    }
  ])
})

export default Positive;