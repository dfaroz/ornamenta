import HeartIcon from "@heroicons/react/24/outline/HeartIcon"
import ActionButton from "./actionbutton"

type Props = {
    ProductImage: string,
    PlantName: string,
    Price: number
}

const ProductCard = ({ ProductImage, PlantName,Price }: Props) => {
    return (
        <div>
            <div
                className="flex flex-row align-top"
            >
                <img alt="ProductImage" src={ProductImage}/>
                <HeartIcon className="h-6 w-6 mt-5 -ml-16 bg-white rounded-full"/>
            </div>
            <div
                className="flex flex-row justify-around"
            >
                <div 
                    className="mt-0"
                >
                    <p className="text-green-1">{PlantName}</p>
                    <p className="text-green-1">${Price}</p>
                </div>
                <button
                    className="outline outline-1 rounded-md text-center text-green-1 px-2 hover:text-white hover:bg-green-1"
                    onClick={() => {}}
                >
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default ProductCard