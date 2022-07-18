import express from 'express';
import cors from 'cors';
import Friendship from './routes/friendship-quotes';
import Inspiration from './routes/inspiration-quotes';
import Life from './routes/life-quotes';
import Love from './routes/love-quotes';
import Motivation from './routes/motivation-quotes';
import Positive from './routes/positive-quotes';


const app = express();

app.use(cors());

app.get('/inspiration-quotes', Inspiration);
app.get('/life-quotes', Life);
app.get('/motivational-quotes', Motivation);
app.get('/love-quotes', Love);
app.get('/positive-quotes', Positive);
app.get('/friendship-quotes', Friendship)

const PORT = 5000;

app.listen(PORT, async ()=> {
  try{
  console.log('Server is running');
  }
  catch(e){
  console.log(e);
  }
})
