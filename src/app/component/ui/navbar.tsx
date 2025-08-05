'use client'
import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopHeaderVisible, setDesktopHeaderVisible] = useState(true);
  const [mobileHeaderVisible, setMobileHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);


  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setDesktopHeaderVisible(false);
        setMobileHeaderVisible(false);
      } else {
        setDesktopHeaderVisible(true);
        setMobileHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <>
      <header className="w-full max-w-[1640px] sticky flex flex-col justify-center items-center py-10 md:py-11 lg:py-10 mx-auto header transition-all duration-300 z-30">
        <div className={`w-full fixed top-0 left-[50%] translate-x-[-50%] lg:flex desktop-header h-[74px] bg-[#ffffffed] dark:bg-[#323948d5] flex-row justify-center items-center shadow-[0px_4px_4px_0px_#0000000D] transition-transform duration-300 ${desktopHeaderVisible ? 'translate-y-0' : '-translate-y-[100px]'}`}>
          <div className='w-full max-w-[1640px] flex flex-row justify-between items-center px-3'>
            <div className="logo-and-menu flex gap-2 items-center flex-row p-1">
              <div className="logo w-[84px]">
                <img className="w-full" src="assets/img/NewLogo 1.png" alt="SEO" />
              </div>
              <div className="p-menu">
                <ul className="menu flex gap-5">
                  <a className="no-underline text-[#242424]" href="#">
                    <li className="list-none dark:text-white flex items-center gap-1 text">
                      دوره ها
                      <svg className="dark:stroke-white stroke-gray-700" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6.88384 5.11616C6.39773 5.60227 5.60227 5.60227 5.11616 5.11616L1 1" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </li>
                  </a>
                  <a className="no-underline text-[#242424] btn-menu" href="#">
                    <li className="list-none dark:text-white relative group flex items-center gap-1 text">
                      دوره ها
                      <svg className="dark:stroke-white stroke-gray-700" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6.88384 5.11616C6.39773 5.60227 5.60227 5.60227 5.11616 5.11616L1 1" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <ul className="opacity-0 invisible rounded-[10px] inset-0 group-hover:opacity-100 group-hover:visible absolute w-[100px] h-[200px] transition-all ease-in-out dark:bg-[#111827] bg-[#e7e7e7] top-7 p-3 text-center">
                        <li className="list-none m-2 dark:text-white">زیر منو</li>
                        <li className="list-none m-2 dark:text-white">زیر منو</li>
                        <li className="list-none m-2 dark:text-white">زیر منو</li>
                        <li className="list-none m-2 dark:text-white">زیر منو</li>
                      </ul>
                    </li>
                  </a>
                  <a className="no-underline text-[#242424]" href="#">
                    <li className="list-none dark:text-white flex items-center gap-1 text">
                      دوره ها
                      <svg className="dark:stroke-white stroke-gray-700" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6.88384 5.11616C6.39773 5.60227 5.60227 5.60227 5.11616 5.11616L1 1" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </li>
                  </a>
                  <a className="no-underline text-[#242424]" href="#">
                    <li className="list-none dark:text-white flex items-center gap-1 text">
                      دوره ها
                      <svg className="dark:stroke-white stroke-gray-700" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6.88384 5.11616C6.39773 5.60227 5.60227 5.60227 5.11616 5.11616L1 1" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </li>
                  </a>
                  <a className="no-underline text-[#242424]" href="#">
                    <li className="list-none dark:text-white flex items-center gap-1 text">
                      دوره ها
                      <svg className="dark:stroke-white stroke-gray-700" width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L6.88384 5.11616C6.39773 5.60227 5.60227 5.60227 5.11616 5.11616L1 1" strokeWidth="0.8" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="right-of-header flex flex-row items-center">
              <div className="search-box bg-[#F3F4F6] dark:bg-[#FFFFFF0D] flex flex-row-reverse p-1.5 border-l-[1px] border-[#64748B] items-center gap-2 width-[300px] rounded-[15px]">
                <button className="bg-[transparent] border-none w-[30px]" type="submit">
                  <img className="w-full pl-1" src="assets/img/search-icon.svg" alt="SEO" />
                </button>
                <input className="border-[0] bg-[transparent] dark:text-white focus:outline-none font-[dana] w-auto p-1" placeholder="دنبال چه دوره ای هستی؟" type="text" />
              </div>
              <div className="h-[29px] w-[1px] bg-[#64748B] mx-5"></div>
              <div className="them-changer flex items-center w-[20px]">
                <img className="w-full" src="assets/img/Moon.svg" alt="SEO" />
              </div>
              <div className="h-[29px] w-[1px] bg-[#64748B] mx-5"></div>
              <div className="basket w-[20px]">
                <a className="flex items-center" href=""><img className="w-full" src="assets/img/icon-cart.svg" alt="SEO" /></a>
              </div>
              <button className="account-btn font-[dana] border-none gap-3 flex items-center z-30 relative group/item justify-center p-2 rounded-[15px] text-[16px] bg-[#257E6C] text-white mr-4">
                حساب کاربری
                <img src="assets/img/sign.svg" alt="SEO" />
                <div dir="ltr" className="shadow-[0px_0px_4px_0px_#00000040] group-focus/item:visible rounded-[15px] p-3 invisible flex flex-col items-end bg-white absolute top-[50px] left-[10px]">
                  <div className="user flex justify-end items-center flex-row-reverse gap-3">
                    <div className="w-[60px] object-cover">
                      <img className="w-full" src="assets/img/profile.svg" alt="SEO" />
                    </div>
                    <div className="text-right flex flex-col">
                      <span className="text-[16px] text-[#424242]">محسن قادری</span>
                      <span className="text-[16px] text-[#0B8457]">موجودی 0 تومان</span>
                    </div>
                  </div>
                  <span className="h-[1px] w-[210px] bg-[#B7B7B7]"></span>
                  <div className="list text-right flex items-end flex-col gap-3 my-4">
                    <span className="text-[16px] text-[#424242] flex items-center gap-2">پیشخوان <img src="assets/img/home.svg" alt="SEO" /></span>
                    <span className="text-[16px] text-[#424242] flex items-center gap-2">دوره های من <img src="assets/img/folder-open.svg" alt="SEO" /></span>
                    <span className="text-[16px] text-[#424242] flex items-center gap-2">تیکت ها <img src="assets/img/messages.svg" alt="SEO" /></span>
                    <span className="text-[16px] text-[#424242] flex items-center gap-2">جزئیات حساب <img src="assets/img/user-square.svg" alt="SEO" /></span>
                  </div>
                  <span className="h-[1px] w-[210px] bg-[#B7B7B7]"></span>
                  <span className="text-right text-[#FA7070] mt-4 flex items-center gap-2">خروج <img src="assets/img/logout.svg" alt="SEO" /></span>
                </div>
              </button>
            </div>         
          </div>
        </div>
        <div  className={`mbile-header header-dashboard p-3 lg:hidden bg-[#FFFFFF99] dark:bg-[#242a38] h-[80px] w-full flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${mobileHeaderVisible ? 'translate-y-0' : '-translate-y-[100px]'}`}>
          <button onClick={() => setMobileMenuOpen(true)} className="menu-btn border-none w-50px h-50px p-3 flex flex-col items-center justify-center rounded-full bg-[#ffffffdd] dark:bg-[#ffffff0d]">
              <span className="bg-black dark:bg-white block w-[20px] h-[2px]"></span>
              <span className="bg-black dark:bg-white my-1 block w-[20px] h-[2px]"></span>
              <span className="bg-black dark:bg-white block w-[20px] h-[2px]"></span>
          </button>

          <div className="logo-mobile w-[80px]">
              <img className="w-full" src="assets/img/NewLogo 1.png" alt="SEO" />
          </div>
          <div className="login-btn-mobile">
              <button
                className="sign-in font-[dana] border-none gap-3 flex items-center relative group/item justify-center p-2 rounded-[15px] text-[16px] bg-[#257E6C] text-white mr-4"
                >
                <img src="assets/img/sign.svg" alt="SEO" />
                <div dir="ltr"
                    className="shadow-[0px_0px_4px_0px_#00000040] group-focus/item:visible rounded-[15px] p-3 invisible flex flex-col items-end bg-white absolute top-[50px] left-[10px]">
                    <div className="user flex justify-end items-center flex-row-reverse gap-3">
                      <div className="w-[60px] object-cover">
                          <img className="w-full" src="assets/img/profile.svg" alt="SEO" />
                      </div>
                      <div className="text-right flex flex-col">
                          <span className="text-[16px] text-[#424242]">محسن قادری</span>
                          <span className="text-[16px] text-[#0B8457]">موجودی 0 تومان</span>
                      </div>
                    </div>
                    <span className="h-[1px] w-[210px] bg-[#B7B7B7]"></span>
                    <div className="list text-right flex items-end flex-col gap-3 my-4">
                      <span className="text-[16px] text-[#424242] flex items-center gap-2">پیشخوان <img
                            src="assets/img/home.svg" alt="SEO" /></span>
                      <span className="text-[16px] text-[#424242] flex items-center gap-2">دوره های من <img
                            src="assets/img/folder-open.svg" alt="SEO" /></span>
                      <span className="text-[16px] text-[#424242] flex items-center gap-2">تیکت ها <img
                            src="assets/img/messages.svg" alt="SEO" /></span>
                      <span className="text-[16px] text-[#424242] flex items-center gap-2">جزئیات حساب <img
                            src="assets/img/user-square.svg" alt="SEO" /></span>
                    </div>
                    <span className="h-[1px] w-[210px] bg-[#B7B7B7]"></span>
                    <span className="text-right text-[#FA7070] mt-4 flex items-center gap-2">
                      خروج
                      <img src="assets/img/logout.svg" alt="SEO" />
                    </span>
                </div>
              </button>
          </div>
        </div>
      </header>
      <MenuPanel mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </>
  )
}

