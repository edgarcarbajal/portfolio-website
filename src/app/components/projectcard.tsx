import Image, { StaticImageData } from "next/image";

const ProjectCard = ({
    thumbnail,
    title,
    subtitle,
    description
}: {
    thumbnail: string, // <-- images must exist under 'public/' directory
    title: string,
    subtitle: string | undefined,
    description: string
}) => {
    return (
        <div className="grid grid-cols-[1fr,3fr] grid-flow-col gap-x-12 phoneonlysize:flex phoneonlysize:flex-col-reverse phoneonlysize:gap-y-4 hover:shadow-lg hover:border border-slate-400 hover:brightness-125">
            <div className="bg-green-500">
                <Image 
                    alt={'Project Thumbnail Unavailable!'}
                    className="border-solid border-4 border-slate-400"
                    src={thumbnail}
                    width={170} // 1.7 (w/h) ratio
                    height={100}
                />
            </div>
            <div className="bg-pink-500 flex flex-col gap-y-2">
                <h3>
                    {title}
                </h3>

                <div className="text-slate-400 text-sm">
                    {subtitle}
                </div>

                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;