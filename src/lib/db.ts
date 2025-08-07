import { createClient } from '@supabase/supabase-js';

console.log('🔍 SUPABASE URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('🔍 SUPABASE ANON KEY:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.slice(0, 5) + '...'); 
console.log('🔍 SUPABASE SERVICE ROLE KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 5) + '...');


// .env.local
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  
);

// products
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  if (error) throw error;
  return data;
}

// categories
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*');
  if (error) throw error;
  return data;
}

// sliders
export async function getSliders() {
  const { data, error } = await supabase
    .from('sliders')
    .select('*');
  if (error) throw error;
  return data;
}

// faqs
export async function getFaqs() {
  const { data, error } = await supabase
    .from('faqs')
    .select('*');
  if (error) throw error;
  return data;
}
