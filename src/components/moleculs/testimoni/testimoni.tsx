import useMediaQuery from "../../../hooks/useMediaQuery"
import TestimoniCard from "../../atoms/testimonicard"
import Image4 from "../../../assets/image4.png"

type Props = {}

const Testimmoni = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <div className="flex flex-col justify-between align-center gap-4 py-5 mb-5">
            <p className="text-green-1 text-2xl text-center">
                What Do They Say About Us
            </p>
            {isAboveMediumScreens ? (
                <div className="flex flex-row justify-around gap-4 py-3">
                    <TestimoniCard 
                        person_photo={Image4} 
                        person_name={"Jessica Watson"} 
                        person_comment={"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."} 
                    />
                    <TestimoniCard 
                        person_photo={Image4} 
                        person_name={"Jessica Watson"} 
                        person_comment={"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."} 
                    />
                    <TestimoniCard 
                        person_photo={Image4} 
                        person_name={"Jessica Watson"} 
                        person_comment={"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."} 
                    />
                </div>
            ) : (
                <div className="flex flex-col justify-around gap-4 py-3">
                    <TestimoniCard 
                        person_photo={Image4} 
                        person_name={"Jessica Watson"} 
                        person_comment={"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."} 
                    />
                    <TestimoniCard 
                        person_photo={Image4} 
                        person_name={"Jessica Watson"} 
                        person_comment={"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."} 
                    />
                    <TestimoniCard 
                        person_photo={Image4} 
                        person_name={"Jessica Watson"} 
                        person_comment={"Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service."} 
                    />
                </div>
            )}
        </div>
    )
}

export default Testimmoni