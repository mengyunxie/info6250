const diaries = {
    1: {
            id: 1,
            username: '11',
            date: 1681276418346,
            label: 'Travel',
            isPasserby: false, 
            details: "HHHHH",
            intro: "HHHHH",
        },
    2: {
            id: 2,
            username: '22',
            date: 1681276419346,
            label: 'Movies',
            isPasserby: true, 
            details: "HHHisPasserbyisPasserbyisPasserbyisPasserbyisPasserbyisPasserbyHH",
            intro: "HHHisPasserbyisPasserbyisPasserbyisPasserbyisPass...",
    },
};


function contains({id, username}) {
    return diaries[id] && diaries[id].username == username;
}

function addDiary({username, form}) {
    const id = uuid();
    const date = Date.now();
    diaries[id] = {
        id,
        username,
        date,
        label: form.label,
        isPasserby: form.isPasserby, 
        details: form.details,
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

function updateDiary({id, form}) {
    const diary = diaries[id];
    diary.label = form.label;
    diary.isPasserby = form.isPasserby;
    diary.details = form.details;

    const intro = diary.details.length > 50 ? `${diary.details.substring(0, 50)}...` : diary.details;
    diary.intro = intro;
}

function togglePasserbyDiary(id) {
    diaries[id].isPasserby = !diaries[id].isPasserby
}

function getDiaries(username) {
    return Object.values(diaries).filter((item) => item?.username == username);
}

function getDiariesByLabel({username, label}) {
    return Object.values(diaries).filter((item) => item?.username == username && item?.label == label);
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