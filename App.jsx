import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './customer/components/navigation/navigation'
import Homepage from './customer/Pages/Homepage/Homepage'
// import HomeCard from './customer/components/cards/HomeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=""> <Navigation/>
    <div ><Homepage/></div>
    {/* className='space-y-10 py-20' */}
    </div>
  );
}
// className='h-[10rem] w-[70rem]' 

export default App

// <div className="div">TEXT HERe</div>
//     <div className="section"> SEC1 </div>
//     <div className="SECTION"> SAEC2</div>
