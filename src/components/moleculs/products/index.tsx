import useMediaQuery from "../../../hooks/useMediaQuery"
import ProductCard from "../../atoms/productcard"
import Image2 from "../../../assets/image2.png"
import Image3 from "../../../assets/image3.png"
import Image4 from "../../../assets/image4.png"
import Image5 from "../../../assets/image5.png"
import Image6 from "../../../assets/image6.png"
import Image7 from "../../../assets/image7.png"

type Props = {}

const Products = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <div>
            {isAboveMediumScreens ? (
                <div>
                    <div className="py-5">
                        <p className="text-green-1 text-2xl text-center">
                            What we offer to you
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-8 my-5">
                        <ProductCard 
                            ProductImage={Image2} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image3} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image4} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image5} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image6} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image7} PlantName={"Cactus Plant"} Price={8} 
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="py-5 w-80">
                        <p className="text-green-1 text-2xl text-center">
                            What we offer to you
                        </p>
                    </div>
                    <div className="flex flex-col justify-around align-center mb-5 gap-8">
                        <ProductCard 
                            ProductImage={Image2} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image2} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image2} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image2} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image2} PlantName={"Cactus Plant"} Price={8} 
                        />
                        <ProductCard 
                            ProductImage={Image2} PlantName={"Cactus Plant"} Price={8} 
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products