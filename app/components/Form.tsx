"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  reason: z.string().min(5, "Please describe what brings you here."),
  preferredTime: z.string().min(2, "Please enter a preferred time"),
  agreeToContact: z.literal(true, {
    errorMap: () => ({ message: "You must agree to be contacted" }),
  }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<any>(null);

  const onSubmit = (data: FormData) => {
    if (!captchaValue) {
      alert("Please verify you're not a robot.");
      return;
    }

    console.log("Form Data:", data);
    alert("Form submitted successfully!");

    reset();
    recaptchaRef.current?.reset();
    setCaptchaValue(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10 border border-black">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#1f3b3a]">
        📞 Contact Dr. Serena Blake
      </h2>
      <p className="text-black mx-auto">
        Simply fill out the brief fields below and Serena will be in touch with you soon.
      </p>
      <p className="text-black mx-auto">
        She will contact within one business day. Please do not spam her inbox.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold self-start">Name</label>
          <input
            {...register("name")}
            className="w-full mt-1 text-black px-4 py-2 border border-gray-300 rounded"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold self-start">Email</label>
          <input
            {...register("email")}
            className="w-full mt-1 text-black px-4 py-2 border border-gray-300 rounded"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold self-start">Phone</label>
          <input
            {...register("phone")}
            className="w-full mt-1 text-black px-4 py-2 border border-gray-300 rounded"
            placeholder="1234567890"
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        {/* What brings you here? */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold self-start">What brings you here?</label>
          <textarea
            {...register("reason")}
            rows={4}
            className="w-full mt-1 px-4 text-black py-2 border border-gray-300 rounded"
            placeholder="Tell us why you're reaching out"
          />
          {errors.reason && <p className="text-red-600 text-sm mt-1">{errors.reason.message}</p>}
        </div>

        {/* Preferred time to reach you */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold self-start">Preferred time to reach you</label>
          <input
            {...register("preferredTime")}
            className="w-full mt-1 text-black px-4 py-2 border border-gray-300 rounded"
            placeholder="e.g., Weekdays after 5pm"
          />
          {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>}
        </div>

        {/* Agree to be contacted */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            {...register("agreeToContact")}
            className="mt-1 cursor-pointer"
          />
          <label className="text-gray-700 text-sm">
            I agree to be contacted by Dr. Serena Blake.
          </label>
        </div>
        {errors.agreeToContact && <p className="text-red-600 text-sm">{errors.agreeToContact.message}</p>}

        {/* CAPTCHA */}
        <div className="w-full flex justify-start">
          <ReCAPTCHA
            sitekey="6LchnnErAAAAAFV-xKq9lJPDkOPnCtZrgQesprZX"
            ref={recaptchaRef}
            onChange={(value: string | null) => setCaptchaValue(value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-[#1f3b3a] hover:bg-[#254a48] text-white font-semibold py-3 px-6 rounded transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
