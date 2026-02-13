import React, { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import { MoonIcon, SunDimIcon } from '@phosphor-icons/react'
export const Card = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
    
  return (
  <div className='w-full message max-w-screen overflow-hidden m-0 p-4  gap-6 flex justify-between items-center flex-col'>
      {
        theme === "light" ?
          <MoonIcon size={32} fill="#000"
            onClick={() => setTheme("dark")}
          />
          :
          <SunDimIcon size={32} fill="#000"
            onClick={() => setTheme("light")}
          />

      }

      <div className="content w-(--w-card-sm) md:w-(--w-card-md) xl:w-(--w-card-xl) my-3 mx-auto flex items-center gap-4 rounded-xl bg-card p-card shadow-lg  outline-(--outline-color)  dark:shadow-none  ">
        <img className="size-12 shrink-0" src={viteLogo} alt="ChitChat Logo" />
        <div >
          <div className="text-xl font-medium text-text">ChitChat</div>
          <p className="text-text">You have a new message!</p>
        </div>
      </div>
    </div>
      )
}
