import CinematicHero from '../components/CinematicHero'
import { CameraObject } from '../components/SceneObjects'
import { HOME_STAGES } from '../constants/pages'

// Replace these with your own image/video poster paths e.g. '/images/stage-1.jpg'
const HOME_IMAGES = [
  'public/images/home1.jpeg', // camera / cinematic
  'public/images/home2.jpeg', // film moment
  'public/images/home2.jpeg', // film moment
  'public/images/home3.jpeg', // editing suite
  'public/images/home4.jpeg', // frame / lens
 'public/images/home4.jpeg',// story / portrait
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
