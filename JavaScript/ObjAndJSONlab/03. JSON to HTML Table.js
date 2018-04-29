function jsonToHTMLtable(jsonInput) {
    let html = '<table>\n';
    html += '<tr>';
    let args = JSON.parse(jsonInput);
    for (let line of Object.keys(args[0])) {
        html += `<th>${escapeChars(line.toString())}</th>`;
    }
    html += '</tr>\n';

    for (let line of args) {

        html += '<tr>';
        for (let value of Object.values(line)) {
            html += `<td>${escapeChars(value.toString())}</td>`;

        }
        html += '</tr>\n';
    }

    html+='</table>';

    console.log(html);

    function escapeChars(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

jsonToHTMLtable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');