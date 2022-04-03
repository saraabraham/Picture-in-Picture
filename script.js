const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Function to promt user to select media stream, pass to video element then play it.

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () =>{
            videoElement.play();
        }

    }
    catch{
        // Catch any error.
    }
}

button.addEventListener('click', async () => {
// Disable Button
button.disabled = true;
// Get Picture In Picture.
await videoElement.requestPictureInPicture();
// Reset button
button.disabled = false;
});
// On load
selectMediaStream();