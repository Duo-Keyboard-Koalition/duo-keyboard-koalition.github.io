import { Link } from 'react-router-dom';
import { Code2, Users, Lock } from 'lucide-react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

function Projects(): JSX.Element {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-12">
            <Lock className="w-16 h-16 text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-white mb-4">Projects are Member-Only</h3>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Our community projects are shared exclusively with logged-in members. 
              Join the Duo Keyboard Koalition to showcase your projects and discover what others are building!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <Code2 className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Share Your Work</h4>
                <p className="text-gray-400 text-sm">
                  Showcase your hackathon projects, side projects, and open source contributions
                </p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Connect & Collaborate</h4>
                <p className="text-gray-400 text-sm">
                  Discover projects from other members and find collaboration opportunities
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-black">
                <Link to="/auth">
                  Sign In to View Projects
                </Link>
              </Button>
              <p className="text-gray-500 text-sm">
                Already a member? <Link to="/my-projects" className="text-primary hover:underline">Go to your projects</Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Projects;