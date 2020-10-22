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
    connectivity: 35,
    img: false,
    color: 'purple',
    status: 'locked',
    favorite: false,
    sharedWith: [],
  },
  {
    id: 2,
    name: 'Lock with really really long name',
    connectivity: 0,
    img: false,
    color: 'red',
    status: 'unlocked',
    favorite: true,
    sharedWith: [
      {
        name: 'Mama',
        userId: 12,
        color: 'green',
      },
      {
        name: 'Papa',
        userId: 13,
        color: 'blue',
      },
    ],
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
