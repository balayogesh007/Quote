import { useEffect, useState } from "react";
import "./love-quotes.css";
import "../../styles/carousel.css";
import { IProps } from "../life/life-quotes";

const LoveQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [lovequote, setLovequote] = useState<Array<IProps>>([]);
  const [indexValue, setIndexValue] = useState(1);

  const getLoveQuote = async () => {

     await axios.get(`${BASE_URL}/love-quotes`)
     .then((response:any) => {
      setLovequote(response.data)
       console.log(response.data)})
     .catch((e:Error) => console.log(e))
    }

  useEffect(() => {
    getLoveQuote();
  },[]);
    const firstIndex = {
      "id": "1",
      "content": "A friend is someone who knows all about you and still loves you.",
      "author": "Elbert Hubbard"
    };
    const [display, setDisplay] = useState<any>(firstIndex);

    const nextQuote = (index: any) => {
    if (index > lovequote.length-2) {
      index = 0;
      setIndexValue(index);
    }
    index = index + 1;
    setIndexValue(index);
    setDisplay(lovequote[indexValue])
  }

  const previousQuote = (index: any) => {
    if (index < 1) {
      index = lovequote.length;
      setIndexValue(index);
    }
    index = index - 1;
    setIndexValue(index);
    setDisplay(lovequote[indexValue])
  }
  return(
    <div className="love-parent-container">
      <div className="love-quotes-container">
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

export default LoveQuotes;
