import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from '../sections/Hero'
import { Concerns } from '../sections/Concerns'
import { FinalCta } from '../sections/FinalCta'

/** 悩みを想起させ、予約につなげる。それ以外は置かない */
export function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Concerns />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
