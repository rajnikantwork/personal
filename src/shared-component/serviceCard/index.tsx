import React from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
    id: string;
    title: string;
    imageSrc: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, imageSrc, description }) => {
    return (
        <div className="bg-white dark:bg-[#10171e] trns-3s p-10 relative w-1/4 rounded border border-transparent hover:border-acholor flex flex-col items-start gap-14 overflow-hidden">
            <span className="absolute -right-5 top-2/4 text-6xl font-semibold text-gray-300 dark:text-gray-800 -rotate-90 -translate-y-2/4">
                {id}
            </span>
            <Link to="/" className="text-2xl font-medium hover:text-acholor">
                {title.split(" ").map((word, index) => (
                    <React.Fragment key={index}>
                        {word}
                        <br />
                    </React.Fragment>
                ))}
            </Link>
            <i className="w-14 block">
                <img src={imageSrc} alt={title} className="w-full" />
            </i>
            <p className="text-lg text-gray-500 dark:text-gray-400">{description}</p>
        </div>
    );
};

export default ServiceCard;
