const texts=["A paragraph is a short collection of well-organized sentences which revolve around a single theme and is coherent. In this article, we have written the top 8 Problem Solution Short Paragraph Examples for you. Problem Solution Short Paragraph Examples Problem Solution Short Paragraph Examples #1 Study the following information chart and write a paragraph on …","So I have decided to spread education among the masses as much as possible within my humble power. As a teacher, I shall try my best to impart man-making education. Some say that money is the honey of life. But I do not agree with them. Rather, I think that morality is the real honey of life. I want to be a lovable and respectable person as a teacher in the future.","An aim is a goal or objective to achieve in life. In order to succeed in life, one must have a goal. My aim in life is to be a teacher. Teaching is a noble and responsible profession. I have come to know that the ever-increasing misery and distress, are due to the ignorance and illiteracy of the people of our country","The Dowry system is evil in society. It has reduced the sacred affair of marriage to a business deal. Brides are treated as a marketable commodity. The parents of the brides are often put under inhuman pressure for a handsome dowry. Sometimes they become pauper to get their daughters married. In many cases, young brides are ruthlessly tortured or pushed to suicide. To eradicate this social evil, a total change in the outlook of society is a must. The woman has to be considered as an equal partner of the man. Widespread education and employment and their rights of property can bring about the right remedy. Legal prohibition of dowry is not enough. Strong social disapproval of dowry is the only guarantee against this evil. Our youth should come forward to generate public awareness against this shameful custom.","Since March 8, 1990, Woman’s Day is being observed by SAARC (South Asian Association for Regional Cooperation) consisting of seven countries, namely, India, Pakistan, Nepal, Bhutan, Bangladesh, Sri Lanka, and the Maldives. The day was marked to focus on the problems of girl children in these countries. It is a pity that girl children especially in underdeveloped countries are victims of extreme negligence and dishonor. The birth of a girl child is looked upon by the parents as a cause of pity. They are deprived of proper nutrition, education, and economic facilities, and social status or honor. Superstitions and social and religious prejudices give rise to such distressing conditions. We must root out these prejudices and ensure a bright future for the girl children by giving them proper education. Moreover, woman’s rights must be established in social and economic fields.","A paragraph is a short collection of well-organized sentences which revolve around a single theme and is coherent. But in this article, we have written Top 10 long paragraphs that Teach You a Lesson. Long Paragraphs Long Paragraphs #1 TELEVISION: ITS MERITS AND DEMERITS Television is one of the many wonders of modern science and …","Human life is a mixture of weal and woe, smiles and tears. However, once what had seemed to be a memorable day turned to be the saddest day of my life. We had planned for a picnic with all our classmates after the examination on the bank of the river Ganga. We started early in the morning and reached at 10 am. After the cooking was completed, we wished to take a bath in the Ganga. Our class teacher warned that only those who knew swimming would be allowed to bathe in the river. Rajesh, our youngest classmate, did not know how to swim. But he came unnoticed and tried to imitate us in the river. And what was feared happened? Rajesh was drowned. After a long search, we recovered the body. The sight made us dumb and tears trickled down our cheeks. The horrible sight still haunts me whenever I am alone.","Sometimes we come across some forgetful persons in our surroundings. And some geniuses are also forgetful to some extent. We know that Newton boiled his pocket watch instead of an egg. Once Einstein was traveling without a ticket in a train. When the checker demanded the ticket, he was frantically searching for the missing ticket. However, when the checker could recognize him, he assured that the scientist would not have to search for it. Einstein still went on searching and remarked that he was searching to find out where he was going for he totally forgot about his destination. But the most striking incident centered around my father on my sister’s birthday. The dinner was ready but the guests were absent. Finally, father discovered that all the invitation letters were lying in his drawer. The incident has become a family legend.","Most of the people of our country are farmers, workers, and day laborers who live below the poverty line. But the price of essential commodities is soaring higher and higher. It has now become impossible for them to make both ends meet. It has severely hit the day laborers, the lower and middle-class families, and the salaried class too. The prices of rice, vegetables, clothes, mustard oil, medicine, and other essential commodities are also increasing by leaps and bounds","Most of the people of our country are farmers, workers, and day laborers who live below the poverty line. But the price of essential commodities is soaring higher and higher. It has now become impossible for them to make both ends meet. It has severely hit the day laborers, the lower and middle-class families, and the salaried class too. The prices of rice, vegetables, clothes, mustard oil, medicine, and other essential commodities are also increasing by leaps and bounds","We all know that health is wealth. With its intricate network of bones, muscles, and organs, a well-functioning human body is much like an orchestrated symphony. To keep this orchestra playing well, we need physical exercise. It may take the form of sports, yoga, or even regular walking. It is well-known that people who engage in physical exercise stay happier and live longer. Our society is turning towards more and more technical sophistication and automation. The machine has replaced our physical labor. To compensate for this change in lifestyle we need physical exercise. Exercise also sharpens our intellect. It keeps a balance between our body and mind. With the help of regular physical training, we will stay healthier, happier, and more alert. However, over-exercise or exercising in an improper way may tell upon our health and growth. We must therefore do it in a balanced form.","We all know that health is wealth. With its intricate network of bones, muscles, and organs, a well-functioning human body is much like an orchestrated symphony. To keep this orchestra playing well, we need physical exercise. It may take the form of sports, yoga, or even regular walking. It is well-known that people who engage in physical exercise stay happier and live longer. Our society is turning towards more and more technical sophistication and automation. The machine has replaced our physical labor. To compensate for this change in lifestyle we need physical exercise. Exercise also sharpens our intellect. It keeps a balance between our body and mind. With the help of regular physical training, we will stay healthier, happier, and more alert. However, over-exercise or exercising in an improper way may tell upon our health and growth. We must therefore do it in a balanced form.","What is a Paragraph? A paragraph is a short collection of well-organized sentences which revolve around a single theme and is coherent. In this article, you will learn ‘How to Write a Paragraph’. Parts of a Paragraph Introduction: It constitutes the opening sentences of the paragraph. It introduces the main idea. Good introductions often capture …"];


