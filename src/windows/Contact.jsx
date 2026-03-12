import { WindowContorls } from "#components"
import { socials } from "#constants"
import WindowWrapper from "#hoc/WindowWrapper"
import { useTheme } from "#context/ThemeContext"

const Contact = () => {
    const { theme } = useTheme();

    return (
        <>
            <div id="window-header">
                <WindowContorls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className='p-5 space-y-5'>
                <img
                    src="/images/isreal-profile.jpg"
                    alt="Isreal"
                    className="w-30 h-30 rounded-full"
                />

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <p>
                    <a
                        href="mailto:contact@bobzy005.com"
                        className="text-blue-500 hover:underline"
                    >
                        contact@bobzy005.com
                    </a>
                </p>

                <ul>
                    {socials.map(({ id, text, icon, bg, darkBg, link }) => (
                        <li key={id} style={{ backgroundColor: theme === 'dark' ? (darkBg || bg) : bg }}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow