import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { StickyCta } from '../components/StickyCta'
import { Hero } from '../sections/Hero'
import { Survey } from '../sections/Survey'
import { Concerns } from '../sections/Concerns'
import { Values } from '../sections/Values'
import { Counselors } from '../sections/Counselors'
import { Flow } from '../sections/Flow'
import { Summary } from '../sections/Summary'
import { Privacy } from '../sections/Privacy'
import { Faq } from '../sections/Faq'
import { FinalCta } from '../sections/FinalCta'

export function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Concerns />
        <Survey />
        <Values />
        <Counselors />
        <Privacy />
        <Flow />
        <Summary />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
