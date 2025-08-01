import React from 'react'

type props={
    children:React.ReactNode,
    className:string
}


function Tabox({children, className}: props) {
  return (
    <div className={`${className} absolute left-[50%] translate-x-[-50%] p-6 mt-8 rounded-lg transition-all duration-300 ease-in-out opacity-0 invisible peer-checked:opacity-100 peer-checked:visible`}>
      {children}
    </div>
  )
}


type propstbs={
  children: React.ReactNode,   
}

function Tab({children}: propstbs) {
  return (
    <div className='flex items-center justify-center mt-4'>
      {children}
    </div>
  )
}


type propsLbl={
    id:string,
    txtSpan:string,
    children: React.ReactNode,   
}

function TabLable({id, txtSpan, children}: propsLbl) {
  return (
    <label className="flex justify-center cursor-pointer rounded-2xl flex-col text-center items-center py-4 px-4 focus:outline-none border-1 border-transparent text-gray-600 dark:text-gray-300 peer-checked:border-1 peer-checked:border-[#794B89] dark:peer-checked:border-transparent dark:peer-checked:bg-[#2c40ff26] peer-checked:text-[#794B89] dark:peer-checked:text-[#a78bfa] transition-all duration-300 ease-in-out" htmlFor={id}>
        {children}
        <span className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-700 dark:text-gray-200">{txtSpan}</span> 
    </label>
  )
}

type propIn={
  id: string,
  isDefault?:boolean
}

function TabInput({id, isDefault}: propIn)  {
  return (
    <>
      { isDefault? 
      <input className="peer sr-only" type="radio" value={id} name="answer" id={id} defaultChecked />
        :
      <input className="peer sr-only" type="radio" value={id} name="answer" id={id} /> 
      }
    </>
  )
}

export {Tabox, Tab, TabLable, TabInput}