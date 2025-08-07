import React from 'react';
import Section from '@/app/component/ui/section';
import Slider from '@/app/component/custom/slider';
import Category from '@/app/component/custom/category';
import Cateboxy from './component/custom/cateboxy';
import Marqbox from './component/custom/marqbox';
import {PrdBoxing } from './component/custom/product';
import Ttlsec from './component/ui/ttlsec';
import Showcase from './component/custom/showcase';
import { Poster } from './component/custom/poster';
import Accordion from './component/custom/accordion';
import { getProducts, getCategories, getSliders, getFaqs } from '@/lib/db';
import { IGetSlideData, IGetProductData, IGetCategoryData, IGetFaqs } from '@/types';

export default async function SliderSection() {
 
  const slidersData = await getSliders() as IGetSlideData[];
  const productsData = await getProducts() as IGetProductData[];
  const categoriesData = await getCategories() as IGetCategoryData[];
  const accordionsData = await getFaqs() as IGetFaqs[];

  return (
    <div className='page'>
      <Section className='flex justify-center mt-2 md:mt-0'>
        <Slider data={slidersData} />
      </Section>
      <Section ttl='' className='max-w-[1640px] flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Category data={categoriesData} />
      </Section>
      <Section ttl='پرفروش ترین ها' className='max-w-full flex flex-col items-center py-8 md:py-12 lg:py-18' isTtl={true}>
        <Marqbox dirSlider='ltr' />
        <Marqbox dirSlider='rtl' />
      </Section>
      <Section className='max-w-[1640px] flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Ttlsec ttl='محصولات تازه' desc='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم است' isLnk={true} txtLnk='مشاهده تمام محصولات' classLnk='text-green-800 hover:text-green-600'>
          <div className="flex p-2.5 bg-green-700 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 text-white"><path d="M3 7h18l-1 10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4L3 7z"/><path d="M7 7a5 5 0 0 1 10 0"/></svg>
          </div>     
        </Ttlsec>
        <PrdBoxing data={productsData} />
      </Section>
      <Section ttl='انواع آجیل' className='max-w-[1640px] h-330 md:h-360 lg:h-260 flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Cateboxy data={categoriesData} />  
        <Showcase />
      </Section>
      <Section className='w-4/5 sm:w-7/10 lg:w-3/5 xl:w-4/5 flex flex-col items-center py-8 md:py-12 lg:py-18'>
         <Poster data={slidersData}/>
      </Section>
      <Section ttl='پرس های شما و پاسخ های ما' className='max-w-[1640px] flex flex-col items-center py-8 md:py-12 lg:py-18' isTtl={true}>
        <Accordion data={accordionsData} />
      </Section>
    </div>
  );
}
 