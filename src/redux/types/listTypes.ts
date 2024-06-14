export interface ListItem {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

export interface ListState {
  list: ListItem[];
}

export const SET_LIST = 'SET_LIST';
