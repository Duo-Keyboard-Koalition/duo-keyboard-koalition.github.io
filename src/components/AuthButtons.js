import React, { useEffect } from 'react'
import { supabase } from '../utils/supabase'

function AuthButtons() {
  const handleGoogleSignIn = async (response) => {
    try {
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: response.credential,
      })
      if (error) throw error
      console.log('Successfully logged in with Google', data)
      window.location.href = '/'; // Redirect to home page after successful login
    } catch (error) {
      console.error('Error signing in with Google:', error)
    }
  }

  const handleDiscordSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: {
          redirectTo: window.location.origin
        }
      })
      if (error) throw error
      console.log('Redirecting to Discord auth...', data)
    } catch (error) {
      console.error('Error signing in with Discord:', error)
    }
  }

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (typeof window.google !== 'undefined') {
        window.google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: handleGoogleSignIn,
          use_fedcm_for_prompt: true
        })
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin'),
          { 
            theme: 'filled_blue',
            size: 'medium',
            text: 'signin',
            shape: 'rectangular',
            width: 240
          }
        )
      }
    }
    initializeGoogleSignIn()
  }, [])

  return (
    <div className="flex flex-col space-y-6 items-center">
      <div className="flex flex-col space-y-4 items-center w-full">
        <button
          onClick={handleDiscordSignIn}
          className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white px-4 py-2 rounded-md w-full max-w-[240px] text-sm font-medium transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor" className="mr-2">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
          </svg>
          Sign in with Discord
        </button>
        
        <div className="relative w-full max-w-[240px]">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 px-2 text-xs text-gray-400">or</span>
          </div>
        </div>
        
        <div id="google-signin" className="w-full flex justify-center"></div>
      </div>
    </div>
  )
}

export default AuthButtons
