import {useState, useEffect} from 'react';
import ImageGrid from './ImageGrid';

function App() {

  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');
  
  useEffect(()=>{
      fetch(`https://pixabay.com/api/?key=21000134-d26cd58e00daa48072aa5436a&q=${term}`)
      .then(response => response.json())
      .then(data=> setImages(data))
  }, [term])

  return(
      <div className="home">
        <div>
          <h1>Maaya Codes</h1>
          <input type="search" onChange={(e)=>{setTerm(e.target.value)}}/>
        </div>
        <ImageGrid images={images}/>
      </div>
  )
}

export default App;
