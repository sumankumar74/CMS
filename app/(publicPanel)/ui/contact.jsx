"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
            Get In Touch
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Contact Us
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-500 leading-7">
            Have a question about our courses or coaching programs? Send us a
            message and our team will be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Contact Information */}
          <div className="lg:col-span-1 bg-slate-800 rounded-2xl p-7 text-white">
            <h2 className="text-2xl font-bold">
              Let's Talk
            </h2>

            <p className="mt-3 text-slate-300 text-sm leading-6">
              We are here to help you with course information, admissions,
              coaching programs, and other queries.
            </p>

            <div className="mt-8 space-y-6">

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-teal-600">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Email
                  </p>
                  <p className="font-medium">
                    info@coachingmanagement.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-teal-600">
                  <Phone className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Phone
                  </p>
                  <p className="font-medium">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-teal-600">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Location
                  </p>
                  <p className="font-medium">
                    Uttarakhand, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 rounded-xl bg-teal-600">
                  <Clock className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    Working Hours
                  </p>
                  <p className="font-medium">
                    Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-md p-7 md:p-9">

            <h2 className="text-2xl font-bold text-slate-800">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill out the form below and we'll get back to you.
            </p>

            <form className="mt-7 space-y-5">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to ask?"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none resize-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-7 py-3 rounded-xl transition shadow-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;