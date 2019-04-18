const curlyHair = ['curly', 'curly hair'];

handleSynoym = (text, synomym) => {
    console.log('running handle synonym');
    const textArray = text.split(' ');
    console.log(textArray);
    const keyWords = [];
    textArray.forEach(word => {
        word = word.replace(/[^a-zA-Z0-9]/g, '');
        console.log(word);
    })
}






handleSynoym('Do you cut curly hair?', curlyHair);