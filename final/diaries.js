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

const passerbyDiaries = {
    2: {
            id: 2,
            username: '22',
            date: 1681276419346,
            label: 'Movies',
            isPasserby: true, 
            details: "HHHisPasserbyisPasserbyisPasserbyisPasserbyisPasserbyisPasserbyHH",
            intro: "HHHisPasserbyisPasserbyisPasserbyisPasserbyisPass...",
    }
};

function addDiary({username, form}) {
    const id = uuid();
    const date = Date.now();
    
    const diary = {
        id,
        username,
        date,
        label: form.label,
        isPasserby: form.isPasserby, 
        details: form.details,
        intro,
    };
    diaries[username][id] = diary;

    const intro = diary.details.length > 50 ? `${diary.details.substring(0, 50)}...` : diary.details;

    if(diary.isPasserby) {
        passerbyDiaries[id] = diary;
    }

    return id;
}

function deleteDiary({username, id}) {
    const diary = diaries[username][id];
    if(diary.isPasserby) {
        delete passerbyDiaries
    }
    delete diary;
}

function getDiaries({username}) {
    return diaries[username];
}

function getDiary({username, id}) {
    return diaries[username][id];
}

function updateDiary({username, id, form}) {
    // Todo: edge case
    const diary = diaries[username][id];
    diary.label = form.label;
    diary.isPasserby = form.isPasserby;
    diary.details = form.details;

    const intro = diary.details.length > 50 ? `${diary.details.substring(0, 50)}...` : diary.details;
    diary.intro = intro;
    if(diary.isPasserby) {
        passerbyDiaries[id] = diary;
    }
}

function togglePasserbyDiary({username, id}) {
    const status = passerbyDiaries[id].isPasserby;
    passerbyDiaries[id].isPasserby = !status;
    diaries[username][id].isPasserby = !status;
}

function getPasserbyDiaries() {
    return passerbyDiaries;
}

function getLatestPasserbyDiaries() {
    return Object.values(passerbyDiaries).sort((item1,item2) => item1.date - item2.date);
}

function getMinePasserbyDiaries({username}) {
    return Object.values(passerbyDiaries).filter((item) => item?.username == username);;
}

function getPasserbyDiary({id}) {
    return  passerbyDiaries[id];
}


module.exports = {
    addDiary,
    deleteDiary,
    getDiaries,
    getDiary,
    updateDiary,
    getPasserbyDiaries,
    getPasserbyDiary,
    togglePasserbyDiary,
    getMinePasserbyDiaries,
    getLatestPasserbyDiaries,
  };