// import CinematicHero from '../components/cinematic/CinematicHero'
// import { CameraObject } from '../components/cinematic/SceneObjects'
// import { HOME_STAGES } from '../constants/pages'
// import OurWorkSection from '../components/home/OurWorkSection'
// import ServicesSection from '../components/home/ServicesSection'
// import ClientsSection from '../components/home/ClientsSection'
// import WhyUsSection from '../components/home/WhyUsSection'
// import Footer from '../components/home/Footer'

// const HOME_IMAGES = [
//    '/images/home1.webp',
//   '/images/home1.webp',
//   '/images/home1.webp',
//   '/images/home1.webp',
// ]
// const works = [
//   {
//     image: '/images/home1.webp',
//   },
//   {
//     image: '/images/home2_g20.webp',
//   },
//   {
//     image: '/images/home3.webp',
//   },
//   {
//     image: '/images/govt_event.webp',
//   },
// ]
// export default function HomePage() {
//   return (
//     <>
//       <CinematicHero
//         stages={HOME_STAGES}
//         images={HOME_IMAGES}
//         //instruction="Flash To Transform"
//         description="Interactive cinematic storytelling powered by motion typography, immersive visuals, and premium digital experiences."
//         background="bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]"
//         glow="bg-cyan-400/10"
//         effect="bg-white"
//         object={CameraObject}
//         //panelTitle="CAPTURE"
//         //panelSubtitle="Cinematic Visual Storytelling"
//       />

//       <OurWorkSection />
//       <ServicesSection />
//       <ClientsSection />
//       {/* <WhyUsSection /> */}
//       <Footer />
//     </>
//   )
// }

import CinematicHero from '../components/cinematic/CinematicHero'
import { CameraObject } from '../components/cinematic/SceneObjects'
import { HOME_STAGES } from '../constants/pages'
import OurWorkSection from '../components/home/OurWorkSection'
import ServicesSection from '../components/home/ServicesSection'
import ClientsSection from '../components/home/ClientsSection'
import WhyUsSection from '../components/home/WhyUsSection'
import Footer from '../components/home/Footer'

const HOME_IMAGES = [
  '/images/home2_g20.webp',
  '/images/home1.webp',
  '/images/home3.webp',
  '/images/home4.webp',
]

// Manually tune per-image scale to visually normalize inconsistent source
// framing (some photos were shot tighter/wider than others). 1 = no change.
// >1 = zoom in (for images that read too "wide" next to the others).
// <1 = zoom out. Adjust these numbers after comparing transitions live.
const HOME_IMAGE_SCALE_FIX = {
  '/images/home2_g20.webp': 1,
  '/images/home1.webp': 1,
  '/images/home3.webp': 1,
  '/images/home4.webp': 1,
}

const works = [
  {
    image: '/images/home1.webp',
  },
  {
    image: '/images/home2_g20.webp',
  },
  {
    image: '/images/home3.webp',
  },
  {
    image: '/images/govt_event.webp',
  },
]

export default function HomePage() {
  return (
    <>
      <CinematicHero
        stages={HOME_STAGES}
        images={HOME_IMAGES}
        imageScaleFix={HOME_IMAGE_SCALE_FIX}
        //instruction="Flash To Transform"
        description="Interactive cinematic storytelling powered by motion typography, immersive visuals, and premium digital experiences."
        background="bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%)]"
        glow="bg-cyan-400/10"
        effect="bg-white"
        object={CameraObject}
        //panelTitle="CAPTURE"
        //panelSubtitle="Cinematic Visual Storytelling"
      />

      <OurWorkSection />
      <ServicesSection />
      <ClientsSection />
      {/* <WhyUsSection /> */}
      <Footer />
    </>
  )
}