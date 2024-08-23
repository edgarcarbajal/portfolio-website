import Link from "next/link";
import Navi from "./navi";

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

          <Navi />

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