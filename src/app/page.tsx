import ProjectCard from "./components/projectcard";
import XPCard from "./components/xpcard";
import nextlogo from "./favicon.ico";

export default function Home() {
  //Sticky Headers only work if html element has no overflow(auto, flow, hidden) applied to it(either on itself or inherited by parents)
  // & if one of the 4 directions (top, bottom, left, right) are defined for the element
  return (
    <main>
      <div className="flex-grow flex flex-col justify-between gap-y-24">
        <div id="about">
          <h2 className="bg-yellow-500 phonesize:sticky phonesize:top-0">
            About
          </h2>
          <p>
            {'Started my coding journey in High School after finding out about a Computer Science course, and deciding to take it after my love for video games. A few years of learning later, I have now earned my Bachelor\'s degree in Computer Science, and had the opportunity to work for one of the biggest agricultural equipment companies in the world.'}
          </p>
          <p>
            {'My main area of expertise/knowledge is in C++, which I used for most of my learning at college, but I also have some experience with other frequently-used technologies, like Python, React, Javascript, HTML, CSS, and more. I am currently hoping to learn more about embedded systems, since that was a topic that I have not learned about, but I am open to building any type of software out there.'}
          </p>
          <p>
            {'My hobbies outside of software are playing video games, especially fighting games like Street Fighter or Guilty Gear, exercising, reading novels, or watching movies.'}
          </p>
        </div>

        <div id="experience">
          <h2 className="bg-yellow-500 phonesize:sticky phonesize:top-0">
            Experience
          </h2>

          <XPCard 
            datespan={'May 2023 - Aug 2023'}
            title={'Software Engineer IT Intern'}
            company={'John Deere'}
            description={'Revamped an old, static feature in a highly-used web application by John Deere equipment dealers to be more dynamic/user customizable. Worked with frontend using React and Typescript for the web application UI/user behavior, and backend with Java and Spring to create new API endpoints and connect to the application database.'}
          />
        </div>

        <div id="projects">
          <h2 className="bg-yellow-500 phonesize:sticky phonesize:top-0">
            Projects
          </h2>

          <ProjectCard 
            thumbnail={nextlogo}
            title={'Plant Company Quote Web Application'}
            description={'Semester group project where we built a web application that tracks quotes for a plant company; meeting requirements given to us by the professor. Used React + Node.js as the frontend application server, Express.js as the backend/API server, and MariaDB as the database. Learned a lot about the software development cycle, and how to convert user requirements into a fully- functioning software product.'}
          />
        </div>

      </div>
    </main>
  );
}
