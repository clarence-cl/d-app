(function () {
    var comm = {};
    comm.show = function () {
        if ($storage.getStorage('unitTestResults-mask')) {
            return;
        }
        $storage.setStorage('unitTestResults-mask', true);
        var maskDom;
        maskDom = '<div id="map" class="cover02">\n' +
            '        <div class="bg-map"></div>\n' +
            '        <div class="map-top">\n' +
            '            <div class="map-key key01"></div>\n' +
            '            <div class="prompt-area"></div>\n' +
            '            <div class="map-key key02"></div>\n' +
            '        </div>\n' +
            '        <div class="map-bottom">\n' +
            '            <div class="map-clear">\n' +
            '                <div class="map-btn" id="userKnow">知道了</div>\n' +
            '                <div class="between">\n' +
            '                    <div class="point"></div>\n' +
            '                    <div class="map-box">\n' +
            '                        <div class="map-txt">点击这里可以回放自己的朗读声音哦~</div>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>';
        document.body.insertAdjacentHTML('beforeEnd', maskDom);
        document.getElementById('userKnow').addEventListener('touchend', function () {
            if (document.getElementById("map")) {
                document.getElementById("map").parentNode.removeChild(document.getElementById("map"));
            }
        })
    };
    window.$unitTestGuide = comm;
})();
