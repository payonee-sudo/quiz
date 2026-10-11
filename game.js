/* 작은 탐정단 — 파일을 열면 인터넷 연결 없이도 게임이 동작합니다. */
const stages = [
  {
    title:'사라진 별 쿠키', icon:'🍪', place:'치이카와의 빵집', image:'assets/stage-1.png',
    intro:'갓 구운 별 쿠키가 쟁반에서 사라졌어요. 누가 가져갔다고 서두르지 말고, 남은 흔적부터 따라가 봐요.',
    caption:'빈 쟁반에서 오른쪽 선반까지 반짝이는 부스러기를 살펴보세요.',
    evidence:[
      ['쟁반','별 쿠키를 담았던 쟁반이 비었어요. 쟁반 가장자리에도 노란 별 모양 부스러기가 남았어요.'],
      ['부스러기','하얀 밀가루도 조금 있지만, 노란 별 모양 부스러기는 쟁반에서 오른쪽으로 이어져요.'],
      ['선반','부스러기 끝에는 파란 별무늬 깡통이 있어요. 빨간 상자와 초록 바구니 주변에는 부스러기가 없어요.']
    ],
    steps:[
      {label:'관찰',q:'쿠키를 찾을 때 가장 먼저 따라갈 흔적은?',sub:'쟁반에 남은 흔적과 바닥의 흔적을 비교하세요.',choices:['하얀 밀가루','노란 별 모양 부스러기','빨간 꽃무늬'],answer:1,note:'쟁반과 같은 노란 별 모양 부스러기를 찾았다.',hints:['쟁반 가장자리에 남은 모양을 보세요.','쟁반과 바닥에 모두 있는 것은 노란 별 모양 부스러기예요.'],wrong:'쟁반에 남은 것과 모양이 같은 흔적을 골라 보세요.',explain:'맞아요! 쟁반과 바닥에 같은 별 모양 부스러기가 있어요.'},
      {label:'연결',q:'그 흔적을 따라가면 이동 방향은?',sub:'부스러기 길의 시작과 끝을 연결하세요.',choices:['쟁반 → 왼쪽 문','쟁반 → 오른쪽 선반','오른쪽 선반 → 천장'],answer:1,note:'별 부스러기는 쟁반에서 오른쪽 선반으로 이어진다.',hints:['쟁반 옆에서부터 길을 따라가요.','별 부스러기는 오른쪽 선반 쪽으로 이어져요.'],wrong:'별 모양 부스러기의 시작과 끝을 다시 살펴보세요.',explain:'정답! 별 부스러기 길은 오른쪽 선반으로 이어져요.'},
      {label:'반박',q:'“빨간 상자에 있을 거야”라는 말에 맞지 않는 단서는?',sub:'세 물건 주변의 바닥을 비교해요.',choices:['빨간 상자 주변에는 별 부스러기가 없다','빨간 상자는 파란 깡통보다 크다','깡통에는 별무늬가 있다'],answer:0,note:'빨간 상자 주변에는 별 부스러기가 없다.',hints:['주장한 상자 주위에 흔적이 있는지 보세요.','빨간 상자 주변에는 별 부스러기가 없어요.'],wrong:'상자의 색이나 크기보다 부스러기 길을 생각해요.',explain:'좋아요! 빨간 상자 주변에 별 부스러기가 없어 그 주장에는 근거가 약해요.'},
      {label:'결론',q:'어디를 먼저 열고, 그 이유는 무엇인가요?',sub:'같은 모양의 흔적과 길의 끝을 함께 쓰세요.',choices:['빨간 상자 — 쟁반과 색이 비슷해서','파란 깡통 — 별 부스러기 길이 끝나서','초록 바구니 — 선반 아래에 있어서'],answer:1,note:'길 끝의 파란 깡통을 열어 별 쿠키를 확인했다.',hints:['별 부스러기가 어디에서 끝났는지 떠올려요.','오른쪽 선반의 파란 깡통에서 길이 끝나요.'],wrong:'앞에서 찾은 같은 모양의 부스러기가 어디까지 이어졌나요?',explain:'찾았다! 파란 깡통을 열어 보니 별 쿠키가 있었어요. 식히려고 옮겨 둔 거였네요.'}
    ],
    result:'부스러기를 따라가 파란 깡통에서 쿠키를 찾았어요. “누가 훔쳤다”는 추측보다 눈으로 본 단서를 믿은 멋진 추리였어요.'
  },
  {
    title:'젖은 리본의 비밀', icon:'🎀', place:'하치와레의 광장', image:'assets/stage-2.png',
    intro:'축제 리본 세 개 중 파란 리본이 유독 흠뻑 젖었어요. 무슨 일이 있었는지 시간과 물방울의 위치를 맞춰 봐요.',
    caption:'첫 번째 고리 위 지붕에서 물이 떨어져요.',
    evidence:[
      ['리본 상태','파란 줄무늬 리본이 유독 흠뻑 젖었고, 다른 두 리본은 처마 아래라 거의 마른 상태예요.'],
      ['지붕','처마 안쪽은 비를 피할 수 있지만, 파란 리본 위 지붕에 작은 틈이 있어요.'],
      ['시간 기록','3시 10분 리본을 걸었어요. 3시 20분 지붕에서 물이 새기 시작했고, 3시 25분 젖은 리본을 발견했어요.']
    ],
    steps:[
      {label:'위치',q:'파란 리본이 특히 젖은 이유로 가장 알맞은 단서는?',sub:'세 리본은 같은 처마 아래에 있어요.',choices:['파란 리본 위에만 지붕 틈이 있다','파란 리본이 가장 길다','빨간 리본은 점무늬다'],answer:0,note:'물은 파란 리본 위 지붕 틈에서 떨어진다.',hints:['세 리본의 위쪽을 비교해요.','파란 리본 위에만 물이 새는 틈이 있어요.'],wrong:'물방울이 시작되는 위치를 보세요.',explain:'맞아요! 물방울은 파란 리본 위의 지붕 틈에서 시작해요.'},
      {label:'시간',q:'리본을 건 때부터 물이 새기까지 몇 분인가요?',sub:'시간 기록의 처음 두 시각을 비교해요.',choices:['5분','10분','15분'],answer:1,note:'리본을 건 10분 뒤부터 지붕이 샜다.',hints:['3시 10분과 3시 20분을 비교해요.','20에서 10을 빼세요.'],wrong:'처음 두 시각의 분 차이를 계산해 보세요.',explain:'정답! 리본을 건 10분 뒤부터 물이 떨어졌어요.'},
      {label:'검증',q:'3시 15분에도 지붕 물 때문에 리본이 젖었을까요?',sub:'물이 새기 시작한 시각보다 이른지 늦은지 판단해요.',choices:['아니요, 아직 새기 전이에요','네, 건 직후부터 샜어요','네, 리본은 3시 25분에 걸었어요'],answer:0,note:'3시 15분은 누수가 시작되기 전이다.',hints:['3시 15분과 3시 20분 중 무엇이 먼저인가요?','지붕은 3시 20분부터 샜어요.'],wrong:'시간 기록에서 물이 새기 시작한 시각을 다시 확인해요.',explain:'좋아요! 3시 15분은 지붕이 새기 전이에요.'},
      {label:'결론',q:'위치와 시간에 모두 맞는 설명은?',sub:'3시 25분에 발견한 상태까지 설명해야 해요.',choices:['3시 10분부터 세 리본이 모두 비를 맞았다','3시 20분부터 지붕 틈의 물이 파란 리본에 떨어졌다','3시 25분 이후에 파란 리본이 젖었다'],answer:1,note:'3시 20분부터 샌 물이 파란 리본에 닿아 3시 25분에 젖어 있었다.',hints:['파란 리본 위에만 틈이 있고, 누수는 3시 20분에 시작됐어요.','발견은 3시 25분이므로 그 전에 젖어야 해요.'],wrong:'시각과 물방울 위치를 모두 만족하는 문장을 찾아요.',explain:'해결! 3시 20분부터 지붕 틈의 물이 파란 리본에 떨어졌어요.'}
    ],
    result:'파란 리본 위의 지붕 틈과 10분의 시간 차이를 연결했어요. 하치와레가 지붕을 고치고 리본도 말렸답니다.'
  },
  {
    title:'뒤바뀐 선물 상자', icon:'🎁', place:'우사기의 포장 방', image:'assets/stage-3.png',
    intro:'하치와레의 선물 상자를 찾으려고 해요. 이름표가 떨어졌지만 색, 크기, 무늬 세 가지를 기억해요.',
    caption:'네 상자의 색·크기·무늬가 모두 달라요.',
    evidence:[
      ['하치와레의 기억','“내 상자는 파란색이고, 큰 상자였어. 포장지는 줄무늬야!”'],
      ['상자 A·B','A: 작은 빨간 줄무늬 / B: 큰 빨간 점무늬'],
      ['상자 C·D','C: 큰 파란 줄무늬 / D: 작은 파란 점무늬']
    ],
    steps:[
      {label:'후보',q:'색 조건만 적용하면 남는 두 상자는?',sub:'다른 조건은 잠시 가리고 색부터 골라요.',choices:['A와 B','A와 C','C와 D'],answer:2,note:'파란 상자는 C와 D다.',hints:['빨간 상자를 지우세요.','C와 D가 파란색이에요.'],wrong:'하치와레가 기억한 파란색을 찾아보세요.',explain:'좋아요! 파란 상자 C와 D가 후보로 남아요.'},
      {label:'반박',q:'“B도 크니까 선물일 수 있어”라는 말에 어떻게 답할까요?',sub:'B를 다른 두 조건과도 비교해요.',choices:['B는 빨간 점무늬라 두 조건이 어긋나요','B는 너무 작아서 어긋나요','B는 파란 줄무늬라 모두 맞아요'],answer:0,note:'B는 크지만 색과 무늬가 다르다.',hints:['B는 큰 상자지만 무슨 색과 무늬인가요?','B는 빨간 점무늬이고, 기억은 파란 줄무늬예요.'],wrong:'크기가 맞아도 색과 무늬가 어긋날 수 있어요.',explain:'맞아요! B는 크지만 빨간 점무늬라 두 조건이 틀려요.'},
      {label:'소거',q:'D도 파란색인데, 왜 선물 후보에서 빠질까요?',sub:'D의 크기와 무늬를 함께 비교해요.',choices:['D는 빨간색이라서','D는 작고 점무늬라서','D는 크고 줄무늬라서'],answer:1,note:'D는 파랗지만 작고 점무늬다.',hints:['D는 파란색이지만 나머지 두 조건은?','D는 작고 점무늬예요.'],wrong:'색이 같아도 크기와 무늬가 모두 맞아야 해요.',explain:'정확해요! D는 파랗지만 작고 점무늬예요.'},
      {label:'결론',q:'세 조건을 모두 만족하는 상자는?',sub:'A, B, C, D를 끝까지 비교해요.',choices:['A: 작은 빨간 줄무늬','B: 큰 빨간 점무늬','C: 큰 파란 줄무늬','D: 작은 파란 점무늬'],answer:2,note:'파랑·큼·줄무늬가 모두 맞는 C가 선물이다.',hints:['앞에서 B와 D를 제외했어요. A도 파란색이 아니에요.','C만 파랑, 큼, 줄무늬를 모두 만족해요.'],wrong:'하나라도 다른 조건이 있는 상자는 제외해요.',explain:'찾았다! 세 조건이 모두 맞는 상자는 C예요.'}
    ],
    result:'색, 크기, 무늬를 하나씩 확인해 C 상자를 찾았어요. 우사기도 “우라라!” 하며 박수를 쳤어요.'
  },
  {
    title:'숲길의 그림 쪽지', icon:'🌿', place:'반짝 숲길', image:'assets/stage-4.png',
    intro:'친구들이 남긴 그림 쪽지를 발견했어요. 밤새 내린 비로 한 길이 막혔어요. 그림을 해독하고 안전한 길을 골라 보세요.',
    caption:'쪽지에는 달 → 잎 → 별이 그려져 있어요.',
    evidence:[
      ['쪽지 순서','🌙 달 → 🍃 잎 → ⭐ 별'],
      ['숲길 그림표','🌙 = 나무다리 / 🍃 = 연못 / ⭐ = 속 빈 나무'],
      ['안내판','연못 둘레 길은 물이 차서 지나갈 수 없어요. 막힌 장소의 그림만 건너뛰고 나머지 순서는 지켜요. 마지막 장소에 보물이 있어요.']
    ],
    steps:[
      {label:'해독',q:'쪽지의 첫 두 그림을 장소로 바꾸면?',sub:'달 다음에는 잎이 그려져 있어요.',choices:['나무다리 → 연못','연못 → 나무다리','나무다리 → 속 빈 나무'],answer:0,note:'달과 잎은 나무다리→연못을 뜻한다.',hints:['달과 잎을 그림표에서 차례로 찾아요.','달=나무다리, 잎=연못이에요.'],wrong:'두 그림의 뜻과 순서를 함께 살펴봐요.',explain:'맞아요! 원래 길은 나무다리 다음 연못이에요.'},
      {label:'장애물',q:'안내판 때문에 건너뛰어야 할 그림은?',sub:'막힌 장소가 무엇인지 먼저 알아내요.',choices:['달 🌙','잎 🍃','별 ⭐'],answer:1,note:'연못이 막혀 있으므로 잎을 건너뛴다.',hints:['연못 둘레 길이 막혔어요.','그림표에서 연못을 뜻하는 잎을 찾으세요.'],wrong:'막힌 연못을 뜻하는 그림을 찾아봐요.',explain:'정답! 연못은 잎 그림이므로 그 기호만 건너뛰어요.'},
      {label:'순서',q:'잎을 빼면 달 다음에 오는 그림은?',sub:'남은 그림의 순서를 바꾸지 마세요.',choices:['달 🌙','잎 🍃','별 ⭐'],answer:2,note:'잎을 빼면 달 다음은 별이다.',hints:['🌙 → 🍃 → ⭐에서 가운데 하나를 지워요.','달 다음에 별이 남아요.'],wrong:'가운데 잎만 지우고 쪽지를 다시 읽어 보세요.',explain:'좋아요! 남은 그림은 달 → 별이에요.'},
      {label:'결론',q:'안전한 경로와 보물의 위치가 맞는 것은?',sub:'남은 두 그림을 장소로 바꿔요.',choices:['나무다리 → 속 빈 나무','나무다리 → 연못','속 빈 나무 → 나무다리'],answer:0,note:'안전한 길은 나무다리→속 빈 나무다.',hints:['달 → 별을 그림표로 바꿔요.','달=나무다리, 별=속 빈 나무예요.'],wrong:'막힌 연못은 지나지 않고, 순서도 바꾸지 않아요.',explain:'발견! 나무다리에서 속 빈 나무로 가니 우정 배지가 있었어요.'}
    ],
    result:'연못 길이 막힌 걸 알아차리고 잎 그림을 건너뛰었어요. 달→나무다리, 별→속 빈 나무의 안전한 길로 우정 배지를 찾았답니다.'
  },
  {
    title:'꺼진 축제 전등', icon:'💡', place:'별빛 축제', image:'assets/stage-5.png',
    intro:'축제 전등 한쪽이 갑자기 꺼졌어요. 관찰, 시간, 모순 찾기를 모두 이용해 진짜 이유를 밝혀 봐요.',
    caption:'왼쪽 전등만 꺼졌고 오른쪽은 환하게 빛나요.',
    evidence:[
      ['전등과 전선','왼쪽 전구 네 개가 함께 꺼졌지만 오른쪽 전구는 켜져 있어요. 눈에 보이는 전선은 끊어지지 않았어요.'],
      ['시각 기록','7시에는 모두 켜져 있었어요. 7시 2분 바람에 종이 장식이 내려왔고, 7시 3분 왼쪽 불이 꺼졌어요.'],
      ['스위치','내려온 장식 뒤에 왼쪽 전등의 스위치가 있어요. 장식을 살짝 들춰 보니 스위치가 아래로 내려가 있었어요.']
    ],
    steps:[
      {label:'범위',q:'어느 쪽 전등을 켜는 장치부터 살펴볼까요?',sub:'꺼진 전구와 켜진 전구의 범위를 비교하세요.',choices:['축제 전체의 전원','왼쪽 전등의 장치','오른쪽 전등의 장치'],answer:1,note:'문제는 왼쪽 전등 쪽에만 나타났다.',hints:['오른쪽 전구는 계속 켜져 있어요.','왼쪽 전구 네 개가 함께 꺼졌어요.'],wrong:'불이 켜져 있는 쪽은 그대로 두고, 꺼진 쪽을 조사해요.',explain:'맞아요! 오른쪽은 켜져 있으니 왼쪽 전등의 장치를 먼저 살펴봐요.'},
      {label:'소거',q:'전구 네 개가 한꺼번에 꺼졌다면 먼저 무엇을 확인할까요?',sub:'전선은 눈에 보이게 끊어지지 않았어요.',choices:['왼쪽 스위치의 위치','전구 네 개의 색깔','오른쪽 전등의 그림자'],answer:0,note:'끊어진 전선보다 왼쪽 스위치를 먼저 확인한다.',hints:['전구 네 개에 공통으로 영향을 주는 장치를 찾아요.','장식 뒤에는 왼쪽 전등의 스위치가 있어요.'],wrong:'네 전구에 한 번에 영향을 줄 수 있는 장치를 생각해 봐요.',explain:'좋아요! 공통 장치인 왼쪽 스위치를 확인하는 게 알맞아요.'},
      {label:'시간',q:'시각 기록과 내려간 스위치를 함께 보면 가장 그럴듯한 설명은?',sub:'장식이 내려온 뒤 왼쪽 불이 꺼졌어요.',choices:['바람에 장식이 스위치를 눌렀다','오른쪽 전등이 왼쪽 전선을 끊었다','7시 이전부터 왼쪽 불이 꺼져 있었다'],answer:0,note:'바람에 내려온 장식이 스위치를 눌렀을 가능성이 크다.',hints:['7시 2분에 무엇이 내려왔나요?','그 바로 뒤 7시 3분에 불이 꺼졌고, 스위치는 아래였어요.'],wrong:'장식, 스위치, 꺼진 시각을 한 문장으로 연결해 봐요.',explain:'좋은 추리예요! 장식이 스위치를 눌렀을 가능성이 가장 커요.'},
      {label:'확인',q:'이 추리가 맞는지 확인할 방법은?',sub:'생각한 원인을 직접 시험해 봐요.',choices:['왼쪽 전구를 모두 버린다','장식을 치우고 스위치를 켜서 불이 돌아오는지 본다','오른쪽 전등을 끄고 그대로 둔다'],answer:1,note:'장식을 치우고 스위치를 켜니 왼쪽 불이 돌아왔다.',hints:['방금 추리한 원인은 스위치였어요.','장식을 치우고 스위치를 다시 켜 보세요.'],wrong:'원인으로 생각한 스위치를 시험해야 확인할 수 있어요.',explain:'확인 성공! 장식을 치우고 스위치를 켜자 왼쪽 불이 다시 반짝였어요.'}
    ],
    result:'전선은 멀쩡했고 장식이 내려온 뒤 왼쪽 불이 꺼졌어요. 장식을 치우고 스위치를 켜 보니 불이 돌아와 추리가 맞다는 걸 확인했답니다!'
  }
];

