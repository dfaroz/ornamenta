type Props = {
    InOutTitle: string,
    InOutSubTitle: string,
    InOutCardImage: string
}

const InOutCard = ({ InOutTitle, InOutSubTitle, InOutCardImage}: Props) => {
  return (
    <div className="basis-1/4 outline outline-1 outline-gray-4 rounded-md p-3 mt-5">
        <img 
          alt="InOutCardImage" src={InOutCardImage}
        />
        <p className="text-green-1 mt-3">
          {InOutTitle}
        </p>
        <p className="text-sm my-3 text-gray-3">
          {InOutSubTitle}
        </p>        
    </div>
  )
}

export default InOutCard