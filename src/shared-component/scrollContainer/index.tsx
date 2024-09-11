import React, { useRef, useEffect, ReactNode } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useScrollContext } from '../ScrollContext'; // Adjust path as needed

interface ScrollContainerProps {
    children: ReactNode;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { setIsScrolled } = useScrollContext();

    useEffect(() => {
        if (scrollRef.current) {
            const locoScroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
            });

            locoScroll.on('scroll', (args) => {

                if (args.scroll.y > 50) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            });

            return () => {
                locoScroll.destroy();
            };
        }
    }, [setIsScrolled]);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default ScrollContainer;
