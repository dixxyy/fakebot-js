const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');

let init = 0;

const botSay = (data) => {
  return ['Hello, my name is dixxybot. Who are you?', `Hi ${data?.nama}, how old are you?`, `so, you are ${data?.usia} years old. Now tell me your hobby`, `woww.. my hobby is ${data?.hobby} too. sorry i gotta go`];
};

pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobby: jawaban.value });
  } else if (init === 4) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);
  userData.push(jawaban.value);
  jawaban.value = '';
}

function finishing() {
  pertanyaan.innerHTML = `Thanks ${userData[0]} for your time, maybe next time we can ${userData[2]} together`;
  jawaban.value = 'okayy broo';
}

function botEnd() {
  window.location.reload();
}
