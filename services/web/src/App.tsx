import './App.css'
import { useUserContext } from "./context/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { fetchTokens } from "./connector/token";


function App() {
  const { isLogged, updateIsLogged } = useUserContext()

  const onLoginSuccess = async ({ credential: token }: CredentialResponse) => {
    if (!token) return

    const tokens = await fetchTokens({
      token,
    })

    updateIsLogged(true)
  }

  return (
    <main className="main-container">
      <h1>React Google Login</h1>
      {!isLogged ? (
        <GoogleLogin onSuccess={onLoginSuccess} />
      ) : (<h2>Logged</h2>)}
    </main>
  )
}

export default App
