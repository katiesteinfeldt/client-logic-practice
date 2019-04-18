const curlyHair = ['curly', 'curlyhair'];

handleSynoym = (text, synonym) => {
    console.log('running handle synonym');
    const textArray = text.split(' ');
    console.log(textArray);
    const keyWords = [];
    textArray.forEach(word => {
        word = word.replace(/[^a-zA-Z0-9]/g, '');
        console.log(word);
        synonym.forEach(match => {
            if (word == match) {
                keyWords.push(word);
            }
        })
    })
    console.log(keyWords);
}






handleSynoym('Do you cut curly hair?', curlyHair);
handleSynoym('Do you cut curlyhair?', curlyHair);