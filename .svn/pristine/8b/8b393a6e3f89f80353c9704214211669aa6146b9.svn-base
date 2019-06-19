(function () {
    if ($storage.getStorage('readBooks-mask')) {
        return;
    }
    $storage.setStorage('readBooks-mask', true);
    var maskDom;
    maskDom = '<div id="map" class="map">\n' +
        '        <div class="map-bottom">\n' +
        '            <div></div>\n' +
        '            <div class="map-clear">\n' +
        '                <div class="gesture">\n' +
        '                \t<i class="gesture-l"></i>\n' +
        '                \t<i class="gesture-r"></i>\n' +
        '                </div>\n' +
        '                <div class="map-box">\n' +
        '                    <div class="map-txt">左右滑动可以翻页哦~</div>\n' +
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
        maskDom = '<div id="map" class="map cover">\n' +
            '        <div class="map-top">\n' +
            '            <div class="prompt-area"><i class="iconfont font_family">&#xe700;</i>返回</div>\n' +
            '            <div class="map-key"></div>\n' +
            '        </div>\n' +
            '        <div class="map-bottom">\n' +
            '            <div></div>\n' +
            '            <div class="map-clear">\n' +
            '                <div class="point p-top"></div>\n' +
            '                <i class="gesture-c"></i>\n' +
            '                <div class="map-box">\n' +
            '                    <div class="map-txt">点击书页中部可进行返回和查看目录操作</div>\n' +
            '                </div>\n' +
            '                <div class="map-btn" id="userKnowFinish">知道了</div>\n' +
            '               \t<div class="point p-bottom"></div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="map-top">\n' +
            '            <div class="prompt-area">目录</div>\n' +
            '            <div class="map-key"></div>\n' +
            '        </div>\n' +
            '    </div>';
        document.body.insertAdjacentHTML('beforeEnd', maskDom);
        document.getElementById('userKnowFinish').addEventListener('touchend', function () {
            if (document.getElementById("map")) {
                document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
            }
        })
    });
})();
