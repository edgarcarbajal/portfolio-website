import Link from "next/link";

const PHeader = () => {
    return(
        <header>
          <div>
            <h1 className="text-4xl font-bold">
              Edgar Carbajal
            </h1>
            <p>Computer Science Graduate from Northern Illinois University</p>
            <br/>
            <p>
              Just graduated, and looking for entry-level positions in Software Engineering!
            </p>
          </div>

          <nav className="flex-grow flex">
            <ul className="flex-grow flex flex-col justify-evenly">
              <li>
                <Link href={"#about"}>
                  About
                </Link>
              </li>
              <li>
                <Link href={"#experience"}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href={"#projects"}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex justify-evenly">
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </nav>
        </header>
    );
}

export default PHeader;