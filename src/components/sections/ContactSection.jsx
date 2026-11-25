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

import { socialMediaLinks, contactInfo } from '../../lib/constants';

// Form mesajları Web3Forms üzerinden doğrudan e-posta kutusuna gelir.
// Erişim anahtarı Vercel'de REACT_APP_WEB3FORMS_KEY ortam değişkeni olarak tanımlanır.
// (Web3Forms anahtarı herkese açık kodda bulunabilir; gizli bir bilgi değildir.)
const WEB3FORMS_ACCESS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || "";

const formSchema = z.object({
    firstName: z.string().trim().min(2, { message: "Ad en az 2 karakter olmalı" }),
    lastName: z.string().trim().min(2, { message: "Soyad en az 2 karakter olmalı" }),
    email: z.string().trim().email({ message: "Geçerli bir e-posta adresi girin" }),
    subject: z.string().optional(),
    message: z.string().trim().min(10, { message: "Mesaj en az 10 karakter olmalı" }),
    botcheck: z.boolean().optional(),
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
            botcheck: false,
        },
    });

    const { register, handleSubmit, formState: { errors } } = form;

    const onSubmit = async (values) => {
        if (!WEB3FORMS_ACCESS_KEY) {
            toast.error("Form henüz yapılandırılmadı.", {
                description: "Lütfen hayrunnisaulucay@gmail.com adresine doğrudan e-posta gönderin.",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const fullName = `${values.firstName} ${values.lastName}`.trim();
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: values.subject?.trim()
                        ? `Portfolyo: ${values.subject.trim()}`
                        : `Portfolyo sitesinden yeni mesaj – ${fullName}`,
                    from_name: "Portfolyo Sitesi",
                    name: fullName,
                    email: values.email,
                    replyto: values.email,
                    message: values.message,
                    botcheck: values.botcheck || false,
                }),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Gönderim başarısız");
            }

            form.reset();
            toast.success("Mesaj Gönderildi!", {
                description: "En yakın zamanda döneceğim. Teşekkürler.",
            });
        } catch (error) {
            toast.error("Mesaj gönderilemedi.", {
                description: "Lütfen tekrar deneyin ya da hayrunnisaulucay@gmail.com adresine yazın.",
            });
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
                        Staj, iş birliği ya da projelerim hakkında yazabilirsiniz; mesajınız doğrudan e-posta kutuma ulaşır.
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
                                            {item.href ? (
                                                <a href={item.href} className="text-foreground hover:text-accent transition">{item.value}</a>
                                            ) : (
                                                <p className="text-foreground">{item.value}</p>
                                            )}
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
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                            <input
                                type="checkbox"
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                                {...register("botcheck")}
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block font-accent font-medium text-foreground mb-2">Ad</label>
                                        <Input
                                            id="firstName"
                                            placeholder="Ad"
                                            {...register("firstName")}
                                            className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                        />
                                        {errors.firstName && (
                                            <p className="mt-1 text-sm font-medium text-red-500">{errors.firstName.message}</p>
                                        )}
                                    </div>
                                <div>
                                    <label htmlFor="lastName" className="block font-accent font-medium text-foreground mb-2">Soyad</label>
                                    <Input
                                        id="lastName"
                                        placeholder="Soyad"
                                        {...register("lastName")}
                                        className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                    {errors.lastName && (
                                        <p className="mt-1 text-sm font-medium text-red-500">{errors.lastName.message}</p>
                                    )}
                                </div>
                            </div>

                                <div>
                                    <label htmlFor="email" className="block font-accent font-medium text-foreground mb-2">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="ornek@mail.com"
                                        {...register("email")}
                                        className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm font-medium text-red-500">{errors.email.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block font-accent font-medium text-foreground mb-2">Mesaj Konusu</label>
                                    <Input
                                        id="subject"
                                        placeholder="Konu"
                                        {...register("subject")}
                                        className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm font-medium text-red-500">{errors.subject.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block font-accent font-medium text-foreground mb-2">Mesaj</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Mesaj"
                                        rows={5}
                                        {...register("message")}
                                        className="p-3 border border-muted rounded-lg focus:ring-2 focus:ring-accent resize-none"
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm font-medium text-red-500">{errors.message.message}</p>
                                    )}
                                </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-accent hover:bg-accent/90 text-white font-accent font-medium shadow-md px-8 py-3 w-full md:w-auto"
                            >
                                {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;


