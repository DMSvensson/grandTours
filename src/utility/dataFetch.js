const baseImgUrl = 'https://grandtourstorage.blob.core.windows.net/';

export async function fetchData(path) {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}${path}`, {
        headers: {
            'content-type': 'application/json',
            'Attept': 'application/json'
        }
    });
    if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        console.error(`Response text: ${await response.text()}`);
        return;
    }
    const json = await response.json();
    return json;
}

export function fetchTeamsImages(year, _type, value) {
    if(isNaN(year)) {
        return;
    }
    let type = '';
    let format = '';
    if(_type === 'jersey') {
        type = 'jerseys';
        format = 'png'
    } else if (_type === 'logo') {
        type = 'logos';
        format = 'jpg';
    } else {
        return;
    }

    return `${baseImgUrl}teams/${type}/${year}/${value}.${format}`;
}

export function fetchRaceImages(year, value) {
    if(isNaN(year)) {
        return;
    }

    return `${baseImgUrl}tdf/jerseys/${year}/${value}.png`;
}

export function fetchStageImages(year, img) {
    if(isNaN(year)) {
        return;
    }

    return `${baseImgUrl}tdf/stages/${year}/${img}`;
}