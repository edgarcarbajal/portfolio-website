import Link from "next/link";

const Navi = () => {
    return(
        <nav className={"flex-grow flex"}>
            <ul className={"phonesize:hidden flex-grow flex flex-col justify-evenly items-center"}>
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