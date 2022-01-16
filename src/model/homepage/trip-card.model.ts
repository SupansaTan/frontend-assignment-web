export interface TagProps {
  eid: string
  tags: Array<string>;
  handleOnClick: any;
}

export interface ImageGroupProps {
  eid: string
  photos: Array<string>
  startIndex: number;
}