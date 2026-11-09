const $=id=>document.getElementById(id);
const CATEGORY_KEYS=['compass','square','knowledge','meetings'];
const STORAGE_KEY='rakugaki-guide-review-v2';
var coffeeState='none',coffeeMilk=false;
let selectedReply=-1,replyReadyAt=0,confirmReadyAt=0,replyTimer=null;
const REPLY_DELAY=450,CONFIRM_DELAY=250;
function needsConfirmation(){return STORY[current].replyMode==='confirm'}
function repliesReady(){return !typing&&Date.now()>=replyReadyAt}
function updateReplyControls(){const ready=repliesReady();$('choices').querySelectorAll('button').forEach((b,i)=>{b.disabled=!ready;if(needsConfirmation())b.setAttribute('aria-pressed',String(i===selectedReply))});$('confirm-reply').hidden=!needsConfirmation();$('confirm-reply').disabled=!ready||selectedReply<0||Date.now()<confirmReadyAt}
function selectReply(index){if(!repliesReady())return;selectedReply=index;confirmReadyAt=Date.now()+CONFIRM_DELAY;updateReplyControls();clearTimeout(replyTimer);replyTimer=setTimeout(updateReplyControls,CONFIRM_DELAY)}
function confirmReply(){if(!repliesReady()||selectedReply<0||Date.now()<confirmReadyAt)return;go(STORY[current].choices[selectedReply].to)}
function answerReply(index){if(!repliesReady())return;if(needsConfirmation())selectReply(index);else go(STORY[current].choices[index].to)}
let current='A01',trail=[],timer=null,typing=false,sound=true,audio=null,first=true,seen=new Set(),doneTasks=new Set(),taskAdded=false,lastCategory=null,spoken=0;
try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');if(data){doneTasks=new Set((data.tasks||[]).filter(k=>['intro','explore','homepage','sns'].includes(k)));taskAdded=!!data.taskAdded}}catch{}
function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify({tasks:[...doneTasks],taskAdded}))}catch{}}
function allRead(){return SECTIONS.every(s=>seen.has(s[0]))}
function beep(){if(!sound||!audio||audio.state!=='running')return;try{const o=audio.createOscillator(),g=audio.createGain(),t=audio.currentTime;o.type='square';o.frequency.value=350+Math.random()*180;g.gain.setValueAtTime(.018,t);g.gain.exponentialRampToValueAtTime(.001,t+.035);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+.04)}catch{sound=false;updateSound()}}
async function unlockAudio(){if(!sound||audio?.state==='running')return;try{audio??=new(window.AudioContext||window.webkitAudioContext)();await audio.resume()}catch{}}
document.addEventListener('pointerdown',unlockAudio,{capture:true,passive:true});
document.addEventListener('keydown',unlockAudio,{capture:true});
function updateSound(){$('sound').textContent='音：'+(sound?'ON':'OFF');$('sound').setAttribute('aria-pressed',String(sound))}
function safeURL(value){if(!value||typeof value!=='string')return null;try{const u=new URL(value,location.href);return ['https:','http:'].includes(u.protocol)?u.href:null}catch{return null}}
function complete(){const node=STORY[current];if(node.complete)seen.add(node.complete);if(node.task==='intro')taskAdded=true;save();updateProgress()}
function finish(){clearInterval(timer);if(typing)spoken++;typing=false;talking=false;$('line').textContent=STORY[current].text;$('cursor').hidden=false;$('hint').textContent=needsConfirmation()?'返事を選んで、下のボタンで決定 ／ 矢印で選択・Enterで決定':'返事をタップ ／ 矢印で選択・Enter・スペースで決定';replyReadyAt=Date.now()+REPLY_DELAY;updateReplyControls();clearTimeout(replyTimer);replyTimer=setTimeout(updateReplyControls,REPLY_DELAY);complete()}
function categoryMenu(){if(first){go('C01');return}const target=$('topic-list');target.replaceChildren();$('guide-status').textContent='聞きたいカテゴリを選んでください。';for(const key of CATEGORY_KEYS){const s=SECTIONS.find(s=>s[0]===key);const b=makeButton((seen.has(key)?'✓ ':'')+s[1],()=>{$('menu').close();lastCategory=key;go(s[2])});target.append(b)}target.append(makeButton('そのほかの機能（準備中）',()=>{$('menu').close();go('C50')}));$('menu').showModal()}
function continueGuide(){const next=SECTIONS.find(s=>!seen.has(s[0]));if(next){go(next[2]);return}go(spoken>12?'Z01':'Z02')}
function nextCategory(){if(first){const next=CATEGORY_KEYS.find(k=>!seen.has(k));if(next){lastCategory=next;go(SECTIONS.find(s=>s[0]===next)[2]);return}continueGuide();return}categoryMenu()}
function go(id,remember=true){if(typing)finish();if(first&&id==='V01'&&coffeeState==='ordered')id='COFFEE_PREPARE';if(first&&id==='REVIEW'&&current==='V08'&&coffeeState==='preparing')id='COFFEE_SERVE';if(first&&id==='REVIEW'&&current==='B05'&&coffeeState==='served')id='COFFEE_SIP';if(id==='REVIEW'){if(first)continueGuide();else openGuide();return}if(id==='CATEGORY_MENU'){categoryMenu();return}if(id==='CATEGORY_END'){nextCategory();return}if(id==='GUIDE_END'){if(first&&!allRead()){continueGuide();return}id=spoken>12?'Z01':'Z02'}if(!STORY[id])return;if(remember)trail.push(current);current=id;if(STORY[id].mode){first=STORY[id].mode==='first';if(first){seen.clear();coffeeState='none';coffeeMilk=false;spoken=0;save()}}const cat=SECTIONS.find(s=>s[2]===id&&CATEGORY_KEYS.includes(s[0]));if(cat)lastCategory=cat[0];render()}
function restartGuide(){clearInterval(timer);typing=false;talking=false;current='A01';trail=[];first=true;seen.clear();coffeeState='none';coffeeMilk=false;lastCategory=null;spoken=0;for(const id of ['menu','tasks','album'])$(id).close();save();updateProgress();render();if(typeof scene==='function'&&reduced)scene()}
function makeButton(label,action){const b=document.createElement('button');b.textContent=label;b.onclick=action;return b}
function showCue(kind){const ids={guide:['topics'],tasks:['tasks-open'],sound:['sound'],tools:['topics','tasks-open']}[kind]||[];for(const id of ['topics','tasks-open','sound']){$(id).classList.remove('pointed');$(id).removeAttribute('aria-describedby')}const active=ids.length>0;$('topbar').classList.toggle('has-cue',active);$('nav-cue').hidden=!active;if(!active){$('nav-cue').textContent='';return}for(const id of ids){$(id).classList.add('pointed');$(id).setAttribute('aria-describedby','nav-cue')}$('nav-cue').textContent={guide:'↑「案内表」で、聞いたお話を確認できます。',tasks:'↑「やることメモ」で、後でやることを確認できます。',sound:'↑「音」ボタンで、電子音のON・OFFを切り替えます。',tools:'↑「案内表」と「やることメモ」は、確認したいときだけ使えます。'}[kind]}
function render(){clearInterval(timer);clearTimeout(replyTimer);selectedReply=-1;replyReadyAt=Infinity;confirmReadyAt=Infinity;const node=STORY[current];$('confirm-reply').hidden=!needsConfirmation();$('confirm-reply').disabled=true;$('confirm-reply').textContent=current==='COFFEE_ORDER'?'これをお願いします':'この返事で進む';if(node.coffee){if(node.coffee.startsWith('ordered-')){coffeeState='ordered';coffeeMilk=node.coffee==='ordered-milk'}else coffeeState=node.coffee;if(typeof scene==='function'&&reduced)scene()}showCue(node.cue);showChannelMap(node.map);$('subject').textContent='いまのお話：'+node.subject;$('chapter').textContent=node.chapter;$('line').textContent='';$('choices').replaceChildren();node.choices.forEach((c,index)=>{const b=makeButton(c.label,()=>answerReply(index));if(needsConfirmation())b.setAttribute('aria-pressed','false');b.disabled=true;$('choices').append(b)});$('back').disabled=!trail.length;showActivity(node.activity);const chars=Array.from(node.text);let i=0;typing=true;talking=true;$('cursor').hidden=true;$('hint').textContent='セリフを押すか、Enter・スペースで全文表示';if(matchMedia('(prefers-reduced-motion: reduce)').matches){finish();return}timer=setInterval(()=>{i++;$('line').textContent=chars.slice(0,i).join('');if(i%2===0&&chars[i-1]?.trim())beep();if(i>=chars.length)finish()},45)}
function updateProgress(){const count=SECTIONS.filter(s=>seen.has(s[0])).length;$('topics').textContent='案内表 '+count+'/'+SECTIONS.length}
function openGuide(){if(typing)finish();showCue(null);const target=$('topic-list');target.replaceChildren();$('guide-status').textContent=first?(allRead()?'すべてのお話を聞きました。':'まだ印のないお話も、順番にお聞きください。'):'聞きたいお話を選んでください。';for(const [key,label,id] of SECTIONS){target.append(makeButton((seen.has(key)?'✓ ':'□ ')+label,()=>{$('menu').close();go(id)}))}if(!first)target.append(makeButton('カテゴリを直接選ぶ',()=>{$('menu').close();categoryMenu()}));if(!first||allRead())target.append(makeButton('案内を終えて、Discordに戻る準備をする',()=>{$('menu').close();go('J04')}));$('menu').showModal()}
function renderTasks(){const target=$('task-list');target.replaceChildren();const specs=[['intro','自己紹介を書く',taskAdded?null:'「羅針盤」の案内でメモに追加されます。'],['explore','チャンネルを見て回り、気になる投稿にリアクションする',null],['homepage','ホームページで詳しい活動を見る',safeURL(window.GUIDE_LINKS?.homepage)?null:'URL準備中'],['sns','公式SNSを確認して、フォローする',safeURL(window.GUIDE_LINKS?.sns)?null:'開設・URL準備中']];for(const [id,label,pending] of specs){const row=document.createElement('label');row.className='task-row';const checkbox=document.createElement('input');checkbox.type='checkbox';checkbox.checked=doneTasks.has(id);checkbox.disabled=!!pending;checkbox.onchange=()=>{if(checkbox.checked)doneTasks.add(id);else doneTasks.delete(id);save()};const text=document.createElement('span');text.textContent=label+(pending?' — '+pending:'');row.append(checkbox,text);target.append(row);const url=id==='homepage'||id==='sns'?safeURL(window.GUIDE_LINKS?.[id]):null;if(url){const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent='開く ↗';target.append(a)}}}
let activeActivity=null;
function showActivity(key){if(key&&key===activeActivity)return;activeActivity=key||null;const target=$('activity-media'),item=window.GUIDE_ACTIVITIES?.[key];const media=item?[...(item.photos||[]).map(p=>({...p,type:'image'})),...(item.videos||[]).map(p=>({...p,type:'video'}))]:[];const show=media.length>0;target.hidden=!show;$('stage').classList.toggle('show-activity',show);target.replaceChildren();if(!show)return;const title=document.createElement('h3');title.textContent=item.title;target.append(title);for(const asset of media){const url=safeURL(asset.src);if(!url)continue;const f=document.createElement('figure'),el=document.createElement(asset.type==='video'?'video':'img');el.src=url;if(asset.type==='video'){el.controls=true;el.preload='metadata';el.playsInline=true}else{el.alt=asset.alt||asset.caption||item.title;el.decoding='async'}const cap=document.createElement('figcaption');cap.textContent=asset.caption||'';f.append(el,cap);target.append(f)}}
$('speech').onclick=()=>{if(typing)finish()};$('sound').onclick=async()=>{sound=!sound;updateSound();if(sound){try{audio??=new(window.AudioContext||window.webkitAudioContext)();await audio.resume();beep()}catch{sound=false;updateSound()}}};$('back').onclick=()=>{if(trail.length){current=trail.pop();render()}};$('topics').onclick=openGuide;$('close').onclick=()=>$('menu').close();$('tasks-open').onclick=()=>{showCue(null);renderTasks();$('tasks').showModal()};$('tasks-close').onclick=()=>$('tasks').close();$('album-close').onclick=()=>$('album').close();document.addEventListener('visibilitychange',()=>{if(document.hidden&&typing)finish()});updateSound();updateProgress();render();

