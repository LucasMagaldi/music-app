import { AuthProvider } from "./context/auth-context"
import { Layout } from "./layout"
import { spofifyAccountAPI } from "./lib/axios"

function App() {
  spofifyAccountAPI()
  return (
    <AuthProvider>
      <div className="h-screen w-screen bg-black">
        <Layout />
      </div>
    </AuthProvider>
  )
}

export default App
