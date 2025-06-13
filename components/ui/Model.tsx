import { FaTimes } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/lib/atoms/modalAtom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Element, Genre } from '@/types/typing';
import ReactPlayer from 'react-player/lazy';

export default function Modal() {
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [movie,] = useRecoilState(movieState);
    const [trailer, setTrailer] = useState('');
    const [genres, setGenres] = useState<Genre[]>();
    const [muted,] = useState(false);

    useEffect(() => {
        if (!movie) return;

        async function fetchMovie() {
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/${movie!.media_type === 'tv' ? 'tv' : 'movie'}/${movie!.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
                );
                const data = res.data;

                const index = data.videos?.results?.findIndex(
                    (el: Element) => el.type === 'Trailer'
                );

                setTrailer(data.videos?.results[index]?.key);
                setGenres(data.genres);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMovie();
    }, [movie]);

    const handleClose = () => {
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-5xl bg-[#181818] rounded-md overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 z-40 text-white hover:text-gray-300"
                >
                    <FaTimes size={24} />
                </button>

                {/* Video Player */}
                <div className="relative pt-[56.25%]">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        playing
                        muted={muted}
                    />
                </div>

                {/* Movie Info */}
                <div className="flex space-x-16 px-10 py-8">
                    <div className="space-y-6 text-lg">
                        <div className="flex items-center space-x-2 text-sm">
                            <p className="font-semibold text-green-400">
                                {(movie!.vote_average * 10).toFixed(1)}% Match
                            </p>
                            <p className="font-light">
                                {movie?.release_date || movie?.first_air_date}
                            </p>
                            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                                HD
                            </div>
                        </div>

                        <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                            <p className="w-5/6">{movie?.overview}</p>
                            <div className="flex flex-col space-y-3 text-sm">
                                <div>
                                    <span className="text-gray-400">Genres: </span>
                                    {genres?.map((g) => g.name).join(', ')}
                                </div>
                                <div>
                                    <span className="text-gray-400">Original Language: </span>
                                    {movie?.original_language}
                                </div>
                                <div>
                                    <span className="text-gray-400">Total Votes: </span>
                                    {movie?.vote_count}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
