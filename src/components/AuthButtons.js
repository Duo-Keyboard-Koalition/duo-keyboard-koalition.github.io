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
    <div className="flex flex-col space-y-3 items-center">
      <h3 className="text-lg font-medium mb-2">Sign in with</h3>
      <div className="flex space-x-4">
        <div id="google-signin"></div>
        <button
          onClick={handleDiscordSignIn}
          className="flex items-center justify-center bg-[#5865F2] hover:bg-[#4752c4] text-white px-4 py-2 rounded text-sm font-medium transition-colors"
          style={{ minWidth: '180px', height: '40px' }}
        >
          Sign in with Discord
        </button>
      </div>
    </div>
  )
}

export default AuthButtons
