function submitVote() {
    const form = document.getElementById('votingForm');
    const resultDiv = document.getElementById('result');
    const formData = new FormData(form);
    const vote = formData.get('vote');

    if (vote) {
        resultDiv.textContent = `You voted for: ${vote}`;

    } else {
        resultDiv.textContent = 'Please select an option before submitting.';
    }
}

