const concierge = document.getElementById("concierge");
const launcher = document.getElementById("chatLauncher");
const closeButton = document.getElementById("closeChat");
const panel = document.getElementById("chatPanel");
const messages = document.getElementById("messages");
const quickReplies = document.getElementById("quickReplies");
const typingRow = document.getElementById("typingRow");
const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const STORAGE_KEY = "casa-mare-chat-open";

const answers = [
  {match:["check","time","arrival","departure"],reply:"Check-in begins at 2:00 PM, and check-out is by 11:00 AM. Arriving early? We can happily store your bags while you start exploring."},
  {match:["beach","nearby","place","visit","around"],reply:"Ashwem Beach is our favourite nearby stretch of sand, around a 10-minute drive away. Mandrem is lovely for a quieter sunset, too. I can help arrange a ride!"},
  {match:["airport","transfer","taxi","pickup","pick up"],reply:"Absolutely. We can arrange a private airport transfer from Manohar International Airport (Mopa) or Dabolim. Share your arrival time and flight details with our front desk to confirm a pickup."},
  {match:["pool","food","restaurant","breakfast","dining"],reply:"Our kitchen serves a relaxed breakfast from 7:30–10:30 AM, with fresh local flavours and plenty of favourites. The pool is open daily from 7:00 AM until sunset."},
  {match:["wifi","wi-fi","internet"],reply:"Complimentary Wi-Fi is available throughout the property. You'll find the network name and password in your welcome note at check-in."}
];

function setOpen(open){
  concierge.classList.toggle("is-open",open);
  launcher.setAttribute("aria-expanded",String(open));
  panel.setAttribute("aria-hidden",String(!open));
  localStorage.setItem(STORAGE_KEY,String(open));
  if(open) setTimeout(()=>messageInput.focus(),250);
  else launcher.focus();
}
function addMessage(text,sender){
  const article=document.createElement("article");
  article.className=`message ${sender==="guest"?"guest-message":"concierge-message"}`;
  const bubble=document.createElement("div");
  bubble.className="bubble";
  bubble.textContent=text;
  const meta=document.createElement("div");
  meta.className="meta";
  const time=new Date().toLocaleTimeString([],{hour:"numeric",minute:"2-digit"});
  meta.textContent=`${sender==="guest"?"You":"Mira"} · ${time} `;
  if(sender==="guest"){const ticks=document.createElement("b");ticks.className="ticks";ticks.textContent="✓✓";meta.appendChild(ticks);}
  article.append(bubble,meta);messages.appendChild(article);messages.scrollTop=messages.scrollHeight;
}
function getReply(question){
  const q=question.toLowerCase();
  const answer=answers.find(item=>item.match.some(word=>q.includes(word)));
  return answer?answer.reply:"I'd be delighted to help with that. For a personalised answer, our front desk team is available around the clock. Is there anything else I can help you plan?";
}
function sendMessage(question){
  const clean=question.trim();if(!clean)return;
  quickReplies.hidden=true;addMessage(clean,"guest");messageInput.value="";
  typingRow.hidden=false;messages.scrollTop=messages.scrollHeight;
  setTimeout(()=>{typingRow.hidden=true;addMessage(getReply(clean),"concierge");messages.scrollTop=messages.scrollHeight;},1150);
}
launcher.addEventListener("click",()=>setOpen(true));
closeButton.addEventListener("click",()=>setOpen(false));
quickReplies.addEventListener("click",event=>{const chip=event.target.closest("[data-question]");if(chip)sendMessage(chip.dataset.question);});
chatForm.addEventListener("submit",event=>{event.preventDefault();sendMessage(messageInput.value);});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&concierge.classList.contains("is-open"))setOpen(false);});
if(localStorage.getItem(STORAGE_KEY)==="true")setOpen(true);
else{panel.setAttribute("aria-hidden","true");launcher.setAttribute("aria-expanded","false");}
