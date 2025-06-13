import { AuthProtectRoute } from "@/components/Auth/AuthProtectRoute";
import Header from "@/components/Header/Header";
import HeroPageClient from "@/components/HeroPageClient";
import requests from "@/lib/API/request";

export default async function HeroPage() {
  const [
    netflixOrigins,
    trendingNow,
    topRate,
    actionMovie,
    comedyMovie,
    horrorMovie,
    romanceMovie,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return (
    <div>
      <AuthProtectRoute>
        <Header />
        <div className="scrollbar-hide overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-red-500">

          <HeroPageClient
            netflixOrigins={netflixOrigins.results}
            trendingNow={trendingNow.results}
            topRate={topRate.results}
            actionMovie={actionMovie.results}
            comedyMovie={comedyMovie.results}
            horrorMovie={horrorMovie.results}
            romanceMovie={romanceMovie.results}
            documentaries={documentaries.results}
          />
        </div>
      </AuthProtectRoute>
    </div>
  );
}