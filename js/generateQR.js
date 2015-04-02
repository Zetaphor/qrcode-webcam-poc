$(document).ready(function() {
    $('#generateQr').click(function() {
        console.log('Cliked');
        var data = $('#qrData').val();
        $("#qrOutput").html("<img src='https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl="+data+"'/>");
    });
});