import "./components.css";
import profileImage from "../assets/profile.jpg";
import web1 from "../assets/download.jpeg";
import web2 from "../assets/download (1).jpeg";
import ctf from "../assets/ctf.png";
import expIcon from "../assets/expIcon.svg";
import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const projectsTitle = [
  { id: 0, name: "All" },
  { id: 1, name: "Javascript" },
  { id: 2, name: "React" },
  { id: 3, name: "ReactNative" },
  { id: 4, name: "Api" },
];

const projectsDetails = [
  {
    id: 1,
    title: "Javascript Todo",
    search: 1,
    image: web1,
    code: "https://github.com/wynehtetaung/embc-html",
  },
  { id: 2, title: "Instagram clone", search: 1, image: web2, code: "#" },
  { id: 3, title: "React Project", search: 2, image: web2, code: "#" },
  { id: 4, title: "React Native", search: 4, image: web2, code: "#" },
  { id: 5, title: "Api Project", search: 3, image: web1, code: "#" },
];
const languageSkills = [
  { id: 1, language: "HTML", percent: "80%" },
  { id: 2, language: "CSS", percent: "70%" },
  { id: 3, language: "Javascript", percent: "75%" },
  { id: 4, language: "React", percent: "50%" },
  { id: 5, language: "React Native", percent: "50%" },
  { id: 6, language: "Node.js", percent: "50%" },
  { id: 7, language: "Express", percent: "70%" },
  { id: 8, language: "C++", percent: "40%" },
];
const proSkills = [
  { id: 1, skill: "Team work", percent: 80 },
  { id: 2, skill: "Communication", percent: 50 },
  { id: 3, skill: "Creativity", percent: 45 },
  { id: 4, skill: "Project Management", percent: 50 },
];
const certificates = [
  { id: 1, image: ctf },
  { id: 2, image: ctf },
  { id: 3, image: ctf },
  { id: 4, image: ctf },
];

