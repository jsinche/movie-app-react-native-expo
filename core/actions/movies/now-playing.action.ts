import { movieApi } from "@/core/api/movie-api";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get("/now_playing");
    console.log(data);
  } catch (error) {
    console.log(error);
    throw "Now Playing Action Error";
  }
};
