import React from "react";
import {
  Code2,
  Users,
  Trophy,
  Rocket,
  Heart,
  Zap,
  Lightbulb,
  GitBranch,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import Hero from "../components/Hero";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, userProfile } = useAuth();
  const username =
    userProfile?.username ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "Koalition Member";
  return (
    <div>
      <Hero />
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {user ? `Welcome back, ${username}!` : "Welcome to the Koalition"}
          </h2>
          <p className="text-gray-400 text-lg">
            The Duo Keyboard Koalition is a community of passionate hackers,
            coders, and tech enthusiasts who come together to collaborate,
            learn, and take on hackathons with a competitive spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Code2 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                Hack Together
              </h3>
              <p className="text-gray-400">
                Collaborate on innovative projects and push the boundaries of
                technology.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Community</h3>
              <p className="text-gray-400">
                Join a supportive network of like-minded tech enthusiasts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Compete</h3>
              <p className="text-gray-400">
                Participate in hackathons and coding competitions as a team.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Rocket className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">Grow</h3>
              <p className="text-gray-400">
                Learn new skills and advance your technical expertise.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-400 text-lg mb-8">
            The Koalition is a new breed of hackathon competitor. It is no
            longer teams of 4 attending - it is an entire community. The warring
            states period of hackathons has begun, and we're leading the charge.
          </p>
        </div>
      </section>


    </div>
  );
}

export default Home;
