(function () {
    var comm = {};
    comm.show = function () {
        if ($storage.getStorage('unitTestGoReading-mask')) {
            return;
        }
        $storage.setStorage('unitTestGoReading-mask', true);
        var maskDom;
        maskDom = '<div id="map" class="cover03">\n' +
            '        <div class="map-bottom">\n' +
            '            <div class="map-clear">\n' +
            '                <div class="map-btn" id="userKnowD">知道了</div>\n' +
            '                <div class="between">\n' +
            '                    <div class="map-box">\n' +
            '                        <div class="map-txt">朗读完点击这里<span>去读书</span></div>\n' +
            '                    </div>\n' +
            '                    <div class="point"></div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="map-top">\n' +
            '            <div class="map-key"></div>\n' +
            '            <div class="prompt-area"></div>\n' +
            '            <div class="map-key key01"></div>\n' +
            '        </div>\n' +
            '    </div>';
        document.body.insertAdjacentHTML('beforeEnd', maskDom);
        document.getElementById('userKnowD').addEventListener('touchend', function () {
            if (document.getElementById("map")) {
                document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
            }
            maskDom = '<div id="map" class="map cover04">\n' +
                '        <div class="bg-map"></div>\n' +
                '        <div class="map-top">\n' +
                '            <div class="map-key"></div>\n' +
                '            <div class="prompt-area"></div>\n' +
                '            <div class="map-key key04"></div>\n' +
                '        </div>\n' +
                '        <div class="map-bottom">\n' +
                '            <div class="map-clear">\n' +
                '                <div class="map-box">\n' +
                '                    <div class="map-txt">\n' +
                '                        快看看你读的每一个字：<br>\n' +
                '                        <span class="color01">红色</span>：读的不大好(ง •_•ง),加油<br>\n' +
                '                        <span class="color02">黄色</span>：读的还行哦(•̀∀•́)<br>\n' +
                '                        <span class="color03">绿色</span>：读的灰常棒！(＾▽＾)厉害了\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '                <div class="map-btn" id="userKnowB">知道了</div>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>';
            document.body.insertAdjacentHTML('beforeEnd', maskDom);
            document.getElementById('userKnowB').addEventListener('touchend',function () {
                if (document.getElementById("map")) {
                    document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
                }
            });
        });
    };
    window.$unitTestReading = comm;
})();
