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

import QRCode from "../components/ui/QRCode";
function Goals() {
  return (
    <div>
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Ultimate Goal</h2>
          <p className="text-gray-400 text-lg">
            The Duo Keyboard Koalition strives to nurture and develop
            AI-augmented omnicoders – versatile technologists who leverage
            artificial intelligence to solve complex problems across multiple
            domains. By combining human creativity with AI capabilities, we aim
            to push the boundaries of what's possible in software development
            and technological innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                AI-augmented Omnicoders
              </h3>
              <p className="text-gray-400">
                The Duo Keyboard Koalition aims to produce AI-augmented
                Omnicoders, a new breed of developers who seamlessly integrate
                artificial intelligence into their coding practices.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                Sustainable Projects
              </h3>
              <p className="text-gray-400">
                We preserve hackathon projects and turn them into long-term
                sustainable initiatives with real-world impact.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <GitBranch className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                Largest Hackathon Faction
              </h3>
              <p className="text-gray-400">
                We're building Canada's largest hackathon faction, bringing
                together talented individuals under one banner.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                Seeking Impact
              </h3>
              <p className="text-gray-400">
                We focus on creating technology that serves humanity's best
                interests as AI takes on more roles in programming.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <QRCode
          value="https://duo-keyboard-koalition.github.io/"
          title="Visit Our Website"
          description="Scan this code to visit our official website"
        />
      </section>
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">In The End</h2>
          <p>
            The <strong>Duo Keyboard Koalition</strong> is a community of
            passionate hackers, coders, and tech enthusiasts who come together
            to collaborate, learn, and take on hackathons with a competitive
            spirit. Originally formed by a group of people who met at
            hackathons, the Koalition has evolved into a space where members
            push each other to innovate, build meaningful projects, and grow
            their skills.
          </p>
          <p>
            The vibe is part competitive, part collaborative—like a team of
            modern-day clan setting out on adventures in tech, always ready to
            tackle the next challenge. Whether you're looking to brainstorm new
            ideas, work on side projects, or prepare for upcoming hackathons,
            the Duo Keyboard Koalition is a supportive and driven community
            where you can connect with like-minded people and bring exciting
            ideas to life.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Goals;
