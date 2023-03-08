import { useEffect, useState } from "react";
import "./inspiration-quotes.css";
import "../../styles/carousel.css";
import { IProps } from "../life/life-quotes";

const InspirationQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [inquote, setInquote] = useState<any>();
  const [indexValue, setIndexValue] = useState(1);

  const getInspirationalQuote = async () => {

     await axios.get(`${BASE_URL}/inspiration-quotes`)
     .then((response:any) => {
       setInquote(response.data)
       console.log(response.data)})
     .catch((e:Error) => console.log(e))
    }

  useEffect(() => {
    getInspirationalQuote();
  },[]);

  const firstIndex = {
      "id": "1",
      "content": "Be the change that you wish to see in the world.",
      "author": "Mahatma Gandhi"
    }

  const [display, setDisplay] = useState<any>(firstIndex);

  const nextQuote = (index: any) => {
    if (index > inquote.length-2) {
      index = 0;
      setIndexValue(index);
    }
    index = index + 1;
    setIndexValue(index);
    setDisplay(inquote[indexValue])
  }

  const previousQuote = (index: any) => {
    if (index < 1) {
      index = inquote.length;
      setIndexValue(index);
    }
    index = index - 1;
    setIndexValue(index);
    setDisplay(inquote[indexValue])
  }

  return(
    <div className="inspiration-parent-container">
      <div className="inspiration-quotes-container">
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

export default InspirationQuotes;
