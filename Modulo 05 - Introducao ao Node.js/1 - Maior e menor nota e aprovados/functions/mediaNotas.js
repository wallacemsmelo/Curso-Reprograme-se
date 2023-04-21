var media = 0;

exports.mediaNotas = function mediaNotas(nota) {
    media = media + nota;
    if (x == 10) {
        media = media / 10;
        media = media.toFixed(1);
    }

    return media;
}