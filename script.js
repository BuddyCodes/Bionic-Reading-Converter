function convertToBionicReading() {
    const inputText = document.getElementById('input').value;
    const words = inputText.split(' ');
    const output = words.map(word => {
        const midIndex = Math.ceil(word.length / 2);
        return `<b>${word.slice(0, midIndex)}</b>${word.slice(midIndex)}`;
    }).join(' ');

    document.getElementById('output').innerHTML = output;
}

function copyBionicText() {
    const outputText = document.getElementById('output').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        const copyButton = document.getElementById('copy-button');
        copyButton.textContent = 'Copied';
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

document.getElementById('copy-button').addEventListener('click', copyBionicText);