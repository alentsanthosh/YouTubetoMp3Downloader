import { useRef, useState } from "react";
import axios from "axios";
import './App.css'
import youtube_parser from "./Youtubeid";

function App ()
{
 const urlref = useRef();
 const [url,setUrl] = useState(null);
 const handleSubmit = (e) =>
 {
  e.preventDefault()

const youtubeID = youtube_parser(urlref.current.value) ;
console.log(youtubeID)

 const options =  {
method :'get',
url : 'https://youtube-mp36.p.rapidapi.com/dl',
headers : {
  'X-RapidAPI-Key': '631c42854cmsh02e3c92aa1b9c2ep11deacjsn9c342ca70906',
  'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
},
params : {
  id : youtubeID
}
}
 axios(options)
 .then(res =>setUrl(res.data.link))
 .catch(err => console.log(err))
urlref.current.value = '' ; 
}
 return(
<div className="Head">
  <span className="Span">Youtube MP3 Downloader</span>
<section className="Header">
  <h1 className="Title">Youtube MP3 Download Online</h1>
<p className="Para">Download your favourite mp3 free from youtube</p>
<br/>
<form onSubmit={handleSubmit} className="Forms">
  <input className="Form" ref={urlref} type = "text" placeholder="paste your youtube video link here"></input>
  <button className ="Button" type="submit" value ="Submit">search</button>

  

</form>
{url ?   <a href={url} rel ="noreferrer" target='_blank' className="Link">Download </a> : ''}


</section>
   </div>
 )
}

export default App;
