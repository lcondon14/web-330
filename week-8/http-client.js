/*
    Title: http-client.js
    Author: Laurel Condon
    Date: 13 June 2023
    Description: http client js for whatabook2
*/

 export class HttpClient {
    async get(url, params = ''){
        url = new URL(url);
        url.search = new URLSearchParams(params);

        const res = await fetch(url.toString(), {
            method: 'GET'
        });

        return res.json();
    }
}