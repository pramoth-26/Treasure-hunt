
var DAta=''
document.addEventListener('DOMContentLoaded',(event)=> {
  const data = localStorage.getItem('sharedData');
  DAta=document.getElementById('displayData').innerText = data;
 
});
function main(){
   const data = document.getElementById('dataInput').value;
  localStorage.setItem('sharedData', data);
  window.location.href = 'tresurehunt/rules.html'; // Redirect to Page 2
}

var n =document.getElementById('displayData').innerText;
function next(){
  window.location.href = 'scan.html'; 
}


// https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
const DATA_URL = "https://www.fesliyanstudios.com/play-mp3/387";  

const beep = () => {
  AUDIO.src = DATA_URL;
}

let currentText = '';

// https://blog.minhazav.dev/research/html5-qrcode
// https://github.com/mebjas/html5-qrcode
const onScanSuccess = (decodedText, decodedResult) => {
  // Handle on success condition with the decoded text or result.
  console.log(`Scan result: ${decodedText}`, decodedResult);
  document.querySelector('#result').innerText = decodedText;
  if (currentText !== decodedText) {
    currentText = decodedText;
    beep(); 
  }
}

const html5QrcodeScanner = new Html5QrcodeScanner(
	"reader", { fps: 10, qrbox: 200 });
html5QrcodeScanner.render(onScanSuccess);

// for iOS audio
// https://stackoverflow.com/questions/31776548/why-cant-javascript-play-audio-files-on-iphone-safari
const AUDIO = new Audio();
AUDIO.autoplay = true;
document.querySelector("#sound").addEventListener("click", () => {
  beep();

});

