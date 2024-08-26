const XPCard = ({
    datespan,
    title,
    subtitle,
    company,
    description
}: {
    datespan: string,
    title: string,
    subtitle: string | undefined,
    company: string,
    description: string
}) => {
    return (
        <div className="grid grid-cols-[1fr,3fr] grid-flow-col gap-x-12 mobilesize:flex mobilesize:flex-col mobilesize:gap-y-4 hover:shadow-lg hover:border border-slate-400 hover:brightness-125">
            <div className="bg-green-500">
                <p>{datespan}</p>
            </div>
            <div className="bg-pink-500 flex flex-col gap-y-2">
                <h3>
                    {title + ' ~ ' + company}
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

export default XPCard;