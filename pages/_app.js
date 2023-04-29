import '@/styles/globals.css'
import { AuthProvider } from '@/hooks/useAuth'

function App({ Component, pageProps }) {
  return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
  )
}


export default App