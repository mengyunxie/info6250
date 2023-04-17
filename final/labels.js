const LABEL_COLOR = {
    ROSE: 'rose', //#e2262b
    ORANGE: 'orange', //#ec7013
    YELLOW: 'yellow', //#fde64b
    MEDALLION: 'medallion', //#e3b106
    TAN: 'tan', //#e6dbad
    SALT: 'salt', //#f7efec
    FROST: 'frost', //#ecfcfc
    WATERMELON: 'watermelon', //#fe7f9c
    PURPLE: 'purple', //#a32cc4
    BLUE: 'blue', //#3942ba
    OCEAN: 'ocean', //#006063
    GREEN: 'green', //#3ab143
    COFFEE: 'coffee', //#4b371d
    GREY: 'grey', //#6c626d
    IRIS: 'iris', //#9767c5
    SKY: 'sky', //#63c5d9
};

const LABEL_TYPE = {
    DEFAULT: 'Default',
    CUSTOM: 'Custom'
};

const LABEL_KEY = {
    ALL: 'all',
    TRAVEL: 'travel',
    FOOD: 'food',
    HEALTH: 'health',
    WORK: 'work',
    ACADEMIC: 'academic',
    FINANCIAL: 'financial',
    MOOD: 'mood',
    DREAM: 'dream',
    TODO: 'todo',
    SCHOOL: 'school',
    INTEREST: 'interest',
    READING: 'reading',
    GRATITUDE: 'gratitude',
    IDEAS: 'ideas',
    MOVIES: 'movies'
};

const labels = {
    [LABEL_KEY.ALL]: {
        key: LABEL_KEY.ALL,
        color: LABEL_COLOR.ROSE,
        type: LABEL_TYPE.default
    },
    [LABEL_KEY.TRAVEL]: {
        key: LABEL_KEY.TRAVEL,
        color: LABEL_COLOR.ORANGE,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.FOOD]: {
        key: LABEL_KEY.FOOD,
        color: LABEL_COLOR.YELLOW,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.HEALTH]: {
        key: LABEL_KEY.HEALTH,
        color: LABEL_COLOR.MEDALLION,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.WORK]: {
        key: LABEL_KEY.WORK,
        color: LABEL_COLOR.TAN,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.ACADEMIC]: {
        key: LABEL_KEY.ACADEMIC,
        color: LABEL_COLOR.SALT,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.FINANCIAL]: {
        key: LABEL_KEY.FINANCIAL,
        color: LABEL_COLOR.frost,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.MOOD]: {
        key: LABEL_KEY.MOOD,
        color: LABEL_COLOR.WATERMELON,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.DREAM]: {
        key: LABEL_KEY.DREAM,
        color: LABEL_COLOR.PURPLE,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.TODO]: {
        key: LABEL_KEY.TODO,
        color: LABEL_COLOR.BLUE,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.SCHOOL]: {
        key: LABEL_KEY.SCHOOL,
        color: LABEL_COLOR.OCEAN,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.INTEREST]: {
        key: LABEL_KEY.INTEREST,
        color: LABEL_COLOR.GREEN,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.READING]: {
        key: LABEL_KEY.READING,
        color: LABEL_COLOR.COFFEE,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.GRATITUDE]: {
        key: LABEL_KEY.GRATITUDE,
        color: LABEL_COLOR.GREY,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.IDEAS]: {
        key: LABEL_KEY.IDEAS,
        color: LABEL_COLOR.IRIS,
        type: LABEL_TYPE.CUSTOM
    },
    [LABEL_KEY.MOVIES]: {
        key: LABEL_KEY.MOVIES,
        color: LABEL_COLOR.SKY,
        type: LABEL_TYPE.CUSTOM
    }
}

function getDefaultLabel() {
    return labels[LABEL_KEY.ALL];
}

function getLabel(key) {
    return labels[key];
}

function getLabels() {
    return labels;
}

function isValid(key) {
return !!labels[key];
}

module.exports = {
    getDefaultLabel,
    getLabel,
    getLabels,
    isValid,
  };
