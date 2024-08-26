import Link from "next/link";
import Navi from "./navi";
import FooterNavi from "./footernavi";

const PHeader = () => {
    return(
        <header>
          <div>
            <h1>
              <Link href={'/'}>
                Edgar Carbajal
              </Link>
            </h1>
            <p>Computer Science Graduate from Northern Illinois University (NIU).</p>
            <br/>
            <p>
              Just graduated, and looking for entry-level positions in Software Engineering!
            </p>
          </div>

          <Navi />

          <FooterNavi />
        </header>
    );
}

export default PHeader;