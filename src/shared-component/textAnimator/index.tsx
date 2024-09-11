
import React, { useEffect, useState } from "react";

interface TextAnimationProps {
    texts: string[];
}

const TextAnimation: React.FC<TextAnimationProps> = ({ texts }) => {
    const textInTimer = 5000;
    const textOutTimer = 4800;

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const a2aTxtHd = document.getElementsByClassName("a2atxt");
        if (a2aTxtHd[0]) a2aTxtHd[0].classList.add("hidden");

        const textOutTimeout = setTimeout(() => {
            document.getElementById(`text-${index}`)?.classList.remove("animate-textIn");
            document.getElementById(`text-${index}`)?.classList.add("animate-textOut");
        }, textOutTimer);

        const textInTimeout = setTimeout(() => {
            setIndex(prevIndex => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
        }, textInTimer);

        return () => {
            clearTimeout(textOutTimeout);
            clearTimeout(textInTimeout);
        };
    }, [index, textInTimer, textOutTimer, texts.length]);

    return (
        <div className="relative home-text h-full">
            <div className="overflow-hidden relative flex-1 animate-text h-full">
                {texts.map((text, i) => (
                    <div
                        key={i}
                        id={`text-${i}`}
                        className={`absolute left-0 top-0 ${
                            i === index ? "animate-textIn" : "animate-textOut"
                        }`}
                    >
                        {text}
                    </div>
                ))}
            </div>
            {/* <div className="a2atxt hidden ml-2 absolute left-[85px]">A2A Placeholder</div> */}
        </div>
    );
};

export default TextAnimation;
