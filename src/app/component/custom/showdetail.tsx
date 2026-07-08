"use client"
import React, { useState } from "react"
import { IGetProductData } from "@/types"
import { Tab, Tabox, TabInput, TabLable } from "../ui/tabsmpl"
import DetailsInfo from "./detailsinfo"

export default function Showdetail({ data }: { data: IGetProductData }) {
   const [selectedTab, setSelectedTab] = useState("yes")
   const detailtxt =
      "همان‌طور که می‌دانید، یکی از غلات مهم و پرخاصیت، جو دو سر یا همان جو پرک است. این محصول بیشتر به صورت بیسکوییتی یا روی پودینگ به عنوان صبحانه یا برای پخت سوپ مصرف می‌شود. اغلب خوردن جو دوسر در منوهای رژیم غذایی، به ویژه صبحانه توصیه می‌گردد. جو را می‌توان به روش‌های مختلفی با مخلوط کردن آن در ماست، شیر یا آب گرم ساده نوش‌جان کرد. در جو پرک ممتاز مقدار زیادی آمینواسید وجود دارد و به عنوان منبعی مهم از پروتئین محسوب می‌شود. پس با خیال راحت این محصول با کیفیت و سالم را در سبد تغذیه خود و خانواده‌تان قرار دهید تا از طعم خوب و لطیف آن در انواع غذاها و دسرها لذت ببرید. مهم‌ترین فایده جو این است که سطح کلسترول را کاهش می‌دهد و از لخته شدن خون جلوگیری می‌کند. همچنین فرآیندهای فکری را تحریک می‌کند و باعث تقویت سیستم ایمنی بدن می‌شود. در ضمن، پس از استفاده از جو پرک ممتاز در رژیم غذایی، موهایی زیبا، ناخن‌هایی محکم و مقاوم خواهید داشت. از دیگر فواید استفاده از این غله خوشمزه، درخشش پوست و بهتر کردن عملکرد دستگاه گوارش است. بنابراین هرچه از جو پرک ممتاز به دلیل محتوای بالای ریز عناصر و ویتامین‌های لازم برای فعالیت حیاتی بدن تعریف و تمجید کنیم، واقعا دور از اغراق است! پس بدون معطلی این محصول مفید و سرشار از کلسیم، آهن، منیزیم، پتاسیم، فسفر، سدیم، منگنز، روی، مس و سلنیوم و تیامین، ریبوفلاوین، نیاسین، فولات، کولین که هم برای بزرگسالان و هم برای کودکان لازم است را از فروشگاه آنلاین بارجیل با یک کلیک ساده سفارش دهید."
   return (
      <div className="showcase w-full px-4">
         <Tab>
            <ul
               className={`mx-auto w-full h-100 border-t-2 border-black/10 dark:border-white/5 flex gap-x-8 py-3 text-gray-700 dark:text-gray-300 ${
                  selectedTab === "yes" ? "h-350 md:h-180  lg:h-150" : selectedTab === "no" ? "h-280 md:h-200 lg:h-180" : "h-50"
               }`}
            >
               <li className="details-info">
                  <TabInput id="yes" isDefault={true} onChange={() => setSelectedTab("yes")}></TabInput>
                  <TabLable txtSpan="توضیحات تکمیلی" id="yes"></TabLable>
                  <Tabox className="w-full max-w-[1180px]">
                     <DetailsPara detailtxt={detailtxt} />
                  </Tabox>
               </li>

               <li className="details-products">
                  <TabInput id="no" onChange={() => setSelectedTab("no")}></TabInput>
                  <TabLable id="no" txtSpan="مشخصات محصول"></TabLable>
                  <Tabox className="w-full max-w-[1180px]">
                     <DetailsInfo />
                  </Tabox>
               </li>

               <li className="details-chat">
                  <TabInput id="yesno" onChange={() => setSelectedTab("yesno")}></TabInput>
                  <TabLable id="yesno" txtSpan="نظرات کاربران"></TabLable>
                  <Tabox className="w-full max-w-[1180px]">بزودی </Tabox>
               </li>
            </ul>
         </Tab>
      </div>
   )
}

function DetailsPara({ detailtxt }: { detailtxt: string }) {
   return <p className="font-medium leading-10 text-lg text-gray-700 dark:text-gray-300">{detailtxt}</p>
}
