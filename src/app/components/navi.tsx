import Link from "next/link";

const Navi = () => {
    return(
        <nav className={"mobilesize:hidden flex-grow flex"}>
            <ul className={"flex-grow flex flex-col justify-evenly items-center"}>
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
    );
}

export default Navi;