import Image from "next/image"
import { useEffect, useState } from "react"
import { Movie } from '@/types/typing'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { modalState, movieState } from "@/lib/atoms/modalAtom"
import { useRecoilState } from "recoil"

interface Props {
    netflixOrigins: Movie[]
}

function Banner({ netflixOrigins }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [, setShowModal] = useRecoilState(modalState)
    const [, setCurrentMovie] = useRecoilState(movieState)

    useEffect(() => {
        setMovie(netflixOrigins[Math.floor(Math.random() * netflixOrigins.length)])
    }, [netflixOrigins])

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 
        lg:h-[65vh] lg:justify-end lg:pb-12">

            {/* Background Image */}
            <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path || movie?.poster_path || ''}`}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover"
                    alt={movie?.title || movie?.name || "Banner"}
                />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            {/* Description */}
            <p className="max-w-xs text-shadow-md text-xs md:max-w-lg 
          md:text-lg lg:max-w-2xl lg:text-2xl">
                {movie?.overview}
            </p>

            {/* Buttons */}
            <div className="flex space-x-1">
                <button className="flex items-center gap-x-2 rounded px-5 py-1.5 text-sm 
                   font-semibold hover:opacity-75 md:py-2.5 md:px-8 md:text-xl  
                    text-red-500 bg-[gray]/90"
                    onClick={() => {
                        setCurrentMovie(movie)
                        setShowModal(true)
                    }}>
                    More Info
                    <AiOutlineInfoCircle className="h-6 w-6 md:h-8 md:w-8" />
                </button>
            </div>
        </div>
    )
}

export default Banner
