import Link from "next/link";
import ProjectCard from "./components/projectcard";
import XPCard from "./components/xpcard";
import ExtLinkSVG from "./svgcomponents/extlinkSVG";

export default function Home() {
  //Sticky Headers only work if html element has no overflow(auto, flow, hidden) applied to it(either on itself or inherited by parents)
  // & if one of the 4 directions (top, bottom, left, right) are defined for the element
  return (
    <main>
      <div className={'flex-grow flex flex-col justify-between gap-y-24'}>
        <section 
          className={'flex flex-col justify-between gap-y-8'}
          id={'about'}
        >
          <h2 className={'backdrop-blur-md mobilesize:sticky mobilesize:top-0'}>
            <Link href={'#about'} className={'int-text-link'}>
              About
            </Link>
          </h2>

          <hr />

          <p>
            {'Started my coding journey in High School after finding out about a Computer Science course, and deciding to take it after my love for video games. A few years of learning at '}
            <a 
              className={'ext-text-link'}
              href={'https://www.mchenry.edu/'}
              target={'_blank'}
            >
              McHenry County College
            </a> 

            {' and '} 

            <a 
              className={'ext-text-link'}
              href={'https://www.niu.edu/'}
              target={'_blank'}
            >
              Northern Illinois University
            </a> 

            {' later, I have now earned my Bachelor\'s degree in Computer Science, and had the opportunity to work for '} 

            <a 
              className={'ext-text-link'}
              href={'https://www.deere.com/'}
              target={'_blank'}
            >
              one of the biggest agricultural equipment companies
            </a> 

            {' in the world.'}
          </p>
          <p>
            {'My main area of expertise/knowledge is in C++, which I used for most of my learning at college, but I also have some experience with other frequently-used technologies, like Python, React, Javascript, HTML, CSS, and more. I am currently hoping to learn more about embedded systems '} 

            <a 
              className={'ext-text-link'}
              href={'https://www.edx.org/learn/embedded-systems/the-university-of-texas-at-austin-embedded-systems-shape-the-world-microcontroller-input-output'}
              target={'_blank'}
            >
              using a free course from edX
            </a>

            {', since that was a topic that I have not learned about, but I am open to building any type of software out there.'}
          </p>
          <p>
            {'My hobbies outside of software are playing video games, especially fighting games like '}
            <a 
              className={'ext-text-link'}
              href={'https://www.streetfighter.com'}
              target={'_blank'}
            >
              Street Fighter
            </a> 
             
            {' or '} 

            <a 
              className={'ext-text-link'}
              href={'https://www.guiltygear.com'}
              target={'_blank'}
            >
              Guilty Gear
            </a>
            
            {', exercising, reading novels, and sometimes watching movies.'}
          </p>
        </section>

        <section 
          className={'flex flex-col justify-between gap-y-8'}
          id={'experience'}
        >
          <h2 className={'backdrop-blur-md mobilesize:sticky mobilesize:top-0'}>
            <Link href={'#experience'} className={'int-text-link'}>
              Experience
            </Link>
          </h2>

          <hr />

          <XPCard 
            datespan={'May 2023 - Aug 2023'}
            title={'Software Engineer IT Intern'}
            subtitle={''}
            company={'John Deere'}
            description={'Revamped an old, static feature in a highly-used web application by John Deere equipment dealers to be more dynamic/user customizable. Worked with frontend using React and Typescript for the web application UI/user behavior, and backend with Java and Spring to create new API endpoints and connect to the application database.'}
            hreflink={"https://www.deere.com/"}
            skills={['React', 'Typescript', 'React Testing Library', 'Java', 'Spring', 'Mockito', 'HTML', 'SCSS']}
          />
        </section>

        <section 
          className={'flex flex-col justify-between gap-y-8'}
          id={'projects'}
        >
          <h2 className={'backdrop-blur-md mobilesize:sticky mobilesize:top-0'}>
            <Link href={'#projects'} className={'int-text-link'}>
              Projects
            </Link>
          </h2>

          <hr />

          <ProjectCard 
            thumbnail={"/plantcomp.png"}
            title={'Plant Company Quote Web Application'}
            subtitle={'CSCI 467 @ NIU'}
            description={'Semester group project where we built a web application that tracks quotes for a plant company; meeting requirements given to us by the professor. Used React + Node.js as the frontend application server, Express.js as the backend/API server, and MariaDB as the database. Learned a lot about the software development cycle, and how to convert user requirements into a fully- functioning software product.'}
            hreflink={'https://www.github.com/edgarcarbajal/cs467proj/'}
            skills={['React', 'Javascript', 'Express.js', 'SQL', 'TailwindCSS', 'HTML & CSS']}
          />

          <ProjectCard 
            thumbnail={'/karaoke.png'}
            title={'Karaoke Web Application'}
            subtitle={'CSCI 466 @ NIU'}
            description={'Semester group project where we built a web application given requirements by the professor; to show what we had learned about databases. Used PHP to interface with the backend, and dynamically printout the HTML/CSS to be rendered to the frontend. Showed my knowledge about how to set up database schemas in a relational database, how to make sure how to use SQL to get, and update the right data.'}
            hreflink={'https://www.github.com/edgarcarbajal/cs466proj/'}
            skills={['PHP', 'SQL', 'Bootstrap CSS', 'HTML & CSS']}
          />
        </section>


        <div>
          <Link 
            className={'ext-text-link inline-flex gap-2 hover:fill-sky-400'}
            href={'/resume.pdf'}
          >
            View Full Resume Here!
            <ExtLinkSVG className={'w-6 h-6'}/>
          </Link>
        </div>


       <div className={'text-sm'}>
          <hr className={'my-8'}/>
          <p className={'block dark:hidden text-headerlink_day'}>
            {'Currently on Day Theme! Set your device/browser to dark mode to turn on Night Theme.'}
          </p>
          <p className={'hidden dark:block text-headerlink_night'}>
            {'Currently on Night Theme! Set your device/browser to light mode to turn on Day Theme.'}
          </p>
       </div>
        <p className={'text-subcolor_day dark:text-subcolor_night text-xs'}>
          {'Website design inspiration from "Hyperspace" template from the website '}
          <a
            className={'ext-text-link'}
            href={'https://www.html5up.net/'}
            target={'_blank'}
          >
            {'html5up.net'}
          </a>

          {' and from engineer '}

          <a
            className={'ext-text-link'}
            href={'https://www.brittanychiang.com/'}
            target={'_blank'}
          >
            {'Brittany Chiang'}
          </a>
          
          {'. Built by me in Next.js + TailwindCSS and deployed in Vercel. Source Code can be found here: '}
          <a
            className={'ext-text-link'}
            href={'https://www.github.com/edgarcarbajal/portfolio-website/'}
            target={'_blank'}
          >
            {'https://www.github.com/edgarcarbajal/portfolio-website/'}
          </a>
        </p>
      </div>
    </main>
  );
}
