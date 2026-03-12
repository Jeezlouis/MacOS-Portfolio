import { WindowContorls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const Image = () => {
    const { windows } = useWindowStore()
    const { data } = windows.imgfile

    if (!data) return null

    return (
        <>
            <div className="window-header">
                <WindowContorls target="imgfile" />
                <p>{data?.name}</p>
            </div>

            <div className='preview'>
                <img src={data.imageUrl} alt={data.name} />
            </div>
        </>
    )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')

export default ImageWindow
