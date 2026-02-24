import { ExternalLink } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

const DISCORD_INVITE = 'BWyeYP29hp'
const LINKS = {
  discord: `https://discord.gg/${DISCORD_INVITE}`,
  river: 'https://app.getriver.io/beta/duo-keyboard-koalition',
  luma: 'https://lu.ma/duo-keyboard-koalition',
} as const

function Connect(): JSX.Element {
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-white">Connect with us</h2>
          <p className="text-gray-400 mb-6">
            Join Discord, our River community, or RSVP to events on Luma.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <a
                href={LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Discord
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/20">
              <a
                href={LINKS.river}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                GetRiver
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/20">
              <a
                href={LINKS.luma}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Luma
              </a>
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Discord invite: <code className="bg-gray-800 px-1 rounded">{DISCORD_INVITE}</code>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Connect
export { LINKS, DISCORD_INVITE }
