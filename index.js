/**
 * Created by queen on 17-8-21.
 */
document.querySelector('button').addEventListener('click', function (e) {
    html2canvas(document.getElementById('main'), {
        onrendered: function(canvas) {
            var image = canvas.toDataURL('image/png');
            document.getElementById('result').src = image;
        }
    });
}, false);