'use client'

import { ACCEPTED_PDF_TYPES, DEFAULT_VOICE } from "@/lib/constants";
import { UploadSchema } from "@/lib/zod";
import { BookUploadFormValues } from "@/types";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import LoadingOverlay from "./LoadingOverlay";
import FileUploader from "./FileUploader";
import { ImageIcon, Upload } from "lucide-react";
import VoiceSelector from "./VoiceGenerator";

const UploadForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    }, []);

    const form = useForm<BookUploadFormValues>({
        resolver: zodResolver(UploadSchema),
        defaultValues: {
            title: '',
            author: '',
            voice: DEFAULT_VOICE
        }
    })

    const onSubmit = async (values: BookUploadFormValues) => {
        setIsSubmitting(true);
        console.log(values)
        
        await new Promise((resolve)=> setTimeout(resolve, 3000));
        setIsSubmitting(false);
    };

    if (!isMounted) return null;
  return (
    <>
        {isSubmitting && <LoadingOverlay/>}

        <div className="new-book-wrapper">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FileUploader
                        control={form.control}
                        name="bookFile"
                        label="Book PDF File"
                        acceptTypes={ACCEPTED_PDF_TYPES}
                        icon={Upload}
                        placeholder="Click to upload PDF"
                        hint="PDF File (max 50MB)"
                        disabled={isSubmitting}
                    />

                    <FileUploader
                        control={form.control}
                        name="bookFile"
                        label="Book PDF File"
                        acceptTypes={ACCEPTED_PDF_TYPES}
                        icon={ImageIcon}
                        placeholder="Click to upload PDF"
                        hint="PDF File (max 50MB)"
                        disabled={isSubmitting}
                    />

                    <FormField
                        contorl={form.control}
                        name="title"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel className="form-label">Title</FormLabel>
                                <FormControl>
                                    <Input
                                        className="form-input"
                                        placeholder="ex: Rish Dad Poor Dad"
                                        {...field}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel className="form-label">Author Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className="form-input"
                                        placeholder="ex: Robert Kiyosaki"
                                        {...field}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="voice"
                        render={({field})=> (
                            <FormItem>
                                <FormLabel className="form-label">Choose Assistant Voice</FormLabel>
                                <FormControl>
                                    <VoiceSelector
                                        value={field.value}
                                        onChange={field.onChange}
                                        disabled={isSubmitting}
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="form-btn" disabled={isSubmitting}>
                        Begin Synthesis
                    </Button>

                </form>

            </Form>
        </div>
    </>
  )
}

export default UploadForm