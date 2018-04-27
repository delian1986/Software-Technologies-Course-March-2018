function solve(url) {
    let result = "<ul> \n";
    for (let str of url) {
        result += '\t<li>' + escape(str) + '</li>\n';
    }
    result += '</ul>';

    console.log(result);

    function escape(url) {
        return url.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/</g, '&lt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

solve(['<b>unescaped text</b>', 'normal text']);