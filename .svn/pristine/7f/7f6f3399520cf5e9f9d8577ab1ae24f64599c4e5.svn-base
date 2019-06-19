(function () {
    if ($storage.getStorage('unitTestReading-mask')) {
        return;
    }
    $storage.setStorage('unitTestReading-mask', true);
    var maskDom;
     maskDom = '<div id="map" class="cover">\n' +
        '        <div class="map-bottom">\n' +
        '            <div class="map-clear">\n' +
        '                <div class="map-btn" id="userKnow">知道了</div>\n' +
        '                <div class="between">\n' +
        '                    <div class="map-box">\n' +
        '                        <div class="map-txt">开始读书前，先朗读一段文中精彩篇章，打开状态吧~</div>\n' +
        '                    </div>\n' +
        '                    <div class="point"></div>\n' +
        '                </div>\n' +
        '                <div class="between mt">\n' +
        '                    <div class="map-box">\n' +
        '                        <div class="map-txt">点击这里，有你刚读的声音</div>\n' +
        '                    </div>\n' +
        '                    <div class="point"></div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="map-top">\n' +
        '            <div class="map-key key01"></div>\n' +
        '            <div class="prompt-area"></div>\n' +
        '            <div class="map-key key02"></div>\n' +
        '            <div class="prompt-area"></div>\n' +
        '            <div class="map-key key03"></div>\n' +
        '        </div>\n' +
        '        <div class="bg-map"></div>\n' +
        '    </div>\n';
    document.body.insertAdjacentHTML('beforeEnd', maskDom);
    document.getElementById('userKnow').addEventListener('touchend', function () {
        if (document.getElementById("map")) {
            document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
        }
    });
})();
