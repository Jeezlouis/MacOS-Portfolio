import { locations } from "#constants"
import useLoctionStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

const Home = () => {
    const { setActiveLocation } = useLoctionStore()
    const { openWindow } = useWindowStore()

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }

    useGSAP(() => {
        Draggable.create(".folder")
    }, [])

    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li
                        key={project.id}
                        className={clsx("group folder", project.windowPosition)}
                    >
                        <button
                            type="button"
                            className="flex flex-col items-center justify-center w-full h-full outline-none focus:bg-white/10 rounded-lg p-1"
                            onClick={() => handleOpenProjectFinder(project)}
                            aria-label={`Open ${project.name}`}
                        >
                            <img src="/images/folder.png" alt="" aria-hidden="true" />
                            <p>{project.name}</p>
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home