import { IMovie } from "@/interfaces/movie";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

const Index: FC = () => {
  const [movie, setMovie] = useState<IMovie | undefined>();
  const { query } = useRouter();
  const { _id } = query;

  const placeHolder = "https://via.placeholder.com/160x230";

  useEffect(() => {
    fetch("http://localhost:7070/api/movies/" + _id)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  if (!movie) return <h1>Movie not found</h1>;

  return (
      <div className="md:grid-cols-3 gap-3 container mx-auto flex justify-between">
          <div>asd</div>
          <div className="col-span-3">
              
                    <div className=" aspect-[40/32] ">
                        <Image
                            src={movie.poster || placeHolder}
                            alt={movie.title}
                            width={100}
                            height={200}
                            className="w-full h-full object-cover rounded"
                        />
                        <div className="gray-light aspect-[40/32] items-center bg-slate-100 rounded-xl">
                    <div className=" text-center   sm:p-8 dark:bg-gray-800 h-100">
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{movie.title}</h5>
                    <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{movie.year}/{movie.genres},{movie.runtime}</p>
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 w-100 ">
                        <a href="#" className="w-full sm:w-auto   focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <div className="text-left">
                                <div><Image src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" width={48} height={48}  alt={movie.title}/></div>
                                <div>
                                        TOMATOMETER
                                    </div>
                                    <div>{movie.imdb.rating}</div>
                                
                            </div>
                        </a>
                        <a href="#" className="w-full sm:w-auto focus:ring-4 focus:outline-none focus:ring-gray-300 text-black rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                            <div className="text-left">
                                <div><Image src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-empty.eb667b7a1c7.svg" width={48} height={48}  alt={movie.title}/></div>
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div>
                                        AUDIENCE SCORE
                                    </div>
                                    <div>{movie.imdb.rating}</div>
                                </div>
                            </div>
                        </a>
                    </div>
                
                </div>
                </div>
            </div>
          </div>
          
      </div>);
};

export default Index;
