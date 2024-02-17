import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value1,setvalue1] = useState(0);
const [value2,setvalue2] = useState(0);
  useEffect(()=>{ 
    console.log('Component runs once when first called');
  },[])  
  useEffect(()=>{ 
    console.log('It is called whenever the state changes;');
  })  
  useEffect(()=>{ 
    console.log('Called when component is first called and value1 changes');
  },[value1])  

  return (
    <div className='App'> 
        <div className='firstDiv'> 
        <button onClick={()=>setvalue1(value1+1)}>Increase(Value1)</button> 
        <div>Value1 : {value1} </div>
        </div> 
        <div className='secondDiv'> 
        <button onClick={()=>setvalue2(value2+1)}>Increase(Value2)</button> 
        <div>Value2 : {value2} </div>
        </div>
    </div> 
    
  )
}

export default App
