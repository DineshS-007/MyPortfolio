// import { PORTFOLIO_DATA } from './constants/portfolioData'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useIntersectionReveal } from './hooks/useIntersectionReveal'
// import { Ticker } from './components/Ticker'
import { Header } from './components/Header'
import { HeroSection } from './sections/HeroSection'
import { ManifestoSection } from './sections/ManifestoSection'
import { StackSection } from './sections/StackSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ProcessSection } from './sections/ProcessSection'
import { FooterSection } from './sections/FooterSection'

export function App() {
  const { activeSection, isSolid } = useScrollSpy([
    'stack',
    'doposle',
    'projects',
    'experience',
    'process',
  ])

  // Trigger scroll-based reveal animations
  useIntersectionReveal()

  return (
    <>
      {/* ═══ TICKER TAPE ═══ */}
      {/* <Ticker items={PORTFOLIO_DATA.tickerItems} /> */}

      {/* ═══ HEADER ═══ */}
      <Header activeSection={activeSection} isSolid={isSolid} />

      {/* ═══ MAIN SECTIONS ═══ */}
      <main id="top">
        <HeroSection />
        <ManifestoSection />
        <StackSection />
        <ProjectsSection />
        <ExperienceSection />
        <ProcessSection />
      </main>

      {/* ═══ FOOTER ═══ */}
      <FooterSection />
    </>
  )
}

export default App
