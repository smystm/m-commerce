export interface IGetSlideData {
    id: number;
    title: string;
    description: string;
    image_url: string;
    push_link: string;
  }
  
  export interface IGetProductData {
    id: number;
    name: string;
    description: string;
    image_url: string;
    price: number; 
    discount: number; 
    category_id: number | null; 
  }
  
  export interface IGetCategoryData {
    id: number;
    title: string;
    image_url: string; 
  }
  
  export interface IGetFaqs {
    id: number;
    question: string;
    answer: string;
  }
  