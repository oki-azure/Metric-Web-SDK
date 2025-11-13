// Replace with your actual Client ID from the Metric dashboard
const CLIENT_ID = 'YOUR_CLIENT_ID_HERE';

window.addEventListener('DOMContentLoaded', () => {
    const statusDiv = document.getElementById('status');
    const verifyBtn = document.getElementById('verifyBtn');

    // Initialize the Metric SDK
    Metric.init({
        clientId: CLIENT_ID,
        onSuccess: (response) => {
            statusDiv.textContent = 'Verification successful!';
            console.log('Metric success:', response);
        },
        onError: (error) => {
            statusDiv.textContent = 'Verification failed. Please try again.';
            console.error('Metric error:', error);
        },
        onClose: () => {
            statusDiv.textContent = 'Verification was closed by the user.';
            console.log('Metric modal closed.');
        }
    });

    // Trigger Metric modal on button click
    verifyBtn.addEventListener('click', () => {
        statusDiv.textContent = 'Launching verification...';
        Metric.open();
    });
});