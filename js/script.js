$(function(){

    // ===== exam28-퀴즈 프로그램
    $('.a1, .a2').hide(); // 정답 1과 정답 2를 안보이게 한다.

     // 정답보기/안보기 버튼을 클릭하면 정답을 보여주고 다시 클릭하면 안보여준다.
    $('#q1Btn').click(function(){
        $('.a1').toggle(); // toggle()은 선택한 문서 객체가 없으면 보여주고, 있으면 숨긴다.
    });    
    $('.a1').click(function(){ // 정답 1을 클릭하면 정답 1을 안보이게 한다.
        // $('.a1').hide();
        $(this).hide(); // hide()는 선택한 문서 객체를 안보이게 한다.
        // $(this)는 이벤트 대상에 이벤트가 들어간 상태를 말한다.(현재 실행중인 객체)
    });

    // 정답2 : 정답보기 버튼을 클릭하면 정답 2를 보여준다.
    $('#q2Btn').click(function(){ // 정답보기 버튼을 클릭하면
        $('.a2').show(); // show()는 선택한 문서 객체를 보여준다.
    });
    $('.a2').click(function(){ // 정답 2을 클릭하면 정답 2을 안보이게 한다.
        $(this).hide();
    });





    // ===== exam29-마우스이벤트
    var num = 0; // num 변수를 선언하고 초깃값을 0으로 설정한다.

    $('.container').mouseenter(function(){
        $('.text').text('마우스 포인트 들어옴');
        // text() : 선택한 문서 객체에 있는 텍스트를 얻는다.
        // text('메시지') : 선택한 문서 객체에 '메시지'를 설정한다.
        $('.count').text(++num);
        // 증감(증가, 감소) 연산자 : ++(하나씩 증가), --(하나씩 감소)
    });

    $('.container').mouseleave(function(){
        $('.text').text('마우스 포인트 나감');
        $('.count').text('최종 횟수 : ' + num);
        // + 연산자의 피연산자 중 하나라도 문자열이면 + 연산자는 문자열 연결 연산자로 실행한다.
    });

    $('.container').click(function(){
        $('.text, .count').toggle();
    });
    

    // ===== exam32-애니메이션
    $('.btn').click(function(){
        $('img').animate({ width:'100%' });
    });
    $('.btn1').click(function(){
        $('img').animate({ width:'100px' });
    });
    $('.btn2').click(function(){
        $('img').animate({ width:'300px' });
    });
    $('.btn3').click(function(){
        $('img').animate({ width:'500px' });
    });
    $('.btn4').click(function(){
        $('img').animate({ left:'50%', width:'150%' });
    });
    $('.btn5').click(function(){
        $('img').animate({ left:'0', width:'100%' });
    });
    $('.show').click(function(){
        $('img').fadeIn(); // 이벤트 효과 메소드
    });
    $('.hide').click(function(){
        $('img').fadeOut();
    });
    $('.toggle').click(function(){
        $('img').fadeToggle();
    });


});