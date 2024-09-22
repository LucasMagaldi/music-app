import { QueryClientProvider } from "react-query"
import { AuthProvider } from "./context/auth-context"
import { Layout } from "./layout"
import { queryClient } from "./lib/react-query"

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen w-screen bg-black">
          <Layout />
        </div>        
      </QueryClientProvider>

    </AuthProvider>
  )
}

export default App
