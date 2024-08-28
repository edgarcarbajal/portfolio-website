import Image, { StaticImageData } from "next/image";
import ExtLinkSVG from "../svgcomponents/extlinkSVG";

const ProjectCard = ({
    thumbnail,
    title,
    subtitle,
    description,
    hreflink,
    skills,
}: {
    thumbnail: string, // <-- images must exist under 'public/' directory
    title: string,
    subtitle: string | undefined,
    description: string,
    hreflink: string | '',
    skills: string[],
}) => {
    return (
        <a href={hreflink} target={'_blank'}>
            <div className={`
                group/linkicon
                grid
                grid-cols-[1fr,3fr]
                grid-flow-col
                gap-x-12
                phoneonlysize:flex
                phoneonlysize:flex-col-reverse
                phoneonlysize:gap-y-4
                hover:shadow-lg
                hover:border 
                border-slate-400 
                hover:transition
                ease-in-out
                delay-100
                hover:brightness-125
                hover:scale-105
                hover:-translate-y-1
                duration-300
            `}>
                <div className={'bg-green-500'}>
                    <Image 
                        alt={'Project Thumbnail Unavailable!'}
                        className="border-solid border-4 border-slate-400"
                        src={thumbnail}
                        width={170} // 1.7 (w/h) ratio
                        height={100}
                    />
                </div>
                <div className={'bg-pink-500 flex flex-col gap-y-2'}>
                    <div className="flex gap-2">
                        <h3>
                            {title}
                        </h3>
                        
                        <ExtLinkSVG 
                            className={`
                                w-6
                                h-6
                                group-hover/linkicon:transition
                                ease-in-out
                                delay-100 
                                group-hover/linkicon:fill-sky-400 
                                group-hover/linkicon:-translate-y-0.5 
                                group-hover/linkicon:translate-x-0.5
                                group-hover/linkicon:scale-125 
                                duration-300
                        `}/>
                    </div>

                    <div className={'text-slate-400 text-sm'}>
                        {subtitle}
                    </div>

                    <p>
                        {description}
                    </p>


                    <div className={'flex flex-wrap gap-2 justify-evenly'}>
                        {skills && skills.map((elem, idx)=> {
                            return(
                                <div 
                                    className={'rounded-full bg-emerald-700 px-2 py-0.5 text-emerald-200'}
                                    key={idx}
                                >
                                    {elem}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;