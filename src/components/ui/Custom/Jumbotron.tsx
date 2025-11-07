interface Props {
    title: string,
    description?: string,
}


export const Jumbotron = ({title, description}: Props) => {
    return (
        <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-300 to-purple-300 bg-clip-text text-transparent mb-4">
                {title}
                </h1>
                { description && (<p className="text-white text-lg">{description}</p>)}
        </div>
    )
}