"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function AuthButton() {  
    const supabase = createClientComponentClient()
    const handleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github", 
            options: {
                redirectTo: "https://http://localhost:3000/auth/callback"
            }
        })

    }
    return (
        <button onClick={() => {handleLogin()}}>
            Log in
        </button>
    )
}