import Link from "next/link"
import { CardHeader } from "./ui/card"

interface CategoryProps {
    title: string,
    link: string
}

const CategoryCard = ({ title, link }:CategoryProps) => {
    return (
        <div className="border text-center hover:shadow-lg">
            <Link href={`/videos/${link}`}>
                <CardHeader className="text-lg font-bold">{title}</CardHeader>
            </Link>
        </div>
    )
}

export default CategoryCard