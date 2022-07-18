import { useEffect, useState } from "react";
import "./love-quotes.css";
import { IProps } from "../life/life-quotes";

const LoveQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [lovequote, setLovequote] = useState<Array<IProps>>([]);

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

  return(
    <div className="love-parent-container">
      <div className="love-quotes-container">
        {lovequote.map((value) => {
          return (
            <div key={value.id}>
              <p>{value.content}</p>
              <p className="author-name-love">~ {value.author}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default LoveQuotes;