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
  [AVATARS_KEY.DEFAULT]: AVATARS_KEY.DEFAULT,
  [AVATARS_KEY.GIRL]: AVATARS_KEY.GIRL,
  [AVATARS_KEY.BOY]: AVATARS_KEY.BOY,
  [AVATARS_KEY.FEMALE]: AVATARS_KEY.FEMALE,
  [AVATARS_KEY.MALE]: AVATARS_KEY.MALE,
  [AVATARS_KEY.GRANDMA]: AVATARS_KEY.GRANDMA,
  [AVATARS_KEY.GRANDPA]: AVATARS_KEY.GRANDPA,
  [AVATARS_KEY.CAT]: AVATARS_KEY.CAT,
  [AVATARS_KEY.BEAR]: AVATARS_KEY.BEAR,
  [AVATARS_KEY.DEER]: AVATARS_KEY.DEER,
  [AVATARS_KEY.DOG]:  AVATARS_KEY.DOG,
  [AVATARS_KEY.FOX]: AVATARS_KEY.FOX,
  [AVATARS_KEY.HAPPY]: AVATARS_KEY.HAPPY,
  [AVATARS_KEY.WONDER]: AVATARS_KEY.WONDER,
  [AVATARS_KEY.BATMAN]: AVATARS_KEY.BATMAN,
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