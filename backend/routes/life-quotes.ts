import express from "express";

const Life = express.Router();

Life.get('/life-quotes',function(req:any,res:any){
  res.send([
    {
      "id": "1",
      "content": "The purpose of our lives is to be happy.",
      "author": "Dalai Lama"
    },
    {
      "id": 2,
      "content": "Life is what happens when you are busy making other plans.",
      "author": "John Lennon"
    },
    {
      "id": 3,
      "content": "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
      "author": "Thomas A. Edison"
    },
    {
      "id": 4,
      "content": "If you want to live a happy life, tie it to a goal, not to people or things.",
      "author": "Albert Einstein"
    },
    {
      "id": 5,
      "content": "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
      "author": "Henry Ford"
    },
    {
      "id": 6,
      "content": "The unexamined life is not worth living.",
      "author": "Socrates"
    },
    {
      "id": 7,
      "content": "Life is a succession of lessons which must be lived to be understood.",
      "author": "Helen Keller"
    },
    {
      "id": 8,
      "content": "Life would be tragic if it weren’t funny.",
      "author": "Stephen Hawking"
    },
    {
      "id": 9,
      "content": "The best way to predict your future is to create it.",
      "author": "Abraham Lincoln"
    },
    {
      "id": 10,
      "content": "Life’s tragedy is that we get old too soon and wise too late.",
      "author": "Benjamin Franklin"
    }
  ])
})

export default Life;