"use client"

import { createClientComponentClient, Session } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function AuthButtonClient({ session }: {session: Session | null}) {  
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


    // used terniary operators to make btns aware of user session
    return session ? (
        <button onClick={() => {handleLogout()}}>
        Log out
        </button>
    ): (
        <button onClick={() => {handleLogin()}}>
            Log in
        </button>
        )
}