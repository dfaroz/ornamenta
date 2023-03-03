import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"

type Props = {}

const EmailUs = (props: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <div>
            {isAboveMediumScreens ? (
                <div
                    className="flex flex-row justify-around py-10 px-5 mb-5 bg-email-us gap-4"
                >
                    <div
                        className="text-white text-xl basis-3/6"
                    >
                        Enter Your Email Address For Our Mailing Promo Or Other Interesting
                    </div>
                    <div
                        className="flex flex-row justify-between gap-4 basis-2/6"
                    >
                        <input 
                            className="placeholder:italic bg-transparent w-full border border-white rounded-md py-2 px-4 shadow-sm"
                            placeholder="yourname@example.com"
                            type="text"
                            name="mail"
                        />
                        <AnchorLink
                            className="outline outline-1 rounded-md text-center text-white py-5 px-3 hover:bg-green-1"
                            onClick={() => {}}
                        >
                            Submit
                        </AnchorLink>
                    </div>
                </div>
            ) : (
                <div
                    className="flex flex-col justify-around py-10 px-5 mb-5 bg-email-us gap-4"
                >
                    <div
                        className="text-white text-xl basis-3/6"
                    >
                        Enter Your Email Address For Our Mailing Promo Or Other Interesting
                    </div>
                    <div
                        className="flex flex-row justify-between gap-4 basis-2/6"
                    >
                        <input 
                            className="placeholder:italic bg-transparent w-full border border-white rounded-md py-2 px-4 shadow-sm"
                            placeholder="yourname@example.com"
                            type="text"
                            name="mail"
                        />
                        <AnchorLink
                            className="outline outline-1 rounded-md text-center text-white py-5 px-3 hover:bg-green-1"
                            onClick={() => {}}
                        >
                            Submit
                        </AnchorLink>
                    </div>
                </div>
            )}
        </div>
    )
}

export default EmailUs