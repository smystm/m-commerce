'use client'
import React, { useState } from 'react'

export default function DetailsInfo(){
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const dataInfo = [
    {
      "productInfo1": {
        "id": 1,
        "name": "برنج هاشمی ممتاز",
        "brand": "زرین دانه",
        "category": "غلات",
        "price": 320000,
        "currency": "IRR",
        "weight": "10 کیلوگرم",
        "origin": "ایران - گیلان",
        "organic": true,
        "inStock": true,
        "taste": "ملایم",
        "nature": "گرم و خشک",
        "usage": ["پلو", "مهمانی", "مصرف روزانه"]
      },
      "productInfo2": {
        "id": 1,
        "shelfLife": "12 ماه",
        "storage": "در جای خشک و خنک نگهداری شود",
        "nutritionalInfo": {
          "calories": 360,
          "carbohydrates": "80g",
          "protein": "7g",
          "fat": "0.6g"
        },
        "description": "برنج هاشمی ممتاز گیلان، دانه بلند، عطر و طعم بی‌نظیر، بدون شکستگی و مناسب برای مجالس."
      }
    }      
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex flex-col items-center gap-3 w-full transition-all duration-500 py-6 mt-3 md:mt-6'>
      {dataInfo.map((product, idx) => (
        <React.Fragment key={idx}>
          
          {/* آکاردئون ۱ - اطلاعات کلی */}
          <div className={`w-full bg-white dark:bg-gray-800 rounded-lg border border-black/10 ${openIndex === 0 ? "shadow-lg" : ""}`}>
            <button 
              className="w-full text-left px-4 py-4 flex items-center justify-between font-medium transition-all duration-300"
              onClick={() => toggleAccordion(0)}
            >
              <span>درباره محصول</span>
              <span className={`transition-all duration-300 text-xs text-gray-300 dark:text-gray-500 `} style={{ transform: `rotate(${openIndex === 0 ? 270 : 90}deg)` }}>❯</span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 0 ? "max-h-[1000px]" : "max-h-0"}`}>
              <div className="px-5 py-4">
                <Row index={1} label="نام محصول" value={product.productInfo1.name} />
                <Row index={2} label="برند" value={product.productInfo1.brand} />
                <Row index={3} label="دسته‌بندی" value={product.productInfo1.category} />
                <Row index={4} label="وزن" value={product.productInfo1.weight} />
                <Row index={5} label="خاستگاه" value={product.productInfo1.origin} />
                <Row index={6} label="طعم" value={product.productInfo1.taste} />
                <Row index={7} label="طبع" value={product.productInfo1.nature} />
                <Row index={8} label="موارد مصرف" value={product.productInfo1.usage.join("، ")} />
              </div>
            </div>
          </div>

          {/* آکاردئون ۲ - اطلاعات تغذیه‌ای */}
          <div className={`w-full bg-white dark:bg-gray-800 rounded-lg border border-black/10 ${openIndex === 1 ? "shadow-lg" : ""}`}>
            <button 
              className="w-full text-left px-4 py-4 flex items-center justify-between font-medium transition-all duration-300"
              onClick={() => toggleAccordion(1)}
            >
              <span>مشخصات تغذیه‌ای</span>
              <span className={`transition-transform duration-300 text-xs text-gray-300 dark:text-gray-500 `} style={{ transform: `rotate(${openIndex === 1 ? 270 : 90}deg)` }}>❯</span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === 1 ? "max-h-[1000px]" : "max-h-0"}`}>
              <div className="px-5 py-4">
                <Row index={1} label="مدت ماندگاری" value={product.productInfo2.shelfLife} />
                <Row index={2} label="روش نگهداری" value={product.productInfo2.storage} />
                <Row index={3} label="کالری" value={`${product.productInfo2.nutritionalInfo.calories} kcal`} />
                <Row index={4} label="کربوهیدرات" value={product.productInfo2.nutritionalInfo.carbohydrates} />
                <Row index={5} label="پروتئین" value={product.productInfo2.nutritionalInfo.protein} />
                <Row index={6} label="چربی" value={product.productInfo2.nutritionalInfo.fat} />
                <Row index={7} label="توضیحات" value={product.productInfo2.description} />
              </div>
            </div>
          </div>

        </React.Fragment>
      ))}
    </div>
  )
}

// یک کامپوننت ساده برای نمایش ردیف‌ها
const Row = ({ label, value,index }: { label: string, value: string,index:number }) => (
  <div className={`flex flex-col md:flex-row gap-2 px-4 py-3 ${(index % 2 === 0) ? ' bg-transparent' : 'bg-black/5 dark:bg-black/10'}`}>
    <div className='w-full md:w-1/4 font-medium'>{label}</div>
    <div className='w-full md:w-3/4'>{value}</div>
  </div>
);
