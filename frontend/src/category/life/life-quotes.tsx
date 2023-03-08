import React, { useState, useEffect } from 'react';
import "../../styles/carousel.css";
import './life-quotes.css';

export interface IProps{
  id:number;
  content:string;
  author:string;
}
const LifeQuote = () => {

const axios = require('axios');
const BASE_URL = process.env.REACT_APP_KEY;
const [lifeQuote, setLifeQuote] = useState<IProps[]>([]);
  const [indexValue, setIndexValue] = useState(1);

const getLifeQuote = async () => {

    await axios.get(`${BASE_URL}/life-quotes`)
    .then((response:any) => {
      setLifeQuote(response.data)
      console.log(response.data)}
    ).catch((e:Error) => console.log(e))
  }

  useEffect(() => {
    getLifeQuote();
  }, [])

  const firstIndex = {
      "id": "1",
      "content": "The purpose of our lives is to be happy.",
      "author": "Dalai Lama"
  };

  const [display, setDisplay] = useState<any>(firstIndex);

    const nextQuote = (index: any) => {
    if (index > lifeQuote.length-2) {
      index = 0;
      setIndexValue(index);
    }
    index = index + 1;
    setIndexValue(index);
    setDisplay(lifeQuote[indexValue])
  }

  const previousQuote = (index: any) => {
    if (index < 1) {
      index = lifeQuote.length;
      setIndexValue(index);
    }
    index = index - 1;
    setIndexValue(index);
    setDisplay(lifeQuote[indexValue])
  }
  return (
    <div className='life-parent-continer'>
      <div className='life-quotes-container'>
        <span className="carousel-left-container" onClick = {() => previousQuote(indexValue)}><span className="carousel-left"></span></span>
          <div className="content-container">
            <div key={display?.id}>
              <p>{display?.content}</p>
              <p className="author-name">~ {display?.author}</p>
            </div>
          </div>
        <span className="carousel-right-container" onClick = {() => nextQuote(indexValue)}><span className="carousel-right"></span></span>
      </div>
    </div>
  )
}

export default LifeQuote;
