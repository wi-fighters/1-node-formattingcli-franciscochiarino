const capitalizeInitial = (string) => {
    string = string [0].toLocaleUpperCase() + string.substring(1);
    return string;
}

exports.formatInput = (userInput) => {

    let phrase = '';

    userInput.forEach(word => {
        word = word.toLocaleLowerCase();

        phrase += capitalizeInitial(word) + ' ';
    })

    return phrase
}


