
interface TitleProps {
    title: string
    year: number
}


const Title = ({ title, year }: TitleProps) => {
    return <h1>
        Hello {title}, Year: {year}
        </h1>
}
export default Title