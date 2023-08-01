import { useQuery } from "@tanstack/react-query";

import type { Album } from "@/types/album";

export const useAlbums = () =>
  useQuery<Album[]>({
    queryKey: ["albums"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.GATSBY_CDN_URL}/albums/index.json`,
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    },
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
