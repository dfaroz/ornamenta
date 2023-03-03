import useMediaQuery from "../hooks/useMediaQuery"
import InOutCard from "../shared/inoutcard"
import Bamboo from "../assets/Bamboo.svg"
import IndoorPlant from "../assets/Indoor_Plant.svg"
import OutdoorPlant from "../assets/Outdoor_Plant.svg"

type Props = {}

const InOutPlants = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <div>
            {isAboveMediumScreens ? (
                <div>
                    <div className="flex flex-row justify-between py-5">
                        <p className="basis-1/3 text-green-1 text-2xl">
                            We help choose the most suitable plants for you
                        </p>
                        <p className="basis-2/3 text-gray-3 text-sm">
                            Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. 
                        </p>
                    </div>
                    <div className="flex flex-row justify-around mb-5">
                        <InOutCard 
                            InOutCardImage={IndoorPlant}
                            InOutTitle={"Indoor Plants"} 
                            InOutSubTitle={"Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"} 
                        />
                        <InOutCard 
                            InOutCardImage={OutdoorPlant}
                            InOutTitle={"Outdoor Plants"} 
                            InOutSubTitle={"Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home."} 
                        />
                        <InOutCard 
                            InOutCardImage={Bamboo}
                            InOutTitle={"Plant Pots"} 
                            InOutSubTitle={"Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor"} 
                        />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col justify-around align-center mb-5 w-80">
                    <div className="justify-between py-5">
                        <p className="basis-1/3 text-green-1 text-2xl text-center">
                            We help choose the most suitable plants for you
                        </p>
                        <p className="basis-2/3 text-gray-3 text-sm my-5">
                            Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. 
                        </p>
                    </div>
                    <div className="flex flex-col justify-around align-center mb-5 w-80">
                        <InOutCard 
                            InOutCardImage={IndoorPlant}
                            InOutTitle={"Indoor Plants"} 
                            InOutSubTitle={"Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants"} 
                        />
                        <InOutCard 
                            InOutCardImage={OutdoorPlant}
                            InOutTitle={"Outdoor Plants"} 
                            InOutSubTitle={"Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home."} 
                        />
                        <InOutCard 
                            InOutCardImage={Bamboo}
                            InOutTitle={"Plant Pots"} 
                            InOutSubTitle={"Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor"} 
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default InOutPlants