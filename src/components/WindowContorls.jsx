import useWindowStore from "#store/window"


const WindowContorls = ({ target }) => {
    const { closeWindow } = useWindowStore();

    return (
        <div className="window-controls">
            <button
                type="button"
                className="close"
                onClick={() => closeWindow(target)}
                aria-label="Close window"
            />
            <button
                type="button"
                className="minimize"
                disabled
                aria-label="Minimize window"
            />
            <button
                type="button"
                className="maximize"
                disabled
                aria-label="Maximize window"
            />
        </div>
    )
}

export default WindowContorls