jewel.game = (function(){
    var dom = jewel.dom,
          $ = dom.$;

    // 현재 활성화된 스크린을 보이지 않게 하고 지정된 ID를 가진 스크린을 보이게 한다.
    function showScreen(screenId){
        var activeScreen = $("#game .screen.active")[0],
            screen = $("#" + screenId)[0];
        if (activeScreen){
            dom.removeClass(scree, "active");
        }
        dom.addClass(activeScreen, "active");
    }

    //공용 메서드를 정의한다.
    return{
        showScreen : showScreen
    };
})();