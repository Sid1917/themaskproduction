import CinematicHero from '../components/cinematic/CinematicHero'
import { EventsObject } from '../components/cinematic/SceneObjects'
import { EVENTS_STAGES } from '../constants/pages'
import EventsStatsBar from '../components/events/EventsStatsBar'
import EventsWorkSection from '../components/events/EventsWorkSection'
import EventsProcessSection from '../components/events/EventsProcessSection'
import EventsTestimonialsSection from '../components/events/EventsTestimonialsSection'
import EventsSocialSection from '../components/events/EventsSocialSection'
import EventsPricingSection from '../components/events/EventsPricingSection'
import Footer from '../components/home/Footer'

const EVENTS_IMAGES = [
  '/images/commercial_1.webp',
  '/images/commercial_2.webp',
  '/images/commercial_3.webp',
  '/images/commercial_4.webp',
  '/images/commercial_5.webp',
]

export default function EventsPage() {
  return (
    <>
      <CinematicHero
        stages={EVENTS_STAGES}
        images={EVENTS_IMAGES}
        instruction="Move The Spotlight"
        description="Corporate films, brand campaigns, and live events transformed into cinematic experiences through immersive visuals, dynamic lighting, and storytelling that moves."
        background="bg-[radial-gradient(circle_at_top_left,rgba(255,0,120,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_35%)]"
        glow="bg-fuchsia-400/10"
        effect="bg-fuchsia-200/20"
        object={EventsObject}
      />

      <EventsStatsBar />
      <EventsWorkSection />
      {/* <EventsProcessSection /> */}
      <EventsTestimonialsSection />
      {/* <EventsSocialSection /> */}
      <EventsPricingSection />
      <Footer />
    </>
  )
}