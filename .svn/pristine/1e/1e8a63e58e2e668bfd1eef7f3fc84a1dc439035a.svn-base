(function () {
    var comm = {};
    comm.show = function () {
        if ($storage.getStorage('bookUnit-mask')) {
            return;
        }
        $storage.setStorage('bookUnit-mask', true);
        var maskDom;
        maskDom = '<div id="map" class="map cover02 bigcover">\n' +
            '        <div class="bg-map"></div>\n' +
            '        <div class="map-top">\n' +
            '            <div class="map-key"></div>\n' +
            '            <div class="prompt-area"></div>\n' +
            '            <div class="map-key key01"></div>\n' +
            '        </div>\n' +
            '        <div class="map-bottom">\n' +
            '            <div class="map-clear">\n' +
            '                <div class="map-btn" id="userKnowB">知道了</div>\n' +
            '                <div class="map-box">\n' +
            '                    <div class="map-txt">根据单元总评分点亮每个单元的星级～</div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';
        document.body.insertAdjacentHTML('beforeEnd', maskDom);
        document.getElementById('userKnowB').addEventListener('touchend', function () {
            if (document.getElementById("map")) {
                document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
            }
            maskDom = '<div id="map" class="map cover03 bigcover">\n' +
                '        <div class="map-bottom">\n' +
                '            <div class="map-clear">\n' +
                '                <div class="map-box">\n' +
                '                    <div class="map-txt">还没读的单元会加锁。建议你读完一个单元再读下一单元~</div>\n' +
                '                </div>\n' +
                '                <div class="map-btn" id="userKnowFinish">知道了</div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '        <div class="map-top">\n' +
                '            <div class="map-key key01"></div>\n' +
                '            <div class="prompt-area"></div>\n' +
                '            <div class="map-key "></div>\n' +
                '        </div>\n' +
                '        <div class="bg-map"></div>\n' +
                '    </div>';
            document.body.insertAdjacentHTML('beforeEnd', maskDom);
            document.getElementById('userKnowFinish').addEventListener('touchend', function () {
                if (document.getElementById("map")) {
                    document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
                }
                maskDom = '<div id="map" class="map cover01 bigcover">\n' +
                    '        <div class="bg-map"></div>\n' +
                    '        <div class="map-top">\n' +
                    '            <div class="map-key"></div>\n' +
                    '            <div class="prompt-area"></div>\n' +
                    '            <div class="map-key key01"></div>\n' +
                    '        </div>\n' +
                    '        <div class="map-bottom">\n' +
                    '            <div class="map-clear">\n' +
                    '                <div class="map-btn" id="userKnowFinishB">知道了</div>\n' +
                    '                <div class="map-box">\n' +
                    '                    <div class="map-txt">点击环节图标进入相应的环节～~</div>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>\n' +
                    '    </div>';
                document.body.insertAdjacentHTML('beforeEnd', maskDom);
                document.getElementById('userKnowFinishB').addEventListener('touchend',function () {
                    if (document.getElementById("map")) {
                        document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
                    }
                });
            })

        })
    };
    window.$unitGuide = comm;
})();
