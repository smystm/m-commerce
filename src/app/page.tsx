import React from 'react';
import Section from '@/app/component/ui/section';
import Slider from '@/app/component/custom/slider';
import Category from '@/app/component/custom/category';
import Cateboxy from './component/custom/cateboxy';
import Marqbox from './component/custom/marqbox';
import Product from './component/custom/product';
import Ttlsec from './component/ui/ttlsec';
import Showcase from './component/custom/showcase';

export interface IGetSlideData {
  id: string;
  title: string;
  description: string;
  image: string;
  push: string;
}
export interface IGetProductData {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
}
export interface IGetCategoryData {
  id: string;
  title: string;
  source: string;
}

export default async function SliderSection() {
  const sliders = await fetch('http://localhost:3001/sliders');
  const products = await fetch('http://localhost:3001/products');
  const categories = await fetch('http://localhost:3001/categories');
  const slidersData = (await sliders.json()) as IGetSlideData[]; 
  const productsData = (await products.json()) as IGetProductData[];
  const categoriesData = (await categories.json()) as IGetCategoryData[];

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
        <Product data={productsData} />
      </Section>
      <Section ttl='انواع آجیل' className='max-w-[1640px] flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Cateboxy data={categoriesData} />  
        <Showcase />
      </Section>
    </div>
  );
}
 