import { FaEllipsis } from "react-icons/fa6";

export default function Card({ type, current, previous, bgColor, bgImage, timeframe }) {
    const time = timeframe === "daily" ? "Day" : null || timeframe === "weekly" ? "Week" : null || timeframe === "monthly" ? "Month" : null

    return (
        <div className={`flex items-end ${bgColor} ${bgImage} bg-no-repeat bg-[85%_-10px] w-56 h-56 rounded-2xl lg:w-48 lg:h-48 sm:w-80 sm:h-48`}>
            <div className="w-full bg-dark_blue h-44 rounded-xl p-6 text-white cursor-pointer hover:bg-desaturated_blue transition lg:h-auto lg:p-4 sm:h-auto">
                <div className="flex justify-between items-center mb-6 lg:mb-4">
                    <h2 className="font-bold">{type}</h2>
                    <FaEllipsis className="text-2xl text-pale_blue hover:text-white transition" />
                </div>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <h3 className="text-5xl mb-2 sm:text-4xl">{current}hrs</h3>
                    <h3 className="text-sm text-pale_blue">Last {time} - {previous}hrs</h3>
                </div>
            </div>
        </div>
    )
}