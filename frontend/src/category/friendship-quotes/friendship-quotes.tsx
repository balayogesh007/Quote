import { useEffect, useState } from "react";
import "./friendship-quotes.css";
import { IProps } from "../life/life-quotes";

const FriendshipQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [friendquote, setFriendquote] = useState<any>();
  const [indexValue, setIndexValue] = useState(1);
  const getFriendshipQuote = async () => {

    await axios.get(`${BASE_URL}/friendship-quotes`)
      .then((response: any) => {
        setFriendquote(response.data)
        console.log(response.data)
      })
      .catch((e: Error) => {
        console.log(e);
        throw new Error(e.message)
      })
    }

  useEffect(() => {
    getFriendshipQuote();
  },[]);

  const firstIndex =     {
      "id": "1",
      "content": "Don’t make friends who are comfortable to be with. Make friends who will force you to lever yourself up.",
      "author": "Thomas J. Watson"
    }
  const [display, setDisplay] = useState<any>(firstIndex);

  const nextQuote = (index: any) => {
    if (index > friendquote.length-2) {
      index = 0;
      setIndexValue(index);
    }
    index = index + 1;
    setIndexValue(index);
    setDisplay(friendquote[indexValue])
  }

  const previousQuote = (index: any) => {
    if (index < 1) {
      index = friendquote.length;
      setIndexValue(index);
    }
    index = index - 1;
    setIndexValue(index);
    setDisplay(friendquote[indexValue])
  }

  return(
    <div className="friend-parent-container">
      <div className="friend-quotes-container">
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

export default FriendshipQuotes;
