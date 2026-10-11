import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { StickyCta } from '../components/StickyCta'
import { Hero } from '../sections/Hero'
import { Concerns } from '../sections/Concerns'
import { Flow } from '../sections/Flow'
import { Counselors } from '../sections/Counselors'
import { Faq } from '../sections/Faq'
import { FinalCta } from '../sections/FinalCta'

/** 悩みを想起させ、予約につなげる。それ以外の情報は最小限にする */
export function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Concerns />
        <Flow />
        <Counselors />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  )
}
