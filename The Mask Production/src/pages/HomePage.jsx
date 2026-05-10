import CinematicHero from '../components/CinematicHero'
import { CameraObject } from '../components/SceneObjects'
import { HOME_STAGES } from '../constants/pages'

// Replace these with your own image/video poster paths e.g. '/images/stage-1.jpg'
const HOME_IMAGES = [
  'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=1600&q=80', // camera / cinematic
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80', // film moment
  'https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=1600&q=80', // editing suite
  'https://images.unsplash.com/photo-1519408469771-2586093c3f14?w=1600&q=80', // frame / lens
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80', // story / portrait
]

export default function HomePage() {
  return (
    <CinematicHero
      stages={HOME_STAGES}
      images={HOME_IMAGES}
      instruction="Flash To Transform"
      description="Interactive cinematic storytelling powered by motion typography, immersive visuals, and premium digital experiences."
      background="bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]"
      glow="bg-cyan-400/10"
      effect="bg-white"
      object={CameraObject}
      panelTitle="CAPTURE"
      panelSubtitle="Cinematic Visual Storytelling"
    />
  )
}