const storageKey='little-detectives-progress-v2';
const safeRead=()=>{try{return JSON.parse(localStorage.getItem(storageKey))||{}}catch{return {}}};
const saved=safeRead();
const state={stage:Number.isInteger(saved.stage)?Math.min(4,Math.max(0,saved.stage)):0,step:Number.isInteger(saved.step)?Math.min(3,Math.max(0,saved.step)):0,solved:!!saved.solved,completed:Array.isArray(saved.completed)?saved.completed.filter(n=>Number.isInteger(n)&&n>=0&&n<5):[],hints:saved.hints&&typeof saved.hints==='object'?saved.hints:{},openedEvidence:saved.openedEvidence&&typeof saved.openedEvidence==='object'?saved.openedEvidence:{},sound:false,motion:!window.matchMedia('(prefers-reduced-motion: reduce)').matches,scenePlaying:true,view:'home',selectedEvidence:null};
const app=document.getElementById('app');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const save=()=>{try{localStorage.setItem(storageKey,JSON.stringify({stage:state.stage,step:state.step,solved:state.solved,completed:state.completed,hints:state.hints,openedEvidence:state.openedEvidence}))}catch{}};
const hintKey=()=>`${state.stage}-${state.step}`;
let raf=0,canvas=null,ctx=null,frame=0,audioContext=null;

