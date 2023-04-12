const AVATARS_KEY = {
  DEFAULT: 'Default',
  GIRL: 'Girl',
  BOY: 'Boy',
  FEMALE: 'Female',
  MALE: 'Male',
  GRANDMA: 'Grandma',
  GRANDPA: 'Grandpa',
  CAT: 'Cat',
  BEAR: 'Bear',
  DEER: 'Deer',
  DOG: 'Dog',
  FOX: 'Fox',
  HAPPY: 'Happy',
  WONDER: 'Wonder',
  BATMAN: 'Batman',
};

const avatars = {
  [AVATARS_KEY.DEFAULT]: {
    key: AVATARS_KEY.DEFAULT,
    url: 'avatar.png'
  },
  [AVATARS_KEY.GIRL]: {
    key: AVATARS_KEY.GIRL,
    url: 'avatar-girl.png'
  },
  [AVATARS_KEY.BOY]: {
    key: AVATARS_KEY.BOY,
    url: 'avatar-boy.png'
  },
  [AVATARS_KEY.FEMALE]: {
    key: AVATARS_KEY.FEMALE,
    url: 'avatar-female.png'
  },
  [AVATARS_KEY.MALE]: {
    key: AVATARS_KEY.MALE,
    url: 'avatar-male.png'
  },
  [AVATARS_KEY.GRANDMA]: {
    key: AVATARS_KEY.GRANDMA,
    url: 'avatar-grandma.png'
  },
  [AVATARS_KEY.GRANDPA]: {
    key: AVATARS_KEY.GRANDPA,
    url: 'avatar-grandpa.png'
  },
  [AVATARS_KEY.CAT]: {
    key: AVATARS_KEY.CAT,
    url: 'avatar-cat.png'
  },
  [AVATARS_KEY.BEAR]: {
    key: AVATARS_KEY.BEAR,
    url: 'avatar-bear.png'
  },
  [AVATARS_KEY.DEER]: {
    key: AVATARS_KEY.DEER,
    url: 'avatar-deer.png'
  },
  [AVATARS_KEY.DOG]: {
    key: AVATARS_KEY.DOG,
    url: 'avatar-dog.png'
  },
  [AVATARS_KEY.FOX]: {
    key: AVATARS_KEY.FOX,
    url: 'avatar-fox.png'
  },
  [AVATARS_KEY.HAPPY]: {
    key: AVATARS_KEY.HAPPY,
    url: 'avatar-happy.png'
  },
  [AVATARS_KEY.WONDER]: {
    key: AVATARS_KEY.WONDER,
    url: 'avatar-wonder.png'
  },
  [AVATARS_KEY.BATMAN]: {
    key: AVATARS_KEY.BATMAN,
    url: 'avatar-batman.png'
  }
};

function getDefaultAvatar() {
  return avatars[AVATARS_KEY.DEFAULT];
}

function getAvatar(key) {
  return avatars[key];
}

function getAvatars() {
  return avatars;
}

module.exports = {
  getAvatar,
  getAvatars,
  getDefaultAvatar
};