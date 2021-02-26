import React from "react";

function ClientSideToken() {
    const fetch = require('node-fetch');

// The parameters for our POST request
    const params = {
        origin: 'http://127.0.0.1/test>',
        ip: '2a02:a45b:7682:1:95fa:e47a:bcfb:b575',
        token: 'BC09Zl9KrfbB6rTcw_kq-YBdKRpfjYITLdotI3wrZNc'
    }

    (async () => {
        const response = await fetch(
            'https://trefle.io/api/auth/claim', {
                method: 'post',
                body: JSON.stringify(params),
                headers: { 'Content-Type': 'application/json' }
            });
        const json = await response.json();
        console.log(json);
    })();

    return (
        <>

        </>
    )
}


export default ClientSideToken;
