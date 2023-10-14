export async function getJsonData(url) {
    const publicURL = process.env.PUBLIC_URL;
    const response = await fetch(`${publicURL}/${url}`, {
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