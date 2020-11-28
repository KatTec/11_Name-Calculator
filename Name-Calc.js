const li_moji_1 = [1, 'a', 'j', 's']
const li_moji_2 = [2, 'b', 'k', 't']
const li_moji_3 = [3, 'c', 'l', 'u']
const li_moji_4 = [4, 'd', 'm', 'v']
const li_moji_5 = [5, 'e', 'n', 'w']
const li_moji_6 = [6, 'f', 'o', 'x']
const li_moji_7 = [7, 'g', 'p', 'y']
const li_moji_8 = [8, 'h', 'q', 'z']
const li_moji_9 = [9, 'i', 'r']

const li_boin  = ['a', 'i', 'u', 'e', 'o']

var li_moji_x;
let cnt_FullName_Boin = 0;
let cnt_FullName_Shiin = 0;
var hantei = 0;

function CheckCalc() {
console.log("■■■計算開始■■■");

/* 苗字の判定 */
if (document.nyuryoku.myouji.value == "") {
    console.log("空欄");
} else {
    var txtFullName = document.nyuryoku.myouji.value;
    console.log('入力した名前は：' + txtFullName + '　です');

    /* 一文字づつ抜き出し */
    for (let i = 0; i < txtFullName.length; i++) {
        hantei = 0;
        console.log('名前のi文字目=' + (i + 1) + ':' + txtFullName[i]);

        /* リストの個数分forをまわす */
        for (let j = 1; j <= 9; j++) {
            li_moji_x = eval("li_moji_" + j);
            console.log(li_moji_x);

            /* リスト内要素分forをまわす(3回、１要素目は数字を取得する目的のためforの除外) */
            for (let k = 1; k <= 3; k++) {
                // console.log('リスト:' + li_moji_x + ' K:' + k);
                // console.log('要素から抜き出した文字' + li_moji_x[k]);
                
                /* 抜き出し文字が"k","v"は11,22でカウント */
                if (txtFullName[i] == "k") {
                    console.log(txtFullName[i]);
                    cnt_FullName_Shiin += 11
                    hantei = 1;
                    break;
                }
                if (txtFullName[i] == "v") {
                    console.log(txtFullName[i]);
                    cnt_FullName_Shiin += 22
                    hantei = 1;
                    break;
                }

                /* リスト内要素が母音である場合、カウント */
                for (let l = 0; l < li_boin.length; l++) {
                    // console.log("抜き出した母音" + li_boin[l]);
                    if (txtFullName[i] == li_moji_x[k] && txtFullName[i] == li_boin[l]) {
                        cnt_FullName_Boin += li_moji_x[0]
                        // console.log('カウント(母音)：' + cnt_FullName_Boin);
                        hantei = 1;
                        break;
                    }
                }
                if (hantei == 1) {
                    break;
                }

                /* 抜き出し文字がリスト内要素と同じ文字である場合 */
                if (txtFullName[i] == li_moji_x[k] && hantei != 1) {
                    cnt_FullName_Shiin += li_moji_x[0]
                    console.log('カウント(子音)：' + cnt_FullName_Shiin);
                    hantei = 1;
                    break;
                }
            }
            if (hantei == 1) {
                break;
            }
        }
    }
}
var doc = document.createElement("p");
doc.innerText = 'カウント(子音)：' + cnt_FullName_Shiin;
var doc_div = document.getElementById("four");
doc_div.appendChild(doc);

var doc = document.createElement("p");
doc.innerText = 'aiueo(母音)：' + cnt_FullName_Boin;
var doc_div = document.getElementById("five");
doc_div.appendChild(doc);
}