import {useState, useEffect} from 'react';
import ImageGrid from './ImageGrid';
import './App.css';

function App() {

  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value)
  }
  
  useEffect(()=>{
      fetch(`https://pixabay.com/api/?key=21000134-d26cd58e00daa48072aa5436a&q=${term}`)
      .then(response => response.json())
      .then(data=> setImages(data.hits))
  }, [term])


  return(
      <div className="home">
          <nav>
            <div className="nav-wrapper">
              <span className="brand-logo left">Maaya</span>
              <ul className="right">
                <form>
                  <div className="input-field">
                    <input id="search" type="search" onChange={handleChange} required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                  </div>
                </form>
              </ul>
            </div>
          </nav>
        <ImageGrid images={images} />
      </div>
  )
}

export default App;
