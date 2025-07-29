'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../ui/button';

export default function Slider() {

  const slideBackgrounds: Record<string, string> = {
    'swiper-01': "bg-[url('/assets/img/fandgh-slid.png')]",
    'swiper-02': "bg-[url('/assets/img/tea-slid.png')]",
  };

  const slideData = {
    'swiper-01': {
      id: '01',
      title: 'یک فنجان آرامش',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      image: "bg-[url('/assets/img/fandgh-slid.png')]",
      push: ''
    },
    'swiper-02': {
      id: '02',
      title: 'بهترین فندق ایران!',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      image: "bg-[url('/assets/img/tea-slid.png')]",
      push: ''
    },
    'swiper-03': {
      id: '03',
      title: 'یک فنجان آرامش',
      description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است',
      image: "bg-[url('/assets/img/fandgh-slid.png')]",
      push: ''
    }
  };
    
  return (
    <>
      <div className="w-[95%] md:w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {Object.entries(slideData).map(([key, sld]) => (
            <SwiperSlide className='overflow-hidden rounded-xl md:rounded-none' key={key}>
              <div className={`w-full h-[250px] md:h-[330px] lg:h-[60vh] xl:h-[70vh] rounded-xs md:rounded-none flex flex-col justify-center items-start text-white bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[#ffffff09] to-[#00000077] ${sld.image}`}>
                <div className="container-fluid bg-black/30 rounded-xl p-4 md:p-6 lg:p-12 mx-auto">                  
                  <div className="max-w-[200px] md:max-w-[310px]">
                    <strong className="text-white text-lg md:text-4xl font-bold">
                      {sld.title}
                    </strong>
                    <p className="text-white text-justify text-xs md:text-sm my-3 md:my-10 line-clamp-3">
                      {sld.description}
                    </p>
                    <Button name='خرید' className="group inline-flex items-center justify-center gap-1 hover:gap-1.5 hover:scale-105 hover:cursor-pointer bg-white/90 text-[#581702] text-xs md:text-sm lg:text-base p-1 px-2 rounded-sm font-normal transition-all duration-300" classText='group-hover:text-[#581702]' choose='push' send={sld.push}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180 group-hover:rotate-540 transition-all duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Button>              
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}




