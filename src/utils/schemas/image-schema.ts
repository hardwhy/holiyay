import { z } from "zod";

const validateFile = () => {
  if (typeof File === "undefined") {
    return z.any(); // Bypass validation if File is not defined (server-side)
  }

  const maxUploadSize = 1024 * 1024;
  const acceptedFileType = ["image/"];

  return z
    .instanceof(File)
    .refine((f) => {
      const isSizeValid = !f || f.size <= maxUploadSize;
      return isSizeValid;
    }, "File size must be less than 1 MB")
    .refine((f) => {
      const isExtensionValid =
        !f || acceptedFileType.some((aft) => f.type.startsWith(aft));
      return isExtensionValid;
    }, "File must be an image");
};

export const ImageSchema = z.object({
  image: validateFile(),
});
