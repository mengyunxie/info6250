const uuid = require('uuid').v4;

const diaries = {};

function contains({id, username}) {
    return diaries[id] && diaries[id].username == username;
}

function addDiary({user, label, isPasserby, details}) {
    const id = uuid();
    const date = Date.now();
    const intro = details.length > 50 ? `${details.substring(0, 50)}...` : details;
    
    diaries[id] = {
        id,
        username: user.username,
        avatar: user.avatar,
        date,
        label,
        isPasserby, 
        details,
        intro,
    };

    return id;
}

function deleteDiary(id) {
    delete diaries[id];
}

function getDiary(id) {
    return diaries[id];
}

function updateDiary({id, label, isPasserby, details}) {
    diaries[id].label = label;
    diaries[id].isPasserby = isPasserby;
    diaries[id].details = details;
    diaries[id].intro = details.length > 50 ? `${details.substring(0, 50)}...` : details;
}

function updateDiariesUserAvatar({username, avatar}) {
    Object.values(diaries).forEach(diary => {
        if (diary.username === username) {
            diary.avatar = avatar;
        }
    });
}

function togglePasserbyDiary(id) {
    diaries[id].isPasserby = !diaries[id].isPasserby
}

function getDiaries(username) {
    return Object.values(diaries).filter((item) => item?.username == username);
}

function getDiariesByLabel({username, label}) {
    return Object.values(diaries).filter((item) => item?.username == username && item?.label.key == label);
}

function getPasserbyDiaries() {
    return Object.values(diaries).filter((item) => item?.isPasserby);
}

function getLatestPasserbyDiaries() {
    return Object.values(diaries).filter((item) => item?.isPasserby).sort((item1,item2) => item1.date - item2.date);
}

function getMinePasserbyDiaries(username) {
    return Object.values(diaries).filter((item) => item?.isPasserby && item?.username == username);
}

module.exports = {
    contains,
    addDiary,
    deleteDiary,
    getDiaries,
    getDiary,
    updateDiary,
    getPasserbyDiaries,
    togglePasserbyDiary,
    getMinePasserbyDiaries,
    getLatestPasserbyDiaries,
    getDiariesByLabel,
    updateDiariesUserAvatar,
  };