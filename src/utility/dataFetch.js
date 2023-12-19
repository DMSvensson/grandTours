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