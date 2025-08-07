"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

type props={
    className: string
    classText?: string
    children?: React.ReactNode
    name: string
    choose: string
    send: string
    type?: "button" | "submit" | "reset" | undefined
}

function Clicked(get:string, choose:string){
    const router = useRouter()
    return ()=>{
      switch(choose){
        case 'push':
          router.push(`/${get}`)
          break
        default:
          break
      }       
    }
}

export default function Button({className, classText, children, name, send, choose, type}:props) {
  return (
    <button className={className} type={type?? 'button'} onClick={Clicked(send,choose)}>
        <span className={classText}>{name}</span>
        {children}
    </button>
  )
}
