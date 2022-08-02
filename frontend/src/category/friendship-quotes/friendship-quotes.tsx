import { useEffect, useState } from "react";
import "./friendship-quotes.css";
import { IProps } from "../life/life-quotes";

const FriendshipQuotes = () => {
  const axios = require('axios');
  const BASE_URL = process.env.REACT_APP_KEY;
  const [friendquote, setFriendquote] = useState<Array<IProps>>([]);
  
  const getFriendshipQuote = async () => {
    
     await axios.get(`${BASE_URL}/friendship-quotes`)
     .then((response:any) => {
      setFriendquote(response.data)
       console.log(response.data)})
     .catch((e:Error) => console.log(e))
    }

  useEffect(() => {
    getFriendshipQuote();
  },[]);
  
  const nextQuote = () => {
    const fQuoteLength: number = friendquote.length;

    for(let i: number = 0; i < fQuoteLength; i++){
      return(
      <div key={i} className="hello" >
        <p>{friendquote[i].content}</p>
        <p>~ {friendquote[i].author}</p>
        {console.log(friendquote[i].author)}
      </div>
      )
    }
  }

  return(
    <div className="friend-parent-container">
      <div className="friend-quotes-container">
        {/* {friendquote.map((value) => {
          return (
            <div key={value.id}>
              <p>{value.content}</p>
              <p className='author-name-friend'>~ {value.author}</p>
            </div>
          )
        })} */}
        <div className="carousel-left-container"><span className="carousel-left"></span></div>
        <div className="carousel-right-container"><span className="carousel-right" onClick = {nextQuote}></span></div>
      </div>
    </div>
  )
}

export default FriendshipQuotes;