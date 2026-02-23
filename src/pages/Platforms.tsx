import { Link } from 'react-router-dom';
import { ExternalLink, Layers, Calendar, Users, MapPin, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";

function PlatformsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50 w-full">
        <nav className="w-full px-4 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo_ngb.png"
                alt="DKK Logo"
                className="w-10 h-10 mr-3 flex-shrink-0"
              />
              <span className="text-xl font-bold text-white">
                <span className="text-primary">DUO KEYBOARD </span>
                <span className="text-white">KOALITION</span>
              </span>
            </Link>

            <div className="flex items-center gap-6 ml-auto">
              <Link to="/about" className="text-white hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="text-white hover:text-primary transition-colors">Projects</Link>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary/20"
                onClick={() => window.open('https://duo-keyboard-koalition.vercel.app', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Web App
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <Layers className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Platform Strategy</h1>
          <p className="text-xl text-gray-400">
            How the Duo Keyboard Koalition leverages multiple platforms to build a global community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* The Hierarchy */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">The Power Stack: River + Luma</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Globe className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-white">River (Infrastructure)</h3>
                  <p className="text-gray-400 mb-4">
                    Think of River as the <strong className="text-primary">"Main Office"</strong> — the skeleton that holds everything together.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Host the Community Hub where members see the global map</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Members propose new meetups in their cities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Join the "Koalition" as a whole</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Track where your community is densest globally</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Luma (Interface)</h3>
                  <p className="text-gray-400 mb-4">
                    Think of Luma as the <strong className="text-primary">"Storefront"</strong> — the beautiful skin that members interact with.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Beautiful event pages that look premium</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>QR code check-ins for seamless attendance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>"Add to Google Calendar" buttons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Perfect mobile experience for RSVPs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center">
              <p className="text-lg text-gray-300">
                <strong className="text-primary">Hierarchy:</strong> River (Parent) → Luma (Child)
              </p>
              <p className="text-gray-400 mt-2">
                Your River Community Page is the "Main Office" and each Luma Event is a "Storefront"
              </p>
            </div>
          </div>

          {/* The Workflow */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">How It Works: Step-by-Step</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center font-bold">1</div>
                    <h3 className="text-xl font-bold text-white">Create on Luma</h3>
                  </div>
                  <p className="text-gray-400">
                    Set up your beautiful event page on Luma to handle RSVPs, ticketing, and automated reminders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center font-bold">2</div>
                    <h3 className="text-xl font-bold text-white">Post "Shadow Event" on River</h3>
                  </div>
                  <p className="text-gray-400">
                    Go to your River dashboard and "Add Event." In the Description or External Link field, paste your Luma URL.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center font-bold">3</div>
                    <h3 className="text-xl font-bold text-white">Member-Led Scaling</h3>
                  </div>
                  <p className="text-gray-400">
                    When a member in another city (Toronto, Montreal, etc.) wants to host a meetup, they propose it on River. Once approved, they link their own Luma page for that city.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Dual-Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Why This Dual-Stack Strategy?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Visual Trust (Luma)</h3>
                  <p className="text-gray-400">
                    People are more likely to RSVP to a Luma page because it looks premium and works perfectly on mobile.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">Community Data (River)</h3>
                  <p className="text-gray-400">
                    River allows you to see who your hosts are and where your community is densest globally. Luma doesn't have a "propose a meetup" feature for members, but River does.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Globe className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-white">SEO & Discovery</h3>
                  <p className="text-gray-400">
                    By having your community listed on both platforms, you show up in both Luma's "Discover" feed and River's "Community" search.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pro Integration Tip */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Zap className="w-12 h-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Pro-Level Integration Tip</h3>
                    <p className="text-gray-300 mb-4">
                      Use <strong className="text-primary">Zapier</strong> or <strong className="text-primary">Make.com</strong> to automate the connection between platforms:
                    </p>
                    <div className="bg-black/50 rounded-lg p-4 mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-white font-semibold">Trigger:</span>
                        <span className="text-gray-300">New RSVP on Luma</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-white font-semibold">Action:</span>
                        <span className="text-gray-300">Add member to River community list (or Discord/Slack)</span>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      This ensures that even if someone finds you through a single Luma event, they are instantly "onboarded" into the wider Duo Keyboard Koalition ecosystem.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Links */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Platforms</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <MapPin className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">River Community</h3>
                  <p className="text-gray-400 mb-4">Join the global Koalition and propose meetups</p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-black"
                    onClick={() => window.open('https://app.getriver.io/beta/duo-keyboard-koalition', '_blank')}
                  >
                    <span>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit River
                    </span>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <Calendar className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-white">Luma Calendar</h3>
                  <p className="text-gray-400 mb-4">RSVP to events and manage your attendance</p>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-black"
                    onClick={() => window.open('https://luma.com/calendar/manage/cal-FUq4o98pyWykY3q', '_blank')}
                  >
                    <span>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Luma
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo_ngb.png"
              alt="DKK Logo"
              className="w-8 h-8"
            />
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} Duo Keyboard Koalition. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/6GaWZAawUc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#5865F2] text-sm"
            >
              Discord
            </a>
            <a
              href="https://github.com/orgs/Duo-Keyboard-Koalition/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/company/pygmalion-koalition"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077B5] text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PlatformsPage;
