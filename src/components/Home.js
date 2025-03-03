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
          <h2 className="text-3xl font-bold mb-6">Why Join the Koalition?</h2>
          <p className="text-gray-400 text-lg mb-8">
            The Duo Keyboard Koalition aims to produce AI-augmented Omnicoders, a new breed of developers who seamlessly integrate artificial intelligence into their coding practices. These Omnicoders leverage advanced AI tools to enhance their productivity, problem-solving capabilities, and code quality. By combining human creativity with AI-powered assistance, Omnicoders are poised to revolutionize software development, accelerating innovation and pushing the boundaries of what's possible in the digital realm.
          </p>
          <p className="text-gray-400 text-lg mb-8">
            As we embark on this journey to shape the future of coding, we're reminded of the powerful words from James Cameron's Terminator franchise: "The future is not set. There is no fate but what we make for ourselves." This philosophy encapsulates our belief that through the fusion of human ingenuity and AI, we can create a future where technology serves humanity's best interests.
          </p>
          <p className="text-gray-400 text-lg mb-8">
            More than just a tech group, we're a community bound by friendship, shared goals, and the pursuit of excellence.
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 md:pr-8 flex justify-center">
              <Heart className="w-16 h-16 text-primary" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-3 text-white">Friendship & Camaraderie</h3>
              <p className="text-gray-400 text-lg">
                Build lasting connections with like-minded individuals who share your passion for technology and innovation. Our community thrives on mutual support and encouragement.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 md:pl-8 flex justify-center">
              <Zap className="w-16 h-16 text-primary" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-3 text-white text-center md:text-right">Personal Growth</h3>
              <p className="text-gray-400 text-lg text-center md:text-right">
                Challenge yourself in a supportive environment. Develop not just technical skills, but also leadership, communication, and problem-solving abilities that will serve you throughout your career.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 md:pr-8 flex justify-center">
              <GitBranch className="w-16 h-16 text-primary" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-3 text-white">Build with the Team</h3>
              <p className="text-gray-400 text-lg">
                Experience the power of collaborative development. Transform hackathon projects into sustainable side projects with real-world impact, guided by our collective expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 md:pl-8 flex justify-center">
              <Lightbulb className="w-16 h-16 text-primary" />
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-bold mb-3 text-white text-center md:text-right">Win for the Koalition</h3>
              <p className="text-gray-400 text-lg text-center md:text-right">
                Join forces to compete and excel in hackathons. Every victory strengthens our community and creates new opportunities for all members to shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">The Four Seasons of the Koalition</h2>
          <p className="text-gray-400 text-lg mb-8">
            Our community operates in a cyclical rhythm that maximizes growth, innovation, and competitive success.
          </p>
        </div>
      </section>

      <section className="mb-16 bg-gray-900 border border-gray-800 rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto md:mx-0">
              <span className="text-4xl text-primary">1</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-white text-center md:text-left">The Mending Moon</h3>
            <p className="text-gray-400 text-lg">
              A time of respite and renewal. During this hallowed season, each member of the Koalition retreats to their sanctums, honing their arcane skills and mending their digital vestments. We focus on skill development, learning new technologies, and preparing for future challenges. Let the clacking of keys be a melody of restoration!
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gray-900 border border-gray-800 rounded-lg p-8">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pl-8">
            <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto md:mx-0">
              <span className="text-4xl text-yellow-500">2</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-white text-center md:text-right">The Forging Sun</h3>
            <p className="text-gray-400 text-lg">
              With the rising of the Forging Sun, we set our sights on internal glory. The great forges of innovation burn bright as we craft and deploy mighty projects within our walls. We turn inward to build internal projects, refine our processes, and strengthen our technical foundation as a team. Every cog in our war machine shall be polished, every spell in our grimoires perfected!
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gray-900 border border-gray-800 rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto md:mx-0">
              <span className="text-4xl text-blue-500">3</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-white text-center md:text-left">The Scouting Winds</h3>
            <p className="text-gray-400 text-lg">
              As the Scouting Winds blow, we turn our gaze both inward and outward. Our wise elders convene, divining our strengths and discerning our vulnerabilities through ancient SWOT rituals. A period of assessment and recruitment begins as we evaluate our strengths and weaknesses while welcoming new talent to our ranks. Let the Koalition's numbers swell with fresh talent and vigor!
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gray-900 border border-gray-800 rounded-lg p-8">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pl-8">
            <div className="w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto md:mx-0">
              <span className="text-4xl text-purple-500">4</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-white text-center md:text-right">The Battle Frost</h3>
            <p className="text-gray-400 text-lg">
              When the Battle Frost descends, our kingdom awakens with a terrible fury! The Hackathon Horns sound, and every member of the Duo Keyboard Koalition dons their war-gear. The season of competition begins as we unite our skills and creativity to tackle hackathons and bring glory to the Koalition. With fingers flying and minds ablaze, we storm the digital battlefields, our code-spells weaving victory from the very ether!
            </p>
          </div>
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
