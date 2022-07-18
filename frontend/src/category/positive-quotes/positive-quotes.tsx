import { useEffect, useState } from "react";
import "./positive-quotes.css";
import { IProps } from "../life/life-quotes";

const PositiveQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [positivequote, setPositivequote] = useState<Array<IProps>>([]);

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

  return(
    <div className="positive-parent-container">
      <div className="positive-quotes-container">
        {positivequote.map((value) => {
          return (
            <div key={value.id}>
              <p>{value.content}</p>
              <p className="author-name-positive">~ {value.author}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PositiveQuotes;