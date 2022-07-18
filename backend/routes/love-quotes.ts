import express from "express";

const Love = express.Router();

Love.get('/love-quotes',function(req:any,res:any){
  res.send([
    {
      "id": "1",
      "content": "A friend is someone who knows all about you and still loves you.",
      "author": "Elbert Hubbard"
    },
    {
      "id": 2,
      "content": "It is better to be hated for what you are than to be loved for what you are not.",
      "author": "Andre Gide"
    },
    {
      "id": 3,
      "content": "Love all, trust a few, do wrong to none.",
      "author": "William Shakespeare"
    },
    {
      "id": 4,
      "content": "For small creatures such as we, the vastness is bearable only through love.",
      "author": "Carl Sagan"
    },
    {
      "id": 5,
      "content": "A friend is someone who knows all about you and still loves you.",
      "author": "Elbert Hubbard"
    },
    {
      "id": 6,
      "content": "There is no remedy for love, but to love more.",
      "author": "Thoreau"
    },
    {
      "id": 7,
      "content": "Love is composed of a single soul inhabiting two bodies.",
      "author": "Aristotle"
    },
    {
      "id": 8,
      "content": "Love is the only force capable of transforming an enemy into a friend.",
      "author": "Martin Luther King, Jr"
    },
    {
      "id": 9,
      "content": "Love is a gift of one's inner most soul to another so both can be whole.",
      "author": "Buddha"
    },
    {
      "id": 10,
      "content": "Love is a smoke and is made with the fume of sighs.",
      "author": "Romeo and Juliet"
    }
  ])
})

export default Love;