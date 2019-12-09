var jewel = {};

// 현재 문서가 완전히 로드될 때 까지 기다린다.
window.addEventListener("Load", function(){

    // 동적 로딩을 시작한다.
    Modernizr.load([
        {
            // 항상 로드되는 파일을
            load: [
                "scripts/sizzle.js",
                "scripts/dom.js",
                "scripts/game.js"
            ],
            // 모든 파일의 로드 및 실행이 완료되면 호출된다.
            complete: function(){
                alert("로드 성공!");
                console.log('asda')
            }
        }
    ]);

}, false);