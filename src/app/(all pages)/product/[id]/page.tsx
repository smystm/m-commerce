import React from 'react';
import Section from '@/app/component/ui/section';
import Ttlsec from '@/app/component/ui/ttlsec';
import { getProducts } from '@/lib/db';
import { IGetProductData } from '@/types';
import Heroprd from '@/app/component/custom/heroprd';
import Showdetail from '@/app/component/custom/showdetail';
import { ProdCart } from "@/app/component/custom/product";

export default async function ProductPage({ params }: any) {

  const productsData = await getProducts() as IGetProductData[];
  const product = productsData.find(p => p.id === Number(params.id));

  if (!product) return <div>محصول پیدا نشد</div>;

  return (
    <div>
      <Section className='lg:w-11/12 max-w-[1180px] flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Heroprd data={product}/>
      </Section>
      <Section className='lg:w-11/12 max-w-[1180px] flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Showdetail data={product}/>
      </Section>
      <Section className='lg:w-11/12 max-w-[1180px] flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Ttlsec ttl='محصولات مشابه' desc='' isLnk={true} txtLnk='مشاهده تمام محصولات' classLnk='text-green-800 hover:text-green-600'>
          {''}
        </Ttlsec>
        <ProdCart slidesPerView={[4,2,3,4,4]} data={productsData}/>
      </Section>
    </div>
  );
}
