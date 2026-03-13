import { WindowContorls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"

const Text = () => {
    const { windows } = useWindowStore()
    const data = windows?.txtfile?.data

    if (!data) return null

    return (
        <>
            <div className="window-header">
                <WindowContorls target="txtfile" />
                <h2>{data.name}</h2>
            </div>

            <div className='bg-white h-screen p-8 overflow-y-auto text-black select-text cursor-auto min-w-[300px] max-w-[600px]'>
                {data.image && (
                    <img src={data.image} alt={data.name} className="w-full h-auto object-contain rounded-lg mb-6" />
                )}
                <div className="flex flex-col gap-2">
                    {data.subtitle && (
                        <h3 className="text-2xl font-bold mb-2">{data.subtitle}</h3>
                    )}
                    <div className="flex flex-col gap-4 text-gray-700 leading-relaxed">
                        {data.description && data.description.map((para, index) => (
                            <p key={index}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, 'txtfile')

export default TextWindow
