let startTime, endTime;

document.getElementById("start-button").addEventListener("click", function() {
    const textToType = document.getElementById("text-to-type").textContent;
    const inputBox = document.getElementById("input-box");

    inputBox.value = ""; // Clear the input box
    inputBox.focus(); // Focus the input box

    startTime = new Date().getTime(); // Record start time

    inputBox.addEventListener("input", function() {
        if (inputBox.value === textToType) {
            endTime = new Date().getTime(); // Record end time
            const timeTaken = (endTime - startTime) / 1000; // Time in seconds
            const wordsPerMinute = (textToType.split(" ").length / timeTaken) * 60;

            document.getElementById("results").textContent =
                `Well done! You took ${timeTaken.toFixed(2)} seconds (${wordsPerMinute.toFixed(2)} WPM).`;
        }
    });
});