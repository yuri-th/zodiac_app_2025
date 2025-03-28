function butotnClick() {
  let str = document.getElementById("wareki").value;
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;
  let hour = document.getElementById("hour").value;
  let min = document.getElementById("min").value;
  let msg = document.getElementById("msg");
  let msg2 = document.getElementById("msg2");
  let msg3 = document.getElementById("msg3");

  if (str == "syowa") {
    year = Number(year) + 1925;
  } else if (str == "heisei") {
    year = Number(year) + 1988;
  } else if (str == "reiwa") {
    year = Number(year) + 2018;
  }

  var date = new Date(year, month - 1, day, hour, min);

  var kinzisa1 = [
    -3, -3, -4, -4, -5, -5, -6, -6, -6, -7, -7, -8, -8, -8, -9, -9, -10, -10,
    -10, -10, -11, -11, -11, -12, -12, -12, -12, -12, -13, -13, -13,
  ];
  var kinzisa2 = [
    -13, -13, -13, -13, -13, -14, -14, -14, -14, -14, -14, -14, -14, -14, -14,
    -14, -14, -13, -13, -13, -13, -13, -13, -13, -13, -12, -12, -12,
  ];
  var kinzisa3 = [
    -12, -12, -11, -11, -11, -11, -11, -10, -10, -10, -10, -9, -9, -9, -8, -8,
    -8, -8, -7, -7, -7, -6, -6, -6, -6, -5, -5, -5, -4, -4, -4,
  ];
  var kinzisa4 = [
    -3, -3, -3, -3, -2, -2, -2, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 1, 1, 2, 2, 2, 2, 2,
  ];
  var kinzisa5 = [
    2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    2, 2, 2, 2, 2, 2,
  ];
  var kinzisa6 = [
    2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, -1, -2,
    -2, -2, -2, -3, -3, -3, -3,
  ];
  var kinzisa7 = [
    -3, -4, -4, -4, -4, -4, -4, -5, -5, -5, -5, -5, -5, -5, -5, -6, -6, -6, -6,
    -6, -6, -6, -6, -6, -6, -6, -6, -6, -6, -6, -6,
  ];
  var kinzisa8 = [
    -6, -6, -6, -6, -6, -5, -5, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3,
    -3, -3, -2, -2, -2, -2, -1, -1, -1, -1, 0, 0,
  ];
  var kinzisa9 = [
    0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8,
    8, 8, 9, 9, 9,
  ];
  var kinzisa10 = [
    10, 10, 10, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14,
    15, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16,
  ];
  var kinzisa11 = [
    16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 15, 15, 15, 15, 14, 14,
    14, 14, 13, 13, 13, 13, 12, 12, 12, 11, 11,
  ];
  var kinzisa12 = [
    11, 10, 10, 9, 9, 9, 8, 8, 7, 7, 6, 6, 5, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 0,
    0, 0, 0, -1, -1, -2, -2,
  ];

  for (let i = 0; i < kinzisa1.length; i++) {
    if (month == 1 && day == i + 1) {
      min = Number(min) + (kinzisa1[i] + Number(local.value));
      msg3.innerText = kinzisa1[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa2.length; i++) {
    if (month == 2 && day == i + 1) {
      min = Number(min) + (kinzisa2[i] + Number(local.value));
      msg3.innerText = kinzisa2[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa3.length; i++) {
    if (month == 3 && day == i + 1) {
      min = Number(min) + (kinzisa3[i] + Number(local.value));
      msg3.innerText = kinzisa3[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa4.length; i++) {
    if (month == 4 && day == i + 1) {
      min = Number(min) + (kinzisa4[i] + Number(local.value));
      msg3.innerText = kinzisa4[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa5.length; i++) {
    if (month == 5 && day == i + 1) {
      min = Number(min) + (kinzisa5[i] + Number(local.value));
      msg3.innerText = kinzisa5[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa6.length; i++) {
    if (month == 6 && day == i + 1) {
      min = Number(min) + (kinzisa6[i] + Number(local.value));
      msg3.innerText = kinzisa6[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa7.length; i++) {
    if (month == 7 && day == i + 1) {
      min = Number(min) + (kinzisa7[i] + Number(local.value));
      msg3.innerText = kinzisa7[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa8.length; i++) {
    if (month == 8 && day == i + 1) {
      min = Number(min) + (kinzisa8[i] + Number(local.value));
      msg3.innerText = kinzisa8[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa9.length; i++) {
    if (month == 9 && day == i + 1) {
      min = Number(min) + (kinzisa9[i] + Number(local.value));
      msg3.innerText = kinzisa9[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa10.length; i++) {
    if (month == 10 && day == i + 1) {
      min = Number(min) + (kinzisa10[i] + Number(local.value));
      msg3.innerText = kinzisa10[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa11.length; i++) {
    if (month == 11 && day == i + 1) {
      min = Number(min) + (kinzisa11[i] + Number(local.value));
      msg3.innerText = kinzisa11[i] + "分";
    }
  }
  for (let i = 0; i < kinzisa12.length; i++) {
    if (month == 12 && day == i + 1) {
      min = Number(min) + (kinzisa12[i] + Number(local.value));
      msg3.innerText = kinzisa12[i] + "分";
    }
  }

  const now = new Date(year, month - 1, day, hour, min);

  //和暦変換
  msg.innerText = now.toLocaleString("ja-JP-u-ca-japanese", { era: "long" });

  msg2.innerText = Number(local.value) + "分";
}

let sinsei = document.getElementById("sinsei");
sinsei.addEventListener("click", butotnClick);

// リセット
document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("msg").textContent = "";
  document.getElementById("msg2").textContent = "";
  document.getElementById("msg3").textContent = "";
});
