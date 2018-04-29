function scoreToHTML(json) {
    let html='<table>\n';
    html+='<tr><th>name</th><th>score</th></tr>\n';

    let args=JSON.parse(json);
    for (let jsonElement of args) {
        html+=`<tr><td>${escapeChars(jsonElement['name'])}</td><td>${jsonElement['score']}</td></tr>\n`;
    }

    html+='</table>';
    console.log(html);

    function escapeChars(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');