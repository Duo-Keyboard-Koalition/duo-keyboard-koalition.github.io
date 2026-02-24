import { useEffect } from 'react'
import Hero from '../components/Hero'
import { Code2, Users, Trophy, Rocket, ExternalLink } from 'lucide-react'
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import Connect from '../components/Connect'

function Home() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <Hero />

      {/* Welcome Section */}
      <section id="welcome" className="mb-16 px-4 scroll-mt-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Welcome to the Koalition</h2>
          <p className="text-gray-400 text-lg">
            The Duo Keyboard Koalition is a community of passionate hackers, coders, and tech enthusiasts who come together to collaborate, learn, and take on hackathons with a competitive spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Hack Together</h3>
              <p className="text-gray-400">Collaborate on innovative projects and push the boundaries of technology.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Community</h3>
              <p className="text-gray-400">Join a supportive network of like-minded tech enthusiasts.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Compete</h3>
              <p className="text-gray-400">Participate in hackathons and coding competitions as a team.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Grow</h3>
              <p className="text-gray-400">Learn new skills and advance your technical expertise.</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA to Web App */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Join?</h3>
          <p className="text-gray-400 mb-6">
            Proceed to the app to access the community dashboard, connect with other hackers, and start building.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-black px-8 py-6 text-lg"
          >
            <a href="#" aria-disabled="true" className="pointer-events-none opacity-90" title="Coming soon">
              <ExternalLink className="w-5 h-5 mr-2" />
              Proceed to the app
            </a>
          </Button>
        </div>

        <section id="connect" className="scroll-mt-20">
          <Connect />
        </section>

        {/* Luma calendar embed */}
        <div id="events" className="mt-12 text-center scroll-mt-20">
          <h3 className="text-2xl font-bold text-white mb-4">Upcoming events</h3>
          <p className="text-gray-400 mb-6">RSVP on Luma for our next meetups and hackathons.</p>
          <div className="flex justify-center">
            <iframe
              src="https://luma.com/embed/calendar/cal-FUq4o98pyWykY3q/events"
              width="600"
              height="450"
              style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
              allowFullScreen
              title="Luma calendar – Duo Keyboard Koalition events"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-black/50 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">About the Duo Keyboard Koalition</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-300">
              <p>
                The <strong className="text-primary">Duo Keyboard Koalition</strong> is a community of passionate hackers, coders, and tech enthusiasts who come together to collaborate, learn, and take on hackathons with a competitive spirit. Originally formed by a group of people who met at hackathons, the Koalition has evolved into a space where members push each other to innovate, build meaningful projects, and grow their skills.
              </p>
              <p>
                The vibe is part competitive, part collaborative—like a team of modern-day "pirates" setting out on adventures in tech, always ready to tackle the next challenge. Whether you're looking to brainstorm new ideas, work on side projects, or prepare for upcoming hackathons, the Duo Keyboard Koalition is a supportive and driven community where you can connect with like-minded people and bring exciting ideas to life.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/logo_ngb.png"
                alt="DKK Logo"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QR Section */}
      <section id="qr" className="py-16 px-4 scroll-mt-20">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Scan to visit</h2>
          <p className="text-gray-400 mb-8">
            Point your camera at the QR code to open the landing page.
          </p>
          <div className="bg-white p-4 rounded-lg inline-block">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent('https://duo-keyboard-koalition.github.io/')}`}
              alt="QR code for duo-keyboard-koalition.github.io"
              width={256}
              height={256}
              className="w-64 h-64"
            />
          </div>
          <p className="mt-6 text-gray-500 text-sm break-all">https://duo-keyboard-koalition.github.io/</p>
        </div>
      </section>
    </>
  );
}

export default Home
