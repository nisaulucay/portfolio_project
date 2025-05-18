import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as LucideIcons from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form';
import { socialMediaLinks, contactInfo } from '../../lib/constants';

const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    subject: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = async (values) => {
        setIsSubmitting(true);

        try {
            // Simüle edilmiş gönderim işlemi (1.5 saniye bekle)
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Gönderilen değerler:", values);
            form.reset();

            // Başarılı toast mesajı
            toast.success("Mesaj Gönderildi!", {
                description: "En yakın zamanda döneceğim. Teşekkürler.",
            });
        } catch (error) {
            toast.error("Mesaj gönderilirken bir hata oluştu.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-white section-padding">
            <div className="container mx-auto px-6">
                <motion.div
                    className="mb-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">İletişime Geç</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="max-w-3xl mx-auto text-foreground">
                        İletişime geçmek için formu doldurunuz.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12">
                    <motion.div
                        className="lg:w-2/5"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-secondary/30 rounded-xl p-8">
                            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">İletişim Bilgileri</h3>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="p-3 bg-accent rounded-full text-white mt-1">
                                            {(() => {
                                                const IconComponent = (LucideIcons)[item.iconName] || LucideIcons.Circle;
                                                return <IconComponent size={16} />;
                                            })()}
                                        </div>
                                        <div>
                                            <h4 className="font-accent font-semibold text-foreground mb-1">{item.title}</h4>
                                            <p className="text-foreground">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <h4 className="font-accent font-semibold text-foreground mb-4">Beni Takip Edin!</h4>
                                <div className="flex space-x-4">
                                    {socialMediaLinks.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.link}
                                            className="p-3 bg-accent rounded-full text-white hover:bg-accent/80 transition"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={item.label}
                                        >
                                            {(() => {
                                                const IconComponent = (LucideIcons)[item.iconName] || LucideIcons.Circle;
                                                return <IconComponent size={16} />;
                                            })()}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:w-3/5"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-accent font-medium text-foreground">Ad</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Ad"
                                                        {...field}
                                                        className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-accent font-medium text-foreground">Soyad</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Soyad"
                                                        {...field}
                                                        className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-accent font-medium text-foreground">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="xxxxxx@example.com"
                                                    {...field}
                                                    className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-accent font-medium text-foreground">Mesaj Konusu</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Konu"
                                                    {...field}
                                                    className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-accent font-medium text-foreground">Mesaj</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Mesaj"
                                                    {...field}
                                                    rows={5}
                                                    className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent resize-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-accent hover:bg-accent/90 text-white font-accent font-medium shadow-md px-8 py-3 w-full md:w-auto"
                                >
                                    {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                                </Button>
                            </form>
                        </Form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;


