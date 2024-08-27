import GithubLogoSVG from "../svgcomponents/githublogoSVG";
import LinkedInLogoSVG from "../svgcomponents/linkedinlogoSVG";

const FooterNavi = () => {
    return(
        <nav>
            <ul className="flex justify-evenly">
                <a 
                    href={'https://github.com/edgarcarbajal'} 
                    target={'_blank'}
                >
                    <li className="hover-button">
                            <GithubLogoSVG className={'w-12 h-12'}/>
                    </li>
                </a>

                <a 
                    href={'https://linkedin.com/in/edgar-carbajal-382432244'} 
                    target={'_blank'}
                >
                    <li className="hover-button">
                            <LinkedInLogoSVG className={'w-12 h-12'}/>
                    </li>
                </a>
            </ul>
          </nav>
    );
}

export default FooterNavi;