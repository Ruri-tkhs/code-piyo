
// window.onload = function () {

//     }


var original_pos = {};

const boxDOM1 = document.querySelector('#box1');
const boxDOM2 = document.querySelector('#box2');
const boxDOM3 = document.querySelector('#box3');
const boxDOM4 = document.querySelector('#box4');

//var parent01 = document.querySelector('#droparea');
var bhn, click_bhn, click_flg;
var q_num = 0;
var q_mode = "";
var question = "";
var explain = "";

// 一つの要素に一つだけ入れる
$(function () {
    // URL
    let url = new URL(window.location.href);

    // URLSearchParams
    let params = url.searchParams;

    console.log(params.get('id')); // 5
    console.log(params.get('mode')); // read
    q_num = params.get('id');
    q_mode = params.get('mode');
    console.log("問題：" + question_list_php[q_num]["question"] + "回答：" + question_list_php[q_num]["choice3"]);
    console.log(q_mode);

    if (q_mode == "php") {
        question = question_list_php[q_num];
        question["question"] = question["question"].replace(/##1|##2|##3/g, '<div id="droparea" class="droparea" style="display: inline-block; _display: inline;"><div class="box box-hidden">　　</div></div>');
    } else if (q_mode == "c") {
        question = question_list_c[q_num];
        question["question"] = question["question"].replace(/##1|##2|##3/g, '<div id="droparea" class="droparea" style="display: inline-block; _display: inline;"><div class="box box-hidden">　　</div></div>');
    } else if (q_mode == "html") {
        question = question_list_html[q_num];
        question["question"] = question["question"].replace(/##1|##2|##3/g, '<div id="droparea" class="droparea" style="display: inline-block; _display: inline;"><div class="box box-hidden">　　</div></div>');
    } else if (q_mode == "java") {
        question = question_list_java[q_num];
        question["question"] = question["question"].replace(/##1|##2|##3/g, '<div id="droparea" class="droparea" style="display: inline-block; _display: inline;"><div class="box box-hidden">　　</div></div>');
    } else if (q_mode == "tutorial") {
        question = question_list_tutorial[q_num];
        question["question"] = question["question"].replace(/##1|##2|##3/g, '<div id="droparea" class="droparea" style="display: inline-block; _display: inline;"><div class="box box-hidden">　　</div></div>');
    }

    document.getElementById('question').innerHTML = question["question"];

    document.getElementById('box1').innerText = question["choice1"];
    document.getElementById('box2').innerText = question["choice2"];
    document.getElementById('box3').innerText = question["choice3"];
    document.getElementById('box4').innerText = question["choice4"];
    console.log(question);

    $(".box").draggable({
        zIndex: 100,
        start: function (e) {
            original_pos = $(this).offset(); // Store Original Position

        }
    });
    $(".droparea").droppable({
        drop: function (e) {
            $(e.toElement).swapAnimate(
                $(e.target).find(".box"),
                {
                    from_position: original_pos, // $(e.target).find(".box") will move this Position
                    speed1: 100,
                    easing2: "easeOutBack"
                }
            );

        },
        deactivate: function (e) {
            $(e.toElement).css({ left: 0, top: 0 });
        },
        hoverClass: "hover"

    })

});


boxDOM1.onmousedown = function (event) {
    click_bhn = boxDOM1;
    click_check(click_bhn);
};
boxDOM2.onmousedown = function (event) {
    click_bhn = boxDOM2;
    click_check(click_bhn);
};
boxDOM3.onmousedown = function (event) {
    click_bhn = boxDOM3;
    click_check(click_bhn);
};
boxDOM4.onmousedown = function (event) {
    click_bhn = boxDOM4;
    click_check(click_bhn);
};


function click_check(click_bhn) {
    click_bhn.style.cursor = 'grabbing';

    function mouseMove(event) {
        var element = document.querySelectorAll('.droparea > div');

    };
    document.addEventListener('mousemove', mouseMove);


    document.onmouseup = function () {
        document.removeEventListener('mousemove', mouseMove);
        click_bhn.style.cursor = 'grab';
    };
}


// モーダルウィンドウ
function ok_alert() {
    //要素を取得
    const modal = document.querySelector('.js-modal'),
        open = document.querySelector('.js-modal-open'),
        close = document.querySelector('.js-modal-close');

    //「開くボタン」をクリックしてモーダルを開く
    function modalOpen() {
        modal.classList.add('is-active');
    }
    open.addEventListener('click', modalOpen);

    //「閉じるボタン」をクリックしてモーダルを閉じる
    function modalClose() {
        modal.classList.remove('is-active');
        q_num = parseInt(q_num, 10) + 1;
        const param02 = "id=" + q_num + "&mode=" + q_mode;
        window.location.href = "index.html?" + param02;
    }
    close.addEventListener('click', modalClose);

    //「モーダルの外側」をクリックしてモーダルを閉じる
    function modalOut(e) {
        if (e.target == modal) {
            modal.classList.remove('is-active');
            q_num = parseInt(q_num, 10) + 1;
            const param02 = "id=" + q_num + "&mode=" + q_mode;
            window.location.href = "index.html?" + param02;
        }
    }
    addEventListener('click', modalOut);
}

// モーダルウィンドウ
function ng_alert() {
    //要素を取得
    const modal = document.querySelector('.js-modal2'),
        open = document.querySelector('.js-modal-open2'),
        close = document.querySelector('.js-modal-close2');

    //「開くボタン」をクリックしてモーダルを開く
    function modalOpen() {
        modal.classList.add('is-active');
    }
    open.addEventListener('click', modalOpen );

    //「閉じるボタン」をクリックしてモーダルを閉じる
    function modalClose() {
        modal.classList.remove('is-active');
    }
    close.addEventListener('click', modalClose);

    //「モーダルの外側」をクリックしてモーダルを閉じる
    function modalOut(e) {
        if (e.target == modal) {
            modal.classList.remove('is-active');
        }
    }
    addEventListener('click', modalOut);
}


function btn() {
    var element = document.querySelectorAll('#droparea > div');
    console.log(element[0].id);
    // console.log(element[1].id);

    var droparea_count = element.length;
    console.log(droparea_count);

    let myAns = element[0].textContent;
    console.log("myAns:" + myAns);
    console.log("Ans:" + question.answer);
    if (droparea_count == 1) {//選択肢の数
        // 正誤判定
        if (question.answer == myAns) {
            ok_alert()
            // alert('正解');
            // q_num = parseInt(q_num, 10) + 1;
            // const param02 = "id=" + q_num + "&mode=" + q_mode;
            // window.location.href = "index.html?" + param02;

        } else {
            // alert('不正解');
            ng_alert()

        }



    } else if (droparea_count == 2) {//選択肢の数
        let myAns2 = element[1].textContent;
        // 正誤判定
        if (question.answer == myAns && question.answer2 == myAns2) {
            alert('正解');
            q_num = parseInt(q_num, 10) + 1;
            const param02 = "id=" + q_num + "&mode=" + q_mode;
            window.location.href = "index.html?" + param02;
        } else {
            alert('不正解');
        }

    } else if (droparea_count == 3) {//選択肢の数
        let myAns2 = element[1].textContent;
        let myAns3 = element[2].textContent;
        // 正誤判定
        if (question.answer == myAns && question.answer2 == myAns2 && question.answer3 == myAns3) {
            alert('正解');
            q_num = parseInt(q_num, 10) + 1;
            const param02 = "id=" + q_num + "&mode=" + q_mode;
            window.location.href = "index.html?" + param02;

        } else {
            alert('不正解');
        }
    }
    if (q_mode == "tutorial" && q_num == 3) {
        window.location.href = "tutorial_clear.html";
    } else if (q_num == 5) {
        window.location.href = "clear.html";
    }
}




