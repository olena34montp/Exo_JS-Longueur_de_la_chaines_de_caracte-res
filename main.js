function transformString() {
    let phrase = prompt('Entrez votre phrase');
    alert('La longueur de votre phrase est ' + phrase.length);
    phrase = capitalizeFirstLetter(phrase);
    phrase = removingLastCharacter(phrase);
    return alert(phrase);
}

function capitalizeFirstLetter(phrase) {
    return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

function removingLastCharacter(phrase) {
    return phrase.substring(0, phrase.length - 1);
}