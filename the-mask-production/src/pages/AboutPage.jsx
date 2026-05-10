import CinematicHero from '../components/CinematicHero'
import { AboutObject } from '../components/SceneObjects'
import { ABOUT_STAGES } from '../constants/pages'

const ABOUT_IMAGES = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
]

export default function AboutPage() {
  return (
    <CinematicHero
      stages={ABOUT_STAGES}
      images={ABOUT_IMAGES}
      instruction="Activate Workflow"
      description="A creative studio blending cinematics, automation, digital storytelling, and motion systems into immersive brand experiences."
      background="bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_35%)]"
      glow="bg-emerald-400/10"
      effect="bg-emerald-200/20"
      object={AboutObject}
      panelTitle="SYSTEM"
      panelSubtitle="Creative Workflow Intelligence"
    />
  )
}
