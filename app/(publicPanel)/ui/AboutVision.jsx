import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Target, Users, Lightbulb, Code2 } from "lucide-react";

const AboutVision = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 mb-2">
            Who We Are
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            About Our Coaching Management System
          </h1>

          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Empowering learners and programmers through personalized
            coaching, continuous learning, and professional development.
          </p>
        </div>

        {/* About & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* About Us */}
          <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="bg-teal-600 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/20">
                  <Users className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-sm text-teal-100">
                    Learn About Us
                  </p>

                  <h2 className="text-2xl font-bold">
                    About Us
                  </h2>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <CardDescription className="text-sm md:text-base text-slate-600 leading-7">
                At its core, programming coaching management recognizes that
                programming is not just about writing code—it's about
                problem-solving, creativity, and continuous learning.
                Therefore, coaching in this context focuses on more than just
                technical proficiency; it also emphasizes the development of
                soft skills such as communication, teamwork, and adaptability.
                One key aspect of programming coaching management is providing
                individualized support and guidance to programmers. Coaches work
                closely with each team member to identify their strengths,
                areas for improvement, and career aspirations. Through regular
                feedback sessions, goal setting, and skill development plans,
                coaches help programmers chart a path for growth and advancement
                within the organization.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="bg-slate-800 text-white p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-white/10">
                  <Target className="w-6 h-6" />
                </div>

                <div>
                  <p className="text-sm text-slate-300">
                    Where We Are Going
                  </p>

                  <h2 className="text-2xl font-bold">
                    Our Vision
                  </h2>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <CardDescription className="text-sm md:text-base text-slate-600 leading-7">
                The vision of programming coaching management encompasses
                fostering a culture of continuous learning, collaboration, and
                excellence within the realm of software development. It
                recognizes that the landscape of programming is dynamic and
                constantly evolving, requiring individuals and teams to adapt,
                innovate, and grow. At its core, programming coaching management
                aims to empower programmers to reach their full potential by
                providing tailored support, guidance, and resources. This vision
                emphasizes not only technical proficiency but also the
                development of critical soft skills such as communication,
                problem-solving, and teamwork.
              </CardDescription>
            </CardContent>
          </Card>

        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">

          <div className="bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-4 hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-teal-50 text-teal-600">
              <Code2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Technical Growth
              </h3>
              <p className="text-sm text-slate-500">
                Build practical programming skills.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-4 hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
              <Lightbulb className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Continuous Learning
              </h3>
              <p className="text-sm text-slate-500">
                Learn, adapt, and innovate.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-5 flex items-center gap-4 hover:shadow-md transition">
            <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
              <Users className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Collaboration
              </h3>
              <p className="text-sm text-slate-500">
                Grow through teamwork and mentorship.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutVision;
