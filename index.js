function printSecret(message) {
  document.querySelector("#result").innerHTML = message;
}

function resetScreen() {
  document.querySelector("#empty").style.display = "none";
  document.querySelector("#imageNoMessage").style.display = "none";
  document.querySelector("#noMessage").style.display = "none";
  document.querySelector("#descriptionNoMessage").style.display = "none";
  document.querySelector("#result").style.display = "inline-block";
  document.querySelector("#copy").style.display = "inline-block";
}

function encryptText() {
  const message = document.querySelector("#text").value;
  let secret = "";
  const UpperCase = /[A-Z]/g.test(message);
  const Accent = /[á-ú]/g.test(message);

  if (message !== "" && !UpperCase && !Accent && message.trim().length) {
    for (let i = 0; i < message.length; i++) {
      switch (message[i]) {
        case " ":
          secret += " ";
          break;
        case "a":
          secret += "ai";
          break;
        case "e":
          secret += "enter";
          break;
        case "i":
          secret += "imes";
          break;
        case "o":
          secret += "ober";
          break;
        case "u":
          secret += "ufat";
          break;
        default:
          secret += message[i];
      }
    }
    resetScreen();
    printSecret(secret);
    document.querySelector("#text").value = "";
  } else {
    alert("Por favor ingrese un mensaje válido");
  }
}

function deEncryptText() {
  let message = document.querySelector("#text").value;
  const codes = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
  var vowels = ["a", "e", "i", "o", "u"];
  const UpperCase = /[A-Z]/g.test(message);
  const Accent = /[á-ú]/g.test(message);
  console.log("hola");
  if (message !== "" && !UpperCase && !Accent && message.trim().length) {
    for (let i = 0; i < vowels.length; i++) {
      message = message.replaceAll(codes[i], vowels[i]);
    }
    // resetScreen();
    printSecret(message);
    document.querySelector("#text").value = "";
  } else alert("Por favor ingrese un mensaje válido");
}

function copyToClipboard() {
  const copyText = document.querySelector("#result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}

const encrypt = document.querySelector("#encrypt");
const deEncrypt = document.querySelector("#deEncrypt");
const copy = document.querySelector("#copy");
document.querySelector(".theme").addEventListener("click", () => {
  document.body.classList.toggle("darkTheme");
});

copy.onclick = copyToClipboard;
encrypt.onclick = encryptText;
deEncrypt.onclick = deEncryptText;
