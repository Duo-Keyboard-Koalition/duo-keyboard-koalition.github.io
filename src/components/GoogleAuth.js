import React, { useEffect } from 'react'
import Script from 'next/script'
import { createClient } from '@/utils/supabase/client'

function GoogleAuth() {
  const supabase = createClient()

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
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
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
      <Script src="https://accounts.google.com/gsi/client" async defer />
      <div id="google-signin"></div>
    </div>
  )
}

export default GoogleAuth
