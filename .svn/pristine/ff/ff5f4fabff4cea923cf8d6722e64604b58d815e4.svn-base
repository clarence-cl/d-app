(function () {
    if ($storage.getStorage('answerTest-mask')) {
        return;
    }
    $storage.setStorage('answerTest-mask', true);
    var maskDom = '<div id="map" class="map">\n' +
        '        <div class="map-bottom">\n' +
        '            <div class="map-clear">\n' +
        '                <div class="map-btn" id="userKnow">知道了</div>\n' +
        '                <div class="map-box">\n' +
        '                    <div class="map-txt">选择答案<br>点击提交</div>\n' +
        '                </div>\n' +
        '                <div class="point"></div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="map-top">\n' +
        '            <div class="map-key"></div>\n' +
        '            <div class="prompt-area"></div>\n' +
        '            <div class="map-key" style="width: 5rem;"></div>\n' +
        '        </div>\n' +
        '    </div>';
    document.body.insertAdjacentHTML('beforeEnd', maskDom);
    document.getElementById('userKnow').addEventListener('touchend', function () {
        if (document.getElementById("map")) {
            document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
        }
    })
})();
