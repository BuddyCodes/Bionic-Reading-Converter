function convertToBionicReading() {
    const inputText = document.getElementById('input').value;
    const words = inputText.split(' ');
    const output = words.map(word => {
        const midIndex = Math.ceil(word.length / 2);
        return `<b>${word.slice(0, midIndex)}</b>${word.slice(midIndex)}`;
    }).join(' ');

    document.getElementById('output').innerHTML = output;
}

//need to make the font more standardized established bionic????
