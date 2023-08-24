
var test = "hoge";

let question_list_php = [
    {"question":"変数piyoに15を入れてみよう!<br>＊変数とは値を入れるハコの名前だよ！ <br>$piyo =##1; ","answer":"15","choice1":"5","choice2":"10","choice3":"15","choice4":"20"},
    {"question":"変数toriの中身を足し算してしよう!<br>$tori = 10##120; ","answer":"+","choice1":"+","choice2":"-","choice3":"✕","choice4":"*"},
    {"question":"変数eggの中身をかけ算してみよう!<br>$##1= 10##25; ","answer":"egg","answer2":"*","choice1":"egg","choice2":"piyo","choice3":"✕","choice4":"*"},
    {"question":"「もし〇〇なら・・・」というプログラムを組み立ててみよう!<br>##1($piyo##210){ echo”10より小さい”}; ","hint":"if(～だったら){ /*もし～だったら*/}","answer":"if","answer2":"<","choice1":"if","choice2":"case","choice3":"<","choice4":">"},
    {"question":"if文の条件を満たさない場合の違うプログラムを組み立ててみよう!<br>##1($piyo##210){<br>echo ”10より小さい”;<br>}##3{<br> echo ”10以上”;}","hint":"if(～だったら){ /*もし～だったら*/}else{/*もし～じゃなかったら*/}","answer":"if","answer2":"<","answer3":"else","choice1":"if","choice2":"<","choice3":">","choice4":"else","choice5":"elseif"},
];
let question_list_c = [
    {"question":"このプロジェクト名は何か当てはめてみよう!<br>using System; namepace Piyo { class Program { satatic void main(string[] args)<br>##1","answer":"Piyo","choice1":"using","choice2":"System","choice3":"Piyo","choice4":"Proguram"},
    {"question":"stringに続くカッコの種類は何か当てはめてみよう!<br>static void Main(string##1args)","answer":"[]","choice1":"()","choice2":"{}","choice3":"[]","choice4":"<>"},
    {"question":"intに所持金、stringに名前をいれてふさわしい変数名は何か当てはめてみよう!<br>変数の宣言 int##1; 所持金を代入する変数 string##2;   ","answer":"money","answer2":"name","choice1":"money","choice2":"name","choice3":"int","choice4":"string"},
    {"question":"それぞれの変数に「５０００」,「ピコピ君」を代入するには何か当てはめてみよう！<br>money =##1; name =  ”##2”;","hint":"money=所持金、name=名前 ピコピくんの所持金は５０００円だよ!","answer":"5000","answer2":"ピコピくん","choice1":"500","choice2":"5000","choice3":"ピコピくん","choice4":"ピヨちゃん"},
    {"question":"「ピコピくんの所持金は５０００円です。」と表示したいなー。わくの中に当てはめてみよう!<br>##1.WriteLine(##2+”の所持金は”+##3+”円です。”);","hint":"コンソール画面に文字列を出力したいとき、Console.WriteLineと書きます!","answer":"console","answer2":"name","answer3":"money","choice1":"printf","choice2":"name","choice3":"money","choice4":"console","choice5":"WriteLine"},
];
let question_list_html = [
    {"question":"内容を書くために必要なタグを当てはめてみよう！<br><　html　><br><　head　><br><　title　>ぼくについて<　/title　><br><　/head　><br><　/##1　>","answer":"html","choice1":"body","choice2":"head","choice3":"html","choice4":"style"},
    {"question":"「ひよこのしょうかい」というタイトルの文字を赤にしたいなー。わくの中に当てはめてみよう!<br><　h1　style=”##1:red”;　>ひよこのしょうかい<　/h1　>","answer":"color","choice1":"font","choice2":"color","choice3":"h1","choice4":"style"},
    {"question":"写真をはるときに使用するタグは何か当てはめてみよう!※ひよこ.pngは写真のファイル名<br><##1##2=”ひよこ.png”>","answer":"img","answer2":"src","choice1":"pic","choice2":"img","choice3":"src","choice4":"alt"},
    {"question":"内容の全体を真ん中に置きたいとき使用するタグは何か当てはめてみよう!<br><##1style = ”text-align:##2;”>","answer":"body","answer2":"center","choice1":"body","choice2":"left","choice3":"center","choice4":"head"},
    {"question":"背景をきいろにしたいときに使用するタグは何か当てはめてみよう!<br><##1##2=”##3”>","answer":"body","answer2":"bgcolor","answer3":"yellow","choice1":"body","choice2":"color","choice3":"bgcolor","choice4":"yellow"},
];
let question_list_java = [
    {"question":"publicの後に入る言葉は何か当てはめてみよう!<br>public class##1{","answer":"main","choice1":"class","choice2":"static","choice3":"romm","choice4":"main"},
    {"question":"Stringに続くカッコの種類は何か当てはめてみよう!<br>public static void main(String##1args) { " ,"answer":"[]","choice1":"「」","choice2":"()","choice3":"[]","choice4":"<>"},
    {"question":"変数名の前につける言葉は何か当てはめてみよう!<br>##1a =”ひよこA”##2hp1=100","answer":"string","answer2":"int","choice1":"String","choice2":"string","choice3":"int","choice4":"Int"},
    {"question":"「ひよこＢが現れた！」と表示したいなー。わくの中に当てはめてみよう!<br>System.##1.##2(”ひよこBが現れた!”);","answer":"out","answer2":"println","choice1":"out","choice2":"print","choice3":"in","choice4":"println"},
    {"question":"「ひよこＡの攻撃！」と表示したいなー。わくの中に当てはめてみよう!<br>string a =”ひよこA”;<br>System.out.println(##1##2##3);","answer":"a","answer2":"+","answer3":"の攻撃！","choice1":"の攻撃！","choice2":"a","choice3":"b","choice4":"+"},
];

let question_list_tutorial = [
    {"question":"下の4つのせんたくしからあてはまると思うものを白いハコに入れてみよう<br>正解したら次の問題へ行けるよ<br><br>ひよこは大きくなるとなにになる？ <br>##1", "answer":"にわとり","choice1":"にわとり","choice2":"ペンギン","choice3":"すずめ","choice4":"ひよこ"},
    {"question":"次の問題にすすめたね！<br>その調子！<br><br>アルファベットは全部でいくつある？ <br>##1", "answer":"26","choice1":"24","choice2":"25","choice3":"26","choice4":"27"},
    {"question":"白いハコが２つ、３つのときもあるよ<br>ひとつでもまちがえたら正解にはならないから気を付けて！<br><br>抜けている干支は? <br>ね・うし・とら・う・##1・み・うま・##2・・・・・", "answer":"たつ","answer2":"ひつじ","choice1":"ひつじ","choice2":"とり","choice3":"たつ","choice4":"いぬ"},
];