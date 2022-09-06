import { supabase } from "@/common/supabase.js";

// получаем публичную ссылку на папку с картинками
export const supabaseImagesUrl = (folder) =>
  supabase.storage.from(folder).getPublicUrl("").publicURL;

// получаем список продуктов из выбранной категории
export const getProductsList = async (category) => {
  const { data, error } = await supabase
    .from(category)
    .select("*")
    .order("id", { ascending: true });
  if (error) {
    throw error;
  } else {
    return data;
  }
};
