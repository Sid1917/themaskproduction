import CinematicHero from '../components/CinematicHero'
import { WeddingObject } from '../components/SceneObjects'
import { WEDDING_STAGES } from '../constants/pages'

const WEDDING_IMAGES = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&q=80',
  'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1600&q=80',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1600&q=80',
]

export default function WeddingPage() {
  return (
    <CinematicHero
      stages={WEDDING_STAGES}
      images={WEDDING_IMAGES}
      instruction="Reveal The Memory"
      description="Timeless wedding cinematics crafted through emotional storytelling, cinematic motion, and immersive visual memories."
      background="bg-[radial-gradient(circle_at_top_left,rgba(255,215,180,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,180,120,0.08),transparent_35%)]"
      glow="bg-amber-200/10"
      effect="bg-amber-100/20"
      object={WeddingObject}
      panelTitle="MEMORIES"
      panelSubtitle="Cinematic Love Stories"
    />
  )
}
