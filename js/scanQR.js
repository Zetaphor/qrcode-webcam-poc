var video_canvas = document.getElementById('qr-canvas');
var video_context = video_canvas.getContext('2d');
var video = document.querySelector("#videoStream");


function captureToCanvas() {
    try{
        video_canvas.width = video.videoWidth * 1;
        video_canvas.height = video.videoHeight * 1;
        video_context.drawImage(video, 0, 0, video_canvas.width, video_canvas.height);
        try{
            qrcode.decode();
        }
        catch(e){
            console.log(e);
            setTimeout(captureToCanvas, 100);
        };
    }
    catch(e){
        console.log(e);
        setTimeout(captureToCanvas, 100);
    };
}

function qrDecodeSuccess(data) {
    alert(data);
}

qrcode.callback = qrDecodeSuccess;
setTimeout(captureToCanvas, 100);