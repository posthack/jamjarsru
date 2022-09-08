import { supabase } from "@/common/supabase.js";

export const supabaseImagesUrl = () =>
  supabase.storage.from("images").getPublicUrl("").publicURL;

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
