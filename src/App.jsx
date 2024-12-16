import { useContext } from "react"
import { TimeframeContext } from "./context/TimeframeContext"
import { nanoid } from "nanoid"
import Card from "./components/Card"
import UserInfo from "./components/UserInfo"
import Data from "./json/data"

function App() {
  const { timeframe } = useContext(TimeframeContext)

  const cardElements = Data.map(data => (
    <Card
      key={nanoid()}
      type={data.title}
      current={data.timeframes[timeframe].current}
      previous={data.timeframes[timeframe].previous}
      bgColor={data.bgColor}
      bgImage={data.bgImage}
      timeframe={timeframe}
    />
  ))

  return (
    <main className="flex items-center justify-center h-screen bg-very_dark_blue font-Rubik sm:flex-col sm:h-auto sm:py-10">
      <UserInfo />
      <div className="grid grid-cols-3 gap-8 lg:grid-cols-2 lg:gap-4 sm:grid-cols-1">
        {cardElements}
      </div>
    </main>
  )
}

export default App
