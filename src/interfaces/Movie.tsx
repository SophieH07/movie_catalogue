interface Movie {
  title: string;
  rating: number;
  status: Status;
  length: number;
  storage: M_Storage;
}

enum Status {
  WATCHED,
  NOT_WATCHED,
  HATED,
  LIKED,
}

enum M_Storage {
  pendrive,
  dvd,
  computer,
}
