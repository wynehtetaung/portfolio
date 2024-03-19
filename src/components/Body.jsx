import "./components.css";
import profileImage from "../assets/profile.jpg";
import web1 from "../assets/download.jpeg";
import web2 from "../assets/download (1).jpeg";

const projects = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "React" },
  { id: 3, name: "ReactNative" },
  { id: 4, name: "Api" },
];

const projectsDetail = [
  { id: 1, title: "example", search: 1, image: web1 },
  { id: 2, title: "example", search: 1, image: web2 },
];

export default function Body() {
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
            <p className="animate-pulse mt-10 text-3xl font-bold font-mono  text-slate-500  tracking-wide">
              Hey
            </p>
            <p className="animate-pulse mt-1 text-3xl font-bold font-mono text-slate-500  tracking-wide">
              Welcome My Portfolio.
            </p>
            <p className="my-4 text-3xl font-bold font-mono text-slate-500 tracking-wide">
              I'm Wyne Htet
            </p>
            <p className="text-2xl    text-slate-500 tracking-wide">
              Web Developer (Backend)
            </p>
            <p className="w-2/4 text-center mt-3 text-slate-500">
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
          <div className="about-text mt-10 lg:block sm:hidden">
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
          <div className=" mx-auto  w-2/4 ">
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
          <div className="flex flex-row justify-center gap-8 items-center w-4/5 mx-auto h-20">
            {projects.map((project) => {
              return (
                <div key={project.id} className="button w-32">
                  {project.name}
                </div>
              );
            })}
          </div>
          {/* <div className="flex">
            <div className="card">
              <img src={web1} alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
