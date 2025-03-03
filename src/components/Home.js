import React from 'react'
import { Code2, Users, Trophy, Rocket, Heart, Zap, Lightbulb, GitBranch } from 'lucide-react'
import { Card, CardContent } from "./ui/card"
import QRCode from './QRCode'

function Home() {
  return (
    <div>
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Welcome to the Koalition</h2>
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
      </section>

      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Goals of the Koalition</h2>
          <p className="text-gray-400 text-lg mb-8">
            The Koalition is a new breed of hackathon competitor. It is no longer teams of 4 attending - it is an entire community. The warring states period of hackathons has begun, and we're leading the charge.
          </p>
          <p className="text-gray-400 text-lg mb-8">
            As we embark on this journey to shape the future of coding, we're reminded of the powerful words from James Cameron's Terminator franchise: "The future is not set. There is no fate but what we make for ourselves." This philosophy encapsulates our belief that through the fusion of human ingenuity and AI, we can create a future where technology serves humanity's best interests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">AI-augmented Omnicoders</h3>
              <p className="text-gray-400">The Duo Keyboard Koalition aims to produce AI-augmented Omnicoders, a new breed of developers who seamlessly integrate artificial intelligence into their coding practices.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Sustainable Projects</h3>
              <p className="text-gray-400">We preserve hackathon projects and turn them into long-term sustainable initiatives with real-world impact.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <GitBranch className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Largest Hackathon Faction</h3>
              <p className="text-gray-400">We're building Canada's largest hackathon faction, bringing together talented individuals under one banner.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Seeking Impact</h3>
              <p className="text-gray-400">We focus on creating technology that serves humanity's best interests as AI takes on more roles in programming.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">The Four Seasons of the Koalition</h2>
          <p className="text-gray-400 text-lg mb-8">
            Our community operates in a cyclical rhythm that maximizes growth, innovation, and competitive success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">The Mending Moon</h3>
              <p className="text-gray-400">A time of respite and renewal. We focus on skill development, learning new technologies, and preparing for future challenges.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-yellow-500">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">The Forging Sun</h3>
              <p className="text-gray-400">We turn inward to build internal projects, refine our processes, and strengthen our technical foundation as a team.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-blue-500">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">The Scouting Winds</h3>
              <p className="text-gray-400">A period of assessment and recruitment as we evaluate our strengths and welcome new talent to our ranks.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-purple-500">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">The Battle Frost</h3>
              <p className="text-gray-400">The season of competition begins as we unite our skills and creativity to tackle hackathons and bring glory to the Koalition.</p>
            </CardContent>
          </Card>
        </div>
        </section>
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Ultimate Goal</h2>
          <p className="text-gray-400 text-lg">
            The Duo Keyboard Koalition strives to nurture and develop AI-augmented omnicoders – versatile technologists who leverage artificial intelligence to solve complex problems across multiple domains. By combining human creativity with AI capabilities, we aim to push the boundaries of what's possible in software development and technological innovation.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <QRCode 
          value="https://duo-keyboard-koalition.github.io/" 
          title="Visit Our Website" 
          description="Scan this code to visit our official website"
        />
      </section>
    </div>

  )
}

export default Home
