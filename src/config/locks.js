import { BACKGROUNDS } from './backgrounds';

const LOCKS = [
  {
    id: 0,
    name: 'Bicycle',
    connectivity: 77,
    img: BACKGROUNDS.BICYCLE.IMG,
    color: BACKGROUNDS.BICYCLE.NAME,
    status: 'locked',
    favorite: true,
    sharedWith: [],
  },
  {
    id: 1,
    name: 'Scooter',
    connectivity: 35,
    img: BACKGROUNDS.SCOOTER.IMG,
    color: BACKGROUNDS.SCOOTER.NAME,
    status: 'locked',
    favorite: false,
    sharedWith: [],
  },
  {
    id: 2,
    name: 'Lock with really really long name',
    connectivity: 0,
    img: BACKGROUNDS.RED.IMG,
    color: BACKGROUNDS.RED.NAME,
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
  {
    id: 3,
    name: 'Bureau',
    connectivity: 45,
    img: BACKGROUNDS.BLUE.IMG,
    color: BACKGROUNDS.BLUE.NAME,
    status: 'unlocked',
    favorite: true,
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
