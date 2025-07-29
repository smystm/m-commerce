
import React from 'react';
import Section from '@/app/component/ui/section';
import Slider from '@/app/component/custom/slider';
import Category from '@/app/component/custom/category';

export default function SliderSection() {

  return (
    <div className='page'>
      <Section className='flex justify-center mt-2 md:mt-0'>
        <Slider />
      </Section>
      <Section ttl='دسته بندی ها' className='max-w-[1640px] flex flex-col items-center py-8 md:py-12 lg:py-18'>
        <Category />
      </Section>
    </div>
  );
}
