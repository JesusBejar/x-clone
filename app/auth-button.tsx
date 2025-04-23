"use client"

export default function AuthButton() {  
    const handleLogin = async () => {
        console.log("login")
    }
    return (
        <button onClick={() => {handleLogin()}}>
            Log in
        </button>
    )
}