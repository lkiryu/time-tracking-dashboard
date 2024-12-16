import { useContext } from "react"
import { TimeframeContext } from "../../context/TimeframeContext"
import userPhoto from '../../assets/images/image-jeremy.png'

export default function UserInfo() {
    const { timeframe, setTimeframe } = useContext(TimeframeContext)

    return (
        <div className='flex flex-col items-start w-56 h-[480px] mr-6 rounded-2xl bg-dark_blue lg:mr-4 sm:w-80 sm:mr-0 sm:mb-6 sm:h-auto'>
            <div className='bg-Blue p-8 rounded-2xl sm:flex sm:items-center sm:gap-7 sm:p-6 sm:w-full'>
                <img className='w-20 h-20 mb-8 border-white border-2 rounded-full sm:mb-auto' src={userPhoto} alt="user photo" />
                <div>
                    <span className='text-sm text-pale_blue'>Report for</span>
                    <h2 className='text-4xl mb-12 text-white sm:text-xl sm:mb-auto'>Jeremy Robson</h2>
                </div>
            </div>
            <div className='flex flex-col items-start justify-between h-full w-full px-8 py-6 text-desaturated_blue sm:flex-row'>
                <button className={`hover:text-white transition ${timeframe === "daily" ? "text-white" : null}`} onClick={() => setTimeframe("daily")}>Daily</button>
                <button className={`hover:text-white transition ${timeframe === "weekly" ? "text-white" : null}`} onClick={() => setTimeframe("weekly")}>Weekly</button>
                <button className={`hover:text-white transition ${timeframe === "monthly" ? "text-white" : null}`} onClick={() => setTimeframe("monthly")}>Monthly</button>
            </div>
        </div>
    )
}