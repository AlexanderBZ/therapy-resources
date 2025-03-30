import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheerfulHeader } from "@/components/cheerful-header"
import { CheerfulFooter } from "@/components/cheerful-footer"
import { DecorativeBubbles } from "@/components/decorative-bubbles"
import { BookOpen, Laptop, Globe, Brain, Heart, Award } from "lucide-react"

const resources = [
  {
    title: "Online Therapy Platforms",
    icon: <Laptop className="h-8 w-8 text-coral" />,
    color: "border-coral",
    items: [
      { name: "BetterHelp", url: "https://www.betterhelp.com" },
      { name: "Talkspace", url: "https://www.talkspace.com" },
      { name: "Calm", url: "https://www.calm.com" },
      { name: "Headspace", url: "https://www.headspace.com" },
    ],
  },
  {
    title: "Global Mental Health Organizations",
    icon: <Globe className="h-8 w-8 text-sky" />,
    color: "border-sky",
    items: [
      { name: "World Health Organization - Mental Health", url: "https://www.who.int/health-topics/mental-health" },
      { name: "National Alliance on Mental Illness", url: "https://www.nami.org" },
      { name: "Mental Health Foundation", url: "https://www.mentalhealth.org.uk" },
      { name: "Mind", url: "https://www.mind.org.uk" },
    ],
  },
  {
    title: "Self-Help Resources",
    icon: <BookOpen className="h-8 w-8 text-lavender" />,
    color: "border-lavender",
    items: [
      { name: "Mindfulness-Based Stress Reduction", url: "https://www.mindfulnessstudies.com" },
      { name: "Cognitive Behavioral Therapy Workbooks", url: "https://www.psychologytools.com" },
      { name: "Positive Psychology Exercises", url: "https://positivepsychology.com" },
      { name: "Gratitude Journal Templates", url: "https://gratefulness.org" },
    ],
  },
  {
    title: "Mental Health Apps",
    icon: <Brain className="h-8 w-8 text-mint" />,
    color: "border-mint",
    items: [
      { name: "Woebot - AI Mental Health Chatbot", url: "https://woebothealth.com" },
      { name: "Moodfit - Mood Tracking", url: "https://www.getmoodfit.com" },
      { name: "MindDoc - Depression & Anxiety", url: "https://minddoc.com" },
      { name: "Sanvello - Stress & Anxiety", url: "https://www.sanvello.com" },
    ],
  },
  {
    title: "Supportive Communities",
    icon: <Heart className="h-8 w-8 text-red-400" />,
    color: "border-red-400",
    items: [
      { name: "7 Cups - Online Therapy & Free Counseling", url: "https://www.7cups.com" },
      { name: "Mental Health America - Support Groups", url: "https://www.mhanational.org" },
      { name: "Depression and Bipolar Support Alliance", url: "https://www.dbsalliance.org" },
      { name: "Anxiety and Depression Association of America", url: "https://adaa.org" },
    ],
  },
  {
    title: "Educational Resources",
    icon: <Award className="h-8 w-8 text-sunny" />,
    color: "border-sunny",
    items: [
      { name: "Mental Health First Aid", url: "https://www.mentalhealthfirstaid.org" },
      { name: "TED Talks on Mental Health", url: "https://www.ted.com/topics/mental+health" },
      { name: "Harvard Health - Mental Health", url: "https://www.health.harvard.edu/topics/mental-health" },
      { name: "Psychology Today", url: "https://www.psychologytoday.com" },
    ],
  },
]

export default function Resources() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <CheerfulHeader />

      <main className="flex-grow relative">
        <DecorativeBubbles />

        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Therapy Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our curated collection of resources to support your mental health journey and help you smile
              again.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((category, index) => (
              <Card
                key={index}
                className={`rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border-t-4 ${category.color}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
                      {category.icon}
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="hover:translate-x-1 transition-transform">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-primary flex items-center gap-1"
                        >
                          <span className="text-primary">•</span> {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center p-8 bg-white rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Need personalized recommendations?</h3>
            <p className="mb-6 text-gray-600">
              Our AI assistant can help you find resources tailored to your specific needs.
            </p>
            <Button asChild className="rounded-full bg-primary hover:bg-coral">
              <Link href="/#chatbot">Chat with our AI</Link>
            </Button>
          </div>
        </div>
      </main>

      <CheerfulFooter />
    </div>
  )
}

