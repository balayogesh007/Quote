import { useEffect, useState } from "react";
import "./motivation-quotes.css";
import "../../styles/carousel.css";
import { IProps } from "../life/life-quotes";

const MotivationQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [moquote, setMoquote] = useState<Array<IProps>>([]);
  const [indexValue, setIndexValue] = useState(1);

  const getMotivationalQuote = async () => {

     await axios.get(`${BASE_URL}/motivational-quotes`)
     .then((response:any) => {
       setMoquote(response.data)
       console.log(response.data)})
     .catch((e:Error) => console.log(e))
    }

  useEffect(() => {
    getMotivationalQuote();
  },[]);

    const firstIndex = {
      "id": "1",
      "content": "All our dreams can come true, if we have the courage to pursue them.",
      "author": "Walt Disney"
    };
    const [display, setDisplay] = useState<any>(firstIndex);

    const nextQuote = (index: any) => {
    if (index > moquote.length-2) {
      index = 0;
      setIndexValue(index);
    }
    index = index + 1;
    setIndexValue(index);
    setDisplay(moquote[indexValue])
  }

  const previousQuote = (index: any) => {
    if (index < 1) {
      index = moquote.length;
      setIndexValue(index);
    }
    index = index - 1;
    setIndexValue(index);
    setDisplay(moquote[indexValue])
  }
  return(
    <div className="motivation-parent-container">
      <div className="motivation-quotes-container">
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

export default MotivationQuotes;
