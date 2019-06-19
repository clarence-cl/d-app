(function () {
    if ($storage.getStorage('bookInfo-mask')) {
        return;
    }
    $storage.setStorage('bookInfo-mask', true);
    var maskDom = '    <div id="map" class="map">\n' +
        '        <div class="map-top">\n' +
        '            <div class="map-key"></div>\n' +
        '            <div class="prompt-area"></div>\n' +
        '        </div>\n' +
        '        <div class="map-bottom">\n' +
        '            <div class="map-clear">\n' +
        '                <div class="point"></div>\n'+
        '                <div class="map-box">\n' +
        '                    <div class="map-txt">\n' +
        '                         嘀嗒赐予你的读书神器：<br>\n' +
        '                         <span>阅读单元</span><br>\n' +
        '                         每天一个阅读单元，几天就能轻松读完一本书啦~' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="map-btn" id="userKnow">知道了</div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
    document.body.insertAdjacentHTML('beforeEnd', maskDom);
    document.getElementById('userKnow').addEventListener('touchend', function () {
        if (document.getElementById("map")) {
            document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
        }
    })
}) ();
