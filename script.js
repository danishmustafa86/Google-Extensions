document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('quote');
    const button = document.getElementById('button');

    button.addEventListener('click', async function() {
        try {
            const response = await fetch('https://dummyjson.com/quote/random');
            const data = await response.json();
            text.textContent = `${data.quote} - ${data.author} - ${data.id}`; // Corrected textContent property and template string
        } catch (error) {
            console.log('Error: ', error);
        }
    });
});