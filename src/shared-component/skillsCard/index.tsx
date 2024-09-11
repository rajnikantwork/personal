import React, { ReactNode } from "react";
import { Progress } from "../../components/ui/progress";

interface SoftSkillsCardProps {
    icon: ReactNode;
    title: string;
    progress: number | null | undefined;
    description: string;
}

const SoftSkillsCard: React.FC<SoftSkillsCardProps> = ({ icon, title, progress, description }) => {
    return (
        <div className="relative bg-white dark:bg-[#171e24] p-9 pb-12">
            <div className='flex items-center gap-4 font-medium font-IBM text-2xl mb-12 h-14'>
                {icon} {title}
            </div>
            <p className="text-gray-500 min-h-24 leading-relaxed dark:text-gray-400">{description}</p>
            <div className='flex flex-col items-end'>
                <div className='font-medium'>{progress}%</div>
                <Progress value={progress} className="w-full h-[5px] mt-4" />
            </div>
        </div>
    );
};

export default SoftSkillsCard;