function verifybtn(){
  console.log(DAta)
  
  if(currentText==="python" && DAta==="NovaAI"){
    window.location.href = 'ques/ques1.html';  
    }
  else if(currentText==="go" && DAta==="NovaAI"){
    window.location.href = 'ques/ques11.html';
  }
  else if(currentText==="laptop" && DAta==="NovaAI"){
    window.location.href = 'ques/ques21.html';
  }
  else if(currentText==="fortran" && DAta==="NovaAI"){
    window.location.href = 'ques/ques16.html';
  }
  else if(currentText==="c#" && DAta==="NovaAI"){
    window.location.href = 'ques/ques7.html';
  }
  else if(currentText==="word1" && DAta==="NovaAI"){
    window.location.href = 'code.html';
  }


  else if(currentText==="c++" && DAta==="ZenithAI"){
    window.location.href = 'ques/ques2.html';
  }
  else if(currentText==="f" && DAta==="ZenithAI"){
    window.location.href = 'ques/ques12.html';
  }
  else if(currentText==="speaker" && DAta==="ZenithAI"){
    window.location.href = 'ques/ques22.html';
  }
  else if(currentText==="scala" && DAta==="ZenithAI"){
    window.location.href = 'ques/ques17.html';
  }
  else if(currentText==="js" && DAta==="ZenithAI"){
    window.location.href = 'ques/ques8.html';
  }
  else if(currentText==="word2" && DAta==="ZenithAI"){
    window.location.href = 'code.html';
  }


  else if(currentText==="ruby" && DAta==="chatgpt"){
    window.location.href = 'ques/ques3.html';
  }
  else if(currentText==="perl" && DAta==="chatgpt"){
    window.location.href = 'ques/ques13.html';
  }
  else if(currentText==="board" && DAta==="chatgpt"){
    window.location.href = 'ques/ques23.html';
  }
  else if(currentText==="vb" && DAta==="chatgpt"){
    window.location.href = 'ques/ques18.html';
  }
  else if(currentText==="php" && DAta==="chatgpt"){
    window.location.href = 'ques/ques9.html';
  }
  else if(currentText==="word3" && DAta==="chatgpt"){
    window.location.href = 'code.html';
  }


  else if(currentText==="c" && DAta==="geminiAI"){
    window.location.href = 'ques/ques4.html';
  }
  else if(currentText==="rust" && DAta==="geminiAI"){
    window.location.href = 'ques/ques14.html';
  }
  else if(currentText==="ac" && DAta==="geminiAI"){
    window.location.href = 'ques/ques24.html';
  }
  else if(currentText==="mouse" && DAta==="geminiAI"){
    window.location.href = 'ques/ques19.html';
  }
  else if(currentText==="sql" && DAta==="geminiAI"){
    window.location.href = 'ques/ques10.html';
  }
  else if(currentText==="word4" && DAta==="geminiAI"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="java" && DAta==="figureAI"){
    window.location.href = 'ques/ques5.html';
  }
  else if(currentText==="f#" && DAta==="figureAI"){
    window.location.href = 'ques/ques15.html';
  }
  else if(currentText==="server" && DAta==="figureAI"){
    window.location.href = 'ques/ques25.html';
  }
  else if(currentText==="monitor" && DAta==="figureAI"){
    window.location.href = 'ques/ques20.html';
  }
  else if(currentText==="go" && DAta==="figureAI"){
    window.location.href = 'ques/ques11.html';
  }
  else if(currentText==="word5" && DAta==="figureAI"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="R" && DAta==="copilot"){
    window.location.href = 'ques/ques6.html';
  }
  else if(currentText==="fortran" && DAta==="copilot"){
    window.location.href = 'ques/ques16.html';
  }
  else if(currentText==="system" && DAta==="copilot"){
    window.location.href = 'ques/ques26.html';
  }
  else if(currentText==="laptop" && DAta==="copilot"){
    window.location.href = 'ques/ques21.html';
  }
  else if(currentText==="f" && DAta==="copilot"){
    window.location.href = 'ques/ques12.html';
  }
  else if(currentText==="word6" && DAta==="copilot"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="c#" && DAta==="soundraw"){
    window.location.href = 'ques/ques7.html';
  }
  else if(currentText==="scala" && DAta==="soundraw"){
    window.location.href = 'ques/ques17.html';
  }
  else if(currentText==="cpu" && DAta==="soundraw"){
    window.location.href = 'ques/ques27.html';
  }
  else if(currentText==="speaker" && DAta==="soundraw"){
    window.location.href = 'ques/ques22.html';
  }
  else if(currentText==="perl" && DAta==="soundraw"){
    window.location.href = 'ques/ques13.html';
  }
  else if(currentText==="word7" && DAta==="soundraw"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="js" && DAta==="removebg"){
    window.location.href = 'ques/ques8.html';
  }
  else if(currentText==="vb" && DAta==="removebg"){
    window.location.href = 'ques/ques18.html';
  }
  else if(currentText==="projector" && DAta==="removebg"){
    window.location.href = 'ques/ques28.html';
  }
  else if(currentText==="board" && DAta==="removebg"){
    window.location.href = 'ques/ques23.html';
  }
  else if(currentText==="rust" && DAta==="removebg"){
    window.location.href = 'ques/ques14.html';
  }
  else if(currentText==="word8" && DAta==="removebg"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="php" && DAta==="Midjourney"){
    window.location.href = 'ques/ques9.html';
  }
  else if(currentText==="mouse" && DAta==="Midjourney"){
    window.location.href = 'ques/ques19.html';
  }
  else if(currentText==="cable" && DAta==="Midjourney"){
    window.location.href = 'ques/ques29.html';
  }
  else if(currentText==="ac" && DAta==="Midjourney"){
    window.location.href = 'ques/ques24.html';
  }
  else if(currentText==="f#" && DAta==="Midjourney"){
    window.location.href = 'ques/ques15.html';
  }
  else if(currentText==="word9" && DAta==="Midjourney"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="sql" && DAta==="h2oAI"){
    window.location.href = 'ques/ques10.html';
  }
  else if(currentText==="monitor" && DAta==="h2oAI"){
    window.location.href = 'ques/ques20.html';
  }
  else if(currentText==="aux" && DAta==="h2oAI"){
    window.location.href = 'ques/ques30.html';
  }
  else if(currentText==="server" && DAta==="h2oAI"){
    window.location.href = 'ques/ques25.html';
  }
  else if(currentText==="fortran" && DAta==="h2oAI"){
    window.location.href = 'ques/ques16.html';
  }
  else if(currentText==="word10" && DAta==="h2oAI"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="go" && DAta==="copyai"){
    window.location.href = 'ques/ques11.html';
  }
  else if(currentText==="python" && DAta==="copyai"){
    window.location.href = 'ques/ques1.html';
  }
  else if(currentText==="c++" && DAta==="copyai"){
    window.location.href = 'ques/ques2.html';
  }
  else if(currentText==="laptop" && DAta==="copyai"){
    window.location.href = 'ques/ques21.html';
  }
  else if(currentText==="vb" && DAta==="copyai"){
    window.location.href = 'ques/ques18.html';
  }
  else if(currentText==="word11" && DAta==="copyai"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="f" && DAta==="aixcoder"){
    window.location.href = 'ques/ques12.html';
  }
  else if(currentText==="c++" && DAta==="aixcoder"){
    window.location.href = 'ques/ques2.html';
  }
  else if(currentText==="ruby" && DAta==="aixcoder"){
    window.location.href = 'ques/ques3.html';
  }
  else if(currentText==="speaker" && DAta==="aixcoder"){
    window.location.href = 'ques/ques22.html';
  }
  else if(currentText==="mouse" && DAta==="aixcoder"){
    window.location.href = 'ques/ques19.html';
  }
  else if(currentText==="word12" && DAta==="aixcoder"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="perl" && DAta==="PerplexityAI"){
    window.location.href = 'ques/ques13.html';
  }
  else if(currentText==="ruby" && DAta==="PerplexityAI"){
    window.location.href = 'ques/ques3.html';
  }
  else if(currentText==="c" && DAta==="PerplexityAI"){
    window.location.href = 'ques/ques4.html';
  }
  else if(currentText==="board" && DAta==="PerplexityAI"){
    window.location.href = 'ques/ques23.html';
  }
  else if(currentText==="monitor" && DAta==="PerplexityAI"){
    window.location.href = 'ques/ques20.html';
  }
  else if(currentText==="word13" && DAta==="PerplexityAI"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="rust" && DAta==="Salesforce"){
    window.location.href = 'ques/ques14.html';
  }
  else if(currentText==="c" && DAta==="Salesforce"){
    window.location.href = 'ques/ques4.html';
  }
  else if(currentText==="java" && DAta==="Salesforce"){
    window.location.href = 'ques/ques5.html';
  }
  else if(currentText==="ac" && DAta==="Salesforce"){
    window.location.href = 'ques/ques24.html';
  }
  else if(currentText==="laptop" && DAta==="Salesforce"){
    window.location.href = 'ques/ques21.html';
  }
  else if(currentText==="word14" && DAta==="Salesforce"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="f#" && DAta==="Claude"){
    window.location.href = 'ques/ques15.html';
  }
  else if(currentText==="java" && DAta==="Claude"){
    window.location.href = 'ques/ques5.html';
  }
  else if(currentText==="r" && DAta==="Claude"){
    window.location.href = 'ques/ques6.html';
  }
  else if(currentText==="server" && DAta==="Claude"){
    window.location.href = 'ques/ques25.html';
  }
  else if(currentText==="speaker" && DAta==="Claude"){
    window.location.href = 'ques/ques22.html';
  }
  else if(currentText==="word15" && DAta==="Claude"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="fortran" && DAta==="Jasper"){
    window.location.href = 'ques/ques16.html';
  }
  else if(currentText==="R" && DAta==="Jasper"){
    window.location.href = 'ques/ques6.html';
  }
  else if(currentText==="c#" && DAta==="Jasper"){
    window.location.href = 'ques/ques7.html';
  }
  else if(currentText==="system" && DAta==="Jasper"){
    window.location.href = 'ques/ques26.html';
  }
  else if(currentText==="board" && DAta==="Jasper"){
    window.location.href = 'ques/ques23.html';
  }
  else if(currentText==="word16" && DAta==="Jasper"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="scala" && DAta==="Writesonic"){
    window.location.href = 'ques/ques17.html';
  }
  else if(currentText==="c#" && DAta==="Writesonic"){
    window.location.href = 'ques/ques7.html';
  }
  else if(currentText==="js" && DAta==="Writesonic"){
    window.location.href = 'ques/ques8.html';
  }
  else if(currentText==="cpu" && DAta==="Writesonic"){
    window.location.href = 'ques/ques27.html';
  }
  else if(currentText==="ac" && DAta==="Writesonic"){
    window.location.href = 'ques/ques24.html';
  }
  else if(currentText==="word17" && DAta==="Writesonic"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="vb" && DAta==="DataRobot"){
    window.location.href = 'ques/ques18.html';
  }
  else if(currentText==="js" && DAta==="DataRobot"){
    window.location.href = 'ques/ques8.html';
  }
  else if(currentText==="php" && DAta==="DataRobot"){
    window.location.href = 'ques/ques9.html';
  }
  else if(currentText==="projector" && DAta==="DataRobot"){
    window.location.href = 'ques/ques28.html';
  }
  else if(currentText==="server" && DAta==="DataRobot"){
    window.location.href = 'ques/ques25.html';
  }
  else if(currentText==="word18" && DAta==="DataRobot"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="mouse" && DAta==="HuggingFace"){
    window.location.href = 'ques/ques19.html';
  }
  else if(currentText==="php" && DAta==="HuggingFace"){
    window.location.href = 'ques/ques9.html';
  }
  else if(currentText==="sql" && DAta==="HuggingFace"){
    window.location.href = 'ques/ques10.html';
  }
  else if(currentText==="cable" && DAta==="HuggingFace"){
    window.location.href = 'ques/ques29.html';
  }
  else if(currentText==="system" && DAta==="HuggingFace"){
    window.location.href = 'ques/ques26.html';
  }
  else if(currentText==="word19" && DAta==="HuggingFace"){
    window.location.href = 'code.html';
  }
  

  else if(currentText==="monitor" && DAta==="Replicate"){
    window.location.href = 'ques/ques20.html';
  }
  else if(currentText==="sql" && DAta==="Replicate"){
    window.location.href = 'ques/ques10.html';
  }
  else if(currentText==="go" && DAta==="Replicate"){
    window.location.href = 'ques/ques11.html';
  }
  else if(currentText==="aux" && DAta==="Replicate"){
    window.location.href = 'ques/ques30.html';
  }
  else if(currentText==="cpu" && DAta==="Replicate"){
    window.location.href = 'ques/ques27.html';
  }
  else if(currentText==="word20" && DAta==="Replicate"){
    window.location.href = 'code.html';
  }
  
  
  
  else {
    alert('Invalid QR. Please Scan Your Lot QR.');
  }



}

