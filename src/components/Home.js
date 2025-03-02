import React from 'react'
import { Code2, Users, Trophy, Rocket, Heart, Zap, Lightbulb, GitBranch } from 'lucide-react'
import { Card, CardContent } from "./ui/card"

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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
          <h2 className="text-3xl font-bold mb-6">Why Join the Koalition?</h2>
          <p className="text-gray-400 text-lg mb-8">
            More than just a tech group, we're a community bound by friendship, shared goals, and the pursuit of excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Friendship & Camaraderie</h3>
              <p className="text-gray-400">
                Build lasting connections with like-minded individuals who share your passion for technology and innovation. Our community thrives on mutual support and encouragement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Personal Growth</h3>
              <p className="text-gray-400">
                Challenge yourself in a supportive environment. Develop not just technical skills, but also leadership, communication, and problem-solving abilities that will serve you throughout your career.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <GitBranch className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Build with the Team</h3>
              <p className="text-gray-400">
                Experience the power of collaborative development. Transform hackathon projects into sustainable side projects with real-world impact, guided by our collective expertise.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Win for the Koalition</h3>
              <p className="text-gray-400">
                Join forces to compete and excel in hackathons. Every victory strengthens our community and creates new opportunities for all members to shine.
              </p>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">The Mending Moon</h3>
              <p className="text-gray-400">
                A time of respite and renewal. We focus on skill development, learning new technologies, and preparing for future challenges.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">The Forging Sun</h3>
              <p className="text-gray-400">
                We turn inward to build internal projects, refine our processes, and strengthen our technical foundation as a team.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">The Scouting Winds</h3>
              <p className="text-gray-400">
                A period of assessment and recruitment. We evaluate our strengths and weaknesses while welcoming new talent to our ranks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">The Battle Frost</h3>
              <p className="text-gray-400">
                The season of competition. We unite our skills and creativity to tackle hackathons and bring glory to the Koalition.
              </p>
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
    </div>
  )
}

export default Home
