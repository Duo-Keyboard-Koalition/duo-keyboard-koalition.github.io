import React from 'react'
import { DiscIcon as DiscordLogo } from 'lucide-react'
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import QRCodeGenerator from './GenQr'

function JoinDiscord() {
  const discordInviteLink = "https://discord.com/invite/6GaWZAawUc"

  const handleLearnMore = () => {
    alert("To learn more, please join our Discord community!")
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="flex gap-8">
          <div className="w-1/3">
            <QRCodeGenerator />
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-white">Join Our Community</h2>
            <p className="text-gray-400 mb-6">
              The Koalition thrives on Discord! Our server is organized into specialized channels for different interests and projects. You'll find:
            </p>
            <ul className="text-gray-400 mb-6 list-disc list-inside">
              <li>Project collaboration spaces</li>
              <li>Technical discussion channels</li>
              <li>Resource sharing and learning opportunities</li>
              <li>Community events and announcements</li>
            </ul>
            <div className="flex items-center gap-4">
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
            <p className="text-gray-400 mt-4">Or generate your own</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default JoinDiscord
