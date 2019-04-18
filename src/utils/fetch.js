export default async({ url = '', type = 'GET', data = {}, dataType = 'json' }) => {
    type = type.toUpperCase();
    if (type == 'GET') {
        let uri = '';
        if (data) {
            Object.keys(data).forEach(key => {
                uri += `${key}=${data[key]}&`;
            });
            url = `${url}?${uri}`.slice(0, -1);
        }
    } else if (type == 'POST') {
        data = JSON.stringify(data);
    }
    let options = {
        method: type,
        //credentials : 'include', //携带cookie
        mode: 'cors',
        cache: 'force-cache',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    };
    if (type == 'POST') {
        Object.defineProperty(options, 'body', {
            value: data
        })
    }
    const response = await fetch(url, options);
    if (dataType == 'json') {
        const responseJSON = await response.json();
        return responseJSON;
    } else if (dataType == 'text') {
        const responseText = await response.text();
        return responseText;
    }
}