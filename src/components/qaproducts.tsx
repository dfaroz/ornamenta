import useMediaQuery from "../hooks/useMediaQuery"
import QAProductImage from "../assets/QAProductImage.png"
import InOutCard from "../shared/inoutcard"
import TimeCosuming from "../assets/Time-Cosuming.svg"
import GrowSprout from "../assets/Grow_Sprout.svg"
import Temperature from "../assets/Temperature.svg"
import Pruning from "../assets/Pruning.svg"

type Props = {}

const QAProduct = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <div>
            {isAboveMediumScreens ? (
                <div
                    className="flex flex-row py-5 mb-5 justify-between gap-4"
                >
                    <div
                        className="basis-1/2 mt-4"
                    >
                        <img alt="QA Product" src={QAProductImage}/>
                    </div>
                    <div
                        className="basis-1/2 grid grid-cols-2 gap-4"
                    >
                        <InOutCard 
                            InOutTitle={"Quality Product"} 
                            InOutSubTitle={"Our flowers are of the highest quality, carefully selected and sourced from reputable"} 
                            InOutCardImage={TimeCosuming} 
                        />
                        <InOutCard 
                            InOutTitle={"Always Fresh"} 
                            InOutSubTitle={"Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment."} 
                            InOutCardImage={GrowSprout} 
                        />
                        <InOutCard 
                            InOutTitle={"Work Smart"} 
                            InOutSubTitle={"We work smart, using innovative techniques and technology to streamline our processes"} 
                            InOutCardImage={Temperature} 
                        />
                        <InOutCard 
                            InOutTitle={"Excelent Service"} 
                            InOutSubTitle={"We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs"} 
                            InOutCardImage={Pruning} 
                        />
                    </div>
                </div>
            ) : (
                <div
                    className="flex flex-col py-5 mb-5 justify-between gap-4"
                >
                    <div
                        className="basis-1/2"
                    >
                        <img alt="QA Product" src={QAProductImage}/>
                    </div>
                    <div
                        className="basis-1/2 grid grid-cols-2 gap-4"
                    >
                    <InOutCard 
                            InOutTitle={"Quality Product"} 
                            InOutSubTitle={"Our flowers are of the highest quality, carefully selected and sourced from reputable"} 
                            InOutCardImage={TimeCosuming} 
                        />
                        <InOutCard 
                            InOutTitle={"Always Fresh"} 
                            InOutSubTitle={"Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment."} 
                            InOutCardImage={GrowSprout} 
                        />
                        <InOutCard 
                            InOutTitle={"Work Smart"} 
                            InOutSubTitle={"We work smart, using innovative techniques and technology to streamline our processes"} 
                            InOutCardImage={Temperature} 
                        />
                        <InOutCard 
                            InOutTitle={"Excelent Service"} 
                            InOutSubTitle={"We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs"} 
                            InOutCardImage={Pruning} 
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default QAProduct