export default function Body() {
  const [projects, setProjects] = useState(projectsDetails);
  const [language, setLanguage] = useState(true);
  const [proSkill, setProSkill] = useState(false);

  const filter = (search) => {
    if (search == 0) {
      setProjects(projectsDetails);
    } else {
      const filterProject = projectsDetails.filter(
        (project) => project.search === search
      );
      setProjects(filterProject);
    }
  };
  return (
    <>
      <div className="w-11/12  mx-auto">
        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center">
            <div className="profile rounded-full">
              <img
                src={profileImage}
                alt=""
                className="w-72 h-72 rounded-full object-cover"
              />
            </div>
            <p className="animate-pulse mt-10 font-bold font-mono  text-slate-500  tracking-wide ssm:text-2xl md:text-3xl">
              Hey
            </p>
            <p className="animate-pulse mt-1 font-bold font-mono text-slate-500  tracking-wide ssm:text-2xl md:text-3xl lg:text-3xl">
              Welcome My Portfolio.
            </p>
            <p className="my-4 text-3xl font-bold font-mono text-slate-500 tracking-wide">
              I'm Wyne Htet
            </p>
            <p className="text-2xl    text-slate-500 tracking-wide">
              Web Developer (Backend)
            </p>
            <p className="text-center mt-3 text-slate-500 ssm:w-full md:w-2/4 lg:w-2/4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              natus eveniet hic temporibus vero voluptates incidunt alias maxime
              quis debitis, laborum sunt voluptatibus porro. Nisi nihil
              blanditiis cum quisquam molestias?
            </p>
            <div className="flex gap-20 my-7  justify-center">
              <a className="button text-slate-500 w-32" href="#">
                Learn More
              </a>
              <a className="button text-slate-500 w-32" href="#">
                Contact Me
              </a>
            </div>
          </div>
        </div>
        <div
          className="flex justify-evenly flex-wrap gap-10  w-10/12 mx-auto"
          id="#about"
        >
          <div className="about-image w-80 my-11 rounded-lg">
            <img
              src={profileImage}
              alt=""
              className="rounded-lg w-80 h-96 object-cover"
            />
          </div>
          <div className="about-text mt-10 lg:block ssm:hidden">
            <p className="text-slate-500 text-3xl">About</p>
            <p className=" text-slate-500 w-auto ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              id facere fugit officiis recusandae architecto neque consequatur
              quasi, nisi illum doloribus ea odit. Ipsam tempore itaque
              voluptatum delectus tempora dignissimos!
            </p>
          </div>
        </div>
        <div className="lg:hidden md:block sm:block">
          <div className=" mx-auto  w-2/4 ssm:w-full">
            <p className="text-slate-500 text-3xl text-center">About</p>
            <p className="text-center mt-3 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              natus eveniet hic temporibus vero voluptates incidunt alias maxime
              quis debitis, laborum sunt voluptatibus porro. Nisi nihil
              blanditiis cum quisquam molestias?
            </p>
          </div>
        </div>
        <div id="projects" className="mt-10 pb-9">
          <p className="text-3xl text-slate-500 w-4/5 mx-auto mb-4">Projects</p>
          <div className="w-4/5 mx-auto h-2 bg-amber-400 rounded-full">
            <div className="w-3/4 h-2 bg-indigo-500 rounded-full "></div>
          </div>
          <div className="ssm:overflow-scroll md:overflow-hidden">
            <div className="flex flex-row justify-start gap-8 items-center w-4/5 mx-auto h-20">
              {projectsTitle.map((project) => {
                return (
                  <div
                    key={project.id}
                    className="button w-32"
                    onClick={() => {
                      filter(project.id);
                    }}
                  >
                    {project.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 ssm:w-full ssm:justify-center md:w-4/5 md:justify-start p-3 mx-auto">
            {projects.map((project) => {
              return (
                <div
                  key={project.id}
                  className="card  rounded-md hover:animate-pulse cursor-pointer  bg-slate-500 "
                >
                  <div className="item">
                    <img
                      src={project.image}
                      alt="project image"
                      className="rounded-t-md w-60 h-52 object-cover object-center "
                    />
                    <p className="text-sm  font-medium text-gray-50 text-center py-3 font-sans">
                      {project.title}
                    </p>
                    <a target="_blank" href={project.code}>
                      <p className="w-3/5  mx-auto rounded text-xs pb-2 font-light text-gray-50 text-center py-1 font-sans">
                        {"{"} show code {"}"}
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="skills">
          <p className="text-3xl text-end text-slate-500 w-4/5 mx-auto mb-4">
            Skills
          </p>
          <div className="w-4/5 mx-auto h-2 bg-amber-400 rounded-full">
            <div className="w-3/4 h-2 bg-indigo-500 rounded-full "></div>
          </div>
          <div className="flex gap-4 justify-center pt-10 ssm:flex-wrap">
            <div
              className="button w-40"
              onClick={() => {
                setLanguage(true);
                setProSkill(false);
              }}
            >
              Language Skill
            </div>
            <div
              className="button w-40"
              onClick={() => {
                setLanguage(false);
                setProSkill(true);
              }}
            >
              Professional Skill
            </div>
          </div>
          <div className="flex w-3/6 mx-auto">
            {language && (
              <div className="flex flex-col gap-6 w-full py-10">
                {languageSkills.map((skill) => {
                  return (
                    <div key={skill.id}>
                      <span className="text-slate-500 font-sans mb-1">
                        {skill.language}
                      </span>
                      <div className="w-full h-3 bg-slate-500 rounded-full">
                        <div
                          className="h-3 glow relative rounded-full"
                          style={{ width: skill.percent }}
                        >
                          <span className="text-xs text-inherit absolute left-2/4">
                            {skill.percent}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {proSkill && (
              <div className="flex justify-center gap-9 mt-24 mb-9 flex-wrap">
                {proSkills.map((skill) => {
                  return (
                    <div key={skill.id} className="w-2/6">
                      <CircularProgressbar
                        className="mb-5"
                        value={skill.percent}
                        maxValue={100}
                        strokeWidth={4}
                        text={`${skill.percent}%`}
                        styles={buildStyles({
                          pathColor: "#acb6e5",
                          textColor: "#64748b",
                          trailColor: "transparent",
                        })}
                      />
                      <span className="text-slate-500 text-center ssm:text-sm lg:text-2xl font-extralight">
                        {skill.skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div id="Certifications">
          <p className="text-3xl  text-slate-500 w-4/5 mx-auto mb-4">
            Certifications
          </p>
          <div className="w-4/5 mx-auto h-2 bg-amber-400 rounded-full">
            <div className="w-3/4 h-2 bg-indigo-500 rounded-full "></div>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper mt-10"
          >
            {certificates.map((certificate) => {
              return (
                <SwiperSlide key={certificate.id} className="rounded-xl">
                  <img src={certificate.image} alt="Certificate image" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div id="experience">
          <p className="text-3xl text-end text-slate-500 w-4/5 mx-auto mb-4">
            Experience
          </p>
          <div className="w-4/5 mx-auto h-2 bg-amber-400 rounded-full">
            <div className="w-3/4 h-2 bg-indigo-500 rounded-full "></div>
          </div>
          <div className="flex w-1/3 mx-auto justify-around my-10">
            <div className="button w-36">Experience</div>
            <div className="button w-36">Education</div>
          </div>
          <div className="flex justify-evenly md:gap-5 ssm:g-0">
            <div className="w-full  relative">
              <div
                className="box w-3/6 p-5 absolute left-44"
                style={{ top: "19%" }}
              >
                <h3 className="text-slate-500 text-2xl font-medium">Title</h3>
                <p className="text-slate-500 font-light tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  commodi impedit corrupti. Ad hic magni tenetur nulla nesciunt
                  mollitia repellendus iste inventore reprehenderit, minus enim
                  minima quae dignissimos qui at. Ad hic magni tenetur nulla
                  nesciunt mollitia repellendus iste inventore reprehenderit,
                  minus enim minima quae dignissimos qui at.
                </p>
              </div>
            </div>
            <div>
              <div
                className="w-1 rounded-full bg-slate-600 relative"
                style={{ height: "140vh" }}
              >
                <div
                  className="w-24 h-24 rounded-full absolute"
                  style={{ left: -43, top: "30%" }}
                >
                  <img src={expIcon} />
                </div>
                <div
                  className="w-24 h-24 rounded-full absolute"
                  style={{ left: -43, top: "70%" }}
                >
                  <img src={expIcon} />
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <div
                className="box w-3/6 p-5 absolute left-44"
                style={{ top: "60%" }}
              >
                <h3 className="text-slate-500 text-2xl font-medium">Title</h3>
                <p className="text-slate-500 font-light tracking-wide">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  commodi impedit corrupti. Ad hic magni tenetur nulla nesciunt
                  mollitia repellendus iste inventore reprehenderit, minus enim
                  minima quae dignissimos qui at.Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Vel commodi impedit corrupti. Ad
                  hic magni tenetur nulla nesciunt mollitia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
