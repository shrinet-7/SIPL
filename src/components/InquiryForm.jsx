"use client"
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';

const InquiryForm = ({ isOpen, onClose, propertyName }) => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    const sendEmail = (params) => {
        const toastId = toast.loading("Sending your inquiry, please wait...");

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000, // limit: one email per 5 seconds
                    }
                }
            )
            .then(
                () => {
                    toast.success(`Thank you! We've received your inquiry about ${propertyName} and will get back to you soon.`, {
                        id: toastId
                    });
                    reset(); // Clear the form after successful submission
                    setTimeout(() => onClose(), 2000); // Close modal after 2 seconds
                },
                () => {
                    toast.error("There was an error sending your inquiry. Please try again later.", {
                        id: toastId
                    });
                },
            );
    };

    const onSubmit = data => {
        const templateParams = {
            to_name: "SIPL",
            from_name: data.Name,
            reply_to: data.Email || "No email provided",
            call_me: data.Mobile,
            message: data.Message || "No message provided",
            property_name: propertyName
        };

        sendEmail(templateParams);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <Toaster richColors={true} position="top-center" />

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full relative z-50 animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    Inquire About {propertyName}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* 1. Name - Required */}
                    <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your name (required)"
                            {...register("Name", {
                                required: 'Name is required',
                                minLength: {
                                    value: 3,
                                    message: 'Name should be at least 3 characters'
                                }
                            })}
                            className={`w-full p-3 rounded-lg border ${errors.Name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:border-transparent focus:outline-none focus:ring-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        />
                        {errors.Name &&
                            <p className="text-red-500 text-xs mt-1">{errors.Name.message}</p>
                        }
                    </div>

                    {/* 2. Phone - Required */}
                    <div className="space-y-1">
                        <label htmlFor="mobile" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="mobile"
                            type="tel"
                            placeholder="Your phone number (required)"
                            {...register("Mobile", {
                                required: 'Phone number is required',
                                minLength: {
                                    value: 6,
                                    message: 'Phone number should be at least 6 digits'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Phone number should be less than 16 digits'
                                }
                            })}
                            className={`w-full p-3 rounded-lg border ${errors.Mobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:border-transparent focus:outline-none focus:ring-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        />
                        {errors.Mobile &&
                            <p className="text-red-500 text-xs mt-1">{errors.Mobile.message}</p>
                        }
                    </div>

                    {/* 3. Email - Optional */}
                    <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your email (optional)"
                            {...register("Email", {
                                required: false,
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Please enter a valid email'
                                }
                            })}
                            className={`w-full p-3 rounded-lg border ${errors.Email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:border-transparent focus:outline-none focus:ring-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        />
                        {errors.Email &&
                            <p className="text-red-500 text-xs mt-1">{errors.Email.message}</p>
                        }
                    </div>

                    {/* 4. Message - Optional */}
                    <div className="space-y-1">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder={`I'm interested in ${propertyName}... (optional)`}
                            rows="4"
                            {...register("Message", {
                                required: false,
                                maxLength: {
                                    value: 500,
                                    message: 'Message should be less than 500 characters'
                                }
                            })}
                            className={`w-full p-3 rounded-lg border ${errors.Message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'} focus:border-transparent focus:outline-none focus:ring-2 transition-colors dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
                        />
                        {errors.Message &&
                            <p className="text-red-500 text-xs mt-1">{errors.Message.message}</p>
                        }
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center disabled:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-800"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            "Submit Inquiry"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquiryForm;