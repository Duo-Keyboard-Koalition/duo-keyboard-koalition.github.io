import React, { useEffect } from 'react'
import { DiscIcon as DiscordLogo } from 'lucide-react'
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import QRCodeGenerator from './GenQr'
import Script from 'next/script'
import { createClient } from '@/utils/supabase/client'
function JoinDiscord() {
  const supabase = createClient()
  const discordInviteLink = "https://discord.com/invite/6GaWZAawUc"

  const handleLearnMore = () => {
    alert("To learn more, please join our Discord community!")
  }

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
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Join Our Community</h2>
          <p className="text-gray-400 mb-6">
            Ready to join a community of innovators? Whether you're a seasoned developer or just starting out, there's a place for you in the Koalition.
          </p>
          <Script src="https://accounts.google.com/gsi/client" async defer />
          <div className="flex flex-col items-center gap-4">
            <div id="google-signin"></div>
            <Button asChild>
              <a
                href={discordInviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white flex items-center gap-2"
              >
                <DiscordLogo className="w-5 h-5" />
                Join Discord
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="mt-6">
          <QRCodeGenerator />
        </div>
      </CardContent>
    </Card>
  )
}

export default JoinDiscord
