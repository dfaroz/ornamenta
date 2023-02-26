import useMediaQuery from "../../../hooks/useMediaQuery"
import Image8 from "../../../assets/Image8.png"
import Image9 from "../../../assets/Image9.png"
import Image10 from "../../../assets/Image10.png"
import Image11 from "../../../assets/Image11.png"
import Image12 from "../../../assets/Image12.png"

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
                        <img alt="Image8" src={Image8}/>
                    </div>
                    <div
                        className="basis-2/3 grid grid-cols-2 gap-2"
                    >
                        <img alt="Image9" src={Image9}/>
                        <img alt="Image10" src={Image10}/>
                        <img alt="Image11" src={Image11}/>
                        <img alt="Image12" src={Image12}/>

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