function updateToggles(){
  document.body.classList.toggle('motion-off',!state.motion);
  const sound=document.getElementById('soundButton'),motion=document.getElementById('motionButton');
  sound.textContent=state.sound?'♫ 소리 끄기':'♪ 소리 켜기'; sound.setAttribute('aria-pressed',String(state.sound));
  motion.textContent=state.motion?'✧ 움직임 끄기':'✧ 움직임 켜기'; motion.setAttribute('aria-pressed',String(!state.motion));
}
function chime(){
  if(!state.sound)return;
  try{audioContext ||= new (window.AudioContext||window.webkitAudioContext)();const now=audioContext.currentTime;[523,659,784].forEach((freq,i)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sine';osc.frequency.value=freq;gain.gain.setValueAtTime(.0001,now+i*.1);gain.gain.exponentialRampToValueAtTime(.06,now+i*.1+.02);gain.gain.exponentialRampToValueAtTime(.0001,now+i*.1+.23);osc.connect(gain).connect(audioContext.destination);osc.start(now+i*.1);osc.stop(now+i*.1+.25)})}catch{}
}
function stopMotion(){cancelAnimationFrame(raf);raf=0;canvas=null;ctx=null}
function scrollTop(){window.scrollTo({top:0,behavior:state.motion?'smooth':'instant'})}
function renderHome(){
  state.view='home';stopMotion();
  const hasProgress=state.completed.length>0||state.stage>0||state.step>0||state.solved;
  app.innerHTML=`<div class="container"><section class="hero" aria-labelledby="hero-title"><div class="hero-content"><div class="eyebrow">CHIikawa mystery adventure</div><h1 id="hero-title">작은 탐정단<br>반짝이는<br>다섯 가지 사건</h1><p>치이카와, 하치와레, 우사기와 함께 단서를 찾고 생각을 이어 보세요. 다섯 사건마다 네 번의 추리가 기다려요!</p><div class="hero-buttons"><button class="primary-button" id="startButton" type="button">${hasProgress?'이어 하기':'탐정 수첩 열기'} →</button></div><div class="hero-meta"><span class="pill">✦ 5개의 사건</span><span class="pill">✦ 사건마다 4단계</span><span class="pill">✦ 틀려도 다시 도전</span></div></div></section><div class="section-title"><div><div class="eyebrow" style="color:#a46797">CASE FILES</div><h2>사건 수첩</h2></div><p>차례대로 해결하면 다음 사건이 열려요.</p></div><section class="stage-grid" aria-label="다섯 사건 목록">${stages.map((s,i)=>{const done=state.completed.includes(i),open=done||i===0||state.completed.includes(i-1)||i===state.stage;return `<button type="button" class="stage-card ${done?'completed':''} ${open?'':'locked'}" data-stage="${i}" ${open?'':'disabled'} aria-label="${i+1}단계 ${esc(s.title)} ${done?'해결 완료':open?'시작 가능':'잠김'}"><img src="${s.image}" alt="" loading="lazy"><div class="stage-card-content"><span class="stage-index">CASE 0${i+1}</span><h3>${s.icon} ${esc(s.title)}</h3><p>${esc(s.place)}</p><span class="status-badge">${done?'✓ 해결 완료':open?'열어서 추리하기':'🔒 앞 사건을 해결하세요'}</span></div></button>`}).join('')}</section></div>`;
  document.getElementById('startButton').addEventListener('click',()=>openStage(state.completed.length===5?0:Math.min(state.completed.length,4),false));
  app.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',()=>openStage(Number(b.dataset.stage),true)));
  updateToggles();
}
function openStage(index,replay){
  const sameStage=index===state.stage,oldSolved=state.solved;
  state.stage=index;state.step=(replay||!sameStage||state.completed.includes(index))?0:state.step;state.solved=sameStage&&!replay&&!state.completed.includes(index)?oldSolved:false;state.selectedEvidence=null;state.scenePlaying=true;
  if(!replay)save();renderStage();scrollTop();
}
function renderStage(){
  state.view='stage';stopMotion();const s=stages[state.stage],q=s.steps[state.step],hintCount=state.hints[hintKey()]||0,opened=state.openedEvidence[state.stage]||[];
  app.innerHTML=`<div class="container stage-theme-${state.stage+1}"><div class="game-head"><button class="back-link" id="backHome" type="button">← 사건 수첩</button><div class="progress-text">사건 ${state.stage+1} / 5 · 추리 ${state.step+1} / 4</div></div><div class="progress-track" role="progressbar" aria-label="전체 추리 진행률" aria-valuemin="0" aria-valuemax="20" aria-valuenow="${state.stage*4+state.step+(state.solved?1:0)}"><div class="progress-fill" style="width:${((state.stage*4+state.step+(state.solved?1:0))/20)*100}%"></div></div><div class="case-layout"><section class="case-panel" aria-label="사건 현장과 단서"><div class="scene-wrap ${state.motion&&state.scenePlaying?'playing':''}"><img src="${s.image}" alt="${esc(s.place)}의 상황 그림: ${esc(s.caption)}"><video class="scene-video" muted loop playsinline poster="${s.image}" aria-label="${esc(s.place)}의 3초 모션 영상"><source src="assets/stage-${state.stage+1}.webm" type="video/webm"></video><canvas class="scene-canvas" aria-hidden="true"></canvas><div class="scene-caption">🎬 3초 모션 영상 · ${esc(s.caption)}</div></div><div class="scene-controls"><p>그림 속 물건을 보고 아래 단서 카드를 눌러 보세요.</p><button class="scene-toggle" id="sceneToggle" type="button">${state.scenePlaying?'⏸ 장면 일시정지':'▶ 장면 재생'}</button></div><div class="case-body"><div class="eyebrow">CASE 0${state.stage+1} · ${esc(s.place)}</div><h2>${s.icon} ${esc(s.title)}</h2><p class="case-story">${esc(s.intro)}</p><div class="evidence-title">🔎 현장 단서</div><div class="evidence-list">${s.evidence.map((e,i)=>`<button class="evidence-card ${opened.includes(i)?'opened':''}" type="button" data-evidence="${i}" aria-expanded="${opened.includes(i)}" aria-label="${esc(e[0])} 단서 자세히 보기"><strong>0${i+1} ${esc(e[0])}</strong><span>${opened.includes(i)?esc(e[1]):'눌러서 단서 읽기'}</span></button>`).join('')}</div><div class="evidence-detail" id="evidenceDetail">단서를 누르면 탐정의 관찰 메모가 여기에도 나타나요.</div></div></section><section class="detective-panel" aria-label="추리 수첩"><div class="notebook-head"><div class="eyebrow">DETECTIVE NOTE</div><div class="step-label">${esc(q.label)} · ${state.step+1}/4</div></div><div class="step-dots" aria-label="네 단계 진행 상황">${[0,1,2,3].map(i=>`<span class="step-dot ${i<state.step?'done':i===state.step?'current':''}" title="${i+1}단계"></span>`).join('')}</div><h2 class="question-title">${esc(q.q)}</h2><p class="question-intro">${esc(q.sub)}</p><div class="choice-list" role="group" aria-label="답 고르기">${q.choices.map((c,i)=>`<button class="choice ${state.solved&&i===q.answer?'correct':''}" type="button" data-choice="${i}" ${state.solved?'disabled':''}><span class="choice-letter">${String.fromCharCode(65+i)}</span><span>${esc(c)}</span></button>`).join('')}</div><div id="feedback" aria-live="assertive">${state.solved?`<div class="feedback correct">✓ ${esc(q.explain)}</div>`:''}</div><div class="question-actions"><button class="hint-button" id="hintButton" type="button" ${state.solved||hintCount>=2?'disabled':''}>💡 ${hintCount===0?'힌트 보기':hintCount===1?'힌트 한 번 더':'힌트 모두 봄'}</button></div><div id="hintBox">${hintCount?`<div class="hint-box">${hintCount===2?'힌트 2':'힌트 1'} · ${esc(q.hints[hintCount-1])}</div>`:''}</div>${state.solved?`<button class="primary-button next-button" id="nextButton" type="button">${state.step===3?'사건 해결하기':'다음 추리로'} →</button>`:''}<div class="notes"><h3>📓 모은 추리</h3><div class="note-list">${s.steps.slice(0,state.step+(state.solved?1:0)).map((item,i)=>`<div class="note-item"><span class="check">✓</span><span>${i+1}. ${esc(item.note)}</span></div>`).join('')||'<p class="note-empty">첫 단서를 맞히면 이곳에 기록돼요.</p>'}</div></div></section></div></div>`;
  document.getElementById('backHome').addEventListener('click',renderHome);
  app.querySelectorAll('[data-evidence]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.evidence),e=s.evidence[i],list=state.openedEvidence[state.stage] ||= [];if(!list.includes(i))list.push(i);b.classList.add('opened');b.setAttribute('aria-expanded','true');b.querySelector('span').textContent=e[1];document.getElementById('evidenceDetail').textContent=`🔎 ${e[0]}: ${e[1]}`;save()}));
  app.querySelectorAll('[data-choice]').forEach(b=>b.addEventListener('click',()=>answer(Number(b.dataset.choice))));
  document.getElementById('hintButton').addEventListener('click',showHint);
  document.getElementById('sceneToggle').addEventListener('click',()=>{state.scenePlaying=!state.scenePlaying;renderMotionButton();startMotion()});
  document.getElementById('nextButton')?.addEventListener('click',nextStep);
  updateToggles();startMotion();
}
function answer(index){
  if(state.solved)return;
  const q=stages[state.stage].steps[state.step],buttons=app.querySelectorAll('[data-choice]');
  buttons.forEach(b=>b.classList.remove('wrong'));
  if(index!==q.answer){buttons[index].classList.add('wrong');document.getElementById('feedback').innerHTML=`<div class="feedback wrong">다시 생각해 봐요. ${esc(q.wrong)}</div>`;return}
  state.solved=true;save();chime();buttons.forEach((b,i)=>{b.disabled=true;if(i===index)b.classList.add('correct')});
  document.getElementById('feedback').innerHTML=`<div class="feedback correct">✓ ${esc(q.explain)}</div>`;
  document.getElementById('hintButton').disabled=true;
  const next=document.createElement('button');next.type='button';next.className='primary-button next-button';next.id='nextButton';next.textContent=state.step===3?'사건 해결하기 →':'다음 추리로 →';next.addEventListener('click',nextStep);document.getElementById('hintBox').after(next);
  const notes=app.querySelector('.note-list');if(notes.querySelector('.note-empty'))notes.innerHTML='';notes.insertAdjacentHTML('beforeend',`<div class="note-item"><span class="check">✓</span><span>${state.step+1}. ${esc(q.note)}</span></div>`);
  const bar=app.querySelector('.progress-fill');bar.style.width=`${((state.stage*4+state.step+1)/20)*100}%`;app.querySelector('[role="progressbar"]').setAttribute('aria-valuenow',String(state.stage*4+state.step+1));
}
function showHint(){const key=hintKey(),n=Math.min(2,(state.hints[key]||0)+1);state.hints[key]=n;save();const q=stages[state.stage].steps[state.step];document.getElementById('hintBox').innerHTML=`<div class="hint-box">힌트 ${n} · ${esc(q.hints[n-1])}</div>`;const b=document.getElementById('hintButton');b.textContent=n===1?'💡 힌트 한 번 더':'💡 힌트 모두 봄';b.disabled=n>=2}
function nextStep(){if(!state.solved)return;if(state.step<3){state.step++;state.solved=false;save();renderStage();app.querySelector('.detective-panel').scrollIntoView({block:'start',behavior:state.motion?'smooth':'instant'})}else{if(!state.completed.includes(state.stage))state.completed.push(state.stage);save();renderResult();scrollTop()}}
function renderResult(){state.view='result';stopMotion();const s=stages[state.stage],last=state.stage===4;app.innerHTML=`<div class="container"><div class="game-head"><button class="back-link" id="backHome" type="button">← 사건 수첩</button><div class="progress-text">사건 ${state.stage+1} / 5 해결!</div></div><section class="result"><div class="result-image"><img src="${s.image}" alt="${esc(s.place)}에서 사건을 해결한 장면"></div><div class="result-content"><div class="eyebrow">CASE CLOSED ✦</div><h2>${s.icon} ${esc(s.title)} 해결!</h2><p>${esc(s.result)}</p><div class="result-summary">✦ 관찰하고, 단서를 연결하고, 섣불리 단정하지 않았어요. 멋진 탐정이에요!</div>${last?'<p class="all-done">🎉 다섯 사건, 스무 번의 추리 모두 완료!</p>':''}<div class="result-actions"><button class="primary-button" id="resultNext" type="button">${last?'사건 수첩 보기':'다음 사건으로'} →</button><button class="secondary-button" id="replayButton" type="button">이 사건 다시 풀기</button></div></div></section></div>`;document.getElementById('backHome').addEventListener('click',renderHome);document.getElementById('resultNext').addEventListener('click',()=>{if(last)renderHome();else openStage(state.stage+1,true)});document.getElementById('replayButton').addEventListener('click',()=>openStage(state.stage,true));updateToggles()}
function renderMotionButton(){const b=document.getElementById('sceneToggle');if(b){b.textContent=!state.motion?'✧ 움직임 꺼짐':state.scenePlaying?'⏸ 장면 일시정지':'▶ 장면 재생';b.disabled=!state.motion}app.querySelector('.scene-wrap')?.classList.toggle('playing',state.scenePlaying&&state.motion)}
function startMotion(){stopMotion();const video=app.querySelector('.scene-video');if(video){if(state.motion&&state.scenePlaying)video.play().catch(()=>{});else video.pause()}canvas=app.querySelector('.scene-canvas');if(!canvas||!state.motion||!state.scenePlaying)return;ctx=canvas.getContext('2d');if(!ctx)return;const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(rect.width*dpr);canvas.height=Math.round(rect.height*dpr);ctx.scale(dpr,dpr);frame=0;animate()}
function animate(){if(!canvas||!ctx||!state.motion||!state.scenePlaying)return;const w=canvas.clientWidth,h=canvas.clientHeight;ctx.clearRect(0,0,w,h);const t=frame/60,stage=state.stage;
  if(stage===1){ctx.strokeStyle='rgba(230,247,255,.72)';ctx.lineWidth=2;for(let i=0;i<22;i++){const x=((i*71+21)%w),y=((i*89+t*140)%h);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-4,y+13);ctx.stroke()}const y=((t*65)%(h*.6))+h*.08;drop(w*.22,y,5)}
  else if(stage===3){for(let i=0;i<16;i++){const x=((i*83+Math.sin(t+i)*13)%w),y=((i*53+Math.cos(t*.8+i)*19)%h);glow(x,y,2.3,'#faffbd')}}
  else if(stage===4){for(let i=0;i<9;i++){const x=(i*117+Math.sin(t+i)*16)%w,y=(i*49+Math.cos(t*.9+i)*9)%h;glow(x,y,3.5,i%2?'#fff8c3':'#ffe6a3')}if(Math.sin(t*2)>-.25){glow(w*.42,h*.62,12,'#fff2a3')}}
  else{for(let i=0;i<11;i++){const x=((i*97+Math.sin(t+i)*12)%w),y=((i*47+Math.cos(t+i)*10)%h);glow(x,y,i%3===0?4:2.5,i%2?'#fff9d0':'#fff4ff')}}
  frame++;raf=requestAnimationFrame(animate)}
function glow(x,y,r,color){ctx.save();ctx.globalAlpha=.3+.25*Math.sin(frame/24+x);ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=19;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();ctx.restore()}
function drop(x,y,r){ctx.save();ctx.fillStyle='#dff6ff';ctx.shadowColor='#bde8ff';ctx.shadowBlur=13;ctx.beginPath();ctx.ellipse(x,y,r/2,r,0,0,Math.PI*2);ctx.fill();ctx.restore()}
document.getElementById('brandButton').addEventListener('click',renderHome);
document.getElementById('soundButton').addEventListener('click',()=>{state.sound=!state.sound;updateToggles();if(state.sound)chime()});
document.getElementById('motionButton').addEventListener('click',()=>{state.motion=!state.motion;updateToggles();renderMotionButton();startMotion()});
window.addEventListener('resize',()=>{if(state.view==='stage')startMotion()});
renderHome();
