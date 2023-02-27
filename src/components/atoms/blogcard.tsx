import { ArrowLongRightIcon, CalendarDaysIcon } from "@heroicons/react/24/solid"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    BlogImage: string,
    BlogTitle: string,
    BlogDescription: string,
}

const BlogCard = ({BlogImage, BlogTitle, BlogDescription}: Props) => {
    return (
        <div className="flex flex-col justify-center w-60 px-3">
            <div>
                <img alt="Blog Image" src={BlogImage} className="w-60 h-60"/>
            </div>
            <div>
                <p className="text-start text-green-1 text-md mt-2">
                    {BlogTitle}
                </p>
            </div>
            <div>
                <p className="text-start text-gray-3 text-sm mt-2 mb-2">
                    {BlogDescription}
                </p>
            </div>
            <div className="flex flex-row justify-between">
                <div>
                    <CalendarDaysIcon className="w-2 h-2 fill-gray-3"/>
                </div>
                <div className="flex flex-row align-center justify-between">
                    <AnchorLink className="text-green-1 text-sm">
                        Read More
                    </AnchorLink>
                    <ArrowLongRightIcon className="w-6 fill-green-1"/>
                </div>
            </div>
        </div>
    )
}

export default BlogCard