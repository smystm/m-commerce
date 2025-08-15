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
    children?: React.ReactNode,   
}

function TabLable({id, txtSpan, children}: propsLbl) {
  return (
    <label className="flex group cursor-pointer text-center items-center py-4 px-0 focus:outline-none text-gray-600 dark:text-gray-300 peer-checked:text-black dark:peer-checked:text-white transition-all duration-300" htmlFor={id}>
        {children}
        <span className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 hover:dark:text-gray-300 group-peer-checked:text-gray-900 group-peer-checked:dark:text-gray-300 group-peer-checked:border-b-2 group-peer-border-gray-900 transition-colors duration-500">{txtSpan}</span> 
    </label>
  )
}

type propIn={
  id: string,
  isDefault?:boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function TabInput({id, isDefault,onChange}: propIn)  {
  return (
    <>
      { isDefault? 
      <input className="peer sr-only" type="radio" value={id} name="answer" id={id} defaultChecked onChange={onChange} />
        :
      <input className="peer sr-only" type="radio" value={id} name="answer" id={id} onChange={onChange} /> 
      }
    </>
  )
}

export {Tabox, Tab, TabLable, TabInput}