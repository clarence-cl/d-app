(function () {
    if ($storage.getStorage('bookshelf-mask')) {
        return;
    }
    $storage.setStorage('bookshelf-mask', true);
    var maskDom;

    maskDom = '<div id="map" class="map cover04">\n' +
        '    <div class="bg-map"></div>\n' +
        '    <div class="map-top">\n' +
        '        <div class="map-key"></div>\n' +
        '        <div class="prompt-area"></div>\n' +
        '        <div class="map-key key04"></div>\n' +
        '    </div>\n' +
        '    <div class="map-bottom">\n' +
        '        <div class="map-clear">\n' +
        '            <div class="map-box">\n' +
        '                <div class="map-txt">欢迎来到嘀嗒书房<br>这里是你<span>刚刚获取\n' +
        '                </span>的新书</div>\n' +
        '            </div>\n' +
        '            <div class="map-btn" id="userKnowF">知道了</div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';

    document.body.insertAdjacentHTML('beforeEnd', maskDom);
    document.getElementById('userKnowF').addEventListener('touchend', function () {
        if (document.getElementById("map")) {
            document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
        }

        maskDom = '<div id="map" class="map">\n' +
            '    <div class="bg-map"></div>\n' +
            '    <div class="map-top">\n' +
            '        <div class="map-key key01"></div>\n' +
            '        <div class="prompt-area"></div>\n' +
            '        <div class="map-key"></div>\n' +
            '    </div>\n' +
            '    <div class="map-bottom">\n' +
            '        <div class="map-clear">\n' +
            '            <div class="map-box">\n' +
            '                <div class="map-txt">7天就能<span>领取</span>一本新书<br>每周都有好书看！</div>\n' +
            '            </div>\n' +
            '            <div class="map-btn" id="userKnow">知道了</div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';
        document.body.insertAdjacentHTML('beforeEnd', maskDom);
        document.getElementById('userKnow').addEventListener('touchend', function () {
            if (document.getElementById("map")) {
                document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
            }
            maskDom = '<div id="map" class="map cover01">\n' +
                '    <div class="map-bottom">\n' +
                '        <div class="map-clear">\n' +
                '            <div class="map-btn" id="userKnowFinish">知道了</div>\n' +
                '            <div class="map-box">\n' +
                '                <div class="map-txt">碰到不喜欢看的书<br>就用<span>换书</span>功能换掉它！</div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    <div class="map-top">\n' +
                '        <div class="map-key key02 "></div>\n' +
                '        <div class="prompt-area"></div>\n' +
                '        <div class="map-key"></div>\n' +
                '    </div>\n' +
                '    <div class="bg-map"></div>\n' +
                '</div>';
            document.body.insertAdjacentHTML('beforeEnd', maskDom);
            document.getElementById('userKnowFinish').addEventListener('touchend', function () {
                if (document.getElementById("map")) {
                    document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
                }
                api.sendEvent({
                    name: 'bookshelf-mask'
                });
            })
        });
    });
})();
