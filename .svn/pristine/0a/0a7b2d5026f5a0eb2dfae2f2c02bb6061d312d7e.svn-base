(function () {
    if ($storage.getStorage('readingTest-mask')) {
        return;
    }
    $storage.setStorage('readingTest-mask', true);
    var maskDom;
    maskDom = '<div id="map" class="map cover02">\n' +
        '        <div class="map-bottom">\n' +
        '            <div></div>\n' +
        '            <div class="map-clear">\n' +
        '                <div class="map-btn" id="userKnowA">知道了</div>\n' +
        '                <div class="map-box">\n' +
        '                    <div class="map-txt">第一次朗读时<br>记得<span>同意</span>我<span>获取麦克风权限</span>哦</div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '        <div class="bg-map"></div>\n' +
        '    </div>';
    document.body.insertAdjacentHTML('beforeEnd', maskDom);
    document.getElementById('userKnowA').addEventListener('touchend', function () {
        if (document.getElementById("map")) {
            document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
        }
        maskDom = '<div id="map" class="map">\n' +
            '        <div class="map-bottom">\n' +
            '            <div></div>\n' +
            '            <div class="map-clear">\n' +
            '                <div class="map-btn" id="userKnow">知道了</div>\n' +
            '                <div class="between">\n' +
            '                    <div class="map-box">\n' +
            '                        <div class="map-txt">点击这里，有你刚读的声音</div>\n' +
            '                    </div>\n' +
            '                    <div class="map-box box01">\n' +
            '                        <div class="map-txt">点击话筒，开始朗读<br>再次点击，结束朗读</div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="around">\n' +
            '                    <div class="point"></div>\n' +
            '                    <div class="point"></div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="map-top">\n' +
            '            <div class="map-key1"></div>\n' +
            '            <div class="prompt-area"></div>\n' +
            '            <div class="map-key2"></div>\n' +
            '            <div class="prompt-area"></div>\n' +
            '            <div class="map-key3"></div>\n' +
            '        </div>\n' +
            '        <div class="bg-map"></div>\n' +
            '    </div>';
        document.body.insertAdjacentHTML('beforeEnd', maskDom);
        document.getElementById('userKnow').addEventListener('touchend', function () {
            if (document.getElementById("map")) {
                document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
            }
        })
    })
}) ();
