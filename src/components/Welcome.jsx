import { useRef, memo } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
};

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{
            fontVariationSettings: `'wght' ${baseWeight}`
        }}>
            {char === " " ? "\u00A0" : char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHTS[type];

    let cachedBounds = [];
    let containerLeft = 0;

    const cachePositions = () => {
        containerLeft = container.getBoundingClientRect().left;
        cachedBounds = Array.from(letters).map((letter) => {
            const lBounds = letter.getBoundingClientRect();
            return {
                leftRel: lBounds.left - containerLeft,
                width: lBounds.width,
            };
        });
    };

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `'wght' ${weight}`,
        });
    }

    const handleMouseEnter = () => cachePositions();

    const handleMouseMove = (e) => {
        if (!cachedBounds.length) cachePositions(); // Fallback
        const mouseX = e.clientX - containerLeft;

        letters.forEach((letter, index) => {
            const bounds = cachedBounds[index];
            if (!bounds) return;

            const distance = Math.abs(mouseX - (bounds.leftRel + bounds.width / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);

            animateLetter(letter, min + (max - min) * intensity)
        })
    }

    const handleMouseLeave = () => {
        letters.forEach((letter) => animateLetter(letter, base, 0.3))
    }

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    }
}

const Welcome = memo(() => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, 'title');
        const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle');

        return () => {
            if (typeof titleCleanup === 'function') titleCleanup();
            if (typeof subtitleCleanup === 'function') subtitleCleanup();
        }
    }, [])

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText("Hey, I'm Isreal! Welcome to my", "text-3xl font-georama", 100)}
            </p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText("portfolio", "text-9xl italic font-georama")}
            </h1>

            <div className='small-screen'>
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div>
        </section>
    )
})

export default Welcome