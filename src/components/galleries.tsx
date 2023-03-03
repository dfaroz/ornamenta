import useMediaQuery from "../hooks/useMediaQuery"
import Image8 from "../assets/image8.png"
import Image9 from "../assets/image9.png"
import Image10 from "../assets/image10.png"
import Image11 from "../assets/image11.png"
import Image12 from "../assets/image12.png"
import GalleryImage from "../shared/galleryimage"

type Props = {}

const Galleries = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <div>
            <p className="text-green-1 text-2xl text-center">
                Our Gallery View
            </p>
            {isAboveMediumScreens ? (
                <div
                    className="flex flex-row py-5 mb-5 justify-between gap-2"
                >
                    <div
                        className="basis-1/3"
                    >
                        <GalleryImage Image={Image8}/>
                    </div>
                    <div
                        className="basis-2/3 grid grid-cols-2 gap-2"
                    >
                        <GalleryImage Image={Image9}/>
                        <GalleryImage Image={Image10}/>
                        <GalleryImage Image={Image11}/>
                        <GalleryImage Image={Image12}/>

                    </div>
                </div>
            ) : (
                <div
                    className="flex flex-col py-5 mb-5 justify-between gap-2"
                >
                    <img alt="Image8" src={Image8}/>
                    <img alt="Image9" src={Image9}/>
                    <img alt="Image10" src={Image10}/>
                    <img alt="Image11" src={Image11}/>
                    <img alt="Image12" src={Image12}/>
                </div>
            )}
        </div>
    )
}

export default Galleries