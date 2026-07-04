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
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80',
  'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1600&q=80',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1600&q=80',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&q=80',
]

export default function EventsPage() {
  return (
    <>
      <CinematicHero
        stages={EVENTS_STAGES}
        images={EVENTS_IMAGES}
        instruction="Move The Spotlight"
        description="Live events transformed into cinematic experiences through immersive visuals, dynamic lighting, and energetic storytelling."
        background="bg-[radial-gradient(circle_at_top_left,rgba(255,0,120,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_35%)]"
        glow="bg-fuchsia-400/10"
        effect="bg-fuchsia-200/20"
        object={EventsObject}
        panelTitle="LIVE"
        panelSubtitle="Cinematic Event Experiences"
      />

      <EventsStatsBar />
      <EventsWorkSection />
      <EventsProcessSection />
      <EventsTestimonialsSection />
      <EventsSocialSection />
      <EventsPricingSection />
      <Footer />
    </>
  )
}