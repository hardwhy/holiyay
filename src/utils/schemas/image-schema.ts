import { z } from "zod";

const validateFile = () => {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileType = ["image/*"];
  return z
    .instanceof(File)
    .refine((f) => {
      return !f || f.size <= maxUploadSize;
    }, "File size must be less than 1 MB")
    .refine((f) => {
      return !f || acceptedFileType.some((aft) => f.type.startsWith(aft));
    }, "File must be an image");
};

export const imageSchema = z.object({
  image: validateFile(),
});
