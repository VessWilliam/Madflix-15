'use client';

import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { modalState, movieState } from '@/lib/atoms/modalAtom';
import { Movie } from '@/types/typing';

interface Props {
  movie: Movie;
}

function Thumbnail({ movie }: Props) {
   console.log("Row rendered with movies:", movie);
  const setShowModal = useSetRecoilState(modalState);
  const setCurrentMovie = useSetRecoilState(movieState);

  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      className="relative h-28 min-w-[180px] cursor-pointer transition
       duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title || movie.name || 'Movie Poster'}
        className="rounded-sm object-cover md:rounded"
        fill
      />
    </div>
  );
}

export default Thumbnail;
