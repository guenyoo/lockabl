const LOCKS = [
  {
    id: 0,
    name: 'Bicycle',
    connectivity: 77,
    img: false,
    color: 'blue',
    status: 'locked',
    favorite: true,
    sharedWith: [],
  },
  {
    id: 1,
    name: 'Scooter',
    connectivity: 0,
    img: false,
    color: 'blue',
    status: 'locked',
    favorite: false,
    sharedWith: [],
  },
];

const SHARED = [
  {
    id: 0,
    name: 'Bicycle',
    connectivity: 50,
    img: false,
    color: 'blue',
    status: 'locked',
    favorite: true,
    sharedWith: [],
    isShared: true,
  },
];

export {
  LOCKS,
  SHARED,
};
