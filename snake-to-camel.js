function snakeToCamel(str) {
    const regExp = /[-_ ]\w/gi;
    return str.replace(regExp, function (match) {
        return match[1].toUpperCase()
    });
}

