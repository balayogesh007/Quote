import { useEffect, useState } from "react";
import "./inspiration-quotes.css";
import { IProps } from "../life/life-quotes";

const InspirationQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [inquote, setInquote] = useState<Array<IProps>>([]);

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

  return(
    <div className="inspiration-parent-container">
      <div className="inspiration-quotes-container">
        {inquote.map((value) => {
          return (
            <div key={value.id}>
              <p>{value.content}</p>
              <p className="author-name-inspiration">~ {value.author}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InspirationQuotes;