import useMediaQuery from "../../../hooks/useMediaQuery"
import BlogCard from "../../atoms/blogcard"
import Image14 from "../../../assets/image14.png"
import Image15 from "../../../assets/image15.png"
import Image16 from "../../../assets/image16.png"

type Props = {}

const Blog = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <div className="flex flex-col justify-between align-center gap-4 py-5 mb-5">
            <p className="text-green-1 text-2xl text-center">
                Interesting Blog To Read
            </p>
            {isAboveMediumScreens ? (
                <div className="flex flex-row justify-around gap-4 py-5 px-5">
                    <BlogCard 
                        BlogImage={Image14} 
                        BlogTitle={"More productive with an atmosphere of greenery"} 
                        BlogDescription={"An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air ..."} 
                    />
                    <BlogCard 
                        BlogImage={Image15} 
                        BlogTitle={"The benefits of plants in your room"} 
                        BlogDescription={"Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased ...."} 
                    />
                    <BlogCard 
                        BlogImage={Image16} 
                        BlogTitle={"Hobbyist plants in the house"} 
                        BlogDescription={"Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they...."} 
                    />
                </div>
            ) : (
                <div className="flex flex-col justify-around gap-4 py-5 px-5">
                    <BlogCard 
                        BlogImage={Image14} 
                        BlogTitle={"More productive with an atmosphere of greenery"} 
                        BlogDescription={"An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air ..."} 
                    />
                    <BlogCard 
                        BlogImage={Image15} 
                        BlogTitle={"The benefits of plants in your room"} 
                        BlogDescription={"Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased ...."} 
                    />
                    <BlogCard 
                        BlogImage={Image16} 
                        BlogTitle={"Hobbyist plants in the house"} 
                        BlogDescription={"Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they...."} 
                    />
                </div>
            )}
        </div>
    )
}

export default Blog