"use client";

import {
  Code2,
  Users,
  BookOpen,
  Target,
  Laptop,
  Award,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Programming Coaching",
    description:
      "Learn programming through structured coaching, practical exercises, and personalized guidance.",
  },
  {
    icon: BookOpen,
    title: "Course Management",
    description:
      "Explore organized courses designed to help learners build technical and professional skills.",
  },
  {
    icon: Users,
    title: "Personalized Mentorship",
    description:
      "Get individual guidance from instructors to identify strengths and improve areas that need attention.",
  },
  {
    icon: Laptop,
    title: "Practical Learning",
    description:
      "Gain hands-on experience through practical learning activities and real-world programming concepts.",
  },
  {
    icon: Target,
    title: "Career Development",
    description:
      "Develop the technical and soft skills needed to prepare for future academic and career opportunities.",
  },
  {
    icon: Award,
    title: "Skill Improvement",
    description:
      "Continuously improve your knowledge, problem-solving ability, communication, and teamwork skills.",
  },
];

const Services = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
            What We Offer
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Our Services
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-slate-500 leading-7">
            Our Coaching Management System provides a complete learning
            environment where students can discover courses, develop their
            programming skills, and receive personalized guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <h2 className="mt-5 text-xl font-semibold text-slate-800 group-hover:text-teal-600 transition">
                  {service.title}
                </h2>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  {service.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-teal-500 group-hover:w-16 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-2xl bg-slate-800 p-8 md:p-10 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Start Learning?
          </h2>

          <p className="mt-3 text-slate-300 max-w-xl mx-auto">
            Explore our courses and take the next step toward improving your
            programming and professional skills.
          </p>

          <a
            href="/"
            className="inline-block mt-6 bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Courses
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
