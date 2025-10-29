"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaShieldAlt,FaHeartbeat,FaUsers,FaClipboardList,FaPlay,FaStar,FaPlus,FaMinus,FaClock, FaPhoneAlt, 
  FaMapMarkerAlt,FaFacebookF, FaInstagram, FaYoutube,
} from "react-icons/fa";
import { GrShieldSecurity } from "react-icons/gr";
import { MdOutlineAccessAlarms } from "react-icons/md";


const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What is PillPinger ?",
      answer:
        "PillPinger is a simple tool that helps elderly people, caregivers, and family members remember to take or give medications on time.",
    },
    {
      question: "How does PillPinger send reminders?",
      answer:
        "PillPinger sends reminders via push notifications and SMS alerts, ensuring you never miss a dose.",
    },
    {
      question: "Can caregivers get notifications too?",
      answer:
        "Yes! Caregivers and family members can receive real-time notifications to monitor and assist with medication management.",
    },
    {
      question:
        "What is the recommended vaccination schedule for children and adults?",
      answer:
        "The app provides WHO-recommended vaccination schedules and allows customization based on age, region, and medical advice.",
    },
    {
      question: "Is PillPinger easy to set up for older people ?",
      answer:
        "Absolutely! PillPinger is designed with simplicity in mind—large buttons, clear instructions, and voice-assisted setup.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const plans = [
    {
      name: "Basic plan",
      price: "$10",
      period: "Per User Per Month",
      description: "Basic features for up to 10 years",
      buttonText: "Get Started",
      features: [
        "Access to basic features",
        "Medication reminders",
        "Profile customization",
        "Data tracking",
        "Basic reports",
      ],
      bg: "bg-white",
      textColor: "text-gray-800",
      btnColor: "bg-emerald-900 text-white",
    },
    {
      name: "Business plan",
      price: "$20",
      period: "Per User Per Month",
      description: "Advanced features with team collaboration",
      buttonText: "Get Started",
      features: [
        "All Basic features",
        "Multi-user support",
        "Advanced analytics",
        "Priority notifications",
        "Custom branding",
      ],
      bg: "bg-orange-500",
      textColor: "text-white",
      btnColor: "bg-white text-orange-600",
    },
    {
      name: "Enterprise plan",
      price: "$40",
      period: "Per User Per Month",
      description: "For large-scale healthcare systems",
      buttonText: "Get Started",
      features: [
        "All Business features",
        "API integration",
        "Dedicated support",
        "Custom dashboards",
        "Unlimited users",
      ],
      bg: "bg-white",
      textColor: "text-gray-800",
      btnColor: "bg-emerald-900 text-white",
    },
  ];

  const testimonials = [
    {
      name: "Grace Olaleye",
      location: "Lagos, Nigeria",
      text: "MediMinder has given me peace of mind. I no longer worry about forgetting my pills, and my children feel reassured knowing I'm on track.",
      date: "July 2025",
      rating: 5,
      image: "/girl.jpg"
    },
    {
      name: "Richard M.",
      location: "Manchester, UK",
      text: "I take multiple medications daily, and this app keeps everything organized. The reminders are spot on and easy to follow.",
      date: "August 2025",
      rating: 5,
      image: "/girl.jpg"
    },
    {
      name: "Anita S.",
      location: "Toronto, Canada",
      text: "As a caregiver for my mother, MediMinder has been a lifesaver. I can check in on her progress without constantly calling.",
      date: "May 2025",
      rating: 5,
      image: "/girl.jpg"
    },
    {
      name: "Evelyn D.",
      location: "Houston, USA",
      text: "What I love most is the health tracking feature. I can share updates with my doctor in seconds — it makes appointments so much easier.",
      date: "July 2025",
      rating: 5,
      image: "/girl.jpg"
    },
    {
      name: "Samuel K.",
      location: "Nairobi, Kenya",
      text: "Simple, clear, and reliable. It feels like I have a personal assistant reminding me to stay healthy every day.",
      date: "July 2025",
      rating: 5,
      image: "/girl.jpg"
    },
  ];

  return (
    <main>
      {/* Navbar Section */}
      <section className="h-[550px] rounded-2xl bg-green-950 relative ">
        <Navbar />
        <section className="flex flex-col md:flex-row items-center px-16 py-20 gap-16">
        {/* Left Side*/}
        <div className="max-w-xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Stay on <span className="text-[#FF7F00]">Track</span>, <br />
            Stay <span className="text-[#FF7F00]">Healthy</span>
          </h1>

          <p className="text-white/80 text-base leading-relaxed">
            A <span className="font-semibold text-white">simple, reliable, and caring</span> reminder system that
            makes medication management effortless for you and your loved ones.
          </p>

          {/* user avatar */}
          <div className="flex items-center gap-4 pt-4">
            {/* image */}
            <div className="flex -space-x-3">
              {["/old1.jpg", "/old2.jpg", "/old3.jpg", "/old4.jpg", "/old5.jpg", "/old6.jpg"].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`user-${i + 1}`}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white h-10 w-10 object-cover"
                />
              ))}
            </div>

            {/* Stats */}
            <div>
              <h3 className="text-lg font-semibold text-white">168k+</h3>
              <p className="text-[11px] text-white/70 leading-tight">Realtime Users</p>
            </div>
          </div>

        </div>
        {/* Right Side */}
        <div className="max-w-xl space-y-4 mr-50 relative">
            <div className="h-52 w-52 rounded-2xl border-2 space-x-4 border-white flex ">
              <div className="space-y-4 ">
                {/* first tag */}
                <div className=" bg-white border rounded-md text-gray-950 flex gap-0.5 px-2 py-1 
                absolute -right-13 -top-5">
                <GrShieldSecurity className="bg-orange-400 text-white p-0.5 text-3xl"/>
                <div>
                  <div className="bg-white text-xs text-green-900 gap-x-0.5 flex">
                  Your <h1 className="text-green-950 font-semibold">Health</h1>
                  </div>
                  <div className="bg-white text-xs gap-x-0.5 flex text-green-900 ">
                  Our <h1 className="text-green-950 font-semibold">Priority</h1>
                  </div>
                </div>
                </div>
                {/* first tag bottom */}
                <Image
                src="/nurse 1.jpg"
                alt="user"
                width={160}
                height={160}
                className="rounded-2xl object-cover border-2 h-22 w-22 absolute left-7 -top-10 border-white"
              />
              <Image
                src="/doctor (2).jpg"
                alt="user"
                width={160}
                height={160}
                className="rounded-2xl object-cover border-2 h-40 w-34 absolute -left-5 -bottom-8 border-white"
              />

              {/* second tag */}
              <div className="bg-white text-green-900 text-xs absolute -left-28 -bottom-1 flex px-2 py-1
               rounded-md">
                <h1 className="max-w-20">Never <span className="font-semibold">miss</span> a dose</h1>
                <MdOutlineAccessAlarms className="bg-orange-400 text-white p-0.5 text-3xl"/>
              </div>
              {/* secomd tag bottom */}
              
              </div>
              <Image
                src="/nurse 2.jpg"
                alt="user"
                width={200}
                height={200}
                className="rounded-2xl object-cover border-2 h-32 w-28 absolute -right-13 top-6 border-white"
              />
              
            </div>
        </div>
        
        </section>
      </section>

      {/* Section 2 */}
      <section className="flex justify-center items-center py-10 bg-white">
      <div className='relative border-2 flex flex-col border-green-950 px-[420px] rounded-2xl py-22 bg-green-950'></div>
      <div className="absolute bg-white border-[3px] border-green-900 rounded-2xl px-10 py-4 pb-6 max-w-5xl
       text-center shadow-sm">
        <p className="text-gray-800 mb-6">
          Trusted by <span className="text-orange-500 font-medium">Thousands of Families</span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-300">
          <div className="px-4">
            <h2 className="text-4xl font-bold text-green-900">120k+</h2>
            <p className="text-sm text-gray-600 mt-1">Vaccinations Tracked</p>
          </div>
          <div className="px-4">
            <h2 className="text-4xl font-bold text-green-900">24/7</h2>
            <p className="text-sm text-gray-600 mt-1">Access to Records & Care</p>
          </div>
          <div className="px-4">
            <h2 className="text-4xl font-bold text-green-900">97%</h2>
            <p className="text-sm text-gray-600 mt-1">User Satisfaction</p>
          </div>
          <div className="px-4">
            <h2 className="text-4xl font-bold text-green-900">100+</h2>
            <p className="text-sm text-gray-600 mt-1">Verified Doctors Onboard</p>
          </div>
        </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="bg-green-50  py-10 px-6 ">
      {/* Heading */}
      <div className="text-center flex flex-col items-center justify-center pb-5">
        <h2 className="text-4xl font-semibold text-gray-800 ">
          About <span className="text-green-900">Us</span>
        </h2>
        <span className="w-26 h-[5px] bg-orange-500 rounded-full"></span>
      </div>

      {/* content */}
      <div className="flex items-center justify-center gap-x-10">
        {/* Left  */}
        <div className="text-gray-800 max-w-md text-md leading-relaxed space-y-5">
          <p>
            At <span className="font-semibold text-green-900">PillPinger</span>, we believe that managing health should be
            simple, stress-free, and reliable especially for the elderly and those who care for them.{' '}
            <span className="font-semibold text-gray-900">Our mission</span> is to empower older adults to take their
            medications on time and with confidence, while easing the burden on caregivers and families.
          </p>
          <p>
            <span className="font-semibold text-green-900">PillPinger</span> makes medication management simple with smart
            reminders and easy-to-use tools. We help elderly individuals stay on track while giving peace of mind to families
            and healthcare professionals ensuring no dose is missed and no one is left unsupported.
          </p>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-2xl shadow-md border-amber-950">
            <Image
              src={"/nurse1.jpg"}
              alt="Nurse with elderly patient"
              height={200}
              width={200}
              className="rounded-2xl object-cover w-[300px] h-[370px]"
            />
          </div>
        </div>
      </div>
      </section>

      {/* section 4 */}
      <section className='py-10 bg-white'>
        <div className="text-center flex flex-col items-center justify-center pb-5">
          <h2 className="text-4xl font-semibold text-gray-800 ">
            Why Choose <span className="text-green-900">PillPinger</span>
          </h2>
          <span className="w-26 h-[5px] bg-orange-500 rounded-full"></span>
        </div>

        <div className='flex items-center justify-center gap-x-7'>
        {/* video */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-[300px] inset-0 h-[460px] bg-black/70">
          <Image 
            src="/nurse2.jpg"
            alt="Nurse"
            fill
            className="absolute object-cover bg-black/10 opacity-50 "
          />
        </div>


        {/* other 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl">
            {/* Card 1 */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border hover:border-orange-400 hover:shadow-md
            transition-all">
              <div className="bg-green-900 text-white w-10 h-10 flex items-center justify-center rounded-md
              mb-4">
                <FaShieldAlt size={18} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart & Reliable</h3>
              <p className="text-gray-600 text-sm">
                Stay confident with timely medication reminders that keep you on track and reduce the risk of missed doses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border hover:border-orange-400 hover:shadow-md 
            transition-all">
              <div className="bg-green-900 text-white w-10 h-10 flex items-center justify-center rounded-md
              mb-4">
                <FaUsers size={18} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Family Support Built–In</h3>
              <p className="text-gray-600 text-sm">
                Keep your loved ones and caregivers connected, ensuring shared responsibility and peace of mind.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border hover:border-orange-400 hover:shadow-md
            transition-all">
              <div className="bg-green-900 text-white w-10 h-10 flex items-center justify-center rounded-md
              mb-4">
                <FaClipboardList size={18} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple Tracking</h3>
              <p className="text-gray-600 text-sm">
                Easily record, monitor, and manage complex schedules in one place without stress or confusion.
              </p>
            </div>

            {/* Card 4 (orange border) */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-sm border hover:border-orange-400 hover:shadow-md 
            transition-all">
              <div className="bg-green-900 text-white w-10 h-10 flex items-center justify-center rounded-md 
              mb-4">
                <FaHeartbeat size={18} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Health Insights</h3>
              <p className="text-gray-600 text-sm">
                Document your health journey and share valuable updates with healthcare professionals whenever needed.
              </p>
            </div>
          </div>
        </div>
        
      </section>

      {/* section 5 */}
      <section className="pb-10 bg-white">
        <div className="relative w-full h-[350px]">
          <Image
            src="/old man1.jpg"
            alt="Elderly man smiling outdoors"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* section 6 */}
    <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What our{" "}
            <span className="text-emerald-600 border-b-4 border-orange-500 pb-1">
              Client
            </span>{" "}
            have to say
          </h2>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-white shadow-md rounded-xl p-3 text-left hover:-translate-y-1 
                  transition-transform duration-200
                  ${i === 3 ? "w-full p-6 sm:w-[600px]" : "max-w-xs"}`}
              >
                {/* Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(t.rating)].map((_, index) => (
                    <FaStar key={index} className="w-5 h-5" />
                  ))}
                </div>

                {/* Client info */}
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    height={100}
                    width={100}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">{t.name}</h3>
                    <p className="text-emerald-700 text-xs">({t.location})</p>
                  </div>
                </div>

                {/* Testimonial */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{t.text}</p>

                <p className="text-gray-400 text-xs">{t.date}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* section 7 */}
      <section className="py-20 bg-emerald-900 text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Perfect Plans Just for{" "}
            <span className="text-orange-400 border-b-4 border-white pb-1">
              You
            </span>
          </h2>

          {/* grid layout */}
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`${plan.bg} ${plan.textColor} rounded-2xl shadow-lg p-8 flex flex-col justify-between`}
              >
                {/* Plan header */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center md:justify-start gap-2">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-sm leading-tight mb-2">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm">{plan.description}</p>
                </div>

                {/* Button */}
                <button
                  className={`mt-6 ${plan.btnColor} py-2 px-4 rounded-md font-semibold hover:opacity-90 transition`}
                >
                  {plan.buttonText}
                </button>

                {/* Divider */}
                <hr className="my-6 border-gray-300/50" />

                {/* Features */}
                <div className="text-left">
                  <h4 className="font-bold mb-2 text-sm">FEATURES</h4>
                  <p className="text-sm mb-3">Everything in our basic plan...</p>
                  <ul className="space-y-2 text-sm">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="text-emerald-500 bg-white rounded-full p-[2px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className={`w-4 h-4 ${
                              plan.bg === "bg-orange-500"
                                ? "text-orange-100"
                                : "text-emerald-600"
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-7.364 7.364a1 1 0 01-1.414 0L3.293 9.414a1 1 0 011.414-1.414L9 12.293l6.293-6.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* section 8 (faq) */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          {/* title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
            <span className="text-orange-500">FAQ–</span> Frequently Asked
            Questions
          </h2>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-emerald-50"
                    : "bg-emerald-50/30 hover:bg-emerald-50"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {faq.question}
                  </h3>
                  <span className="text-emerald-700">
                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>

                {/* Expandable answer */}
                {activeIndex === index && (
                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 9 */}
      <section className="bg-emerald-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center">
        {/* Left side */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Get quick free <br /> professional consultation
          </h2>

          <div className="space-y-6 text-gray-700">
            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <FaClock className="text-emerald-700 text-2xl mt-1" />
              <div>
                <p><strong>Mon–Fri:</strong> 9:00 am – 10:00 pm</p>
                <p><strong>Sat–Sun:</strong> 9:00 am – 8:00 pm</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-emerald-700 text-2xl mt-1" />
              <div>
                <p><strong>Phone:</strong> +(690) 2560 0020</p>
                <p><strong>Email:</strong> booking@healthpoint.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-emerald-700 text-2xl mt-1" />
              <div>
                <p><strong>Phone:</strong> +(690) 2560 0020</p>
                <p><strong>Email:</strong> booking@healthpoint.com</p>
              </div>
            </div>
          </div>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2">
            <span>View Location Map</span>
          </button>
        </div>

        {/* Right side – Form */}
        <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name" className="border border-gray-300 rounded-md text-gray-700 p-3 w-full" />
              <input type="email" placeholder="Email address" className="border border-gray-300 rounded-md text-gray-700 p-3 w-full" />
              <input type="text" placeholder="+91" className="border border-gray-300 rounded-md text-gray-700 p-3 w-full" />
              <input type="text" placeholder="Department" className="border border-gray-300 rounded-md text-gray-700 p-3 w-full" />
              <input type="time" className="border border-gray-300 rounded-md text-gray-700 p-3 w-full" />
              <input type="date" className="border border-gray-300 rounded-md text-gray-700 p-3 w-full" />
            </div>

            <textarea
              placeholder="Anything else you wanna communicate"
              className="border border-gray-300 rounded-md p-3 w-full text-gray-700 h-24"
            ></textarea>

            <button type="submit" className="bg-emerald-900 text-white px-6 py-3 rounded-md hover:bg-emerald-800">
              Submit
            </button>
          </form>
        </div>
      </div>
      </section>

      {/* Footer */}
      <section className="bg-emerald-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo + Social */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-5 rounded-lg">
              {/* <img src="/logo.png" alt="PillPinger" className="w-8 h-8" /> */}
            </div>
            <h3 className="text-2xl font-semibold">PillPinger</h3>
          </div>

          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            <FaInstagram className="hover:text-orange-400 cursor-pointer" />
            <FaYoutube className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>

        {/* Columns */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Company</li>
            <li>Company</li>
            <li>Company</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Product</li>
            <li>Product</li>
            <li>Product</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Community</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Community</li>
            <li>Community</li>
            <li>Community</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-y-2 border-white my-10 py-10 flex flex-col md:flex-row items-center
       justify-between gap-6 max-w-5xl mx-auto">
        <div>
          <h4 className="text-orange-400 font-semibold text-lg">Join Our Newsletter Today</h4>
          <p className="text-gray-300 text-sm">Join Our Newsletter Today</p>
        </div>

        <div className="flex items-center w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Your Mail"
            className="bg-transparent border-2 px-4 py-3 rounded-md w-full md:w-80 outline-none
             text-white placeholder-gray-400 border-white"
          />
         
        </div>

        <div>
           <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold">
            Subscribe
          </button>
        </div>
      </div>
      </section>
    </main>
  );
};

export default Page;
