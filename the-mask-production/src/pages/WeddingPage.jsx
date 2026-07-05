import CinematicHero from '../components/cinematic/CinematicHero'
import { WeddingObject } from '../components/cinematic/SceneObjects'
import { WEDDING_STAGES } from '../constants/pages'
import WeddingStatsBar from '../components/wedding/WeddingStatsBar'
import WeddingWorkSection from '../components/wedding/WeddingWorkSection'
import WeddingProcessSection from '../components/wedding/WeddingProcessSection'
import WeddingTestimonialsSection from '../components/wedding/WeddingTestimonialsSection'
import WeddingSocialSection from '../components/wedding/WeddingSocialSection'
import WeddingPricingSection from '../components/wedding/WeddingPricingSection'
import Footer from '../components/home/Footer'

const WEDDING_IMAGES = [
 '/images/wedding2.webp',
  '/images/wedding4.webp',
  '/images/wedding3.webp',
  '/images/wedding1.webp',
  '/images/wedding3.webp',
]

export default function WeddingPage() {
  return (
    <>
      <CinematicHero
        stages={WEDDING_STAGES}
        images={WEDDING_IMAGES}
        instruction="Reveal The Memory"
        description="Timeless wedding cinematics crafted through emotional storytelling, cinematic motion, and immersive visual memories."
        background="bg-[radial-gradient(circle_at_top_left,rgba(255,215,180,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,180,120,0.08),transparent_35%)]"
        glow="bg-amber-200/10"
        effect="bg-amber-100/20"
        object={WeddingObject}
        // panelTitle="MEMORIES"
        // panelSubtitle="Cinematic Love Stories"
      />

      <WeddingStatsBar />
      <WeddingWorkSection />
      <WeddingProcessSection />
      <WeddingTestimonialsSection />
      <WeddingSocialSection />
      <WeddingPricingSection />
      <Footer />
    </>
  )
}