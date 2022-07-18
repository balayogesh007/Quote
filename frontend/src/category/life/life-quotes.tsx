import React, {useState, useEffect} from 'react';
import './life-quotes.css';

export interface IProps{
  id:number;
  content:string;
  author:string;
}
const LifeQuote : React.FC = () => {

const axios = require('axios');
const BASE_URL = process.env.REACT_APP_KEY;
const [quote, setQuote] = useState<IProps[]>([]);

const getLifeQuote = async () => {
 
    await axios.get(`${BASE_URL}/life-quotes`)
    .then((response:any) => {
      setQuote(response.data)
      console.log(response.data)}
    ).catch((e:Error) => console.log(e))
  }
  
  useEffect(() => {
    getLifeQuote();
  },[])

  return (
    <div className='life-parent-continer'>
      <div className='life-quotes-container'>
        {quote.map((value) => {
            return (
                <div key={value.id}>
                  <p>{value.content}</p>
                  <p className='author-name-life'>~ {value.author}</p>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LifeQuote;