"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

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

    const [ session, setSession ] = useState()

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession()
            setSession(data.session)
        } 
        getSession()
    }, [])


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