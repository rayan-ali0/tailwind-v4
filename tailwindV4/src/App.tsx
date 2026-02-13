import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MoonIcon, SunDimIcon } from '@phosphor-icons/react'
import Button from './components/Button';
import ButtonCVA from './components/button-cva';
import { Card } from './components/Card';
import { AccordionComp } from './components/shadcn-comp';

function App() {
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", theme === "dark");
  // }, [theme]);

  return (
    // <AccordionComp/>
   <div className=' flex flex-col gap-5 p-3'>
    <Card/>
   <div className='flex gap-5'>
     <Button variant="primary" disabled={true} size="md" onClick={()=>{alert("hi")}}>Click me</Button>
    <ButtonCVA variant="secondary" size="md" onClick={()=>{alert("hi")}} disabled={true}>Click me</ButtonCVA>

   </div>
   </div>

  )
}

export default App
