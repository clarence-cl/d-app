(function () {
    if ($storage.getStorage('testDataResults-mask')) {
        return;
    }
    $storage.setStorage('testDataResults-mask', true);
    var maskDom = '<div id="map" class="map">\n' +
        '        <div class="map-bottom">\n' +
        '            <div class="map-clear">\n' +
        '                <div class="map-btn" id="userKnow">知道了</div>\n' +
        '                <div class="between between-box">\n' +
        '                    <div class="map-box box01">\n' +
        '                        <div class="map-txt">获取专属图书</div>\n' +
        '                    </div>\n' +
        '                    <div class="map-box box01">\n' +
        '                        <div class="map-txt">查看详细成绩</div>\n' +
        '                    </div>\n' +
        '                    <div class="map-box">\n' +
        '                        <div class="map-txt">分享证书给小伙伴</div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="between">\n' +
        '                    <div class="point"></div>\n' +
        '                    <div class="point"></div>\n' +
        '                    <div class="point"></div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '        <div class="map-top">\n' +
        '            <div class="map-key"></div>\n' +
        '            <div class="prompt-area"></div>\n' +
        '            <div class="map-key key01"></div>\n' +
        '            <div class="prompt-area"></div>\n' +
        '            <div class="map-key key01"></div>\n' +
        '            <div class="prompt-area"></div>\n' +
        '            <div class="map-key"></div>\n' +
        '        </div>\n' +
        '        <div class="bg-map"></div>\n' +
        '    </div>';
    document.body.insertAdjacentHTML('beforeEnd', maskDom);
    document.getElementById('userKnow').addEventListener('touchend', function () {
        if (document.getElementById("map")) {
            document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
        }
    })
}) ();
