import { Layout } from "./layout"
import { spofifyAccountAPI } from "./lib/axios"

function App() {
  spofifyAccountAPI()
  return (
    <div className="h-screen w-screen bg-black">
      <Layout />
    </div>
  )
}

export default App
