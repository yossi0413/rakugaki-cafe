const CHANNEL_GROUPS={
 compass:{name:'羅針盤',emoji:'🧭',channels:[['全体連絡','announce','📣'],['自己紹介','text'],['らくがきイベント告知','text'],['ロール','text'],['玄関','text']]},
 square:{name:'広場',emoji:'🏕️',channels:[['井戸端会議場','text'],['いまいます','text'],['外部イベント宣伝','text'],['なんでも募集','text'],['写真館','text']]},
 knowledge:{name:'知恵袋',emoji:'💭',channels:[['作品の卵','text'],['相談室','text'],['作品自慢','forum'],['ニュースシェア','text'],['先行研究','text'],['最新ニュース','text']]},
 meetings:{name:'会議',emoji:'🟣',channels:[],note:'このカテゴリのチャンネル一覧は省略しています。'},
 study:{name:'勉強会・イベント',emoji:'🎨',channels:[['勉強会','forum'],['勉強会#5','thread'],['イベント２@comone','text']]},
 partners:{name:'連携',emoji:'🤝',channels:[['アイデアピッチコンテスト','locked'],['ねのねプログラム','locked']]}
};
function showChannelMap(ref){const board=document.getElementById('discord-map'),stage=document.getElementById('stage');board.hidden=!ref;stage.classList.toggle('show-map',!!ref);stage.setAttribute('aria-label',ref?'Discordのカテゴリとチャンネルの説明画面':'小さなロボットが迎える喫茶店');board.replaceChildren();if(!ref)return;const group=CHANNEL_GROUPS[ref.group];if(!group)return;
 const heading=document.createElement('div');heading.className='map-heading';heading.textContent='Discordの見取り図';const tag=document.createElement('small');tag.textContent='説明用・操作はできません';heading.append(tag);board.append(heading);
 const nav=document.createElement('div');nav.className='map-category-trail';nav.textContent='らくがきコード › '+group.name;board.append(nav);
 const list=document.createElement('div');list.className='map-list';
 const title=document.createElement('div');title.className='map-group-title'+(ref.channels.length?'':' active-category');const arrow=document.createElement('span');arrow.className='map-chevron';arrow.textContent='⌄';const name=document.createElement('span');name.textContent=group.emoji+' '+group.name;title.append(arrow,name);if(!ref.channels.length){const badge=document.createElement('small');badge.textContent='← このカテゴリ';title.append(badge)}list.append(title);
 const ul=document.createElement('ul');ul.className='map-channels';for(const [label,type,emoji] of group.channels){const li=document.createElement('li');li.className='map-channel'+(type==='thread'?' thread':'');const active=ref.channels.includes(label);if(active){li.classList.add('active-channel');li.setAttribute('aria-current','true')}const icon=document.createElement('span');icon.className='channel-icon';icon.setAttribute('aria-hidden','true');icon.textContent=type==='forum'?'▤':type==='announce'?'◖':type==='thread'?'└':type==='locked'?'#⌑':'#';const text=document.createElement('span');text.className='channel-name';text.textContent=(emoji?emoji+' ':'')+label;li.append(icon,text);if(active){const badge=document.createElement('small');badge.className='map-target';badge.textContent='← 今の説明';li.append(badge)}ul.append(li)}list.append(ul);if(group.note){const note=document.createElement('p');note.className='map-note';note.textContent=group.note;list.append(note)}board.append(list);
 const foot=document.createElement('div');foot.className='map-key';foot.textContent=ref.channels.length?'枠の付いた行が、説明しているチャンネルです。':'カテゴリは、いくつかのチャンネルをまとめる見出しです。';board.append(foot);
}
