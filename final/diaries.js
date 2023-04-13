const diaries = {
    1: {
            id: 1,
            username: '11',
            avatar:'Cat',
            date: 1681276418346,
            label: {
                color: "orange",
                key: "travel",
                type: "Custom"
            },
            isPasserby: false, 
            details: "HHHHH",
            intro: "HHHHH",
        },
    2: {
            id: 2,
            username: '22',
            avatar:'Batman',
            date: 1681276419346,
            label: {
                color: "sky",
                key: "movies",
                type: "Custom"
            },
            isPasserby: true, 
            details: "HHHisPasserbyisPasserbyisPasserbyisPasserbyisPasserbyisPasserbyHH",
            intro: "HHHisPasserbyisPasserbyisPasserbyisPasserbyisPass...",
    },
};


function contains({id, username}) {
    return diaries[id] && diaries[id].username == username;
}

function addDiary({user, label, isPasserby, details}) {
    const id = uuid();
    const date = Date.now();
    diaries[id] = {
        id,
        username: user.username,
        avatar: user.avatar,
        date,
        label,
        isPasserby, 
        details,
        intro: diary.details.length > 50 ? `${diary.details.substring(0, 50)}...` : diary.details,
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
    const diary = diaries[id];
    diary.label = label;
    diary.isPasserby = isPasserby;
    diary.details = details;
    diary.intro = diary.details.length > 50 ? `${diary.details.substring(0, 50)}...` : diary.details;
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
  };