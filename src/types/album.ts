export type Album = {
  id: string;
  name: string;
  date: string;
  desc: string;
  thumbnail_path: string;
  song_count: number;
  song_list: Song[];
};

export type Song = {
  id: string;
  index: number;
  name: string;
  src_path: string;
};
