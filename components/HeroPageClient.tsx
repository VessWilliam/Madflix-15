'use client'

import { useRecoilValue } from 'recoil'
import { modalState } from '@/lib/atoms/modalAtom'
import { Movie } from '@/types/typing'
import Row from '@/components/ui/Row'
import Modal from '@/components/ui/Model'
import Banner from '@/components/ui/Banner'

interface Props {
  netflixOrigins: Movie[]
  trendingNow: Movie[]
  topRate: Movie[]
  actionMovie: Movie[]
  comedyMovie: Movie[]
  horrorMovie: Movie[]
  romanceMovie: Movie[]
  documentaries: Movie[]
}

export default function HeroPageClient({
  netflixOrigins,
  trendingNow,
  topRate,
  actionMovie,
  comedyMovie,
  horrorMovie,
  romanceMovie,
  documentaries,
}: Props) {
  const showModal = useRecoilValue(modalState)

  return (
    <main className="relative scollbar-hide  scrollbar-thumb-red-500 pb-24 lg:space-y-24">
      <div className='pl-15'>
      <Banner netflixOrigins={netflixOrigins} />
      </div>

      {/* Rows */}
      <section className="pl-10 md:space-y-24">
        <Row title="Trending Now" movies={trendingNow} />
        <Row title="Top Rated" movies={topRate} />
        <Row title="Action Thrillers" movies={actionMovie} />
        <Row title="Comedies" movies={comedyMovie} />
        <Row title="Scary Movies" movies={horrorMovie} />
        <Row title="Romance Movies" movies={romanceMovie} />
        <Row title="Documentaries" movies={documentaries} />
      </section>

      {/* Modal */}
      {showModal && <Modal />}
    </main>
  )
}
