import Image, { StaticImageData } from "next/image";

const ProjectCard = ({
    thumbnail,
    title,
    description
}: {
    thumbnail: StaticImageData,
    title: string,
    description: string
}) => {
    return (
        <div className="grid grid-cols-[1fr,3fr] grid-flow-col gap-x-12">
            <div className="bg-green-500">
                <Image 
                    alt={'Project Thumbnail Unavailable!'}
                    src={thumbnail}
                    height={150}
                    width={350}
                />
            </div>
            <div className="bg-pink-500">
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