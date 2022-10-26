
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function Home() {
    const { user, logout, loading } = useAuth() //Acceder direactamente a los valores 

    const navigate = useNavigate()
    const handleLogout = async () => {
        await logout()
        navigate('/login');
    }

    if (loading) {
        return <h1>Loading</h1>
    }

    return (
        <div>
            <h1>Welcome{user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home;