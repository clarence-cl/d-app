(function () {
    if ($storage.getStorage('changBook-mask')) {
        return;
    }
    $storage.setStorage('changBook-mask', true);
    var maskDom = '<div id="map" class="mask">\n' +
        '        <div class="content-mask">\n' +
        '            <div class="btn-mask-wrap">\n' +
        '                <div class="map-btn" id="userKnow">知道了</div>\n' +
        '                <div class="map-box">\n' +
        '                    <div class="map-txt">选中书后，点击此按钮，完成换书</div>\n' +
        '                </div>\n' +
        '                <div class="point"></div>\n' +
        '            </div>\n' +
        '            <div class="book-mask">\n' +
        '                <div class="cover-mask"><i class="font_family">&#xe725;</i></div>\n' +
        '                <img class="img-mask" src="../../image/book_cover.png" alt="">\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="btn-mask">\n' +
        '            <div class="mask-left"></div>\n' +
        '            <div class="mask-center"></div>\n' +
        '            <div class="mask-right"></div>\n' +
        '        </div>\n' +
        '    </div>';
    document.body.insertAdjacentHTML('beforeEnd', maskDom);
    document.getElementById('userKnow').addEventListener('touchend', function () {
        if (document.getElementById("map")) {
            document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
        }
    })
})();
