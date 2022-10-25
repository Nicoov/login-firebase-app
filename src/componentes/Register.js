import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { signup } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await signup(user.email, user.password)
            navigate('/')
        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email@ejemplo.com" onChange={handleChange}></input>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" onChange={handleChange}></input>
                <button>Register</button>
            </form>
        </div>

    )
}

export default Register