function MenuPanel({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean, setMobileMenuOpen: any }) {
  return(
    <div
      className={`panel-mobile fixed h-full inset-0 bg-[#FFFFFF] dark:bg-[#242a38] overflow-y-auto w-[280px] transition-all duration-300 right-0 z-50 px-3
      ${mobileMenuOpen ? 'translate-x-0 visible' : '-translate-x-[-280px] invisible'}`}
      style={{ transitionProperty: 'transform, visibility', transitionDuration: '0.3s', transitionTimingFunction: 'ease-in-out' }}
    >
      <div className="parent-panel header-dashboard grid grid-cols-1 gap-y-3 divide-y">
         <div className="logo-and-close flex items-center justify-between" onClick={() => setMobileMenuOpen(false)}>
            <img className="w-[100px]" src="assets/img/NewLogo 1.png" alt="SEO" />
            <div className="flex gap-2">
               <div
                  className="theme w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full bg-[#5757570d] dark:bg-[#ffffff0d]">
                  <svg className="dark:stroke-[#FFFFFF] stroke-[#242a38]" width="22" height="22" viewBox="0 0 22 22"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path
                        d="M1.02804 11.4222C1.39976 16.5709 5.912 20.7598 11.3122 20.9897C15.1223 21.1497 18.5297 19.4301 20.5742 16.7208C21.4209 15.6111 20.9665 14.8713 19.552 15.1212C18.8601 15.2412 18.1477 15.2912 17.4043 15.2612C12.3551 15.0612 8.2249 10.9723 8.20425 6.14353C8.19393 4.84386 8.47271 3.61417 8.97866 2.49446C9.53624 1.25478 8.86508 0.66493 7.5744 1.19479C3.48551 2.86437 0.687303 6.85334 1.02804 11.4222Z"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
               </div>
               <div
                  className="close bg-[#5757570d] w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full dark:bg-[#ffffff0d]">
                  <svg className="svg dark:stroke-[#FFFFFF] stroke-[#242a38]" xmlns="http://www.w3.org/2000/svg" width="12"
                     height="12" viewBox="0 0 12 12">
                     <path fill="#000" fillOpacity="1" fillRule="nonzero"
                        d="m6 5.293 4.789-4.79.707.708-4.79 4.79 4.79 4.789-.707.707-4.79-4.79-4.789 4.79-.707-.707L5.293 6 .502 1.211 1.21.504 6 5.294z">
                     </path>
                  </svg>
               </div>
            </div>
         </div>
         <span className="w-full h-[1px] bg-[#ffffff1a] my-2"></span>
         <div
            className="search-box bg-[#F3F4F6] dark:bg-[#FFFFFF0D] flex p-1.5 border-l-[1px] border-[#64748B] items-center gap-2 width-[300px] rounded-[15px]">
            <button className="bg-[transparent] border-none w-[30px]" type="submit">
               <img className="w-full pl-1" src="assets/img/search-icon.svg" alt="SEO" />
            </button>
            <input className="border-[0] bg-[transparent] dark:text-white focus:outline-none font-[dana] w-auto p-1"
               placeholder="دنبال چه دوره ای هستی؟" type="text" />
         </div>
         <details className="group py-1 text-lg">
            <summary
               className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-[#242424] dark:text-white marker:[font-size:0px]">
               دوره ها
               <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
               </svg>
            </summary>
            <div className="text-gray-500">
               <ul className="bg-[#bfbfbf] dark:bg-[#111827] p-2 rounded-2xl">
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
               </ul>
            </div>
         </details>

         <details className="group py-1 text-lg">
            <summary
               className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-[#242424] dark:text-white marker:[font-size:0px]">
               دوره ها
               <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
               </svg>
            </summary>
            <div className="text-gray-500">
               <ul className="bg-[#bfbfbf] dark:bg-[#111827] p-2 rounded-2xl">
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
               </ul>
            </div>
         </details>

         <details className="group py-1 text-lg">
            <summary
               className="flex cursor-pointer flex-row items-center justify-between py-1 font-semibold text-[#242424] dark:text-white marker:[font-size:0px]">
               دوره ها
               <svg className="h-6 w-6 rotate-0 transform text-gray-400 group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                  stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
               </svg>
            </summary>
            <div className="text-gray-500">
               <ul className="bg-[#bfbfbf] dark:bg-[#111827] p-2 rounded-2xl">
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
                  <a className="no-underline text-[unset]" href="#">
                     <li className="list-none m-2 dark:text-white">زیر منو</li>
                  </a>
               </ul>
            </div>
         </details>
      </div>
   </div>
  )
}