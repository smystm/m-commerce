import Button from '../ui/button';
import { IGetSlideData } from '@/app/page';

function Poster({data}:{data:IGetSlideData[]}) {
  return (
    <div className="w-full flex flex-col xl:flex-row gap-12 justify-between items-center">
        {(data).map((sld, index)=> 
            sld.id == "01" || sld.id == "03"?
                <PosterBox key={index} poster={sld} /> 
            : null 
        )}   
    </div>
  )
}

function PosterBox({poster,key}:{poster:IGetSlideData,key:number}){
    return(
        <div key={key} className="rounded-2xl overflow-hidden w-full">
            <div className={`w-full h-45 sm:h-55 md:h-75 lg:h-90 xl:h-70 2xl:h-85 rounded-xs md:rounded-none flex flex-col justify-center items-start text-white 2xl:px-10 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-[#ffffff09] to-[#00000077] ${poster.image}`}>
                <div className="container-fluid rounded-xl p-4 md:p-6 lg:p-12 ">                  
                  <div className="max-w-[200px] md:max-w-[310px]">
                    <strong className="text-white text-lg md:text-4xl font-bold">
                      {poster.title}
                    </strong>
                    <p className="text-white text-justify text-xs md:text-sm my-3 md:my-10 line-clamp-3">
                      {poster.description}
                    </p>
                    <Button name='خرید' className="group inline-flex items-center justify-center gap-1 hover:gap-1.5 hover:scale-105 hover:cursor-pointer bg-white/90 text-[#581702] text-xs md:text-sm lg:text-base p-1 px-2 rounded-sm font-normal transition-all duration-300" classText='group-hover:text-[#581702]' choose='push' send={poster.push}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180 group-hover:rotate-540 transition-all duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Button>              
                  </div>
                </div>
            </div>                
        </div>
    )
}

export {Poster}