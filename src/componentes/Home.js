import { useAuth } from "../context/AuthContext";

export function Home() {
    const { user } = useAuth() //Acceder direactamente a los valores 
    console.log(user)
    return <div>Este es el Home</div>
}

export default Home;