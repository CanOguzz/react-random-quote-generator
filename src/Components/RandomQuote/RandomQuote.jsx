import React, {useState}from 'react'
import './RandomQuote.css'
import twitter_icon from '../Assets/twittericon.png'
import reflesh_icon from '../Assets/refleshicon.png'

export const RandomQuote = () => {

    let quotes=[]

    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json()
    }

    

    const [quote, setQuote] = useState({
        text:"Peace at Home, Peace in the World",
        author:"MUSTAFA KEMAL ATATURK"
    });  

    const random =() => {  
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select)
    }
    
    loadQuotes()

    return (

   
    <div id="quote-box">
        <div id="text">"{quote.text}"</div>
        <div>
            <div className='line'></div>
            <div className='bottom'> 
            <div id="author">- {quote.author.split(",")[0]}</div>
            <button type="button" id="new-quote">
                <img src={reflesh_icon} alt='refleshimg' onClick={()=>{random()}}></img>
                <a id="tweet-quote" href='https://twitter.com/intent/tweet'>{<img src={twitter_icon} alt=''></img>}</a>
            </button>
            </div>
        </div>
    </div>
  )
}
