import Image from "next/image";

const FooterNavi = () => {
    return(
        <nav>
            <ul className="flex justify-evenly">
                <li className="hover-button">
                    <a 
                        href={'https://github.com/edgarcarbajal'} 
                        target={'_blank'}
                    > 
                        <Image
                            src={'/github-mark.svg'}
                            alt={'Github Logo'}
                            width={50}
                            height={50}
                        />
                    </a>
                </li>

                <li className="hover-button">
                    <a 
                        href={'https://linkedin.com/in/edgar-carbajal-382432244'} 
                        target={'_blank'}
                    >
                        <Image
                            src={'/linkedin-icon.svg'}
                            alt={'LinkedIn Logo'}
                            width={50}
                            height={50}
                        />
                    </a>
                </li>
            </ul>
          </nav>
    );
}

export default FooterNavi;