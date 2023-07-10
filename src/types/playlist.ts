export type PlayItem = {
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
