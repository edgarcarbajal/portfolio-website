import Link from "next/link";

const Navi = () => {
    return(
        <nav className={'flex-grow flex'}>
            <ul className={'flex-grow flex flex-col justify-evenly items-center'}>
              <li>
                <Link href={'#about'} className={'ext-text-link'}>
                  About
                </Link>
              </li>
              <li>
                <Link href={'#experience'} className={'ext-text-link'}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href={'#projects'} className={'ext-text-link'}>
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
    );
}

export default Navi;