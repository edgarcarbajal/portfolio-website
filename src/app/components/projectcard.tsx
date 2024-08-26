import Image, { StaticImageData } from "next/image";

const ProjectCard = ({
    thumbnail,
    title,
    description
}: {
    thumbnail: string, // <-- images must exist under 'public/' directory
    title: string,
    description: string
}) => {
    return (
        <div className="grid grid-cols-[1fr,3fr] grid-flow-col gap-x-12">
            <div className="bg-green-500">
                <Image 
                    alt={'Project Thumbnail Unavailable!'}
                    className="border-solid border-4 border-slate-400"
                    src={thumbnail}
                    width={170} // 1.7 (w/h) ratio
                    height={100}
                />
            </div>
            <div className="bg-pink-500 flex flex-col gap-y-4">
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default ProjectCard;