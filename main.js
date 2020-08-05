(function(window, document) {
    'use strict';
    
    const $toggles = document.querySelectorAll(".toggle");
    const toggleBtn = document.querySelector("#toggle-btn");

    toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    //뷰포트의 사이즈가 변하면 호출되는 함수
    window.addEventListener('resize', function() {
        if(window.innerWidth > 1024) {
            //Off toggle element
            offElements();
        }
    })
    
    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            // toggle함수는 해당 노드의 클래스 리스트 중 인자로 들어간 클래스가 존재하면
            // 없애고 존재하지 않으면 추가해준다. 
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.remove('on');
        });
    }
})(window, document)