type Props = {
    person_photo: string,
    person_name: string,
    person_comment: string
}

const TestimoniCard = ({ person_photo, person_name, person_comment}: Props) => {
    return (
        <div className="flex flex-col w-60 bg-gray-4 rounded-md gap-2 py-3 mx-3">
            <div className="flex flex-row align-start py-3 gap-4 mx-3">
                <div className="rounded-full w-6 h-6">
                    <img alt="Person Photo" src={person_photo}/>
                </div>
                <div className="text-green-1 text-md">
                    {person_name}
                </div>
            </div>
            <div className="text-gray-3 text-sm px-3">
                {person_comment}
            </div>
        </div>
    )
}

export default TestimoniCard