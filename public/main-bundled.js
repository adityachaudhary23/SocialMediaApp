(()=>{var e=io(),a=document.getElementById("chat"),t=document.getElementById("chatForm"),c=document.getElementById("chatField"),s=document.getElementById("userFixed");t.addEventListener("submit",(function(a){if(a.preventDefault(),c.value){var t={message:c.value,username:s.value};e.emit("chat_message",t),c.value=""}})),e.on("chat_message",(function(e){var t=document.createElement("div");e.username==s.value?(t.classList.add("chat-self"),t.innerHTML='<div class="chat-message">\n          <div class="chat-message-inner">\n            '.concat(e.message,'\n          </div>\n        </div>\n        <img src="https://gravatar.com/avatar/504f20626e89be4f1323e9737bb8c779?s=128" class="chat-avatar avatar-tiny">')):(t.classList.add("chat-other"),t.innerHTML='<a href="/profile/'.concat(e.username,'"><img src="https://gravatar.com/avatar/838afbc4de3446a26170d809bb684cf1?s=128"class="avatar-tiny"></a><div class="chat-message"><div class="chat-message-inner"><a href="/profile/').concat(e.username,'"><strong>').concat(e.username,":</strong></a> ").concat(e.message,"</div></div>")),a.appendChild(t),window.scrollTo(0,document.body.scrollHeight)})),document.querySelector("#chat-icon").addEventListener("click",(function(){document.querySelector("#chat-wrapper").classList.add("chat--visible")})),document.querySelector("#cross-icon").addEventListener("click",(function(){document.querySelector("#chat-wrapper").classList.remove("chat--visible")}))})();