import { createClient } from '@supabase/supabase-js';

// .env.local
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  
);

// products Types
export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');
  if (error) throw error;
  return data;
}

// categories Types
export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*');
  if (error) throw error;
  return data;
}

// sliders Types
export async function getSliders() {
  const { data, error } = await supabase
    .from('sliders')
    .select('*');
  if (error) throw error;
  return data;
}

// faqs Types
export async function getFaqs() {
  const { data, error } = await supabase
    .from('faqs')
    .select('*');
  if (error) throw error;
  return data;
}
