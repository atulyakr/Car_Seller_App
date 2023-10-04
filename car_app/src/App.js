import './App.css';
import Navbar from './components/nav';
import Cards from './components/card';
import carsdata from './carsdata';
import { useState } from 'react';


function App() {

  const cards = carsdata.map(item => {
    return (
        <Cards
            img={item.image}
            title={item.title}
            start_production={item.start_production}
            class={item.class}
        />
    )
  })
  console.log("hello ji")
  const [currentpage,setCurrentpage]=useState(3);
  const postsperpage=6;

  const indexlast=currentpage*postsperpage;
  const currentpost=cards.slice(indexlast,indexlast+postsperpage);
 
  return (
    <>
    <div>
      <Navbar/>
      <div className="App">
        {currentpost}
      </div>
      <div className='pagination'>
      <span>◀️</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>▶️</span>
      </div>
        
    </div>
    </>
  )
}

export default App;
