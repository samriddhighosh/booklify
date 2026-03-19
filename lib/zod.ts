import * as z from "zod"
import { ACCEPTED_IMAGE_TYPES, ACCEPTED_PDF_TYPES, MAX_FILE_SIZE, MAX_IMAGE_SIZE } from "./constants";

export const UploadSchema = z.object({
    bookFile:z
    .any()
    .refine((file)=> file instanceof File, "Book PDF is required")
    .refine((file)=> file?.size <= MAX_FILE_SIZE, `File size must be less than 50MB.`)
    .refine(
        (file)=> ACCEPTED_PDF_TYPES.includes
        (file?.type),
        "Only .pdf format is supported"
    ),

    coverImage: z.any()
    .optional()
    .refine((file)=> {
        if(!file) return true;
        return file instanceof File;
    }, "Cover image must bea file")
    .refine((file)=> {
        if(!file) return true;
        return file.size <= MAX_IMAGE_SIZE;
    }, `Image szie must be less than 10MB`)
    .refine((file)=> {
        if(!file) return true;
        return ACCEPTED_IMAGE_TYPES.includes(file.type)
    }, "Only .jpg, .jpeg, .png and .webp formats are supported"),
    title: z.string().min(1, "Title is requires").max(100, "RTitle si too long"),
    author: z.string().min(1, "Author name is requires").max(100, "Author name is too long"),
    voice: z.string().min(1, "Please select a voice")
})