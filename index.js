const quiz = [
  {
    question: "アニメ　ポケットモンスターでサトシが最初に選んだポケモンはどれ？",
    answers: [
      'ヒトカゲ',
      'ゼニガメ',
      'フシギダネ',
      'ピカチュウ'
    ],
    correct: 'ピカチュウ'
  },{
    question: "ピカチュウの必殺技は？",
    answers :[
      '１０満ボルト',
      'ハイドロポンプ',
      '１００満ボルト',
      'サイコキネシス'
    ],
    correct:'１０満ボルト'
  },{
    question: '伝説のポケモン次のうちどれ？',
    answers: [
      'イワーク',
      'スターミー',
      'デデンネ',
      'ミュウ'
    ],
    correct:'ミュウ'
  },{
    question: 'イーブイが炎の石で進化した時のポケモンは？',
    answers: [
    'サンダース',
    'ファイヤーズ',
    'シャワーズ',
    'ブースター'
    ],
    correct:'ブースター'
  },{
    question:'サトシのライバルは次のうち誰？',
    answers:[
      'トグロ',
      'スネオ',
      'タケシ',
      'シゲル'
    ],
    correct:'シゲル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button')

//クイズ問題文
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length
  while(buttonIndex < buttonLength){
   $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
 }
}

setupQuiz();



let buttonIndex = 0;
let buttonLength = $button.length
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
const click =(e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
   } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です');

   } 
  };


//クリックで正誤判定
let clickIndex = 0;
while(clickIndex < buttonLength){
  $button[clickIndex].addEventListener('click',(e) => {
    click (e);
   });
  clickIndex ++ ;
};


