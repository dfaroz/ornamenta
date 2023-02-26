import PlayCircleIcon from "@heroicons/react/24/solid/PlayCircleIcon"
import useMediaQuery from "../../../hooks/useMediaQuery"
import { SelectedPage } from "../../../shared/types"
import ActionButton from "../../atoms/actionbutton"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Banner = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <div>
            {!isAboveMediumScreens ? (
                <div className="bg-plant-banner bg-contain py-40">
                    <p className="text-white text-bold text-4xl text-center">
                        Nature's Beauty Delivered to You
                    </p>
                    <p className="text-white text-sm text-center mt-5 mx-5">
                        Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!
                    </p>
                    <div className="flex flex-col justify-around align-center px-20 mt-5 gap-8">
                        <ActionButton 
                            setSelectedPage={setSelectedPage}
                        >
                            Book Now
                        </ActionButton>
                        <ActionButton 
                            setSelectedPage={setSelectedPage}
                        >
                            <PlayCircleIcon  className="h-6 w-6"/>
                            View Galeries
                        </ActionButton>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="bg-plant-banner bg-cover py-40">
                        <p className="text-white text-bold text-4xl text-center">
                            Nature's Beauty Deliveredto You
                        </p>
                        <p className="text-white text-sm text-center mt-5 mx-60">
                            Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!
                        </p>
                        <div className="flex flex-row justify-around mx-60 mt-5">
                            <ActionButton 
                                setSelectedPage={setSelectedPage}
                            >
                                Book Now
                            </ActionButton>
                            <ActionButton 
                                setSelectedPage={setSelectedPage}
                            >
                                <PlayCircleIcon className="h-6 w-6"/>
                                View Galeries
                            </ActionButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Banner