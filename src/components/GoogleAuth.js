import React, { useEffect } from 'react'
import { supabase } from '../utils/supabase'

function GoogleAuth() {

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
          { theme: 'outline', size: 'large' }
        )
      }
    }
    initializeGoogleSignIn()
  }, [])

  return (
    <div>
      <div id="google-signin"></div>
    </div>
  )
}

export default GoogleAuth
