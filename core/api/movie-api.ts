import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    language: "es-MX",
  },
});

apiClient.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.EXPO_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`;
