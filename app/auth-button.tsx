"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function AuthButton() {  
    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github", 
            options: {
                redirectTo: "https://http://localhost:3000/auth/callback"
            }
        })

    }
    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }

    return (
        <>
        <button onClick={() => {handleLogin()}}>
            Log in
        </button>
        <button onClick={() => {handleLogout()}}>
            Log out
        </button>
        </>
    )
}