import Button from "../ui/button";
import { Tab,Tabox,TabInput,TabLable } from "../ui/tab";
import {ProdCart} from "./product";
import { getProducts } from '@/lib/db';
import { IGetProductData } from "@/types/index";

import React from 'react'

export default async function Showcase() {
  const productsData = await getProducts() as IGetProductData[];

  return (
    <div className="showcase w-full px-4">
          <Tab>
            <ul className="mx-auto grid w-full grid-cols-3 gap-x-5 px-8 py-3 border rounded-3xl bg-white border-black/10 text-gray-700 dark:text-gray-300 dark:border-white/10 dark:bg-white/2">
              <li className="">
                <TabInput id="yes" isDefault={true}></TabInput>
                <TabLable txtSpan="پیشنهاد ویژه" id="yes">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 w-5 h-5 transition-all duration-100"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
                </TabLable>
                <Tabox className="w-full sm:w-4/5 md:w-9/10 2xl:w-17/20">
                  <ProdCart data={productsData}></ProdCart>
                  <div className="flex w-full justify-center lg:justify-end px-8 lg:px-4 py-2">              
                    <Button name="مشاهده همه" className="inline-flex group justify-center text-xs md:text-sm lg:text-md gap-1.5 group-hover:gap-2.5 items-center px-4 py-1.5 border-1 border-black/20 dark:border-white/5 rounded-lg bg-white text-gray-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white/90 transition-all duration-300 hover:scale-95 active:scale-90 outline-none focus:ring-2 focus:ring-purple-500/50 hover:cursor-pointer" choose="none" send="none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Button>
                  </div>
                </Tabox>
              </li>

              <li className="">
                <TabInput id="no"></TabInput>
                <TabLable id="no" txtSpan="جدیدترین">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 w-5 h-5 transition-all duration-100"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                </TabLable>
                <Tabox className="w-[85vw]">
                  2
                </Tabox>
              </li>

              <li className="">
                <TabInput id="yesno"></TabInput>
                <TabLable id="yesno" txtSpan="پرفروش ها">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 w-5 h-5 transition-all duration-100"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </TabLable>
                <Tabox className="w-[85vw] flex flex-col items-end gap-3">
                  3
                </Tabox>
              </li>
            </ul>
          </Tab>
    </div>
  )
}
