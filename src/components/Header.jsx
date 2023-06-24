/* eslint-disable no-unused-vars */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderCard from "./HeaderCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US";

const Header = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRelatedMovies(response.data.results);
    })
  }, []);

  return (
    <section className="">
      <Splide
        options={{
          type: "loop",
          arrows: false,
          autoplay: true,
          interval: 2000,
        }}
      >
        {relatedMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <HeaderCard movie={movie} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Header;