$('restart').onclick=restartGuide;
function handleGuideKey(event){
 if(event.defaultPrevented||event.repeat||event.isComposing||event.ctrlKey||event.altKey||event.metaKey)return;
 const target=event.target;
 if(target?.closest?.('dialog[open],input,textarea,select,[contenteditable="true"],video'))return;
 if(!['Enter',' ','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key))return;
 const inChoices=target?.closest?.('#choices');
 const otherControl=target?.closest?.('button,a');
 if(otherControl&&!inChoices&&otherControl!==$('speech')&&otherControl!==$('confirm-reply'))return;
 event.preventDefault();
 if(typing){finish();if(event.key==='Enter'||event.key===' ')return}
 if(!repliesReady())return;
 const buttons=Array.from($('choices').querySelectorAll('button'));
 if(!buttons.length)return;
 if(event.key==='Enter'||event.key===' '){if(needsConfirmation())confirmReply();else answerReply(selectedReply<0?0:selectedReply);return}
 const delta=['ArrowUp','ArrowLeft'].includes(event.key)?-1:1;
 const next=selectedReply<0?(delta>0?0:buttons.length-1):(selectedReply+delta+buttons.length)%buttons.length;
 if(needsConfirmation())selectReply(next);else selectedReply=next;
 buttons[next].focus();
}
$('confirm-reply').onclick=confirmReply;
document.addEventListener('keydown',handleGuideKey);
