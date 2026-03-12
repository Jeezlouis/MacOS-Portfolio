import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants"
import useWindowStore from "#store/window"
import { useTheme } from "#context/ThemeContext"

const Navbar = () => {
    const { openWindow } = useWindowStore()
    const { theme, toggleTheme } = useTheme()

    return (
        <nav>
            <div>
                <img src={theme === "dark" ? "/images/logo.png" : "/images/logo.svg"} alt='logo' />
                <p className='font-bold'>Isreal's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id}>
                            <button
                                type="button"
                                onClick={() => openWindow(type)}
                                className="bg-transparent border-none p-0 m-0 cursor-pointer"
                                aria-label={`Open ${name}`}
                            >
                                <p>{name}</p>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img
                                src={img}
                                className={`icon-hover ${theme === "dark" ? "invert" : ""}`}
                                alt={`icon-${id}`}
                            />
                        </li>
                    ))}
                </ul>

                <button type="button" onClick={toggleTheme} className="cursor-pointer">
                    <img
                        src={`/icons/${theme === "dark" ? "moon" : "dark-sun"}.svg`}
                        alt="theme"
                        className="icon-hover"
                    />
                </button>

                <time>{dayjs().format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    )
}

export default Navbar