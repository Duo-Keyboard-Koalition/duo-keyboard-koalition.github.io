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
            width: 180
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
          className="flex items-center justify-center bg-[#5865F2] hover:bg-[#4752c4] text-white px-4 py-2 rounded w-full max-w-[240px] text-sm font-medium transition-colors"
        >
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
