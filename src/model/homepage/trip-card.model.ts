export interface TagProps {
  eid: string
  tags: Array<string>;
  handleOnClick: (tagTitle: string) => void;
}

export interface ImageGroupProps {
  eid: string
  photos: Array<string>
  startIndex: number;
  handleOnClick: (src: string) => void;
}