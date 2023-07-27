export type Album = {
  key: string;
  name: string;
  date: string;
  thumbnail: string;
  songs: Song[];
};

export type Song = {
  index: number;
  title: string;
  src: string;
};
