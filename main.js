 (function (window,document) {
    'use strict';

    const toggles = document.querySelectorAll('.toggle');
    const toggleBtn = document.querySelector('#toggle-btn')

    toggleBtn.addEventListener('click',()=> {
        toggleElements();
    });

    // 토글이 나오는 속성 
    function toggleElements() {
       [].forEach.call(toggles, (toggle) => {
        toggle.classList.toggle('on'); // toggle클래스에 toggle on하는 속성 추가
       });
    }
    // 토글 엘리먼트 속성 끄기
    function offElememts () {
        [].forEach.call(toggles, (toggle) => {
            toggle.classList.remove('on'); 
           });
    }
    
    // 뷰포트 크기가 조정될때 토글엘리먼트 다시 초기화 되게
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 1024){
            offElememts();
        }
    })



 })(window,document)