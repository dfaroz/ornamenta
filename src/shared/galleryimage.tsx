type Props = {
    Image: string
}

const GalleryImage = ({ Image }: Props) => {
    return (
        <img alt="Image" src={Image}/>
    )
}

export default GalleryImage