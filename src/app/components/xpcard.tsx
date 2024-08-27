import ExtLinkSVG from "../svgcomponents/extlinkSVG";

const XPCard = ({
    datespan,
    title,
    subtitle,
    company,
    description,
    hreflink,
}: {
    datespan: string,
    title: string,
    subtitle: string | undefined,
    company: string,
    description: string,
    hreflink: string | '',
}) => {
    return (
        <a href={hreflink} target={'_blank'}>
            <div className={`
                group/linkicon
                grid 
                grid-cols-[1fr,3fr]
                grid-flow-col
                gap-x-12
                mobilesize:flex
                mobilesize:flex-col 
                mobilesize:gap-y-4
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
                <div className="bg-green-500">
                    <p>{datespan}</p>
                </div>
                <div className="bg-pink-500 flex flex-col gap-y-2">
                    <div className="flex gap-2">
                        <h3>
                            {title + ' ~ ' + company}
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

                    <div className="text-slate-400 text-sm">
                        {subtitle}
                    </div>

                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default XPCard;