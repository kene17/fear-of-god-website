 // English to Arabic

 let arabic = document.getElementById("arabic");
 let english = document.getElementById("english");
  let title = document.getElementById("title");

 arabic.onclick = ()=>{
  setLanguage("arabic");
 };

 english.onclick = ()=>{
  setLanguage("english");
 };

 function setLanguage(getLanuage) {
  if (getLanuage === "arabic") {
      title.innerHTML = "الانضمام إلى سوق التوصيل";
  }else if(getLanuage === "english"){

   title.innerHTML = "JOIN THE DELIVERY MARKETPLACE";
  }
 }