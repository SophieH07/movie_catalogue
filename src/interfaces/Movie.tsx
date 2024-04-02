interface Movie {
  title: string;
  rating: number;
  status: Status;
  length: number;
}

enum Status {
  WATCHED,
  NOT_WATCHED,
  HATED,
  LIKED,
}
