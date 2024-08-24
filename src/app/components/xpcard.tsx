const XPCard = ({
    datespan,
    title,
    company,
    description
}: {
    datespan: string,
    title: string,
    company: string,
    description: string
}) => {
    return (
        <div className="grid grid-cols-[1fr,3fr] grid-flow-col gap-x-12">
            <div className="bg-green-500">
                <p>{datespan}</p>
            </div>
            <div className="bg-pink-500">
                <h3>
                    {title + ' ~ ' + company}
                </h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default XPCard;