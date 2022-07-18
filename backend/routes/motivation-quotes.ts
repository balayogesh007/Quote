import express from "express";
const Motivation = express.Router();

Motivation.get('/motivational-quotes',function(req:any, res:any){
  res.send([
    {
      "id": "1",
      "content": "All our dreams can come true, if we have the courage to pursue them.",
      "author": "Walt Disney"
    },
    {
      "id": 2,
      "content": "All our dreams can come true, if we have the courage to pursue them.",
      "author": "Joss Whedon"
    },
    {
      "id": 3,
      "content": "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
      "author": "Neil Gaiman"
    },
    {
      "id": 4,
      "content": "Happiness is not something ready made. It comes from your own actions.",
      "author": "Dalai Lama XIV"
    },
    {
      "id": 5,
      "content": "If something is important enough, even if the odds are stacked against you, you should still do it.",
      "author": "Elon Musk"
    },
    {
      "id": 6,
      "content": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      "author": "Aristotle"
    },
    {
      "id": 7,
      "content": "Leaders can let you fail and yet not let you be a failure.",
      "author": "Stanley"
    },
    {
      "id": 8,
      "content": "Anything that makes you weak physically, intellectually and spritually, reject as poison.",
      "author": "Swami Vivekananda"
    },
    {
      "id": 9,
      "content": "None can destroy iron, but its own rust can! Likewise, none can destroy a person, but its own mindset can.",
      "author": "Ratan Tata"
    },
    {
      "id": 10,
      "content": "It’s never too late to be what you might’ve been.",
      "author": "George Eliot"
    }
  ])
});

export default Motivation;