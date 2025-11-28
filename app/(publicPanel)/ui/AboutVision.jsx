// components/AboutVision.js

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const AboutVision = () => {
  return (
    <>
      <Card className="px-2 mt-2 ">
        <CardContent className="flex  flex-col shadow-md bg-white px-5">
          <CardHeader className="text-3xl font-semibold font-serif">
            About Us
          </CardHeader>
          <CardDescription className="text-sm text-slate-600">
            {" "}
            At its core, programming coaching management recognizes that
            programming is not just about writing code—its about
            problem-solving, creativity, and continuous learning. Therefore,
            coaching in this context focuses on more than just technical
            proficiency; it also emphasizes the development of soft skills such
            as communication, teamwork, and adaptability. One key aspect of
            programming coaching management is providing individualized support
            and guidance to programmers. Coaches work closely with each team
            member to identify their strengths, areas for improvement, and
            career aspirations. Through regular feedback sessions, goal setting,
            and skill development plans, coaches help programmers chart a path
            for growth and advancement within the organization.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="px-2 mt-2 ">
        <CardContent className="flex  flex-col shadow-md bg-white px-5">
          <CardHeader className="text-3xl font-semibold font-serif">
            Our Vision
          </CardHeader>
          <CardDescription className="text-sm text-slate-600">
            {" "}
            The vision of programming coaching management encompasses fostering
            a culture of continuous learning, collaboration, and excellence
            within the realm of software development. It recognizes that the
            landscape of programming is dynamic and constantly evolving,
            requiring individuals and teams to adapt, innovate, and grow. At its
            core, programming coaching management aims to empower programmers to
            reach their full potential by providing tailored support, guidance,
            and resources. This vision emphasizes not only technical proficiency
            but also the development of critical soft skills such as
            communication, problem-solving, and teamwork.
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
};

export default AboutVision;
