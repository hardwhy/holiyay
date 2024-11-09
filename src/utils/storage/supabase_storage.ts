import { createClient } from "@supabase/supabase-js";

const bucket = "holiday-dev";

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

const storage = supabase.storage.from(bucket);

const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const name = `${timestamp}-${image.name}`;
  const { data } = await storage.upload(name, image, {
    cacheControl: "3600",
  });

  if (!data) throw Error(`Image upload failed: ${name}`);
  return storage.getPublicUrl(name).data.publicUrl;
};

export const SupabaseStorage = {
  uploadImage,
};
