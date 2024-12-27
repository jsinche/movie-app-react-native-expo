import axios from "axios";

export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    language: "es-MX",
  },
});

movieApi.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.EXPO_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`;