const text = document.querySelector(".testing-text p "),
typingField = document.querySelector(".container .on-typing"),
errorTag = document.querySelector(".errors em"),
timeTage = document.querySelector(".time em"),
finishIn = document.querySelector(".timing input"),
startNow = document.querySelector(".start-typing"),
tryAgain = document.querySelector(".try-again"),
rateTag = document.querySelector(".rate em"),
totalWords = document.querySelector(".errors span"),
placeYourOwnTag = document.querySelector(".another-text button"),
anotherText = document.querySelector(".another-text input"),
completionBar = document.querySelector(".com-bar");


let total;
let timeleft = finishIn.value;
let i= 0;
let errors = started = rate = complete = 0;
let x =0;

function getRandomText(){
  let ranInt=Math.floor(Math.random() * texts.length);
  texts[ranInt].split("").forEach(x => {
      let addedTag = `<span>${x}</span>` ;
      text.innerHTML +=addedTag;
    });

  }

function onTyping(){
  total = text.innerText.length;
  totalWords.innerText = total;

  const chars = document.querySelectorAll("span");
  let typed = typingField.value.split("")[i];
  if(!started){
    gettingStarted=setInterval(timer,1000);
    started=true;
  }
  if(typed==null){
    i--;
    if(chars[i].classList.contains("incorrect")){
      errors--;
      complete--;
    }
    chars[i].classList.remove("correct","incorrect");
  }else {

    if(chars[i].innerHTML===typed){

      chars[i].classList.add("correct");
    }else {
      errors++;
      chars[i].classList.add("incorrect");
    }
    i++;
    complete++;
    rateTag.innerText = (complete/text.innerText.length *100).toFixed(2);
    
  }
  x=complete/total*100;
  completionBar.style.width=x;
  chars.forEach(char =>char.classList.remove("active"));
  chars[i].classList.add("active");
  errorTag.innerText = errors;


}

function rested() {


  typingField.value="";

  var elems = document.querySelectorAll(".correct");

  [].forEach.call(elems, function(el) {
    el.classList.remove("correct");
  });

  elems = document.querySelectorAll(".incorrect");

  [].forEach.call(elems, function(el) {
    el.classList.remove("incorrect");
  });

  timeleft=parseInt(finishIn.value);
  i=0;
  errors=0;
  complete=0;
  rateTag.innerText = 0;
  errorTag.innerText = errors;
  typingField.removeAttribute("disabled","block");
}

function timer(){
  if(timeleft > 0){
    timeleft--;
    timeTage.innerText=timeleft;
  }else{

    typingField.value="";
    typingField.setAttribute("disabled","block");
  }
}

getRandomText();


anotherText.addEventListener("input",()=>timeleft=0);
placeYourOwnTag.addEventListener("click",function(){
    text.innerHTML = "";
    anotherText.value.split("").forEach(x => {
      let addedTag = `<span>${x}</span>` ;
      text.innerHTML +=addedTag;
    });
    anotherText.value="";
    rested();
});
document.addEventListener("keypress",()=>typingField.focus());
text.addEventListener("click",()=>typingField.focus());
typingField.addEventListener("input",onTyping);

startNow.addEventListener("click",rested);


tryAgain.addEventListener("click",function(){
  text.innerHTML="";
  getRandomText();
  rested();

});

anotherText.addEventListener("input",()=>placeYourOwnTag.removeAttribute("disabled"));
placeYourOwnTag.addEventListener("click",()=>placeYourOwnTag.setAttribute("disabled","1"));
finishIn.addEventListener("input",()=>startNow.removeAttribute("disabled"));
startNow.addEventListener("click",()=>startNow.setAttribute("disabled","1"));
