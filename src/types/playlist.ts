export type PlayItem = {
  index: number;
  title: string;
  src: string;
};

export type PlayList = {
  id: string;
  name: string;
  thumb: string;
  list: PlayItem[];
  date: string;
};
