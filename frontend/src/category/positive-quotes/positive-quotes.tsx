import { useEffect, useState } from "react";
import "./positive-quotes.css";
import "../../styles/carousel.css";
import { IProps } from "../life/life-quotes";

const PositiveQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [positivequote, setPositivequote] = useState<Array<IProps>>([]);
  const [indexValue, setIndexValue] = useState(1);

  const getPositiveQuote = async () => {

     await axios.get(`${BASE_URL}/positive-quotes`)
     .then((response:any) => {
      setPositivequote(response.data)
       console.log(response.data)})
     .catch((e:Error) => console.log(e))
    }

  useEffect(() => {
    getPositiveQuote();
  },[]);

    const firstIndex = {
      "id": "1",
      "content": "Be mindful. Be grateful. Be positive. Be true. Be kind.",
      "author": "Roy T. Bennett"
    };
    const [display, setDisplay] = useState<any>(firstIndex);

    const nextQuote = (index: any) => {
    if (index > positivequote.length-2) {
      index = 0;
      setIndexValue(index);
    }
    index = index + 1;
    setIndexValue(index);
    setDisplay(positivequote[indexValue])
  }

  const previousQuote = (index: any) => {
    if (index < 1) {
      index = positivequote.length;
      setIndexValue(index);
    }
    index = index - 1;
    setIndexValue(index);
    setDisplay(positivequote[indexValue])
  }

  return(
    <div className="positive-parent-container">
      <div className="positive-quotes-container">
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

export default PositiveQuotes;
