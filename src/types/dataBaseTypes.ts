export interface Data {
  id: string;
  label: string;
  percentage: number;
}

export interface Friends {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface Transactions {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface Friends {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface Users {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}
