import { useEffect, useState } from "react";
import "./motivation-quotes.css";
import { IProps } from "../life/life-quotes";

const MotivationQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [moquote, setMoquote] = useState<Array<IProps>>([]);

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

  return(
    <div className="motivation-parent-container">
      <div className="motivation-quotes-container">
        {moquote.map((value) => {
          return (
            <div key={value.id}>
              <p>{value.content}</p>
              <p className="author-name-motivation">~ {value.author}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MotivationQuotes;