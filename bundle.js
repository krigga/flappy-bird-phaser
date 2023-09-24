/*! For license information please see bundle.js.LICENSE.txt */
    ${xi} * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;        
        -webkit-tap-highlight-color: transparent;
    }
    
    ${xi} img {
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }   
 
    ${xi} *:focus {
        outline: #08f auto 2px;
    }
    
    ${xi} li {
        list-style: none;
    }
    
    ${xi} button {
        outline: none;
    }
    
    body.${bi} {
        position: fixed; 
        overflow-y: scroll;
        right: 0;
        left: 0;
    }
    
    body.${wi} ${xi} *:focus {
        outline: none;
    }
`,{}));function Ci(t,e){return"#"===t[0]&&(t=function(t){"#"===t[0]&&(t=t.slice(1));const e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e].join(",")}(t)),`rgba(${t}, ${e})`}function Si(t){return t.toString()+"px"}class Ei extends m{constructor(...t){super(...t),Object.setPrototypeOf(this,Ei.prototype)}}function _i(t){!function(t,e="_self"){window.open(t,e,"noreferrer noopener")}(t,"_blank")}function Ai(t,e){let i;i="string"==typeof e?e:Ri()?e.twaReturnUrl||e.returnStrategy:"none";const r=function(t,e,i){const r=new URL(t);return r.searchParams.append("ret",i),r.toString()}(t,0,i);if(!U(t))return r;const n=r.slice(r.lastIndexOf("&")+1);return r.slice(0,r.lastIndexOf("&"))+"-"+N(n)}function Pi(){if("undefined"==typeof localStorage)throw new Ei("window.localStorage is undefined. localStorage is required for TonConnectUI")}function Mi(){if("undefined"!=typeof window)return window}function ki(t,e){const i=new URL(t);i.searchParams.append("startattach","tonconnect"),_i(Ai(i.toString(),e))}function Ri(){var t;return!!(null==(t=Mi())?void 0:t.TelegramWebviewProxy)}class Oi{constructor(){Et(this,"localStorage"),Et(this,"storageKey","ton-connect-ui_wallet-info"),Pi(),this.localStorage=localStorage}setWalletInfo(t){this.localStorage.setItem(this.storageKey,JSON.stringify(t))}getWalletInfo(){const t=this.localStorage.getItem(this.storageKey);return t?JSON.parse(t):null}removeWalletInfo(){this.localStorage.removeItem(this.storageKey)}}class Li{constructor(){Et(this,"localStorage"),Et(this,"storageKey","ton-connect-ui_preferred-wallet"),Pi(),this.localStorage=localStorage}setPreferredWalletAppName(t){this.localStorage.setItem(this.storageKey,t)}getPreferredWalletAppName(){return this.localStorage.getItem(this.storageKey)||void 0}}class Ii{constructor(){Et(this,"localStorage"),Et(this,"storageKey","ton-connect-ui_last-selected-wallet-info"),Pi(),this.localStorage=localStorage}setLastSelectedWalletInfo(t){this.localStorage.setItem(this.storageKey,JSON.stringify(t))}getLastSelectedWalletInfo(){const t=this.localStorage.getItem(this.storageKey);return t?JSON.parse(t):null}removeLastSelectedWalletInfo(){this.localStorage.removeItem(this.storageKey)}}const[Bi,Di]=Vt(!1);let Fi="undefined"!=typeof window?new Ii:void 0;const[Ui,Ni]=Vt((null==Fi?void 0:Fi.getLastSelectedWalletInfo())||null),zi=t=>{Fi||(Fi=new Ii),t?Fi.setLastSelectedWalletInfo(t):Fi.removeLastSelectedWalletInfo(),Ni(t)},[ji,Yi]=Vt(null),Vi={en:Xi({common:{close:"Close",openWallet:"Open wallet",copyLink:"Copy Link",linkCopied:"Link Copied",copied:"Copied",yourWallet:"Your Wallet",retry:"Retry",get:"GET",mobile:"Mobile",browserExtension:"Browser Extension",desktop:"Desktop"},button:{connectWallet:"Connect Wallet",dropdown:{copy:"Copy address",copied:"Address copied!",disconnect:"Disconnect"}},notifications:{confirm:{header:"Open {{ name }} to confirm the transaction."},transactionSent:{header:"Transaction sent",text:"Your transaction will be processed in a few seconds."},transactionCanceled:{header:"Transaction canceled",text:"There will be no changes to your account."}},walletItem:{walletOn:"Wallet On",recent:"Recent",installed:"Installed",popular:"Popular"},walletModal:{loading:"Loading wallets",wallets:"Wallets",mobileUniversalModal:{connectYourWallet:"Connect your wallet",openWalletOnTelegramOrSelect:"Open Wallet on Telegram or select your wallet to connect",openWalletOnTelegram:"Open Wallet on Telegram",openLink:"Open Link",scan:"Scan with your mobile wallet"},desktopUniversalModal:{connectYourWallet:"Connect your wallet",scan:"Scan with your mobile wallet",availableWallets:"Available wallets"},mobileConnectionModal:{showQR:"Show QR Code",scanQR:"Scan the QR code below with your phone’s or {{ name }}’s camera",continueIn:"Continue in {{ name }}…",connectionDeclined:"Connection declined"},desktopConnectionModal:{scanQR:"Scan the QR code below with your phone’s or {{ name }}’s camera",continueInExtension:"Continue in {{ name }} browser extension…",dontHaveExtension:"Seems you don't have installed {{ name }} browser extension",getWallet:"Get {{ name }}",continueOnDesktop:"Continue in {{ name }} on desktop…",openWalletOnTelegram:"Open Wallet on Telegram on desktop",connectionDeclined:"Connection declined"},infoModal:{whatIsAWallet:"What is a wallet",secureDigitalAssets:"Secure digital assets storage",walletProtects:"A wallet protects and manages your digital assets including TON, tokens and collectables.",controlIdentity:"Control your Web3 identity",manageIdentity:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem.",effortlessCryptoTransactions:"Effortless crypto transactions",easilySend:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications.",getAWallet:"Get a Wallet"}},actionModal:{confirmTransaction:{header:"Confirm the transaction in {{ name }}",text:"It will only take a moment."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}}),ru:Xi({common:{close:"Закрыть",openWallet:"Открыть кошелёк",copyLink:"Копировать ссылку",linkCopied:"Ссылка скопирована",copied:"Ссылка скопирована",yourWallet:"Ваш кошелёк",retry:"Повторить",get:"Скачать",mobile:"Мобильный",browserExtension:"Расширение",desktop:"Десктоп"},button:{connectWallet:"Подключить кошелёк",dropdown:{copy:"Скопировать адрес",copied:"Адрес скопирован!",disconnect:"Отключить кошелёк"}},notifications:{confirm:{header:"Откройте {{ name }}, чтобы подтвердить транзакцию."},transactionSent:{header:"Транзакция отправлена",text:"Ваша транзакция будет обработана через несколько секунд."},transactionCanceled:{header:"Транзакция отменена",text:"Состояние вашего счёта не изменится."}},walletItem:{walletOn:"Wallet в",recent:"Недавний",installed:"Установлен",popular:"Популярен"},walletModal:{loading:"Кошельки загружаются",wallets:"Кошельки",mobileUniversalModal:{connectYourWallet:"Подключите кошелёк",openWalletOnTelegramOrSelect:"Подключите Wallet в Telegram или выберете кошелёк для подключения",openWalletOnTelegram:"Открыть Wallet в Telegram",openLink:"Открыть ссылку",scan:"Отсканируйте камерой вашего телефона"},desktopUniversalModal:{connectYourWallet:"Подключите кошелёк",scan:"Отсканируйте QR-код камерой вашего телефона",availableWallets:"Доступные кошельки"},mobileConnectionModal:{showQR:"Показать QR-код",scanQR:"Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",continueIn:"Продолжите в {{ name }}…",connectionDeclined:"Подключение отклонено"},desktopConnectionModal:{scanQR:"Отсканируйте QR-код ниже камерой в приложении {{ name }}, или камерой телефона",continueInExtension:"Откройте браузерное расширение {{ name }}",dontHaveExtension:"Похоже, у вас не установлено браузерное расширение {{ name }}",getWallet:"Скачать {{ name }}",continueOnDesktop:"Откройте {{ name }} на компьютере…",openWalletOnTelegram:"Открыть Wallet в Telegram",connectionDeclined:"Подключение отклонено"},infoModal:{whatIsAWallet:"Что такое кошелёк?",secureDigitalAssets:"Надежное хранилище цифровых активов",walletProtects:"Кошелёк защищает ваши цифровые активы, включая TON, токены и предметы коллекционирования, и управляет ими.",controlIdentity:"Контроль своей личности Web3",manageIdentity:"Управляйте своей цифровой идентификацией и с легкостью получайте доступ к децентрализованным приложениям. Сохраняйте контроль над своими данными и безопасно участвуйте в экосистеме блокчейна.",effortlessCryptoTransactions:"Простые криптотранзакции",easilySend:"Легко отправляйте, получайте и отслеживайте свои криптовалюты. Оптимизируйте свои операции с помощью децентрализованных приложений.",getAWallet:"Скачать кошелёк"}},actionModal:{confirmTransaction:{header:"Подтвердите действие в {{ name }}",text:"Это займет пару секунд."},transactionSent:"$notifications.transactionSent",transactionCanceled:"$notifications.transactionCanceled"}})};function Xi(t){const e=i=>{Object.entries(i).forEach((([r,n])=>{if("object"==typeof n&&n)return e(n);if("string"==typeof n){if("$"===n[0]){const e=n.slice(1).split(".");let s=t;e.forEach((t=>{if(!(t in s))throw new Error(`Cannot parse translations: there is no property ${t} in translation`);s=s[t]})),i[r]=s}"\\$"===n.slice(0,2)&&(i[r]=n.slice(1))}}))};return e(t),t}const Wi=Qt(),Hi=Symbol("store-raw"),Gi=Symbol("store-node"),Ki=Symbol("store-name");function Zi(t,e){let i=t[Pt];if(!i&&(Object.defineProperty(t,Pt,{value:i=new Proxy(t,ir)}),!Array.isArray(t))){const e=Object.keys(t),r=Object.getOwnPropertyDescriptors(t);for(let n=0,s=e.length;n<s;n++){const s=e[n];r[s].get&&Object.defineProperty(t,s,{enumerable:r[s].enumerable,get:r[s].get.bind(i)})}}return i}function qi(t){let e;return null!=t&&"object"==typeof t&&(t[Pt]||!(e=Object.getPrototypeOf(t))||e===Object.prototype||Array.isArray(t))}function $i(t,e=new Set){let i,r,n,s;if(i=null!=t&&t[Hi])return i;if(!qi(t)||e.has(t))return t;if(Array.isArray(t)){Object.isFrozen(t)?t=t.slice(0):e.add(t);for(let i=0,s=t.length;i<s;i++)n=t[i],(r=$i(n,e))!==n&&(t[i]=r)}else{Object.isFrozen(t)?t=Object.assign({},t):e.add(t);const i=Object.keys(t),o=Object.getOwnPropertyDescriptors(t);for(let a=0,l=i.length;a<l;a++)s=i[a],o[s].get||(n=t[s],(r=$i(n,e))!==n&&(t[s]=r))}return t}function Qi(t){let e=t[Gi];return e||Object.defineProperty(t,Gi,{value:e={}}),e}function Ji(t,e,i){return t[e]||(t[e]=er(i))}function tr(t){if($t()){const e=Qi(t);(e._||(e._=er()))()}}function er(t){const[e,i]=Vt(t,{equals:!1,internal:!0});return e.$=i,e}const ir={get(t,e,i){if(e===Hi)return t;if(e===Pt)return i;if(e===Mt)return tr(t),i;const r=Qi(t),n=r.hasOwnProperty(e);let s=n?r[e]():t[e];if(e===Gi||"__proto__"===e)return s;if(!n){const i=Object.getOwnPropertyDescriptor(t,e);!$t()||"function"==typeof s&&!t.hasOwnProperty(e)||i&&i.get||(s=Ji(r,e,s)())}return qi(s)?Zi(s):s},has(t,e){return e===Hi||e===Pt||e===Mt||e===Gi||"__proto__"===e||(this.get(t,e,t),e in t)},set:()=>!0,deleteProperty:()=>!0,ownKeys:function(t){return tr(t),Reflect.ownKeys(t)},getOwnPropertyDescriptor:function(t,e){const i=Reflect.getOwnPropertyDescriptor(t,e);return i&&!i.get&&i.configurable&&e!==Pt&&e!==Gi&&e!==Ki?(delete i.value,delete i.writable,i.get=()=>t[Pt][e],i):i}};function rr(t,e,i,r=!1){if(!r&&t[e]===i)return;const n=t[e],s=t.length;void 0===i?delete t[e]:t[e]=i;let o,a=Qi(t);(o=Ji(a,e,n))&&o.$((()=>i)),Array.isArray(t)&&t.length!==s&&(o=Ji(a,"length",s))&&o.$(t.length),(o=a._)&&o.$()}function nr(t,e){const i=Object.keys(e);for(let r=0;r<i.length;r+=1){const n=i[r];rr(t,n,e[n])}}function sr(t,e,i=[]){let r,n=t;if(e.length>1){r=e.shift();const s=typeof r,o=Array.isArray(t);if(Array.isArray(r)){for(let n=0;n<r.length;n++)sr(t,[r[n]].concat(e),i);return}if(o&&"function"===s){for(let n=0;n<t.length;n++)r(t[n],n)&&sr(t,[n].concat(e),i);return}if(o&&"object"===s){const{from:n=0,to:s=t.length-1,by:o=1}=r;for(let r=n;r<=s;r+=o)sr(t,[r].concat(e),i);return}if(e.length>1)return void sr(t[r],e,[r].concat(i));n=t[r],i=[r].concat(i)}let s=e[0];"function"==typeof s&&(s=s(n,i),s===n)||void 0===r&&null==s||(s=$i(s),void 0===r||qi(n)&&qi(s)&&!Array.isArray(s)?nr(n,s):rr(t,r,s))}function or(...[t,e]){const i=$i(t||{}),r=Array.isArray(i);return[Zi(i),function(...t){Kt((()=>{r&&1===t.length?function(t,e){if("function"==typeof e&&(e=e(t)),e=$i(e),Array.isArray(e)){if(t===e)return;let i=0,r=e.length;for(;i<r;i++){const r=e[i];t[i]!==r&&rr(t,i,r)}rr(t,"length",r)}else nr(t,e)}(i,t[0]):sr(i,t)}))}]}const ar={constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#0098EA",telegramButton:"#0098EA",icon:{primary:"#0F0F0F",secondary:"#7A8999",tertiary:"#C1CAD2",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#FFFFFF",secondary:"#F1F3F5",segment:"#FFFFFF",tint:"#F1F3F5",qr:"#F1F3F5"},text:{primary:"#0F0F0F",secondary:"#6A7785"}};function lr(t){return"[object Object]"===Object.prototype.toString.call(t)}function hr(t){var e,i;return!1!==lr(t)&&(void 0===(e=t.constructor)||!1!==lr(i=e.prototype)&&!1!==i.hasOwnProperty("isPrototypeOf"))}function ur(t,e){return t?ft()(e,t,{arrayMerge:(t,e,i)=>e,isMergeableObject:hr}):e}const[cr,dr]=or({theme:ti.LIGHT,colors:ar,borderRadius:"m"}),fr={[ti.LIGHT]:ar,[ti.DARK]:{constant:{black:"#000000",white:"#FFFFFF"},connectButton:{background:"#0098EA",foreground:"#FFFFFF"},accent:"#E5E5EA",telegramButton:"#31A6F5",icon:{primary:"#E5E5EA",secondary:"#909099",tertiary:"#434347",success:"#29CC6A",error:"#F5A73B"},background:{primary:"#121214",secondary:"#18181A",segment:"#262629",tint:"#222224",qr:"#FFFFFF"},text:{primary:"#E5E5EA",secondary:"#7D7D85"}}},pr={[ti.LIGHT]:void 0,[ti.DARK]:void 0};function gr(t,e){e&&(pr[ti.DARK]=ur(e[ti.DARK],pr[ti.DARK]),pr[ti.LIGHT]=ur(e[ti.LIGHT],pr[ti.LIGHT])),dr({theme:t,colors:ur(pr[t],fr[t])})}const mr=vi.div`
    background-color: ${t=>t.theme.colors.background.secondary};
`,vr=t=>{let e;const[i,r]=Vt(null);return Ht((()=>{const e=new window.Image;return e.src=t.src,e.alt=t.alt||"",e.setAttribute("draggable","false"),t.class&&e.classList.add(t.class),e.complete?r(e):(e.addEventListener("load",(()=>r(e))),()=>e.removeEventListener("load",(()=>r(e))))})),[xe(_e,{get when(){return i()},get children(){return i()}}),xe(_e,{get when(){return!i()},get children(){return xe(mr,{get class(){return t.class},ref(t){"function"==typeof e?e(t):e=t}})}})]},yr=440,xr=1020;function br(t){const e=Mi();if(!e)return"desktop"===t;const i=e.innerWidth;switch(t){case"desktop":return i>xr;case"tablet":return i>yr;default:return i<=yr}}function wr(t){switch(t){case"mobile":return"@media (max-width: 440px)";case"tablet":return"@media (max-width: 1020px) (min-width: 440px)";default:return"@media (min-width: 1020px)"}}const Tr="@media (hover: none)",Cr="@media not all and (hover: none)",Sr={m:"100vh",s:"8px",none:"0"},Er={s:.02,m:.04},_r=vi.button`
    display: ${t=>t.leftIcon||t.rightIcon?"flex":"inline-block"};
    gap: ${t=>t.leftIcon||t.rightIcon?"6px":"unset"};
    align-items: ${t=>t.leftIcon||t.rightIcon?"center":"unset"};
    justify-content: ${t=>t.leftIcon||t.rightIcon?"space-between":"unset"};
    background-color: ${t=>"flat"===t.appearance?"transparent":"secondary"===t.appearance?t.theme.colors.background.tint:Ci(t.theme.colors.accent,.12)};
    color: ${t=>"secondary"===t.appearance?t.theme.colors.text.primary:t.theme.colors.accent};

    padding: ${t=>"flat"===t.appearance?"0":"9px 16px"};
    padding-left: ${t=>t.leftIcon&&"flat"!==t.appearance?"12px":"16px"};
    padding-right: ${t=>t.rightIcon&&"flat"!==t.appearance?"12px":"16px"};
    border: none;
    border-radius: ${t=>Sr[t.theme.borderRadius]};
    cursor: ${t=>t.disabled?"not-allowed":"pointer"};

    font-size: 14px;
    font-weight: 590;
    line-height: 18px;

    transition: transform 0.125s ease-in-out;

    ${Cr} {
        &:hover {
            transform: ${t=>t.disabled?"unset":`scale(${1+Er[t.scale]})`};
        }
    }

    &:active {
        transform: ${t=>t.disabled?"unset":`scale(${1-Er[t.scale]})`};
    }

    ${Tr} {
        &:active {
            transform: ${t=>t.disabled?"unset":`scale(${1-2*Er[t.scale]})`};
        }
    }
`;function Ar(t){const e=Zt((()=>Object.keys(t).filter((t=>t.startsWith("data-"))))),[i]=Se(t,e);return i}const Pr=t=>{const e=Ar(t);return xe(_r,Ce({get appearance(){return t.appearance||"primary"},get class(){return t.class},onClick:e=>{var i;return null==(i=t.onClick)?void 0:i.call(t,e)},onMouseEnter:e=>{var i;return null==(i=t.onMouseEnter)?void 0:i.call(t,e)},onMouseLeave:e=>{var i;return null==(i=t.onMouseLeave)?void 0:i.call(t,e)},ref(e){const i=t.ref;"function"==typeof i?i(e):t.ref=e},get disabled(){return t.disabled},get scale(){return t.scale||"m"},get leftIcon(){return!!t.leftIcon},get rightIcon(){return!!t.rightIcon},"data-tc-button":"true"},e,{get children(){return[Gt((()=>t.leftIcon)),Gt((()=>t.children)),Gt((()=>t.rightIcon))]}}))};function Mr(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}const kr=t=>{let e,i=!0;const[r,n]=Vt(),[s,o]=Vt(),a=te((()=>t.children)),{onBeforeEnter:l,onEnter:h,onAfterEnter:u,onBeforeExit:c,onExit:d,onAfterExit:f}=t,p=Gt((()=>{const e=t.name||"s";return{enterActiveClass:t.enterActiveClass||e+"-enter-active",enterClass:t.enterClass||e+"-enter",enterToClass:t.enterToClass||e+"-enter-to",exitActiveClass:t.exitActiveClass||e+"-exit-active",exitClass:t.exitClass||e+"-exit",exitToClass:t.exitToClass||e+"-exit-to"}}));function g(e,a){if(!i||t.appear){let i=function(l){!e||l&&l.target!==e||(e.removeEventListener("transitionend",i),e.removeEventListener("animationend",i),e.classList.remove(...d),e.classList.remove(...f),Kt((()=>{r()!==e&&n(e),s()===e&&o(void 0)})),u&&u(e),"inout"===t.mode&&m(e,a))};const c=p().enterClass.split(" "),d=p().enterActiveClass.split(" "),f=p().enterToClass.split(" ");l&&l(e),e.classList.add(...c),e.classList.add(...d),Mr((()=>{e.classList.remove(...c),e.classList.add(...f),h&&h(e,(()=>i())),(!h||h.length<2)&&(e.addEventListener("transitionend",i),e.addEventListener("animationend",i))}))}a&&!t.mode?o(e):n(e)}function m(e,i){const s=p().exitClass.split(" "),o=p().exitActiveClass.split(" "),a=p().exitToClass.split(" ");if(!i.parentNode)return l();function l(s){s&&s.target!==i||(i.removeEventListener("transitionend",l),i.removeEventListener("animationend",l),i.classList.remove(...o),i.classList.remove(...a),r()===i&&n(void 0),f&&f(i),"outin"===t.mode&&g(e,i))}c&&c(i),i.classList.add(...s),i.classList.add(...o),Mr((()=>{i.classList.remove(...s),i.classList.add(...a)})),d&&d(i,(()=>l())),(!d||d.length<2)&&(i.addEventListener("transitionend",l),i.addEventListener("animationend",l))}return Xt((r=>{for(e=a();"function"==typeof e;)e=e();return Zt((()=>(e&&e!==r&&("outin"!==t.mode?g(e,r):i&&n(e)),r&&r!==e&&"inout"!==t.mode&&m(e,r),i=!1,e)))})),[r,s]};function Rr(t){const{top:e,bottom:i,left:r,right:n,width:s,height:o}=t.getBoundingClientRect(),a=t.parentNode.getBoundingClientRect();return{top:e-a.top,bottom:i,left:r-a.left,right:n,width:s,height:o}}const Or=t=>{const e=te((()=>t.children)),i=Gt((()=>{const e=t.name||"s";return{enterActiveClass:t.enterActiveClass||e+"-enter-active",enterClass:t.enterClass||e+"-enter",enterToClass:t.enterToClass||e+"-enter-to",exitActiveClass:t.exitActiveClass||e+"-exit-active",exitClass:t.exitClass||e+"-exit",exitToClass:t.exitToClass||e+"-exit-to",moveClass:t.moveClass||e+"-move"}})),{onBeforeEnter:r,onEnter:n,onAfterEnter:s,onBeforeExit:o,onExit:a,onAfterExit:l}=t,[h,u]=Vt();let c=[],d=!0;return Xt((()=>{const t=e(),h=[...t],f=new Set(t),p=new Set(c),g=i().enterClass.split(" "),m=i().enterActiveClass.split(" "),v=i().enterToClass.split(" "),y=i().exitClass.split(" "),x=i().exitActiveClass.split(" "),b=i().exitToClass.split(" ");for(let e=0;e<t.length;e++){const i=t[e];if(!d&&!p.has(i)){let t=function(e){!i||e&&e.target!==i||(i.removeEventListener("transitionend",t),i.removeEventListener("animationend",t),i.classList.remove(...m),i.classList.remove(...v),s&&s(i))};r&&r(i),i.classList.add(...g),i.classList.add(...m),Mr((()=>{i.classList.remove(...g),i.classList.add(...v),n&&n(i,(()=>t())),(!n||n.length<2)&&(i.addEventListener("transitionend",t),i.addEventListener("animationend",t))}))}}for(let t=0;t<c.length;t++){const e=c[t];if(!f.has(e)&&e.parentNode){let i=function(t){t&&t.target!==e||(e.removeEventListener("transitionend",i),e.removeEventListener("animationend",i),e.classList.remove(...x),e.classList.remove(...b),l&&l(e),c=c.filter((t=>t!==e)),u(c))};h.splice(t,0,e),o&&o(e),e.classList.add(...y),e.classList.add(...x),Mr((()=>{e.classList.remove(...y),e.classList.add(...b)})),a&&a(e,(()=>i())),(!a||a.length<2)&&(e.addEventListener("transitionend",i),e.addEventListener("animationend",i))}}c=h,u(h)})),Ht((t=>{const e=h();return e.forEach((e=>{let i;(i=t.get(e))?i.new&&(i.new=!1,i.newPos=Rr(e)):t.set(e,i={pos:Rr(e),new:!d}),i.new&&e.addEventListener("transitionend",(()=>{i.new=!1,e.parentNode&&(i.newPos=Rr(e))}),{once:!0}),i.newPos&&(i.pos=i.newPos),i.newPos=Rr(e)})),d?(d=!1,t):(e.forEach((e=>{const i=t.get(e),r=i.pos,n=i.newPos,s=r.left-n.left,o=r.top-n.top;if(s||o){i.moved=!0;const t=e.style;t.transform=`translate(${s}px,${o}px)`,t.transitionDuration="0s"}})),document.body.offsetHeight,e.forEach((e=>{const r=t.get(e);if(r.moved){let t=function(i){i&&i.target!==e||!e.parentNode||i&&!/transform$/.test(i.propertyName)||(e.removeEventListener("transitionend",t),e.classList.remove(...s))};r.moved=!1;const n=e.style,s=i().moveClass.split(" ");e.classList.add(...s),n.transform=n.transitionDuration="",e.addEventListener("transitionend",t)}})),t)}),new Map),h},Lr=Fe('<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2122 14.3407C10.5384 14.0854 10.5959 13.614 10.3406 13.2878L6.20237 8.00003L10.3406 2.71227C10.5959 2.38607 10.5384 1.91469 10.2122 1.6594C9.88604 1.40412 9.41465 1.46161 9.15937 1.7878L4.65937 7.5378C4.44688 7.80932 4.44688 8.19074 4.65937 8.46226L9.15937 14.2123C9.41465 14.5385 9.88604 14.5959 10.2122 14.3407Z"></path></svg>',0,!0),Ir={left:0,top:90,right:180,bottom:270},Br=t=>{const e=gi();return xe(vi("svg")`
        transform: rotate(${t=>Ir[t.svgDirection]}deg);
        transition: transform 0.1s ease-in-out;
    `,{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",get svgDirection(){return t.direction||"left"},get children(){const i=Lr.cloneNode(!0);return Wt((()=>Ue(i,"fill",t.fill||e.colors.icon.secondary))),i}})},Dr=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z"></path></svg>'),Fr=t=>{const e=gi();return(()=>{const i=Dr.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.icon.secondary))),i})()},Ur=vi.button`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: ${t=>t.theme.colors.background.tint};
    border: none;
    cursor: pointer;

    transition: transform 0.125s ease-in-out;

    ${Cr} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Tr} {
        &:active {
            transform: scale(0.92);
        }
    }
`,Nr=t=>{const e=Ar(t),i=()=>t.icon||"close";return xe(Ur,Ce({get class(){return t.class},onClick:()=>t.onClick(),"data-tc-icon-button":"true"},e,{get children(){return[xe(_e,{get when(){return!!t.children},get children(){return t.children}}),xe(_e,{get when(){return!t.children},get children(){return xe(Ae,{get children(){return[xe(Pe,{get when(){return"close"===i()},get children(){return xe(Fr,{get fill(){return t.fill}})}}),xe(Pe,{get when(){return"arrow"===i()},get children(){return xe(Br,{get fill(){return t.fill}})}}),xe(Pe,{get when(){return"question"===i()},get children(){return xe(os,{get fill(){return t.fill}})}}),xe(Pe,{get when(){return"string"!=typeof i()},get children(){return i()}})]}})}})]}}))},zr={m:"24px",s:"16px",none:"0"},jr=vi.div`
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 0;
    overflow-y: auto;

    ${wr("mobile")} {
        padding-bottom: 0;
    }
`,Yr=ci`
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);
    width: fit-content;
    margin: auto;

    ${wr("mobile")} {
        width: 100%;
        height: fit-content;
        margin: auto 0 0 0;
    }
`,Vr=vi.div`
    position: relative;
    min-height: 100px;
    width: 416px;
    padding: 44px 56px 24px;

    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);

    background-color: ${t=>t.theme.colors.background.primary};
    border-radius: ${t=>zr[t.theme.borderRadius]};

    ${wr("mobile")} {
        width: 100%;
    }
`,Xr=vi(Nr)`
    position: absolute;
    right: 16px;
    top: 16px;
`,Wr=vi.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 16px 18px;
    border-radius: 0 0 ${t=>zr[t.theme.borderRadius]}
        ${t=>zr[t.theme.borderRadius]};
`,Hr=vi(Nr)`
    background-color: ${t=>Ci(t.theme.colors.icon.secondary,.12)};
`,Gr=Fe("<div></div>"),Kr=function(t,e){const i=i=>{var r;return!t.contains(i.target)&&(null==(r=e())?void 0:r())};document.body.addEventListener("click",i),qt((()=>document.body.removeEventListener("click",i)))},Zr=function(t,e){const i=t=>{var i,r;"Escape"===t.key&&(null==(i=document.activeElement)||i.blur(),null==(r=e())||r())};document.body.addEventListener("keydown",i),qt((()=>document.body.removeEventListener("keydown",i)))},qr=t=>{const e=gi(),i=Ar(t);return Ht((()=>{t.opened?document.documentElement.scrollHeight!==document.documentElement.clientHeight&&(document.body.style.top=Si(-document.documentElement.scrollTop),document.body.classList.add(bi)):(document.body.classList.remove(bi),document.documentElement.scrollTo({top:-parseFloat(getComputedStyle(document.body).top)}),document.body.style.top="auto")})),xe(kr,{onBeforeEnter:t=>{const e=br("mobile")?200:100;t.animate([{opacity:0},{opacity:1}],{duration:e}),br("mobile")&&t.firstElementChild.animate([{transform:"translateY(390px)"},{transform:"translateY(0)"}],{duration:e})},onExit:(t,e)=>{const i=br("mobile")?200:100,r=t.animate([{opacity:1},{opacity:0}],{duration:i});if(br("mobile")){const n=t.firstElementChild.animate([{transform:"translateY(0)"},{transform:"translateY(390px)"}],{duration:i});Promise.all([r.finished,n.finished]).then(e)}else r.finished.then(e)},get children(){return xe(_e,{get when(){return t.opened},get children(){return xe(jr,Ce({"data-tc-modal":"true"},i,{get children(){const i=Gr.cloneNode(!0);return je(Zr,i,(()=>()=>t.onClose())),je(Kr,i,(()=>()=>t.onClose())),Ye(i,xe(Vr,{get class(){return t.class},get children(){return[xe(Xr,{icon:"close",onClick:()=>t.onClose()}),Gt((()=>t.children))]}}),null),Ye(i,xe(_e,{get when(){return t.onClickQuestion},get children(){return xe(Wr,{get children(){return[xe(ns,{}),xe(Hr,{get onClick(){return t.onClickQuestion},icon:"question"})]}})}}),null),Wt((()=>Ne(i,gt()(Yr,ci`
                                border-radius: ${zr[e.borderRadius]};
                                background-color: ${e.colors.background.tint};
                                ${wr("mobile")} {
                                    border-radius: ${zr[e.borderRadius]}
                                        ${zr[e.borderRadius]} 0 0;
                                }
                            `)))),i}}))}})}})},$r={m:"22px",s:"12px",none:"0"},Qr={m:"18px",s:"8px",none:"0"},Jr=vi.div`
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    width: fit-content;
    justify-items: center;
    gap: 4px;

    position: relative;
    padding: 4px;
    border-radius: ${t=>$r[t.theme.borderRadius]};

    background-color: ${t=>t.theme.colors.background.secondary};
`,tn=vi.div`
    position: absolute;
    top: 4px;
    left: 4px;

    height: calc(100% - 8px);
    width: calc(50% - 4px);

    border-radius: ${t=>Qr[t.theme.borderRadius]};
    background-color: ${t=>t.theme.colors.background.segment};

    transform: ${t=>t.right?"translateX(100%)":"translateX(0)"};

    transition: transform 0.13s ease-in-out;
`,en=vi.input`
    display: none;
`,rn=vi.label`
    padding: 9px 12px;
    z-index: 1;

    cursor: ${t=>t.isActive?"default":"pointer"};

    transition: transform 0.13s ease-in-out;

    &:hover {
        transform: ${t=>t.isActive?"none":"scale(1.025)"};
    }

    > * {
        ${t=>t.isActive?"":`color: ${t.theme.colors.text.secondary};`}
    }
`,nn={m:"16px",s:"12px",none:"0"},sn={m:"12px",s:"8px",none:"0"},on=vi.div`
    width: 52px;
    height: 52px;
    background: transparent;
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.125s ease-in-out;
`,an=vi.button`
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${t=>t.theme.colors.background.qr};
    border-radius: ${t=>nn[t.theme.borderRadius]};
    padding: ${Si(24)} 0;
    height: ${Si(304)};
    width: 100%;

    overflow: hidden;
    cursor: pointer;
    border: none;

    ${Cr} {
        &:hover {
            ${on.class} {
                transform: scale(1.04);
            }
        }
    }

    &:active {
        ${on.class} {
            transform: scale(0.96);
        }
    }

    ${Tr} {
        &:active {
            ${on.class} {
                transform: scale(0.92);
            }
        }
    }
`,ln=vi.div`
    position: relative;

    width: fit-content;
    margin: 0 auto;

    > div:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    rect {
        fill: transparent;
    }

    path {
        fill: ${t=>t.theme.colors.constant.black};
    }
`,hn=vi.div`
    position: absolute;
    width: ${Si(60)};
    height: ${Si(60)};
    background: ${t=>t.theme.colors.background.qr};

    display: flex;
    align-items: center;
    justify-content: center;
`,un=vi(vr)`
    width: ${t=>Si(t.size)};
    height: ${t=>Si(t.size)};
    border-radius: ${t=>sn[t.theme.borderRadius]};
    background-color: ${t=>t.theme.colors.background.qr};
`,cn=vi.div`
    position: absolute;
    bottom: 14px;
    left: 50%;
    transform: translate(-50%, 0);

    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 18px;
    min-width: 126px;
    padding: 9px 16px 9px 10px;

    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.08));
    background-color: ${t=>t.theme.colors.background.segment};
`;var dn,fn,pn={exports:{}};dn=pn,(fn=function(){var t=function(t,e){var i=t,r=o[e],n=null,s=0,l=null,u=[],c={},y=function(t,e){n=function(t){for(var e=new Array(t),i=0;i<t;i+=1){e[i]=new Array(t);for(var r=0;r<t;r+=1)e[i][r]=null}return e}(s=4*i+17),x(0,0),x(s-7,0),x(0,s-7),T(),w(),S(t,e),i>=7&&C(t),null==l&&(l=_(i,r,u)),E(l,e)},x=function(t,e){for(var i=-1;i<=7;i+=1)if(!(t+i<=-1||s<=t+i))for(var r=-1;r<=7;r+=1)e+r<=-1||s<=e+r||(n[t+i][e+r]=0<=i&&i<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==i||6==i)||2<=i&&i<=4&&2<=r&&r<=4)},w=function(){for(var t=8;t<s-8;t+=1)null==n[t][6]&&(n[t][6]=t%2==0);for(var e=8;e<s-8;e+=1)null==n[6][e]&&(n[6][e]=e%2==0)},T=function(){for(var t=a.getPatternPosition(i),e=0;e<t.length;e+=1)for(var r=0;r<t.length;r+=1){var s=t[e],o=t[r];if(null==n[s][o])for(var l=-2;l<=2;l+=1)for(var h=-2;h<=2;h+=1)n[s+l][o+h]=-2==l||2==l||-2==h||2==h||0==l&&0==h}},C=function(t){for(var e=a.getBCHTypeNumber(i),r=0;r<18;r+=1){var o=!t&&1==(e>>r&1);n[Math.floor(r/3)][r%3+s-8-3]=o}for(r=0;r<18;r+=1)o=!t&&1==(e>>r&1),n[r%3+s-8-3][Math.floor(r/3)]=o},S=function(t,e){for(var i=r<<3|e,o=a.getBCHTypeInfo(i),l=0;l<15;l+=1){var h=!t&&1==(o>>l&1);l<6?n[l][8]=h:l<8?n[l+1][8]=h:n[s-15+l][8]=h}for(l=0;l<15;l+=1)h=!t&&1==(o>>l&1),l<8?n[8][s-l-1]=h:l<9?n[8][15-l-1+1]=h:n[8][15-l-1]=h;n[s-8][8]=!t},E=function(t,e){for(var i=-1,r=s-1,o=7,l=0,h=a.getMaskFunction(e),u=s-1;u>0;u-=2)for(6==u&&(u-=1);;){for(var c=0;c<2;c+=1)if(null==n[r][u-c]){var d=!1;l<t.length&&(d=1==(t[l]>>>o&1)),h(r,u-c)&&(d=!d),n[r][u-c]=d,-1==(o-=1)&&(l+=1,o=7)}if((r+=i)<0||s<=r){r-=i,i=-i;break}}},_=function(t,e,i){for(var r=d.getRSBlocks(t,e),n=f(),s=0;s<i.length;s+=1){var o=i[s];n.put(o.getMode(),4),n.put(o.getLength(),a.getLengthInBits(o.getMode(),t)),o.write(n)}var l=0;for(s=0;s<r.length;s+=1)l+=r[s].dataCount;if(n.getLengthInBits()>8*l)throw"code length overflow. ("+n.getLengthInBits()+">"+8*l+")";for(n.getLengthInBits()+4<=8*l&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*l||(n.put(236,8),n.getLengthInBits()>=8*l));)n.put(17,8);return function(t,e){for(var i=0,r=0,n=0,s=new Array(e.length),o=new Array(e.length),l=0;l<e.length;l+=1){var u=e[l].dataCount,c=e[l].totalCount-u;r=Math.max(r,u),n=Math.max(n,c),s[l]=new Array(u);for(var d=0;d<s[l].length;d+=1)s[l][d]=255&t.getBuffer()[d+i];i+=u;var f=a.getErrorCorrectPolynomial(c),p=h(s[l],f.getLength()-1).mod(f);for(o[l]=new Array(f.getLength()-1),d=0;d<o[l].length;d+=1){var g=d+p.getLength()-o[l].length;o[l][d]=g>=0?p.getAt(g):0}}var m=0;for(d=0;d<e.length;d+=1)m+=e[d].totalCount;var v=new Array(m),y=0;for(d=0;d<r;d+=1)for(l=0;l<e.length;l+=1)d<s[l].length&&(v[y]=s[l][d],y+=1);for(d=0;d<n;d+=1)for(l=0;l<e.length;l+=1)d<o[l].length&&(v[y]=o[l][d],y+=1);return v}(n,r)};c.addData=function(t,e){var i=null;switch(e=e||"Byte"){case"Numeric":i=p(t);break;case"Alphanumeric":i=g(t);break;case"Byte":i=m(t);break;case"Kanji":i=v(t);break;default:throw"mode:"+e}u.push(i),l=null},c.isDark=function(t,e){if(t<0||s<=t||e<0||s<=e)throw t+","+e;return n[t][e]},c.getModuleCount=function(){return s},c.make=function(){if(i<1){for(var t=1;t<40;t++){for(var e=d.getRSBlocks(t,r),n=f(),s=0;s<u.length;s++){var o=u[s];n.put(o.getMode(),4),n.put(o.getLength(),a.getLengthInBits(o.getMode(),t)),o.write(n)}var l=0;for(s=0;s<e.length;s++)l+=e[s].dataCount;if(n.getLengthInBits()<=8*l)break}i=t}y(!1,function(){for(var t=0,e=0,i=0;i<8;i+=1){y(!0,i);var r=a.getLostPoint(c);(0==i||t>r)&&(t=r,e=i)}return e}())},c.createTableTag=function(t,e){t=t||2;var i="";i+='<table style="',i+=" border-width: 0px; border-style: none;",i+=" border-collapse: collapse;",i+=" padding: 0px; margin: "+(e=void 0===e?4*t:e)+"px;",i+='">',i+="<tbody>";for(var r=0;r<c.getModuleCount();r+=1){i+="<tr>";for(var n=0;n<c.getModuleCount();n+=1)i+='<td style="',i+=" border-width: 0px; border-style: none;",i+=" border-collapse: collapse;",i+=" padding: 0px; margin: 0px;",i+=" width: "+t+"px;",i+=" height: "+t+"px;",i+=" background-color: ",i+=c.isDark(r,n)?"#000000":"#ffffff",i+=";",i+='"/>';i+="</tr>"}return(i+="</tbody>")+"</table>"},c.createSvgTag=function(t,e,i,r){var n={};"object"==typeof arguments[0]&&(t=(n=arguments[0]).cellSize,e=n.margin,i=n.alt,r=n.title),t=t||2,e=void 0===e?4*t:e,(i="string"==typeof i?{text:i}:i||{}).text=i.text||null,i.id=i.text?i.id||"qrcode-description":null,(r="string"==typeof r?{text:r}:r||{}).text=r.text||null,r.id=r.text?r.id||"qrcode-title":null;var s,o,a,l,h=c.getModuleCount()*t+2*e,u="";for(l="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",u+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',u+=n.scalable?"":' width="'+h+'px" height="'+h+'px"',u+=' viewBox="0 0 '+h+" "+h+'" ',u+=' preserveAspectRatio="xMinYMin meet"',u+=r.text||i.text?' role="img" aria-labelledby="'+A([r.id,i.id].join(" ").trim())+'"':"",u+=">",u+=r.text?'<title id="'+A(r.id)+'">'+A(r.text)+"</title>":"",u+=i.text?'<description id="'+A(i.id)+'">'+A(i.text)+"</description>":"",u+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',u+='<path d="',o=0;o<c.getModuleCount();o+=1)for(a=o*t+e,s=0;s<c.getModuleCount();s+=1)c.isDark(o,s)&&(u+="M"+(s*t+e)+","+a+l);return(u+='" stroke="transparent" fill="black"/>')+"</svg>"},c.createDataURL=function(t,e){t=t||2,e=void 0===e?4*t:e;var i=c.getModuleCount()*t+2*e,r=e,n=i-e;return b(i,i,(function(e,i){if(r<=e&&e<n&&r<=i&&i<n){var s=Math.floor((e-r)/t),o=Math.floor((i-r)/t);return c.isDark(o,s)?0:1}return 1}))},c.createImgTag=function(t,e,i){t=t||2,e=void 0===e?4*t:e;var r=c.getModuleCount()*t+2*e,n="";return n+="<img",n+=' src="',n+=c.createDataURL(t,e),n+='"',n+=' width="',n+=r,n+='"',n+=' height="',n+=r,n+='"',i&&(n+=' alt="',n+=A(i),n+='"'),n+"/>"};var A=function(t){for(var e="",i=0;i<t.length;i+=1){var r=t.charAt(i);switch(r){case"<":e+="&lt;";break;case">":e+="&gt;";break;case"&":e+="&amp;";break;case'"':e+="&quot;";break;default:e+=r}}return e};return c.createASCII=function(t,e){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var e,i,r,n,s,o=1*c.getModuleCount()+2*t,a=t,l=o-t,h={"██":"█","█ ":"▀"," █":"▄","  ":" "},u={"██":"▀","█ ":"▀"," █":" ","  ":" "},d="";for(e=0;e<o;e+=2){for(r=Math.floor((e-a)/1),n=Math.floor((e+1-a)/1),i=0;i<o;i+=1)s="█",a<=i&&i<l&&a<=e&&e<l&&c.isDark(r,Math.floor((i-a)/1))&&(s=" "),a<=i&&i<l&&a<=e+1&&e+1<l&&c.isDark(n,Math.floor((i-a)/1))?s+=" ":s+="█",d+=t<1&&e+1>=l?u[s]:h[s];d+="\n"}return o%2&&t>0?d.substring(0,d.length-o-1)+Array(o+1).join("▀"):d.substring(0,d.length-1)}(e);t-=1,e=void 0===e?2*t:e;var i,r,n,s,o=c.getModuleCount()*t+2*e,a=e,l=o-e,h=Array(t+1).join("██"),u=Array(t+1).join("  "),d="",f="";for(i=0;i<o;i+=1){for(n=Math.floor((i-a)/t),f="",r=0;r<o;r+=1)s=1,a<=r&&r<l&&a<=i&&i<l&&c.isDark(n,Math.floor((r-a)/t))&&(s=0),f+=s?h:u;for(n=0;n<t;n+=1)d+=f+"\n"}return d.substring(0,d.length-1)},c.renderTo2dContext=function(t,e){e=e||2;for(var i=c.getModuleCount(),r=0;r<i;r++)for(var n=0;n<i;n++)t.fillStyle=c.isDark(r,n)?"black":"white",t.fillRect(r*e,n*e,e,e)},c};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var e=[],i=0;i<t.length;i+=1){var r=t.charCodeAt(i);e.push(255&r)}return e}}).default,t.createStringToBytes=function(t,e){var i=function(){for(var i=x(t),r=function(){var t=i.read();if(-1==t)throw"eof";return t},n=0,s={};;){var o=i.read();if(-1==o)break;var a=r(),l=r()<<8|r();s[String.fromCharCode(o<<8|a)]=l,n+=1}if(n!=e)throw n+" != "+e;return s}(),r="?".charCodeAt(0);return function(t){for(var e=[],n=0;n<t.length;n+=1){var s=t.charCodeAt(n);if(s<128)e.push(s);else{var o=i[t.charAt(n)];"number"==typeof o?(255&o)==o?e.push(o):(e.push(o>>>8),e.push(255&o)):e.push(r)}}return e}};var e,i,r,n,s,o={L:1,M:0,Q:3,H:2},a=(e=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],i=1335,r=7973,s=function(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e},(n={}).getBCHTypeInfo=function(t){for(var e=t<<10;s(e)-s(i)>=0;)e^=i<<s(e)-s(i);return 21522^(t<<10|e)},n.getBCHTypeNumber=function(t){for(var e=t<<12;s(e)-s(r)>=0;)e^=r<<s(e)-s(r);return t<<12|e},n.getPatternPosition=function(t){return e[t-1]},n.getMaskFunction=function(t){switch(t){case 0:return function(t,e){return(t+e)%2==0};case 1:return function(t,e){return t%2==0};case 2:return function(t,e){return e%3==0};case 3:return function(t,e){return(t+e)%3==0};case 4:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case 5:return function(t,e){return t*e%2+t*e%3==0};case 6:return function(t,e){return(t*e%2+t*e%3)%2==0};case 7:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw"bad maskPattern:"+t}},n.getErrorCorrectPolynomial=function(t){for(var e=h([1],0),i=0;i<t;i+=1)e=e.multiply(h([1,l.gexp(i)],0));return e},n.getLengthInBits=function(t,e){if(1<=e&&e<10)switch(t){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+t}else if(e<27)switch(t){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+t}else{if(!(e<41))throw"type:"+e;switch(t){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+t}}},n.getLostPoint=function(t){for(var e=t.getModuleCount(),i=0,r=0;r<e;r+=1)for(var n=0;n<e;n+=1){for(var s=0,o=t.isDark(r,n),a=-1;a<=1;a+=1)if(!(r+a<0||e<=r+a))for(var l=-1;l<=1;l+=1)n+l<0||e<=n+l||0==a&&0==l||o==t.isDark(r+a,n+l)&&(s+=1);s>5&&(i+=3+s-5)}for(r=0;r<e-1;r+=1)for(n=0;n<e-1;n+=1){var h=0;t.isDark(r,n)&&(h+=1),t.isDark(r+1,n)&&(h+=1),t.isDark(r,n+1)&&(h+=1),t.isDark(r+1,n+1)&&(h+=1),0!=h&&4!=h||(i+=3)}for(r=0;r<e;r+=1)for(n=0;n<e-6;n+=1)t.isDark(r,n)&&!t.isDark(r,n+1)&&t.isDark(r,n+2)&&t.isDark(r,n+3)&&t.isDark(r,n+4)&&!t.isDark(r,n+5)&&t.isDark(r,n+6)&&(i+=40);for(n=0;n<e;n+=1)for(r=0;r<e-6;r+=1)t.isDark(r,n)&&!t.isDark(r+1,n)&&t.isDark(r+2,n)&&t.isDark(r+3,n)&&t.isDark(r+4,n)&&!t.isDark(r+5,n)&&t.isDark(r+6,n)&&(i+=40);var u=0;for(n=0;n<e;n+=1)for(r=0;r<e;r+=1)t.isDark(r,n)&&(u+=1);return i+Math.abs(100*u/e/e-50)/5*10},n),l=function(){for(var t=new Array(256),e=new Array(256),i=0;i<8;i+=1)t[i]=1<<i;for(i=8;i<256;i+=1)t[i]=t[i-4]^t[i-5]^t[i-6]^t[i-8];for(i=0;i<255;i+=1)e[t[i]]=i;return{glog:function(t){if(t<1)throw"glog("+t+")";return e[t]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t[e]}}}();function h(t,e){if(void 0===t.length)throw t.length+"/"+e;var i=function(){for(var i=0;i<t.length&&0==t[i];)i+=1;for(var r=new Array(t.length-i+e),n=0;n<t.length-i;n+=1)r[n]=t[n+i];return r}(),r={getAt:function(t){return i[t]},getLength:function(){return i.length},multiply:function(t){for(var e=new Array(r.getLength()+t.getLength()-1),i=0;i<r.getLength();i+=1)for(var n=0;n<t.getLength();n+=1)e[i+n]^=l.gexp(l.glog(r.getAt(i))+l.glog(t.getAt(n)));return h(e,0)},mod:function(t){if(r.getLength()-t.getLength()<0)return r;for(var e=l.glog(r.getAt(0))-l.glog(t.getAt(0)),i=new Array(r.getLength()),n=0;n<r.getLength();n+=1)i[n]=r.getAt(n);for(n=0;n<t.getLength();n+=1)i[n]^=l.gexp(l.glog(t.getAt(n))+e);return h(i,0).mod(t)}};return r}var u,c,d=(u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],c=function(t,e){var i={};return i.totalCount=t,i.dataCount=e,i},{getRSBlocks:function(t,e){var i=function(t,e){switch(e){case o.L:return u[4*(t-1)+0];case o.M:return u[4*(t-1)+1];case o.Q:return u[4*(t-1)+2];case o.H:return u[4*(t-1)+3];default:return}}(t,e);if(void 0===i)throw"bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+e;for(var r=i.length/3,n=[],s=0;s<r;s+=1)for(var a=i[3*s+0],l=i[3*s+1],h=i[3*s+2],d=0;d<a;d+=1)n.push(c(l,h));return n}}),f=function(){var t=[],e=0,i={getBuffer:function(){return t},getAt:function(e){var i=Math.floor(e/8);return 1==(t[i]>>>7-e%8&1)},put:function(t,e){for(var r=0;r<e;r+=1)i.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return e},putBit:function(i){var r=Math.floor(e/8);t.length<=r&&t.push(0),i&&(t[r]|=128>>>e%8),e+=1}};return i},p=function(t){var e=t,i={getMode:function(){return 1},getLength:function(t){return e.length},write:function(t){for(var i=e,n=0;n+2<i.length;)t.put(r(i.substring(n,n+3)),10),n+=3;n<i.length&&(i.length-n==1?t.put(r(i.substring(n,n+1)),4):i.length-n==2&&t.put(r(i.substring(n,n+2)),7))}},r=function(t){for(var e=0,i=0;i<t.length;i+=1)e=10*e+n(t.charAt(i));return e},n=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return i},g=function(t){var e=t,i={getMode:function(){return 2},getLength:function(t){return e.length},write:function(t){for(var i=e,n=0;n+1<i.length;)t.put(45*r(i.charAt(n))+r(i.charAt(n+1)),11),n+=2;n<i.length&&t.put(r(i.charAt(n)),6)}},r=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return i},m=function(e){var i=t.stringToBytes(e);return{getMode:function(){return 4},getLength:function(t){return i.length},write:function(t){for(var e=0;e<i.length;e+=1)t.put(i[e],8)}}},v=function(e){var i=t.stringToBytesFuncs.SJIS;if(!i)throw"sjis not supported.";!function(t,e){var r=i("友");if(2!=r.length||38726!=(r[0]<<8|r[1]))throw"sjis not supported."}();var r=i(e);return{getMode:function(){return 8},getLength:function(t){return~~(r.length/2)},write:function(t){for(var e=r,i=0;i+1<e.length;){var n=(255&e[i])<<8|255&e[i+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(i+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),i+=2}if(i<e.length)throw"illegal char at "+(i+1)}}},y=function(){var t=[],e={writeByte:function(e){t.push(255&e)},writeShort:function(t){e.writeByte(t),e.writeByte(t>>>8)},writeBytes:function(t,i,r){i=i||0,r=r||t.length;for(var n=0;n<r;n+=1)e.writeByte(t[n+i])},writeString:function(t){for(var i=0;i<t.length;i+=1)e.writeByte(t.charCodeAt(i))},toByteArray:function(){return t},toString:function(){var e="";e+="[";for(var i=0;i<t.length;i+=1)i>0&&(e+=","),e+=t[i];return e+"]"}};return e},x=function(t){var e=t,i=0,r=0,n=0,s={read:function(){for(;n<8;){if(i>=e.length){if(0==n)return-1;throw"unexpected end of file./"+n}var t=e.charAt(i);if(i+=1,"="==t)return n=0,-1;t.match(/^\s$/)||(r=r<<6|o(t.charCodeAt(0)),n+=6)}var s=r>>>n-8&255;return n-=8,s}},o=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return s},b=function(t,e,i){for(var r=function(t,e){var i=t,r=e,n=new Array(t*e),s={setPixel:function(t,e,r){n[e*i+t]=r},write:function(t){t.writeString("GIF87a"),t.writeShort(i),t.writeShort(r),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(i),t.writeShort(r),t.writeByte(0);var e=o(2);t.writeByte(2);for(var n=0;e.length-n>255;)t.writeByte(255),t.writeBytes(e,n,255),n+=255;t.writeByte(e.length-n),t.writeBytes(e,n,e.length-n),t.writeByte(0),t.writeString(";")}},o=function(t){for(var e=1<<t,i=1+(1<<t),r=t+1,s=a(),o=0;o<e;o+=1)s.add(String.fromCharCode(o));s.add(String.fromCharCode(e)),s.add(String.fromCharCode(i));var l,h,u,c=y(),d=(l=c,h=0,u=0,{write:function(t,e){if(t>>>e!=0)throw"length over";for(;h+e>=8;)l.writeByte(255&(t<<h|u)),e-=8-h,t>>>=8-h,u=0,h=0;u|=t<<h,h+=e},flush:function(){h>0&&l.writeByte(u)}});d.write(e,r);var f=0,p=String.fromCharCode(n[f]);for(f+=1;f<n.length;){var g=String.fromCharCode(n[f]);f+=1,s.contains(p+g)?p+=g:(d.write(s.indexOf(p),r),s.size()<4095&&(s.size()==1<<r&&(r+=1),s.add(p+g)),p=g)}return d.write(s.indexOf(p),r),d.write(i,r),d.flush(),c.toByteArray()},a=function(){var t={},e=0,i={add:function(r){if(i.contains(r))throw"dup key:"+r;t[r]=e,e+=1},size:function(){return e},indexOf:function(e){return t[e]},contains:function(e){return void 0!==t[e]}};return i};return s}(t,e),n=0;n<e;n+=1)for(var s=0;s<t;s+=1)r.setPixel(s,n,i(s,n));var o=y();r.write(o);for(var a=function(){var t=0,e=0,i=0,r="",n={},s=function(t){r+=String.fromCharCode(o(63&t))},o=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return n.writeByte=function(r){for(t=t<<8|255&r,e+=8,i+=1;e>=6;)s(t>>>e-6),e-=6},n.flush=function(){if(e>0&&(s(t<<6-e),t=0,e=0),i%3!=0)for(var n=3-i%3,o=0;o<n;o+=1)r+="="},n.toString=function(){return r},n}(),l=o.toByteArray(),h=0;h<l.length;h+=1)a.writeByte(l[h]);return a.flush(),"data:image/gif;base64,"+a};return t}()).stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var e=[],i=0;i<t.length;i++){var r=t.charCodeAt(i);r<128?e.push(r):r<2048?e.push(192|r>>6,128|63&r):r<55296||r>=57344?e.push(224|r>>12,128|r>>6&63,128|63&r):(i++,r=65536+((1023&r)<<10|1023&t.charCodeAt(i)),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r))}return e}(t)},dn.exports=fn;const gn=pn.exports;function mn(t){return(null==navigator?void 0:navigator.clipboard)?navigator.clipboard.writeText(t):(function(t){const e=document.createElement("textarea");e.value=t,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{document.execCommand("copy")}finally{document.body.removeChild(e)}}(t),Promise.resolve())}const vn=Fe("<div></div>"),yn=t=>{let e,i,r;const[n,s]=Vt(!1),[o,a]=Vt(48);Ht((()=>{const n=gn(0,"L");n.addData(t.sourceUrl),n.make(),e.innerHTML=n.createSvgTag(4,0);const s=e.firstElementChild.clientWidth,o=Math.round(256/s*1e5)/1e5;if(r){const t=4*Math.ceil(60/(4*o)),e=Si(4*Math.ceil((s-t)/8));r.style.top=e,r.style.left=e,r.style.height=Si(t),r.style.width=Si(t),a(Math.round(48/o))}i.style.transform=`scale(${o})`}));let l=null;return xe(an,{get class(){return t.class},onClick:()=>{s(!0),mn(t.sourceUrl),null!=l&&clearTimeout(l),l=setTimeout((()=>s(!1)),1500)},get children(){return[xe(ln,{ref(t){"function"==typeof i?i(t):i=t},get children(){return[(()=>{const t=vn.cloneNode(!0);return"function"==typeof e?je(e,t):e=t,t})(),xe(_e,{get when(){return t.imageUrl},get children(){return xe(hn,{ref(t){"function"==typeof r?r(t):r=t},get children(){return xe(un,{get src(){return t.imageUrl},alt:"",get size(){return o()}})}})}})]}}),xe(kr,{onBeforeEnter:t=>{t.animate([{opacity:0,transform:"translate(-50%, 44px)"},{opacity:1,transform:"translate(-50%, 0)"}],{duration:150,easing:"ease-out"})},onExit:(t,e)=>{t.animate([{opacity:1,transform:"translate(-50%, 0)"},{opacity:0,transform:"translate(-50%, 44px)"}],{duration:150,easing:"ease-out"}).finished.then((()=>{e()}))},get children(){return xe(_e,{get when(){return n()&&!t.disableCopy},get children(){return xe(cn,{get children(){return[xe(Kn,{size:"xs"}),xe(Cn,{translationKey:"common.linkCopied",children:"Link Copied"})]}})}})}}),xe(_e,{get when(){return!t.disableCopy},get children(){return xe(on,{get children(){return xe(ks,{})}})}})]}})};var xn=(t,e,i)=>{const r=e.trim().split(".").reduce(((t,e)=>t?t[e]:void 0),t);return void 0!==r?r:i},bn=Qt({}),wn=()=>Jt(bn);const Tn=vi.div`
    font-style: normal;
    font-weight: ${t=>t.fontWeight};
    font-size: ${t=>t.fontSize};
    line-height: ${t=>t.lineHeight};

    color: ${t=>t.color};
`,Cn=t=>{const e=gi(),[i]=wn();let r;const n=Ce({fontSize:"14px",fontWeight:"510",lineHeight:"130%"},t);return Ht((()=>{r&&"unset"!==n.cursor&&"pointer"!==getComputedStyle(r).cursor&&(r.style.cursor="default")})),xe(Tn,{get fontSize(){return n.fontSize},get fontWeight(){return n.fontWeight},get lineHeight(){return n.lineHeight},get color(){return t.color||e.colors.text.primary},get class(){return n.class},ref(t){"function"==typeof r?r(t):r=t},"data-tc-text":"true",get children(){var t;return Gt((()=>!!n.translationKey))()?i(n.translationKey,n.translationValues,null==(t=n.children)?void 0:t.toString()):n.children}})},Sn=vi.div`
    position: relative;

    &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 0.5px solid rgba(0, 0, 0, 0.08);

        border-radius: inherit;
    }
`,En=vi(vr)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`,_n=t=>xe(Sn,{get class(){return t.class},get children(){return xe(En,{get src(){return t.src}})}}),An={m:"16px",s:"12px",none:"0"},Pn={m:"6px",s:"6px",none:"0"},Mn=vi.button`
    position: relative;
    cursor: pointer;
    border: none;
    background-color: unset;
    padding: 8px 4px;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: transform 0.125s ease-in-out;

    ${Cr} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${wr("mobile")} {
        padding: 8px 4px;
        width: 82px;
    }

    ${Tr} {
        &:active {
            transform: scale(0.92);
        }
    }
`,kn=vi(_n)`
    width: 60px;
    height: 60px;
    border-radius: ${t=>An[t.theme.borderRadius]};

    margin-bottom: 8px;
`,Rn=vi(vr)`
    position: absolute;
    right: 10px;
    top: 50px;
    width: 24px;
    height: 24px;
    border-radius: ${t=>Pn[t.theme.borderRadius]};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
`,On=vi(Cn)`
    max-width: 90px;
    font-weight: 590;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    ${wr("mobile")} {
        max-width: 80px;
    }
`,Ln=vi(Cn)`
    font-weight: 510;
    max-width: 90px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${t=>t.colorPrimary?t.theme.colors.text.primary:t.theme.colors.text.secondary};

    ${wr("mobile")} {
        max-width: 80px;
    }
`,In=t=>xe(Mn,{get class(){return t.class},onClick:()=>t.onClick(),"data-tc-wallet-item":"true",get children(){return[Gt((()=>Gt((()=>"string"==typeof t.icon))()?xe(kn,{get src(){return t.icon}}):t.icon)),Gt((()=>Gt((()=>!!t.badgeUrl))()&&xe(Rn,{get src(){return t.badgeUrl}}))),xe(On,{get children(){return t.name}}),Gt((()=>Gt((()=>!!t.secondLine))()&&xe(Ln,{get colorPrimary(){var e;return null==(e=t.secondLineColorPrimary)||e},get children(){return t.secondLine}})))]}}),Bn=vi.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;

    text-align: center;

    color: ${t=>t.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,Dn=t=>{const[e]=wn();return xe(Bn,{get class(){return t.class},"data-tc-h1":"true",get children(){var i;return Gt((()=>!!t.translationKey))()?e(t.translationKey,t.translationValues,null==(i=t.children)?void 0:i.toString()):t.children}})},Fn=vi.h2`
    font-style: normal;
    font-weight: 510;
    font-size: 16px;
    line-height: 22px;

    text-align: center;

    color: ${t=>t.theme.colors.text.secondary};

    margin-top: 0;
    margin-bottom: 32px;

    cursor: default;
`,Un=t=>{const[e]=wn();return xe(Fn,{get class(){return t.class},"data-tc-h2":"true",get children(){var i;return Gt((()=>!!t.translationKey))()?e(t.translationKey,t.translationValues,null==(i=t.children)?void 0:i.toString()):t.children}})},Nn=vi.h3`
    font-style: normal;
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;

    color: ${t=>t.theme.colors.text.primary};

    margin-top: 0;
    margin-bottom: 0;

    cursor: default;
`,zn=t=>{const[e]=wn();return xe(Nn,{"data-tc-h3":"true",get class(){return t.class},get children(){var i;return Gt((()=>!!t.translationKey))()?e(t.translationKey,t.translationValues,null==(i=t.children)?void 0:i.toString()):t.children}})},jn=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7.5C9.33579 7.5 9 7.16421 9 6.75C9 6.33579 9.33579 6 9.75 6H21.25C21.6642 6 22 6.33579 22 6.75V18.25C22 18.6642 21.6642 19 21.25 19C20.8358 19 20.5 18.6642 20.5 18.25V8.56066L6.28033 22.7803C5.98744 23.0732 5.51256 23.0732 5.21967 22.7803C4.92678 22.4874 4.92678 22.0126 5.21967 21.7197L19.4393 7.5H9.75Z"></path></svg>'),Yn=t=>{const e=gi(),i=()=>t.fill||e.colors.icon.secondary;return(()=>{const t=jn.cloneNode(!0),e=t.firstChild;return Wt((r=>{const n=i(),s=i();return n!==r._v$&&Ue(t,"fill",r._v$=n),s!==r._v$2&&Ue(e,"fill",r._v$2=s),r}),{_v$:void 0,_v$2:void 0}),t})()},Vn=Fe('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.1839 17.7069C13.6405 18.6507 13.3688 19.1226 13.0591 19.348C12.4278 19.8074 11.5723 19.8074 10.941 19.348C10.6312 19.1226 10.3595 18.6507 9.81613 17.7069L5.52066 10.2464C4.76864 8.94024 4.39263 8.28717 4.33762 7.75894C4.2255 6.68236 4.81894 5.65591 5.80788 5.21589C6.29309 5 7.04667 5 8.55383 5H15.4462C16.9534 5 17.7069 5 18.1922 5.21589C19.1811 5.65591 19.7745 6.68236 19.6624 7.75894C19.6074 8.28717 19.2314 8.94024 18.4794 10.2464L14.1839 17.7069ZM11.1 16.3412L6.56139 8.48002C6.31995 8.06185 6.19924 7.85276 6.18146 7.68365C6.14523 7.33896 6.33507 7.01015 6.65169 6.86919C6.80703 6.80002 7.04847 6.80002 7.53133 6.80002H7.53134L11.1 6.80002V16.3412ZM12.9 16.3412L17.4387 8.48002C17.6801 8.06185 17.8008 7.85276 17.8186 7.68365C17.8548 7.33896 17.665 7.01015 17.3484 6.86919C17.193 6.80002 16.9516 6.80002 16.4687 6.80002L12.9 6.80002V16.3412Z"></path></svg>'),Xn=t=>{const e=gi();return(()=>{const i=Vn.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.icon.primary))),i})()},Wn=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_3783_2045)"><circle cx="8" cy="8.00098" r="8"></circle><path d="M4.75 8.50098L7 10.751L11.75 6.00098" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_3783_2045"><rect width="16" height="16" fill="white" transform="translate(0 0.000976562)"></rect></clipPath></defs></svg>'),Hn=Fe('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M17.1364 9.6364C17.4879 9.28493 17.4879 8.71508 17.1364 8.36361C16.7849 8.01214 16.2151 8.01214 15.8636 8.36361L10 14.2272L8.1364 12.3636C7.78493 12.0121 7.21508 12.0121 6.86361 12.3636C6.51214 12.7151 6.51214 13.2849 6.86361 13.6364L9.36361 16.1364C9.71508 16.4879 10.2849 16.4879 10.6364 16.1364L17.1364 9.6364Z"></path></svg>'),Gn=Fe('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M50.9142 28.4142C51.6953 27.6332 51.6953 26.3668 50.9142 25.5858C50.1332 24.8047 48.8668 24.8047 48.0858 25.5858L30 43.6716L23.9142 37.5858C23.1332 36.8047 21.8668 36.8047 21.0858 37.5858C20.3047 38.3668 20.3047 39.6332 21.0858 40.4142L28.5858 47.9142C29.3668 48.6953 30.6332 48.6953 31.4142 47.9142L50.9142 28.4142Z"></path></svg>'),Kn=t=>{const e=gi(),i=()=>t.size||"s",r=()=>t.fill||e.colors.icon.success;return Gt((()=>{const n=Gt((()=>"xs"===i()));return()=>n()?(()=>{const i=Wn.cloneNode(!0),n=i.firstChild.firstChild,s=n.nextSibling;return Wt((o=>{const a=t.class,l=r(),h=e.colors.constant.white;return a!==o._v$&&Ue(i,"class",o._v$=a),l!==o._v$2&&Ue(n,"fill",o._v$2=l),h!==o._v$3&&Ue(s,"stroke",o._v$3=h),o}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})():(()=>{const n=Gt((()=>"s"===i()));return()=>n()?(()=>{const i=Hn.cloneNode(!0),n=i.firstChild,s=n.nextSibling;return Wt((o=>{const a=t.class,l=r(),h=e.colors.constant.white;return a!==o._v$4&&Ue(i,"class",o._v$4=a),l!==o._v$5&&Ue(n,"fill",o._v$5=l),h!==o._v$6&&Ue(s,"fill",o._v$6=h),o}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),i})():(()=>{const i=Gn.cloneNode(!0),n=i.firstChild,s=n.nextSibling;return Wt((o=>{const a=t.class,l=r(),h=e.colors.constant.white;return a!==o._v$7&&Ue(i,"class",o._v$7=a),l!==o._v$8&&Ue(n,"fill",o._v$8=l),h!==o._v$9&&Ue(s,"fill",o._v$9=h),o}),{_v$7:void 0,_v$8:void 0,_v$9:void 0}),i})()})()})())},Zn=Fe('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="33"></circle><path d="M24.0858 26.9142C23.3047 26.1332 23.3047 24.8668 24.0858 24.0858C24.8668 23.3047 26.1332 23.3047 26.9142 24.0858L36 33.1716L45.0858 24.0858C45.8668 23.3047 47.1332 23.3047 47.9142 24.0858C48.6953 24.8668 48.6953 26.1332 47.9142 26.9142L38.8284 36L47.9142 45.0858C48.6953 45.8668 48.6953 47.1332 47.9142 47.9142C47.1332 48.6953 45.8668 48.6953 45.0858 47.9142L36 38.8284L26.9142 47.9142C26.1332 48.6953 24.8668 48.6953 24.0858 47.9142C23.3047 47.1332 23.3047 45.8668 24.0858 45.0858L33.1716 36L24.0858 26.9142Z"></path></svg>'),qn=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24.001" r="22"></circle><path d="M24 24.001L31.5 16.501M24 24.001L16.5 16.501M24 24.001L16.5 31.501M24 24.001L31.5 31.501" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),$n=Fe('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11"></circle><path d="M7.86361 9.1364C7.51214 8.78493 7.51214 8.21508 7.86361 7.86361C8.21508 7.51214 8.78493 7.51214 9.1364 7.86361L12 10.7272L14.8636 7.86361C15.2151 7.51214 15.7849 7.51214 16.1364 7.86361C16.4879 8.21508 16.4879 8.78493 16.1364 9.1364L13.2728 12L16.1364 14.8636C16.4879 15.2151 16.4879 15.7849 16.1364 16.1364C15.7849 16.4879 15.2151 16.4879 14.8636 16.1364L12 13.2728L9.1364 16.1364C8.78493 16.4879 8.21508 16.4879 7.86361 16.1364C7.51214 15.7849 7.51214 15.2151 7.86361 14.8636L10.7272 12L7.86361 9.1364Z"></path></svg>'),Qn=t=>{const e=gi(),i=()=>t.size||"m",r=()=>t.fill||e.colors.icon.error;return Gt((()=>{const n=Gt((()=>"m"===i()));return()=>n()?(()=>{const i=Zn.cloneNode(!0),n=i.firstChild,s=n.nextSibling;return Wt((o=>{const a=t.class,l=r(),h=e.colors.constant.white;return a!==o._v$&&Ue(i,"class",o._v$=a),l!==o._v$2&&Ue(n,"fill",o._v$2=l),h!==o._v$3&&Ue(s,"fill",o._v$3=h),o}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),i})():(()=>{const n=Gt((()=>"s"===i()));return()=>n()?(()=>{const i=qn.cloneNode(!0),n=i.firstChild,s=n.nextSibling;return Wt((o=>{const a=t.class,l=r(),h=e.colors.constant.white;return a!==o._v$4&&Ue(i,"class",o._v$4=a),l!==o._v$5&&Ue(n,"fill",o._v$5=l),h!==o._v$6&&Ue(s,"stroke",o._v$6=h),o}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),i})():(()=>{const i=$n.cloneNode(!0),n=i.firstChild,s=n.nextSibling;return Wt((o=>{const a=t.class,l=r(),h=e.colors.constant.white;return a!==o._v$7&&Ue(i,"class",o._v$7=a),l!==o._v$8&&Ue(n,"fill",o._v$8=l),h!==o._v$9&&Ue(s,"fill",o._v$9=h),o}),{_v$7:void 0,_v$8:void 0,_v$9:void 0}),i})()})()})())},Jn=Fe('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"></path></svg>'),ts=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.99951C11.5066 2.99951 3 11.5061 3 21.9995C3 32.4929 11.5066 40.9995 22 40.9995C22.8284 40.9995 23.5 41.6711 23.5 42.4995C23.5 43.3279 22.8284 43.9995 22 43.9995C9.84974 43.9995 0 34.1498 0 21.9995C0 9.84925 9.84974 -0.000488281 22 -0.000488281C34.1503 -0.000488281 44 9.84925 44 21.9995C44 22.8279 43.3284 23.4995 42.5 23.4995C41.6716 23.4995 41 22.8279 41 21.9995C41 11.5061 32.4934 2.99951 22 2.99951Z"></path></svg>'),es=Fe('<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),is=t=>{const e=gi(),i=()=>t.size||"xs",r=()=>t.fill||e.colors.icon.tertiary,n=ci`
        animation: ${di`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `} 1s linear infinite;
    `;return Gt((()=>{const e=Gt((()=>"xs"===i()));return()=>e()?(()=>{const e=Jn.cloneNode(!0),i=e.firstChild;return Wt((s=>{const o=gt()(n,t.class),a=r();return o!==s._v$&&Ue(e,"class",s._v$=o),a!==s._v$2&&Ue(i,"fill",s._v$2=a),s}),{_v$:void 0,_v$2:void 0}),e})():(()=>{const e=Gt((()=>"s"===i()));return()=>e()?(()=>{const e=ts.cloneNode(!0),i=e.firstChild;return Wt((s=>{const o=gt()(n,t.class),a=r();return o!==s._v$3&&Ue(e,"class",s._v$3=o),a!==s._v$4&&Ue(i,"fill",s._v$4=a),s}),{_v$3:void 0,_v$4:void 0}),e})():(()=>{const e=es.cloneNode(!0),i=e.firstChild;return Wt((s=>{const o=gt()(n,t.class),a=r();return o!==s._v$5&&Ue(e,"class",s._v$5=o),a!==s._v$6&&Ue(i,"stroke",s._v$6=a),s}),{_v$5:void 0,_v$6:void 0}),e})()})()})())},rs=Fe('<svg width="158" height="28" viewBox="0 0 158 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28 14.001C28 21.733 21.732 28.001 14 28.001C6.26801 28.001 0 21.733 0 14.001C0 6.26899 6.26801 0.000976562 14 0.000976562C21.732 0.000976562 28 6.26899 28 14.001ZM9.21931 8.00098H18.7801H18.7813C20.538 8.00098 21.6522 9.89966 20.7691 11.4302L14.8672 21.6576C14.4822 22.3254 13.5172 22.3254 13.1322 21.6576L7.23158 11.4302C6.34721 9.89726 7.4614 8.00098 9.21931 8.00098ZM13.1262 18.5882V9.74806H9.21811C8.78976 9.74806 8.53708 10.2029 8.74163 10.5578L11.8423 16.1035L13.1262 18.5882ZM16.1559 16.1047L19.2554 10.5566C19.4599 10.2017 19.2073 9.74685 18.7789 9.74685H14.8709V18.5906L16.1559 16.1047Z" fill="#0098EA"></path><path d="M18.7802 8.00098H9.21936C7.46145 8.00098 6.34727 9.89726 7.23164 11.4302L13.1322 21.6576C13.5173 22.3254 14.4823 22.3254 14.8673 21.6576L20.7691 11.4302C21.6523 9.89966 20.5381 8.00098 18.7814 8.00098H18.7802ZM13.1274 18.5906L11.8424 16.1035L8.74168 10.5578C8.53714 10.2029 8.78981 9.74806 9.21816 9.74806H13.1262V18.5918L13.1274 18.5906ZM19.2555 10.5566L16.156 16.1047L14.8709 18.5906V9.74685H18.779C19.2073 9.74685 19.46 10.2017 19.2555 10.5566Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M51.7483 22.1967C55.7182 22.1967 58.9609 18.954 58.9609 14.9841C58.9609 11.0142 55.7182 7.77148 51.7483 7.77148C47.7588 7.77148 44.5357 11.0142 44.5357 14.9841C44.5357 18.954 47.7588 22.1967 51.7483 22.1967ZM51.7483 19.1702C49.4686 19.1702 47.6802 17.2442 47.6802 14.9841C47.6802 12.724 49.4686 10.798 51.7483 10.798C54.0084 10.798 55.7968 12.724 55.7968 14.9841C55.7968 17.2442 54.0084 19.1702 51.7483 19.1702ZM37.0698 21.9609H40.2142V10.9946H44.2843V8.00732H33V10.9946H37.0698V21.9609ZM69.9379 8.00732H73.0823V21.9609H70.3899L63.59 13.3333V21.9609H60.4652V8.00732H63.1576L69.9379 16.6153V8.00732ZM79.2259 14.9887C79.2259 10.9202 82.351 7.77539 86.4982 7.77539C89.8592 7.77539 92.5519 9.95709 93.2202 12.6891H90.7437C90.154 11.0971 88.4637 9.9964 86.4982 9.9964C83.5893 9.9964 81.5452 12.1781 81.5452 14.9887C81.5452 17.7994 83.5893 19.9811 86.4982 19.9811C88.4637 19.9811 90.154 18.8804 90.7437 17.2884H93.2202C92.5519 20.0204 89.8592 22.2021 86.4982 22.2021C82.351 22.2021 79.2259 19.0573 79.2259 14.9887ZM104.584 17.0525C104.584 19.9025 102.343 22.1628 99.4342 22.1628C96.5253 22.1628 94.2846 19.9025 94.2846 17.0525C94.2846 14.2025 96.5253 11.9422 99.4342 11.9422C102.343 11.9422 104.584 14.2025 104.584 17.0525ZM96.4663 17.0525C96.4663 18.8018 97.6849 20.158 99.4342 20.158C101.164 20.158 102.382 18.8018 102.382 17.0525C102.382 15.3032 101.164 13.947 99.4342 13.947C97.6849 13.947 96.4663 15.3032 96.4663 17.0525ZM108.626 12.1388H106.463V21.9662H108.626V17.1311C108.626 15.0281 109.726 13.9077 111.161 13.9077C112.419 13.9077 113.205 14.8512 113.205 16.4039V21.9662H115.367V16.0501C115.367 13.5539 113.893 11.9422 111.613 11.9422C110.335 11.9422 109.215 12.4926 108.626 13.4753V12.1388ZM117.839 12.1388H120.001V13.4753C120.59 12.4926 121.711 11.9422 122.988 11.9422C125.268 11.9422 126.742 13.5539 126.742 16.0501V21.9662H124.58V16.4039C124.58 14.8512 123.794 13.9077 122.536 13.9077C121.101 13.9077 120.001 15.0281 120.001 17.1311V21.9662H117.839V12.1388ZM133.558 22.1628C136.054 22.1628 137.823 20.728 138.373 18.8804H136.113C135.661 19.8238 134.717 20.2563 133.636 20.2563C131.887 20.2563 130.747 19.077 130.668 17.5832H138.491C138.688 14.2419 136.585 11.9422 133.577 11.9422C130.551 11.9422 128.526 14.1436 128.526 17.0525C128.526 20.0007 130.629 22.1628 133.558 22.1628ZM130.747 16.0501C131.042 14.5367 132.162 13.7505 133.518 13.7505C134.717 13.7505 135.838 14.4581 136.172 16.0501H130.747ZM149.851 18.3694C149.32 20.5511 147.453 22.1628 144.859 22.1628C141.871 22.1628 139.709 19.8828 139.709 17.0525C139.709 14.2222 141.871 11.9422 144.859 11.9422C147.453 11.9422 149.32 13.5539 149.851 15.7356H147.571C147.178 14.6743 146.215 13.9077 144.859 13.9077C143.109 13.9077 141.91 15.2246 141.91 17.0525C141.91 18.8804 143.109 20.1973 144.859 20.1973C146.215 20.1973 147.178 19.4307 147.571 18.3694H149.851ZM155.75 22.0645C156.418 22.0645 156.929 21.9859 157.362 21.8483V19.9221C157.047 20.0401 156.615 20.1187 156.202 20.1187C155.082 20.1187 154.551 19.6666 154.551 18.448V14.065H157.362V12.1388H154.551V9.40675H152.389V12.1388H150.345V14.065H152.389V18.8018C152.389 21.0228 153.863 22.0645 155.75 22.0645Z"></path></svg>'),ns=()=>{const t=gi();return(()=>{const e=rs.cloneNode(!0),i=e.firstChild.nextSibling.nextSibling;return Wt((()=>Ue(i,"fill",t.theme===ti.DARK?t.colors.constant.white:t.colors.constant.black))),e})()},ss=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.56608 4.42584C5.82527 3.32158 6.8176 2.5 8.00001 2.5C9.38072 2.5 10.5 3.61929 10.5 5C10.5 5.63026 10.3391 6.0386 10.1264 6.34455C9.90018 6.66993 9.58561 6.92478 9.18864 7.20877C9.12579 7.25372 9.05873 7.30025 8.9887 7.34883C8.27392 7.84472 7.25001 8.55507 7.25001 10V10.25C7.25001 10.6642 7.5858 11 8.00001 11C8.41422 11 8.75001 10.6642 8.75001 10.25V10C8.75001 9.36502 9.10777 9.1096 9.94554 8.51149L10.0614 8.42873C10.4769 8.13147 10.9748 7.75194 11.358 7.20076C11.7547 6.63015 12 5.91973 12 5C12 2.79086 10.2091 1 8.00001 1C6.10564 1 4.5205 2.31615 4.10577 4.08308C4.01112 4.48634 4.26129 4.88997 4.66454 4.98462C5.0678 5.07927 5.47143 4.8291 5.56608 4.42584ZM8.00001 15C8.60752 15 9.10001 14.5075 9.10001 13.9C9.10001 13.2925 8.60752 12.8 8.00001 12.8C7.39249 12.8 6.90001 13.2925 6.90001 13.9C6.90001 14.5075 7.39249 15 8.00001 15Z"></path></svg>'),os=t=>{const e=gi();return(()=>{const i=ss.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.icon.secondary))),i})()},as=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.98156 8.75C9.84854 11.4328 9.01206 13.5 8 13.5C6.98794 13.5 6.15146 11.4328 6.01844 8.75H9.98156ZM11.4832 8.75C11.4217 10.1155 11.1929 11.3869 10.8239 12.4017C10.7734 12.5405 10.7188 12.6789 10.6595 12.8154C12.1454 11.993 13.2103 10.5029 13.4493 8.75H11.4832ZM13.4493 7.25H11.4832C11.4217 5.88453 11.1929 4.61314 10.8239 3.5983C10.7734 3.4595 10.7188 3.32111 10.6595 3.18459C12.1454 4.00697 13.2103 5.49709 13.4493 7.25ZM9.98156 7.25H6.01844C6.15144 4.56764 6.98769 2.50062 7.99955 2.5H8C9.01206 2.5 9.84854 4.56724 9.98156 7.25ZM4.51678 7.25C4.57826 5.88453 4.80706 4.61314 5.1761 3.5983C5.22657 3.4595 5.28124 3.32111 5.3405 3.18459C3.85463 4.00697 2.78972 5.49709 2.55071 7.25H4.51678ZM2.55071 8.75C2.78972 10.5029 3.85463 11.993 5.3405 12.8154C5.28124 12.6789 5.22657 12.5405 5.1761 12.4017C4.80706 11.3869 4.57826 10.1155 4.51678 8.75H2.55071ZM15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"></path></svg>'),ls=t=>{const e=gi();return(()=>{const i=as.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.icon.primary))),i})()},hs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.8C2.5 3.11984 2.5 2.27976 2.82698 1.63803C3.1146 1.07354 3.57354 0.614601 4.13803 0.32698C4.77976 0 5.61984 0 7.3 0H8.7C10.3802 0 11.2202 0 11.862 0.32698C12.4265 0.614601 12.8854 1.07354 13.173 1.63803C13.5 2.27976 13.5 3.11984 13.5 4.8V11.2C13.5 12.8802 13.5 13.7202 13.173 14.362C12.8854 14.9265 12.4265 15.3854 11.862 15.673C11.2202 16 10.3802 16 8.7 16H7.3C5.61984 16 4.77976 16 4.13803 15.673C3.57354 15.3854 3.1146 14.9265 2.82698 14.362C2.5 13.7202 2.5 12.8802 2.5 11.2V4.8ZM4 3.9C4 3.05992 4 2.63988 4.16349 2.31901C4.3073 2.03677 4.53677 1.8073 4.81901 1.66349C5.13988 1.5 5.55992 1.5 6.4 1.5H9.6C10.4401 1.5 10.8601 1.5 11.181 1.66349C11.4632 1.8073 11.6927 2.03677 11.8365 2.31901C12 2.63988 12 3.05992 12 3.9V12.1C12 12.9401 12 13.3601 11.8365 13.681C11.6927 13.9632 11.4632 14.1927 11.181 14.3365C10.8601 14.5 10.4401 14.5 9.6 14.5H6.4C5.55992 14.5 5.13988 14.5 4.81901 14.3365C4.53677 14.1927 4.3073 13.9632 4.16349 13.681C4 13.3601 4 12.9401 4 12.1V3.9ZM7 2.5C6.58579 2.5 6.25 2.83579 6.25 3.25C6.25 3.66421 6.58579 4 7 4H9C9.41421 4 9.75 3.66421 9.75 3.25C9.75 2.83579 9.41421 2.5 9 2.5H7Z"></path></svg>'),us=t=>{const e=gi();return(()=>{const i=hs.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.icon.primary))),i})()},cs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 6.8C1.5 5.11984 1.5 4.27976 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.77976 2 4.61984 2 6.3 2H9.7C11.3802 2 12.2202 2 12.862 2.32698C13.4265 2.6146 13.8854 3.07354 14.173 3.63803C14.5 4.27976 14.5 5.11984 14.5 6.8V11.5H15.25C15.6642 11.5 16 11.8358 16 12.25C16 12.6642 15.6642 13 15.25 13H0.75C0.335786 13 0 12.6642 0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H1.5V6.8ZM3 11.5H13V5.9C13 5.05992 13 4.63988 12.8365 4.31901C12.6927 4.03677 12.4632 3.8073 12.181 3.66349C11.8601 3.5 11.4401 3.5 10.6 3.5H5.4C4.55992 3.5 4.13988 3.5 3.81901 3.66349C3.53677 3.8073 3.3073 4.03677 3.16349 4.31901C3 4.63988 3 5.05992 3 5.9V11.5Z"></path></svg>'),ds=t=>{const e=gi();return(()=>{const i=cs.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.icon.primary))),i})()},fs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1603)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 1.25049C15.5 0.836275 15.1642 0.500488 14.75 0.500488C14.3358 0.500488 14 0.836275 14 1.25049V3.67012C12.7187 2.04487 10.7318 1.00049 8.5 1.00049C4.63401 1.00049 1.5 4.1345 1.5 8.00049C1.5 11.8665 4.63401 15.0005 8.5 15.0005C11.6844 15.0005 14.3703 12.8748 15.2199 9.96661C15.3361 9.56902 15.1079 9.15254 14.7103 9.03638C14.3127 8.92023 13.8962 9.14838 13.7801 9.54597C13.1123 11.8319 11 13.5005 8.5 13.5005C5.46243 13.5005 3 11.0381 3 8.00049C3 4.96292 5.46243 2.50049 8.5 2.50049C10.321 2.50049 11.9363 3.3855 12.9377 4.75049H10.5C10.0858 4.75049 9.75 5.08627 9.75 5.50049C9.75 5.9147 10.0858 6.25049 10.5 6.25049H14.75C15.1642 6.25049 15.5 5.9147 15.5 5.50049V1.25049Z"></path></g><defs><clipPath id="clip0_3676_1603"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000488281)"></rect></clipPath></defs></svg>'),ps=t=>{const e=gi();return(()=>{const i=fs.cloneNode(!0),r=i.firstChild.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.accent))),i})()},gs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.06119V6.75053C13 7.16474 13.3358 7.50053 13.75 7.50053C14.1642 7.50053 14.5 7.16474 14.5 6.75053V2.75053L14.5 2.72807C14.5001 2.63191 14.5003 2.49627 14.4842 2.37627C14.4638 2.22503 14.4063 1.99261 14.2071 1.79342C14.0079 1.59423 13.7755 1.5367 13.6243 1.51637C13.5043 1.50023 13.3686 1.50039 13.2725 1.50051L13.25 1.50053H9.25C8.83579 1.50053 8.5 1.83631 8.5 2.25053C8.5 2.66474 8.83579 3.00053 9.25 3.00053H11.9393L7.21967 7.7202C6.92678 8.01309 6.92678 8.48796 7.21967 8.78086C7.51256 9.07375 7.98744 9.07375 8.28033 8.78086L13 4.06119ZM5.85 1.50053H5.81903H5.81899C5.21528 1.50052 4.71702 1.50051 4.31113 1.53367C3.88956 1.56812 3.50203 1.64204 3.13803 1.82751C2.57354 2.11513 2.1146 2.57407 1.82698 3.13856C1.64151 3.50256 1.56759 3.89009 1.53315 4.31166C1.49998 4.71755 1.49999 5.21581 1.5 5.81953V5.81955V5.85053V10.1505V10.1815V10.1815C1.49999 10.7852 1.49998 11.2835 1.53315 11.6894C1.56759 12.111 1.64151 12.4985 1.82698 12.8625C2.1146 13.427 2.57354 13.8859 3.13803 14.1735C3.50203 14.359 3.88956 14.4329 4.31113 14.4674C4.71702 14.5005 5.21527 14.5005 5.81897 14.5005H5.81901H5.85H10.15H10.181H10.181C10.7847 14.5005 11.283 14.5005 11.6889 14.4674C12.1104 14.4329 12.498 14.359 12.862 14.1735C13.4265 13.8859 13.8854 13.427 14.173 12.8625C14.3585 12.4985 14.4324 12.111 14.4669 11.6894C14.5 11.2835 14.5 10.7853 14.5 10.1816V10.1815V10.1505V9.75053C14.5 9.33631 14.1642 9.00053 13.75 9.00053C13.3358 9.00053 13 9.33631 13 9.75053V10.1505C13 10.793 12.9994 11.2297 12.9718 11.5672C12.945 11.8961 12.8963 12.0642 12.8365 12.1815C12.6927 12.4638 12.4632 12.6932 12.181 12.837C12.0637 12.8968 11.8955 12.9455 11.5667 12.9724C11.2292 12.9999 10.7924 13.0005 10.15 13.0005H5.85C5.20757 13.0005 4.77085 12.9999 4.43328 12.9724C4.10447 12.9455 3.93632 12.8968 3.81902 12.837C3.53677 12.6932 3.3073 12.4638 3.16349 12.1815C3.10372 12.0642 3.05503 11.8961 3.02816 11.5672C3.00058 11.2297 3 10.793 3 10.1505V5.85053C3 5.20809 3.00058 4.77137 3.02816 4.43381C3.05503 4.10499 3.10372 3.93684 3.16349 3.81954C3.3073 3.5373 3.53677 3.30783 3.81902 3.16402C3.93632 3.10425 4.10447 3.05556 4.43328 3.02869C4.77085 3.00111 5.20757 3.00053 5.85 3.00053H6.25C6.66422 3.00053 7 2.66474 7 2.25053C7 1.83631 6.66422 1.50053 6.25 1.50053H5.85Z"></path></svg>'),ms=t=>{const e=gi();return(()=>{const i=gs.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.accent))),i})()},vs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none"><g clip-path="url(#clip0_3676_1274)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.82698 2.63901C1.5 3.28074 1.5 4.12082 1.5 5.80098V8.80098V9.00098V10.201C1.5 11.8811 1.5 12.7212 1.82698 13.3629C2.1146 13.9274 2.57354 14.3864 3.13803 14.674C3.77976 15.001 4.61984 15.001 6.3 15.001H11.7C13.3802 15.001 14.2202 15.001 14.862 14.674C15.4265 14.3864 15.8854 13.9274 16.173 13.3629C16.5 12.7212 16.5 11.8811 16.5 10.201V8.80098C16.5 7.12082 16.5 6.28074 16.173 5.63901C15.8854 5.07452 15.4265 4.61558 14.862 4.32796C14.743 4.26733 14.6172 4.21795 14.4805 4.17772C14.4501 3.49449 14.3722 3.02994 14.173 2.63901C13.8854 2.07452 13.4265 1.61558 12.862 1.32796C12.2202 1.00098 11.3802 1.00098 9.7 1.00098H6.3C4.61984 1.00098 3.77976 1.00098 3.13803 1.32796C2.57354 1.61558 2.1146 2.07452 1.82698 2.63901ZM12.9861 4.00942C12.9684 3.7108 12.9281 3.49982 12.8365 3.31999C12.6927 3.03775 12.4632 2.80828 12.181 2.66447C11.8601 2.50098 11.4401 2.50098 10.6 2.50098H5.4C4.55992 2.50098 4.13988 2.50098 3.81901 2.66447C3.53677 2.80828 3.3073 3.03775 3.16349 3.31999C3.03615 3.56991 3.00799 3.88 3.00177 4.40188C3.04646 4.37612 3.09189 4.35146 3.13803 4.32796C3.77976 4.00098 4.61984 4.00098 6.3 4.00098H11.7C12.1966 4.00098 12.6197 4.00098 12.9861 4.00942ZM3 7.90098V8.10098C3 8.47468 3 8.76527 3.01439 9.00098H3V11.101C3 11.9411 3 12.3611 3.16349 12.682C3.3073 12.9642 3.53677 13.1937 3.81901 13.3375C4.13988 13.501 4.55992 13.501 5.4 13.501H12.6C13.4401 13.501 13.8601 13.501 14.181 13.3375C14.4632 13.1937 14.6927 12.9642 14.8365 12.682C15 12.3611 15 11.9411 15 11.101V7.90098C15 7.0609 15 6.64086 14.8365 6.31999C14.6927 6.03775 14.4632 5.80828 14.181 5.66447C13.8601 5.50098 13.4401 5.50098 12.6 5.50098H5.4C4.55992 5.50098 4.13988 5.50098 3.81901 5.66447C3.53677 5.80828 3.3073 6.03775 3.16349 6.31999C3 6.64086 3 7.0609 3 7.90098ZM10.5 9.75098C10.5 9.33676 10.8358 9.00098 11.25 9.00098H12.75C13.1642 9.00098 13.5 9.33676 13.5 9.75098C13.5 10.1652 13.1642 10.501 12.75 10.501H11.25C10.8358 10.501 10.5 10.1652 10.5 9.75098Z"></path></g><defs><clipPath id="clip0_3676_1274"><rect width="16" height="16" fill="white" transform="translate(0.5 0.000976562)"></rect></clipPath></defs></svg>'),ys=t=>{const e=gi();return(()=>{const i=vs.cloneNode(!0),r=i.firstChild.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.accent))),i})()},xs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.6319 16.8719C38.3212 16.2041 36.7002 16.0478 34 16.0112V11C34 5.47715 29.5228 1 24 1C18.4772 1 14 5.47715 14 11V16.0112C11.2998 16.0478 9.6788 16.2041 8.36808 16.8719C6.86278 17.6389 5.63893 18.8628 4.87195 20.3681C4 22.0794 4 24.3196 4 28.8V32.2C4 36.6804 4 38.9206 4.87195 40.6319C5.63893 42.1372 6.86278 43.3611 8.36808 44.1281C10.0794 45 12.3196 45 16.8 45H31.2C35.6804 45 37.9206 45 39.6319 44.1281C41.1372 43.3611 42.3611 42.1372 43.1281 40.6319C44 38.9206 44 36.6804 44 32.2V28.8C44 24.3196 44 22.0794 43.1281 20.3681C42.3611 18.8628 41.1372 17.6389 39.6319 16.8719ZM31 11V16H17V11C17 7.13401 20.134 4 24 4C27.866 4 31 7.13401 31 11ZM7.54497 21.73C7 22.7996 7 24.1997 7 27V34C7 36.8003 7 38.2004 7.54497 39.27C8.02433 40.2108 8.78924 40.9757 9.73005 41.455C10.7996 42 12.1997 42 15 42H33C35.8003 42 37.2004 42 38.27 41.455C39.2108 40.9757 39.9757 40.2108 40.455 39.27C41 38.2004 41 36.8003 41 34V27C41 24.1997 41 22.7996 40.455 21.73C39.9757 20.7892 39.2108 20.0243 38.27 19.545C37.2004 19 35.8003 19 33 19H15C12.1997 19 10.7996 19 9.73005 19.545C8.78924 20.0243 8.02433 20.7892 7.54497 21.73ZM24 24C23.1716 24 22.5 24.6716 22.5 25.5V29.5C22.5 30.3284 23.1716 31 24 31C24.8284 31 25.5 30.3284 25.5 29.5V25.5C25.5 24.6716 24.8284 24 24 24Z"></path></svg>'),bs=t=>{const e=gi();return(()=>{const i=xs.cloneNode(!0),r=i.firstChild;return Wt((n=>{const s=t.class,o=t.fill||e.colors.icon.secondary;return s!==n._v$&&Ue(i,"class",n._v$=s),o!==n._v$2&&Ue(r,"fill",n._v$2=o),n}),{_v$:void 0,_v$2:void 0}),i})()},ws=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M37.485 37.3849C40.894 33.9506 43 29.2212 43 24C43 13.5066 34.4934 5 24 5C13.5066 5 5 13.5066 5 24C5 29.2213 7.1061 33.9507 10.5151 37.385C13.3583 32.9438 18.3354 30 24.0001 30C29.6647 30 34.6418 32.9437 37.485 37.3849ZM35.1809 39.3635C32.9143 35.5532 28.7554 33 24.0001 33C19.2448 33 15.0858 35.5533 12.8193 39.3636C15.9564 41.6506 19.8206 43 24 43C28.1795 43 32.0437 41.6505 35.1809 39.3635ZM24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM24 24C26.7614 24 29 21.7614 29 19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19C19 21.7614 21.2386 24 24 24ZM24 27C28.4183 27 32 23.4183 32 19C32 14.5817 28.4183 11 24 11C19.5817 11 16 14.5817 16 19C16 23.4183 19.5817 27 24 27Z"></path></svg>'),Ts=t=>{const e=gi();return(()=>{const i=ws.cloneNode(!0),r=i.firstChild;return Wt((n=>{const s=t.class,o=t.fill||e.colors.icon.secondary;return s!==n._v$&&Ue(i,"class",n._v$=s),o!==n._v$2&&Ue(r,"fill",n._v$2=o),n}),{_v$:void 0,_v$2:void 0}),i})()},Cs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M34.5607 4.43934C33.9749 3.85355 33.0251 3.85355 32.4393 4.43934C31.8536 5.02513 31.8536 5.97487 32.4393 6.56066L37.8787 12H10.5C9.67157 12 9 12.6716 9 13.5C9 14.3284 9.67157 15 10.5 15H37.8787L32.4393 20.4393C31.8536 21.0251 31.8536 21.9749 32.4393 22.5607C33.0251 23.1464 33.9749 23.1464 34.5607 22.5607L42.5607 14.5607C43.1464 13.9749 43.1464 13.0251 42.5607 12.4393L34.5607 4.43934ZM13.4393 25.4393C14.0251 24.8536 14.9749 24.8536 15.5607 25.4393C16.1464 26.0251 16.1464 26.9749 15.5607 27.5607L10.1213 33H37.5C38.3284 33 39 33.6716 39 34.5C39 35.3284 38.3284 36 37.5 36H10.1213L15.5607 41.4393C16.1464 42.0251 16.1464 42.9749 15.5607 43.5607C14.9749 44.1464 14.0251 44.1464 13.4393 43.5607L5.43934 35.5607C4.85355 34.9749 4.85355 34.0251 5.43934 33.4393L13.4393 25.4393Z"></path></svg>'),Ss=t=>{const e=gi();return(()=>{const i=Cs.cloneNode(!0),r=i.firstChild;return Wt((n=>{const s=t.class,o=t.fill||e.colors.icon.secondary;return s!==n._v$&&Ue(i,"class",n._v$=s),o!==n._v$2&&Ue(r,"fill",n._v$2=o),n}),{_v$:void 0,_v$2:void 0}),i})()},Es=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 12.002C1.75 9.20169 1.75 7.80156 2.29497 6.732C2.77433 5.79119 3.53924 5.02629 4.48005 4.54692C5.54961 4.00195 6.94974 4.00195 9.75 4.00195H17.25C20.0503 4.00195 21.4504 4.00195 22.52 4.54692C23.4608 5.02629 24.2257 5.79119 24.705 6.732C24.8256 6.96861 24.9195 7.2214 24.9926 7.50195H21.5C19.6377 7.50195 18.7065 7.50195 17.9609 7.77334C16.711 8.22828 15.7263 9.21291 15.2714 10.4629C15 11.2085 15 12.1396 15 14.002C15 15.8643 15 16.7954 15.2714 17.541C15.7263 18.791 16.711 19.7756 17.9609 20.2306C18.7065 20.502 19.6377 20.502 21.5 20.502H24.9926C24.9195 20.7825 24.8256 21.0353 24.705 21.2719C24.2257 22.2127 23.4608 22.9776 22.52 23.457C21.4504 24.002 20.0503 24.002 17.25 24.002H9.75C6.94974 24.002 5.54961 24.002 4.48005 23.457C3.53924 22.9776 2.77433 22.2127 2.29497 21.2719C1.75 20.2023 1.75 18.8022 1.75 16.002V12.002ZM16.4999 13.802C16.4999 12.1218 16.4999 11.2817 16.8269 10.64C17.1145 10.0755 17.5735 9.61656 18.138 9.32894C18.7797 9.00196 19.6198 9.00196 21.2999 9.00196H23.1999C24.8801 9.00196 25.7202 9.00196 26.3619 9.32894C26.9264 9.61656 27.3853 10.0755 27.673 10.64C27.9999 11.2817 27.9999 12.1218 27.9999 13.802V14.202C27.9999 15.8821 27.9999 16.7222 27.673 17.3639C27.3853 17.9284 26.9264 18.3874 26.3619 18.675C25.7202 19.002 24.8801 19.002 23.1999 19.002H21.2999C19.6198 19.002 18.7797 19.002 18.138 18.675C17.5735 18.3874 17.1145 17.9284 16.8269 17.3639C16.4999 16.7222 16.4999 15.8821 16.4999 14.202V13.802ZM22.4999 14.002C22.4999 14.9685 21.7164 15.752 20.7499 15.752C19.7834 15.752 18.9999 14.9685 18.9999 14.002C18.9999 13.0355 19.7834 12.252 20.7499 12.252C21.7164 12.252 22.4999 13.0355 22.4999 14.002Z"></path></svg>'),_s=t=>{const e=gi();return(()=>{const i=Es.cloneNode(!0),r=i.firstChild;return Wt((n=>{const s=t.class,o=t.fill||e.colors.constant.white;return s!==n._v$&&Ue(i,"class",n._v$=s),o!==n._v$2&&Ue(r,"fill",n._v$2=o),n}),{_v$:void 0,_v$2:void 0}),i})()},As=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M24.7803 7.21967C25.0732 7.51256 25.0732 7.98744 24.7803 8.28033L11.5303 21.5303C11.2374 21.8232 10.7626 21.8232 10.4697 21.5303L4.21967 15.2803C3.92678 14.9874 3.92678 14.5126 4.21967 14.2197C4.51256 13.9268 4.98744 13.9268 5.28033 14.2197L11 19.9393L23.7197 7.21967C24.0126 6.92678 24.4874 6.92678 24.7803 7.21967Z"></path></svg>'),Ps=t=>{const e=gi();return(()=>{const i=As.cloneNode(!0),r=i.firstChild;return Wt((n=>{const s=t.class,o=t.fill||e.colors.icon.secondary;return s!==n._v$&&Ue(i,"class",n._v$=s),o!==n._v$2&&Ue(r,"fill",n._v$2=o),n}),{_v$:void 0,_v$2:void 0}),i})()},Ms=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 10.0001C10.0016 8.02333 10.0267 6.98719 10.436 6.18404C10.8195 5.43139 11.4314 4.81947 12.184 4.43597C13.0397 4 14.1598 4 16.4 4H17.6C19.8402 4 20.9603 4 21.816 4.43597C22.5686 4.81947 23.1805 5.43139 23.564 6.18404C24 7.03969 24 8.15979 24 10.4V11.6C24 13.8402 24 14.9603 23.564 15.816C23.1805 16.5686 22.5686 17.1805 21.816 17.564C21.0128 17.9733 19.9767 17.9984 17.9999 17.9999C17.9984 19.9767 17.9733 21.0128 17.564 21.816C17.1805 22.5686 16.5686 23.1805 15.816 23.564C14.9603 24 13.8402 24 11.6 24H10.4C8.15979 24 7.03969 24 6.18404 23.564C5.43139 23.1805 4.81947 22.5686 4.43597 21.816C4 20.9603 4 19.8402 4 17.6V16.4C4 14.1598 4 13.0397 4.43597 12.184C4.81947 11.4314 5.43139 10.8195 6.18404 10.436C6.98719 10.0267 8.02333 10.0016 10.0001 10.0001ZM10 11.5H9.5C8.09987 11.5 7.3998 11.5 6.86502 11.7725C6.39462 12.0122 6.01217 12.3946 5.77248 12.865C5.5 13.3998 5.5 14.0999 5.5 15.5V18.5C5.5 19.9001 5.5 20.6002 5.77248 21.135C6.01217 21.6054 6.39462 21.9878 6.86502 22.2275C7.3998 22.5 8.09987 22.5 9.5 22.5H12.5C13.9001 22.5 14.6002 22.5 15.135 22.2275C15.6054 21.9878 15.9878 21.6054 16.2275 21.135C16.5 20.6002 16.5 19.9001 16.5 18.5V18H16.4C14.1598 18 13.0397 18 12.184 17.564C11.4314 17.1805 10.8195 16.5686 10.436 15.816C10 14.9603 10 13.8402 10 11.6V11.5ZM11.5 9.5C11.5 8.09987 11.5 7.3998 11.7725 6.86502C12.0122 6.39462 12.3946 6.01217 12.865 5.77248C13.3998 5.5 14.0999 5.5 15.5 5.5H18.5C19.9001 5.5 20.6002 5.5 21.135 5.77248C21.6054 6.01217 21.9878 6.39462 22.2275 6.86502C22.5 7.3998 22.5 8.09987 22.5 9.5V12.5C22.5 13.9001 22.5 14.6002 22.2275 15.135C21.9878 15.6054 21.6054 15.9878 21.135 16.2275C20.6002 16.5 19.9001 16.5 18.5 16.5H15.5C14.0999 16.5 13.3998 16.5 12.865 16.2275C12.3946 15.9878 12.0122 15.6054 11.7725 15.135C11.5 14.6002 11.5 13.9001 11.5 12.5V9.5Z"></path></svg>'),ks=t=>{const e=gi(),i=()=>t.fill||e.colors.icon.secondary;return(()=>{const t=Ms.cloneNode(!0),e=t.firstChild;return Wt((r=>{const n=i(),s=i();return n!==r._v$&&Ue(t,"fill",r._v$=n),s!==r._v$2&&Ue(e,"fill",r._v$2=s),r}),{_v$:void 0,_v$2:void 0}),t})()},Rs=Fe('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 4.12695C1 3.07754 1 2.55284 1.19202 2.14684C1.38986 1.72856 1.7266 1.39181 2.14489 1.19397C2.55088 1.00195 3.07559 1.00195 4.125 1.00195C5.17441 1.00195 5.69912 1.00195 6.10511 1.19397C6.5234 1.39181 6.86014 1.72856 7.05798 2.14684C7.25 2.55284 7.25 3.07754 7.25 4.12695C7.25 5.17636 7.25 5.70107 7.05798 6.10706C6.86014 6.52535 6.5234 6.8621 6.10511 7.05993C5.69912 7.25195 5.17441 7.25195 4.125 7.25195C3.07559 7.25195 2.55088 7.25195 2.14489 7.05993C1.7266 6.8621 1.38986 6.52535 1.19202 6.10706C1 5.70107 1 5.17636 1 4.12695ZM2.5 3.30195C2.5 3.02193 2.5 2.88191 2.5545 2.77496C2.60243 2.68088 2.67892 2.60439 2.773 2.55645C2.87996 2.50195 3.01997 2.50195 3.3 2.50195H4.95C5.23003 2.50195 5.37004 2.50195 5.477 2.55645C5.57108 2.60439 5.64757 2.68088 5.6955 2.77496C5.75 2.88191 5.75 3.02193 5.75 3.30195V4.95195C5.75 5.23198 5.75 5.37199 5.6955 5.47895C5.64757 5.57303 5.57108 5.64952 5.477 5.69746C5.37004 5.75195 5.23003 5.75195 4.95 5.75195H3.3C3.01997 5.75195 2.87996 5.75195 2.773 5.69746C2.67892 5.64952 2.60243 5.57303 2.5545 5.47895C2.5 5.37199 2.5 5.23198 2.5 4.95195V3.30195ZM1 11.877C1 10.8275 1 10.3028 1.19202 9.89684C1.38986 9.47856 1.7266 9.14181 2.14489 8.94397C2.55088 8.75195 3.07559 8.75195 4.125 8.75195C5.17441 8.75195 5.69912 8.75195 6.10511 8.94397C6.5234 9.14181 6.86014 9.47856 7.05798 9.89684C7.25 10.3028 7.25 10.8275 7.25 11.877C7.25 12.9264 7.25 13.4511 7.05798 13.8571C6.86014 14.2753 6.5234 14.6121 6.10511 14.8099C5.69912 15.002 5.17441 15.002 4.125 15.002C3.07559 15.002 2.55088 15.002 2.14489 14.8099C1.7266 14.6121 1.38986 14.2753 1.19202 13.8571C1 13.4511 1 12.9264 1 11.877ZM2.5 11.052C2.5 10.7719 2.5 10.6319 2.5545 10.525C2.60243 10.4309 2.67892 10.3544 2.773 10.3064C2.87996 10.252 3.01997 10.252 3.3 10.252H4.95C5.23003 10.252 5.37004 10.252 5.477 10.3064C5.57108 10.3544 5.64757 10.4309 5.6955 10.525C5.75 10.6319 5.75 10.7719 5.75 11.052V12.702C5.75 12.982 5.75 13.122 5.6955 13.2289C5.64757 13.323 5.57108 13.3995 5.477 13.4475C5.37004 13.502 5.23003 13.502 4.95 13.502H3.3C3.01997 13.502 2.87996 13.502 2.773 13.4475C2.67892 13.3995 2.60243 13.323 2.5545 13.2289C2.5 13.122 2.5 12.982 2.5 12.702V11.052ZM8.94202 2.14684C8.75 2.55284 8.75 3.07754 8.75 4.12695C8.75 5.17636 8.75 5.70107 8.94202 6.10706C9.13986 6.52535 9.4766 6.8621 9.89489 7.05993C10.3009 7.25195 10.8256 7.25195 11.875 7.25195C12.9244 7.25195 13.4491 7.25195 13.8551 7.05993C14.2734 6.8621 14.6101 6.52535 14.808 6.10706C15 5.70107 15 5.17636 15 4.12695C15 3.07754 15 2.55284 14.808 2.14684C14.6101 1.72856 14.2734 1.39181 13.8551 1.19397C13.4491 1.00195 12.9244 1.00195 11.875 1.00195C10.8256 1.00195 10.3009 1.00195 9.89489 1.19397C9.4766 1.39181 9.13986 1.72856 8.94202 2.14684ZM10.3045 2.77496C10.25 2.88191 10.25 3.02193 10.25 3.30195V4.95195C10.25 5.23198 10.25 5.37199 10.3045 5.47895C10.3524 5.57303 10.4289 5.64952 10.523 5.69746C10.63 5.75195 10.77 5.75195 11.05 5.75195H12.7C12.98 5.75195 13.12 5.75195 13.227 5.69746C13.3211 5.64952 13.3976 5.57303 13.4455 5.47895C13.5 5.37199 13.5 5.23198 13.5 4.95195V3.30195C13.5 3.02193 13.5 2.88191 13.4455 2.77496C13.3976 2.68088 13.3211 2.60439 13.227 2.55645C13.12 2.50195 12.98 2.50195 12.7 2.50195H11.05C10.77 2.50195 10.63 2.50195 10.523 2.55645C10.4289 2.60439 10.3524 2.68088 10.3045 2.77496ZM8.80727 9.13518C8.75 9.26242 8.75 9.4256 8.75 9.75195C8.75 10.0783 8.75 10.2415 8.80727 10.3687C8.87245 10.5136 8.9884 10.6295 9.13323 10.6947C9.26047 10.752 9.42365 10.752 9.75 10.752C10.0764 10.752 10.2395 10.752 10.3668 10.6947C10.5116 10.6295 10.6276 10.5136 10.6927 10.3687C10.75 10.2415 10.75 10.0783 10.75 9.75195C10.75 9.4256 10.75 9.26242 10.6927 9.13518C10.6276 8.99035 10.5116 8.8744 10.3668 8.80922C10.2395 8.75195 10.0764 8.75195 9.75 8.75195C9.42365 8.75195 9.26047 8.75195 9.13323 8.80922C8.9884 8.8744 8.87245 8.99035 8.80727 9.13518ZM10.87 11.8771C10.87 11.546 10.87 11.3805 10.9289 11.2517C10.9938 11.1098 11.1077 10.9959 11.2497 10.931C11.3784 10.8721 11.5439 10.8721 11.875 10.8721C12.2061 10.8721 12.3716 10.8721 12.5003 10.931C12.6423 10.9959 12.7562 11.1098 12.8211 11.2517C12.88 11.3805 12.88 11.546 12.88 11.8771C12.88 12.2081 12.88 12.3737 12.8211 12.5024C12.7562 12.6444 12.6423 12.7583 12.5003 12.8232C12.3716 12.8821 12.2061 12.8821 11.875 12.8821C11.5439 12.8821 11.3784 12.8821 11.2497 12.8232C11.1077 12.7583 10.9938 12.6444 10.9289 12.5024C10.87 12.3737 10.87 12.2081 10.87 11.8771ZM8.80727 13.3852C8.75 13.5124 8.75 13.6756 8.75 14.002C8.75 14.3283 8.75 14.4915 8.80727 14.6187C8.87245 14.7636 8.9884 14.8795 9.13323 14.9447C9.26047 15.002 9.42365 15.002 9.75 15.002C10.0764 15.002 10.2395 15.002 10.3668 14.9447C10.5116 14.8795 10.6276 14.7636 10.6927 14.6187C10.75 14.4915 10.75 14.3283 10.75 14.002C10.75 13.6756 10.75 13.5124 10.6927 13.3852C10.6276 13.2404 10.5116 13.1244 10.3668 13.0592C10.2395 13.002 10.0764 13.002 9.75 13.002C9.42365 13.002 9.26047 13.002 9.13323 13.0592C8.9884 13.1244 8.87245 13.2404 8.80727 13.3852ZM13 9.75195C13 9.4256 13 9.26242 13.0573 9.13518C13.1224 8.99035 13.2384 8.8744 13.3832 8.80922C13.5105 8.75195 13.6736 8.75195 14 8.75195C14.3264 8.75195 14.4895 8.75195 14.6168 8.80922C14.7616 8.8744 14.8776 8.99035 14.9427 9.13518C15 9.26242 15 9.4256 15 9.75195C15 10.0783 15 10.2415 14.9427 10.3687C14.8776 10.5136 14.7616 10.6295 14.6168 10.6947C14.4895 10.752 14.3264 10.752 14 10.752C13.6736 10.752 13.5105 10.752 13.3832 10.6947C13.2384 10.6295 13.1224 10.5136 13.0573 10.3687C13 10.2415 13 10.0783 13 9.75195ZM13.0573 13.3852C13 13.5124 13 13.6756 13 14.002C13 14.3283 13 14.4915 13.0573 14.6187C13.1224 14.7636 13.2384 14.8795 13.3832 14.9447C13.5105 15.002 13.6736 15.002 14 15.002C14.3264 15.002 14.4895 15.002 14.6168 14.9447C14.7616 14.8795 14.8776 14.7636 14.9427 14.6187C15 14.4915 15 14.3283 15 14.002C15 13.6756 15 13.5124 14.9427 13.3852C14.8776 13.2404 14.7616 13.1244 14.6168 13.0592C14.4895 13.002 14.3264 13.002 14 13.002C13.6736 13.002 13.5105 13.002 13.3832 13.0592C13.2384 13.1244 13.1224 13.2404 13.0573 13.3852Z"></path></svg>'),Os=t=>{const e=gi();return(()=>{const i=Rs.cloneNode(!0),r=i.firstChild;return Wt((()=>Ue(r,"fill",t.fill||e.colors.icon.secondary))),i})()},Ls={m:"16px",s:"12px",none:"0"},Is={m:"6px",s:"6px",none:"0"},Bs=vi.div`
    width: 60px;
    height: 60px;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: ${t=>Ls[t.theme.borderRadius]};
    background-color: ${t=>t.theme.colors.background.tint};
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    gap: 4px;
`,Ds=vi(_n)`
    width: 20px;
    height: 20px;
    border-radius: ${t=>Is[t.theme.borderRadius]};
`,Fs=t=>xe(In,{get name(){return t.labelLine1},get secondLine(){return t.labelLine2},get icon(){return xe(Bs,{get children(){return xe(Ee,{each:[0,1,2,3],children:e=>xe(Ds,{get src(){return t.images[e]}})})}})},onClick:()=>t.onClick()}),Us="telegram-wallet",Ns="https://raw.githubusercontent.com/ton-connect/sdk/main/assets/ton-icon-48.png",zs="https://raw.githubusercontent.com/ton-connect/sdk/main/assets/tg.png",js=t=>{const[e]=wn();return Gt((()=>{const i=Gt((()=>t.wallet.appName===Us));return()=>i()?xe(In,{get icon(){return t.wallet.imageUrl},get name(){return e("walletItem.walletOn",{},"Wallet On")},secondLine:"Telegram",get badgeUrl(){return zs},onClick:()=>t.onClick()}):xe(In,{get icon(){return t.wallet.imageUrl},get name(){return t.wallet.name},get secondLine(){return(()=>{if(t.wallet.appName!==Us)return"isPreferred"in t.wallet&&t.wallet.isPreferred?e("walletItem.recent",{},"Recent"):J(t.wallet)?e("walletItem.installed",{},"Installed"):"Tonkeeper"===t.wallet.name?e("walletItem.popular",{},"Popular"):void 0})()},secondLineColorPrimary:!1,onClick:()=>t.onClick()})})())},Ys=vi.div`
    width: 100%;
    overflow-y: auto;
    max-height: ${t=>t.maxHeight};

    scrollbar-width: none;
    &&::-webkit-scrollbar {
        display: none;
    }

    &&::-webkit-scrollbar-track {
        background: transparent;
    }

    &&::-webkit-scrollbar-thumb {
        display: none;
    }
`,Vs=vi.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.08;
    background: ${t=>t.isShown?t.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${wr("mobile")} {
        width: 100%;
        margin: 0;
    }
`,[Xs,Ws]=Vt((null==(ht=Mi())?void 0:ht.innerHeight)||0);Mi()&&window.addEventListener("resize",(()=>Ws(window.innerHeight)));const[Hs,Gs]=Vt(br("mobile"));Mi()&&window.addEventListener("resize",(()=>Gs(br("mobile"))));const Ks=t=>{const[e,i]=Vt(!1);return[xe(Vs,{get isShown(){return e()}}),xe(Ys,{get maxHeight(){return void 0!==t.maxHeight?`${t.maxHeight}px`:Xs()-(Hs()?150:200)+"px"},onScroll:t=>{i(t.target.scrollTop>0)},get class(){return t.class},get children(){return t.children}})]},Zs=vi.a`
    display: block;
    text-decoration: unset;
`,qs=t=>xe(Zs,Ce({get href(){return t.href},get target(){return t.blank?"_blank":"_self"},get class(){return t.class}},(()=>t.blank?{rel:"noreferrer noopener"}:{}),{get children(){return t.children}})),$s=Qt(),Qs=Fe('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.76228 2.09998H10.2378C11.0458 2.09997 11.7067 2.09996 12.2438 2.14384C12.7997 2.18926 13.3017 2.28614 13.7706 2.52505C14.5045 2.89896 15.1011 3.49558 15.475 4.22941C15.7139 4.6983 15.8108 5.20038 15.8562 5.75629C15.9001 6.29337 15.9001 6.95422 15.9001 7.76227V8.1H16.2377C17.0457 8.09999 17.7066 8.09998 18.2437 8.14386C18.7996 8.18928 19.3017 8.28616 19.7705 8.52507C20.5044 8.89898 21.101 9.4956 21.4749 10.2294C21.7138 10.6983 21.8107 11.2004 21.8561 11.7563C21.9 12.2934 21.9 12.9542 21.9 13.7623V16.2377C21.9 17.0458 21.9 17.7066 21.8561 18.2437C21.8107 18.7996 21.7138 19.3017 21.4749 19.7706C21.101 20.5044 20.5044 21.101 19.7705 21.4749C19.3017 21.7138 18.7996 21.8107 18.2437 21.8561C17.7066 21.9 17.0458 21.9 16.2378 21.9H13.7623C12.9543 21.9 12.2934 21.9 11.7563 21.8561C11.2004 21.8107 10.6983 21.7138 10.2294 21.4749C9.49561 21.101 8.89898 20.5044 8.52508 19.7706C8.28616 19.3017 8.18928 18.7996 8.14386 18.2437C8.09998 17.7066 8.09999 17.0458 8.1 16.2377V15.9H7.76227C6.95426 15.9 6.29335 15.9 5.75629 15.8561C5.20038 15.8107 4.6983 15.7138 4.22941 15.4749C3.49558 15.101 2.89896 14.5044 2.52505 13.7705C2.28614 13.3017 2.18926 12.7996 2.14384 12.2437C2.09996 11.7066 2.09997 11.0458 2.09998 10.2377V7.76228C2.09997 6.95424 2.09996 6.29336 2.14384 5.75629C2.18926 5.20038 2.28614 4.6983 2.52505 4.22941C2.89896 3.49558 3.49558 2.89896 4.22941 2.52505C4.6983 2.28614 5.20038 2.18926 5.75629 2.14384C6.29336 2.09996 6.95425 2.09997 7.76228 2.09998ZM8.1 14.1V13.7623C8.09999 12.9542 8.09998 12.2934 8.14386 11.7563C8.18928 11.2004 8.28616 10.6983 8.52508 10.2294C8.89898 9.4956 9.49561 8.89898 10.2294 8.52507C10.6983 8.28616 11.2004 8.18928 11.7563 8.14386C12.2934 8.09998 12.9542 8.09999 13.7623 8.1H14.1001V7.79998C14.1001 6.94505 14.0994 6.35798 14.0622 5.90287C14.0259 5.45827 13.9593 5.21944 13.8712 5.0466C13.6699 4.65146 13.3486 4.3302 12.9535 4.12886C12.7806 4.04079 12.5418 3.97419 12.0972 3.93786C11.6421 3.90068 11.055 3.89998 10.2001 3.89998H7.79998C6.94505 3.89998 6.35798 3.90068 5.90287 3.93786C5.45827 3.97419 5.21944 4.04079 5.0466 4.12886C4.65146 4.3302 4.3302 4.65146 4.12886 5.0466C4.04079 5.21944 3.97419 5.45827 3.93786 5.90287C3.90068 6.35798 3.89998 6.94505 3.89998 7.79998V10.2C3.89998 11.0549 3.90068 11.642 3.93786 12.0971C3.97419 12.5417 4.04079 12.7805 4.12886 12.9534C4.3302 13.3485 4.65146 13.6698 5.0466 13.8711C5.21944 13.9592 5.45827 14.0258 5.90287 14.0621C6.35798 14.0993 6.94505 14.1 7.79998 14.1H8.1ZM11.0466 10.1289C11.2195 10.0408 11.4583 9.97421 11.9029 9.93788C12.358 9.9007 12.9451 9.9 13.8 9.9H16.2C17.0549 9.9 17.642 9.9007 18.0971 9.93788C18.5417 9.97421 18.7805 10.0408 18.9534 10.1289C19.3485 10.3302 19.6698 10.6515 19.8711 11.0466C19.9592 11.2195 20.0258 11.4583 20.0621 11.9029C20.0993 12.358 20.1 12.9451 20.1 13.8V16.2C20.1 17.0549 20.0993 17.642 20.0621 18.0971C20.0258 18.5417 19.9592 18.7805 19.8711 18.9534C19.6698 19.3485 19.3485 19.6698 18.9534 19.8711C18.7805 19.9592 18.5417 20.0258 18.0971 20.0621C17.642 20.0993 17.0549 20.1 16.2 20.1H13.8C12.9451 20.1 12.358 20.0993 11.9029 20.0621C11.4583 20.0258 11.2195 19.9592 11.0466 19.8711C10.6515 19.6698 10.3302 19.3485 10.1289 18.9534C10.0408 18.7805 9.97421 18.5417 9.93788 18.0971C9.9007 17.642 9.9 17.0549 9.9 16.2V13.8C9.9 12.9451 9.9007 12.358 9.93788 11.9029C9.97421 11.4583 10.0408 11.2195 10.1289 11.0466C10.3302 10.6515 10.6515 10.3302 11.0466 10.1289Z"></path></svg>'),Js=t=>{const e=gi();return(()=>{const i=Qs.cloneNode(!0),r=i.firstChild;return Wt((n=>{const s=t.class,o=t.fill||e.colors.icon.primary;return s!==n._v$&&Ue(i,"class",n._v$=s),o!==n._v$2&&Ue(r,"fill",n._v$2=o),n}),{_v$:void 0,_v$2:void 0}),i})()},to=Fe('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7624 3.10001C7.95435 3.1 7.29349 3.09999 6.75642 3.14387C6.2005 3.18929 5.69842 3.28617 5.22954 3.52508C4.4957 3.89899 3.89908 4.49561 3.52517 5.22944C3.28626 5.69833 3.18938 6.20041 3.14396 6.75632C3.10008 7.2934 3.10009 7.95424 3.1001 8.76229V15.2377C3.10009 16.0458 3.10008 16.7066 3.14396 17.2437C3.18938 17.7996 3.28626 18.3017 3.52517 18.7706C3.89908 19.5044 4.4957 20.101 5.22954 20.4749C5.69842 20.7138 6.2005 20.8107 6.75642 20.8561C7.29349 20.9 7.95434 20.9 8.76239 20.9H12.0001C12.4972 20.9 12.9001 20.4971 12.9001 20C12.9001 19.503 12.4972 19.1 12.0001 19.1H8.8001C7.94517 19.1 7.3581 19.0993 6.90299 19.0621C6.45839 19.0258 6.21956 18.9592 6.04672 18.8711C5.65158 18.6698 5.33032 18.3485 5.12898 17.9534C5.04092 17.7805 4.97431 17.5417 4.93798 17.0971C4.9008 16.642 4.9001 16.0549 4.9001 15.2V8.80001C4.9001 7.94508 4.9008 7.35801 4.93798 6.9029C4.97431 6.4583 5.04092 6.21947 5.12898 6.04663C5.33032 5.65149 5.65158 5.33023 6.04672 5.12889C6.21956 5.04082 6.45839 4.97422 6.90299 4.93789C7.3581 4.90071 7.94517 4.90001 8.8001 4.90001H12.0001C12.4972 4.90001 12.9001 4.49706 12.9001 4.00001C12.9001 3.50295 12.4972 3.10001 12.0001 3.10001H8.7624Z"></path><path d="M17.6364 7.3636C17.2849 7.01212 16.7151 7.01212 16.3636 7.3636C16.0121 7.71507 16.0121 8.28492 16.3636 8.63639L18.8272 11.1H9.00001C8.50295 11.1 8.10001 11.5029 8.10001 12C8.10001 12.497 8.50295 12.9 9.00001 12.9H18.8272L16.3636 15.3636C16.0121 15.7151 16.0121 16.2849 16.3636 16.6364C16.7151 16.9879 17.2849 16.9879 17.6364 16.6364L21.6364 12.6364C21.9879 12.2849 21.9879 11.7151 21.6364 11.3636L17.6364 7.3636Z"></path></svg>'),eo=t=>{const e=gi(),i=()=>t.fill||e.colors.icon.primary;return(()=>{const t=to.cloneNode(!0),e=t.firstChild,r=e.nextSibling;return Wt((t=>{const n=i(),s=i();return n!==t._v$&&Ue(e,"fill",t._v$=n),s!==t._v$2&&Ue(r,"fill",t._v$2=s),t}),{_v$:void 0,_v$2:void 0}),t})()},io={m:"8px",s:"4px",none:"0"},ro={m:"16px",s:"8px",none:"0"},no=vi.div`
    width: 256px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${t=>ro[t.theme.borderRadius]};

    background-color: ${t=>t.theme.colors.background.primary}
           
    color: ${t=>t.theme.colors.text.primary}
`,so=vi.ul`
    background-color: ${t=>t.theme.colors.background.primary};
    padding: 8px;
`,oo=vi.button`
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding-left: 8px;
    width: 100%;

    background-color: ${t=>t.theme.colors.background.primary};
    border: none;
    border-radius: ${t=>io[t.theme.borderRadius]};
    cursor: pointer;

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${t=>t.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,ao=Fe("<li></li>"),lo=t=>xe(Cn,{get translationKey(){return t.translationKey},fontSize:"15px",fontWeight:"590",get children(){return t.children}}),ho={m:"16px",s:"8px",none:"0"},uo=vi.div`
    width: 256px;
    padding: 12px 16px;
    display: flex;
    gap: 9px;

    background-color: ${t=>t.theme.colors.background.primary};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: ${t=>ho[t.theme.borderRadius]};
`,co=vi.div`
    width: 192px;

    > h3 {
        font-size: 15px;
    }
`,fo=vi(Cn)`
    margin-top: 4px;
    color: ${t=>t.theme.colors.text.secondary};
`,po=t=>{const e=Ar(t);return xe(uo,Ce({get class(){return t.class},"data-tc-notification":"true"},e,{get children(){return[xe(co,{get children(){return[xe(zn,{get translationKey(){return t.header.translationKey},get translationValues(){return t.header.translationValues},get children(){return t.children}}),xe(_e,{get when(){return t.text},get children(){return xe(fo,{get translationKey(){return t.text.translationKey},get translationValues(){return t.text.translationValues}})}})]}}),Gt((()=>t.icon))]}}))},go=vi(is)`
    align-self: center;
`,mo=t=>{const e=Jt($s),[i]=wn();return xe(po,{get header(){return{translationKey:"notifications.confirm.header",translationValues:{name:e.wallet&&"name"in e.wallet?e.wallet.name:i("common.yourWallet",{},"Your wallet")}}},get class(){return t.class},get icon(){return xe(go,{})},"data-tc-notification-confirm":"true",children:"Confirm operation in your wallet"})},vo=vi(Qn)`
    margin-top: 2px;
`,yo=t=>xe(po,{header:{translationKey:"notifications.transactionCanceled.header"},text:{translationKey:"notifications.transactionCanceled.text"},get icon(){return xe(vo,{size:"xs"})},get class(){return t.class},"data-tc-notification-tx-cancelled":"true",children:"Transaction cancelled"}),xo=vi(Kn)`
    margin-top: 2px;
`,bo=t=>xe(po,{header:{translationKey:"notifications.transactionSent.header"},text:{translationKey:"notifications.transactionSent.text"},get icon(){return xe(xo,{})},get class(){return t.class},"data-tc-notification-tx-sent":"true",children:"Transaction sent"}),wo=ci`
    transform: translateY(-8px);
    margin-bottom: 12px;
`,To=Fe('<div data-tc-list-notifications="true"></div>'),Co=vi(Pr)`
    background-color: ${t=>t.theme.colors.connectButton.background};
    color: ${t=>t.theme.colors.connectButton.foreground};
    box-shadow: ${t=>`0 4px 24px ${Ci(t.theme.colors.constant.black,.16)}`};
    padding: 8px 16px 8px 12px;

    display: flex;
    align-items: center;
    gap: 4px;
    height: 40px;
`,So=vi(Co)`
    padding: 12px 16px;
    min-width: 148px;
    justify-content: center;
    background-color: ${t=>t.theme.colors.background.primary};
`,Eo=vi(Pr)`
    min-width: 148px;
    height: 40px;

    background-color: ${t=>t.theme.colors.background.primary};
    color: ${t=>t.theme.colors.connectButton.foreground};
    box-shadow: ${t=>`0 4px 24px ${Ci(t.theme.colors.constant.black,.16)}`};

    display: flex;
    align-items: center;
    justify-content: center;
`,_o=vi(is)`
    height: 18px;
    width: 18px;
`,Ao=vi.div`
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`,Po=vi((t=>{const e=Jt($s),[i,r]=Vt(!1);return xe(no,{ref(e){const i=t.ref;"function"==typeof i?i(e):t.ref=e},get class(){return t.class},"data-tc-dropdown":"true",get children(){return xe(so,{get children(){return[(()=>{const t=ao.cloneNode(!0);return Ye(t,xe(oo,{onClick:()=>_t(void 0,null,(function*(){const t=ot(e.account.address,e.account.chain===o.TESTNET);yield mn(t),r(!0),setTimeout((()=>r(!1)),1e3)})),get children(){return[xe(Js,{}),xe(_e,{get when(){return!i()},get children(){return xe(lo,{translationKey:"button.dropdown.copy",children:"Copy address"})}}),xe(_e,{get when(){return i()},get children(){return xe(lo,{translationKey:"button.dropdown.copied",children:"Address copied!"})}})]}})),t})(),(()=>{const i=ao.cloneNode(!0);return Ye(i,xe(oo,{onClick:()=>(e.disconnect(),void t.onClose()),get children(){return[xe(eo,{}),xe(lo,{translationKey:"button.dropdown.disconnect",children:"Disconnect"})]}})),i})()]}})}})}))`
    box-sizing: border-box;
    overflow: hidden;
    margin-top: 12px;
`,Mo=vi((t=>{const e=[],[i,r]=Vt([]);let n=-1;return Ht(function(t,i,s){const o=Array.isArray(t);let a,l=s;return i=>{let s;if(o){s=Array(t.length);for(let e=0;e<t.length;e++)s[e]=t[e]()}else s=t();if(l)return void(l=!1);const h=Zt((()=>(t=>{if(t&&t.showNotification){n++;const i=n;r((e=>e.filter((t=>"confirm-transaction"!==t.action)).concat({id:i,action:t.name}))),e.push(setTimeout((()=>r((t=>t.filter((t=>t.id!==i))))),4500))}})(s)));return a=s,h}}(ji)),qt((()=>{e.forEach(clearTimeout)})),(()=>{const e=To.cloneNode(!0);return Ye(e,xe(Or,{onBeforeEnter:t=>{t.animate([{opacity:0,transform:"translateY(0)"},{opacity:1,transform:"translateY(-8px)"}],{duration:200})},onExit:(t,e)=>{t.animate([{opacity:1,transform:"translateY(-8px)"},{opacity:0,transform:"translateY(-30px)"}],{duration:200}).finished.then(e)},get children(){return xe(Ee,{get each(){return i()},children:t=>xe(Ae,{get children(){return[xe(Pe,{get when(){return"transaction-sent"===t.action},get children(){return xe(bo,{class:wo})}}),xe(Pe,{get when(){return"transaction-canceled"===t.action},get children(){return xe(yo,{class:wo})}}),xe(Pe,{get when(){return"confirm-transaction"===t.action},get children(){return xe(mo,{class:wo})}})]}})})}})),Wt((()=>Ne(e,t.class))),e})()}))`
    > div:first-child {
        margin-top: 20px;
    }
`;function ko(t){return t.split("-")[0]}function Ro(t,e,i){let{reference:r,floating:n}=t;const s=r.x+r.width/2-n.width/2,o=r.y+r.height/2-n.height/2,a=function(t){return["top","bottom"].includes(ko(t))?"x":"y"}(e),l="y"===a?"height":"width",h=r[l]/2-n[l]/2,u="x"===a;let c;switch(ko(e)){case"top":c={x:s,y:r.y-n.height};break;case"bottom":c={x:s,y:r.y+r.height};break;case"right":c={x:r.x+r.width,y:o};break;case"left":c={x:r.x-n.width,y:o};break;default:c={x:r.x,y:r.y}}switch(function(t){return t.split("-")[1]}(e)){case"start":c[a]-=h*(i&&u?-1:1);break;case"end":c[a]+=h*(i&&u?-1:1)}return c}function Oo(t){return St(Ct({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function Lo(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Io(t){return Lo(t).getComputedStyle(t)}function Bo(t){return zo(t)?(t.nodeName||"").toLowerCase():""}let Do;function Fo(){if(Do)return Do;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(Do=t.brands.map((t=>t.brand+"/"+t.version)).join(" "),Do):navigator.userAgent}function Uo(t){return t instanceof Lo(t).HTMLElement}function No(t){return t instanceof Lo(t).Element}function zo(t){return t instanceof Lo(t).Node}function jo(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Lo(t).ShadowRoot||t instanceof ShadowRoot)}function Yo(t){const{overflow:e,overflowX:i,overflowY:r,display:n}=Io(t);return/auto|scroll|overlay|hidden/.test(e+r+i)&&!["inline","contents"].includes(n)}function Vo(t){return["table","td","th"].includes(Bo(t))}function Xo(t){const e=/firefox/i.test(Fo()),i=Io(t),r=i.backdropFilter||i.WebkitBackdropFilter;return"none"!==i.transform||"none"!==i.perspective||!!r&&"none"!==r||e&&"filter"===i.willChange||e&&!!i.filter&&"none"!==i.filter||["transform","perspective"].some((t=>i.willChange.includes(t)))||["paint","layout","strict","content"].some((t=>{const e=i.contain;return null!=e&&e.includes(t)}))}function Wo(){return!/^((?!chrome|android).)*safari/i.test(Fo())}function Ho(t){return["html","body","#document"].includes(Bo(t))}const Go=Math.min,Ko=Math.max,Zo=Math.round,qo={x:1,y:1};function $o(t){const e=!No(t)&&t.contextElement?t.contextElement:No(t)?t:null;if(!e)return qo;const i=e.getBoundingClientRect(),r=Io(e);if("border-box"!==r.boxSizing)return Uo(e)?{x:e.offsetWidth>0&&Zo(i.width)/e.offsetWidth||1,y:e.offsetHeight>0&&Zo(i.height)/e.offsetHeight||1}:qo;let n=i.width/parseFloat(r.width),s=i.height/parseFloat(r.height);return n&&Number.isFinite(n)||(n=1),s&&Number.isFinite(s)||(s=1),{x:n,y:s}}function Qo(t,e,i,r){var n,s,o,a;void 0===e&&(e=!1),void 0===i&&(i=!1);const l=t.getBoundingClientRect();let h=qo;e&&(r?No(r)&&(h=$o(r)):h=$o(t));const u=No(t)?Lo(t):window,c=!Wo()&&i,d=(l.left+(c&&null!=(n=null==(s=u.visualViewport)?void 0:s.offsetLeft)?n:0))/h.x,f=(l.top+(c&&null!=(o=null==(a=u.visualViewport)?void 0:a.offsetTop)?o:0))/h.y,p=l.width/h.x,g=l.height/h.y;return{width:p,height:g,top:f,right:d+p,bottom:f+g,left:d,x:d,y:f}}function Jo(t){return((zo(t)?t.ownerDocument:t.document)||window.document).documentElement}function ta(t){return No(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ea(t){return Qo(Jo(t)).left+ta(t).scrollLeft}function ia(t,e,i){const r=Uo(e),n=Jo(e),s=Qo(t,!0,"fixed"===i,e);let o={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(r||!r&&"fixed"!==i)if(("body"!==Bo(e)||Yo(n))&&(o=ta(e)),Uo(e)){const t=Qo(e,!0);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else n&&(a.x=ea(n));return{x:s.left+o.scrollLeft-a.x,y:s.top+o.scrollTop-a.y,width:s.width,height:s.height}}function ra(t){if("html"===Bo(t))return t;const e=t.assignedSlot||t.parentNode||(jo(t)?t.host:null)||Jo(t);return jo(e)?e.host:e}function na(t){return Uo(t)&&"fixed"!==Io(t).position?t.offsetParent:null}function sa(t){const e=Lo(t);let i=na(t);for(;i&&Vo(i)&&"static"===Io(i).position;)i=na(i);return i&&("html"===Bo(i)||"body"===Bo(i)&&"static"===Io(i).position&&!Xo(i))?e:i||function(t){let e=ra(t);for(;Uo(e)&&!Ho(e);){if(Xo(e))return e;e=ra(e)}return null}(t)||e}function oa(t){const e=ra(t);return Ho(e)?t.ownerDocument.body:Uo(e)&&Yo(e)?e:oa(e)}function aa(t,e){var i;void 0===e&&(e=[]);const r=oa(t),n=r===(null==(i=t.ownerDocument)?void 0:i.body),s=Lo(r);return n?e.concat(s,s.visualViewport||[],Yo(r)?r:[]):e.concat(r,aa(r))}function la(t,e,i){return"viewport"===e?Oo(function(t,e){const i=Lo(t),r=Jo(t),n=i.visualViewport;let s=r.clientWidth,o=r.clientHeight,a=0,l=0;if(n){s=n.width,o=n.height;const t=Wo();(t||!t&&"fixed"===e)&&(a=n.offsetLeft,l=n.offsetTop)}return{width:s,height:o,x:a,y:l}}(t,i)):No(e)?function(t,e){const i=Qo(t,!0,"fixed"===e),r=i.top+t.clientTop,n=i.left+t.clientLeft,s=Uo(t)?$o(t):{x:1,y:1},o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=n*s.x,h=r*s.y;return{top:h,left:l,right:l+o,bottom:h+a,x:l,y:h,width:o,height:a}}(e,i):Oo(function(t){var e;const i=Jo(t),r=ta(t),n=null==(e=t.ownerDocument)?void 0:e.body,s=Ko(i.scrollWidth,i.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),o=Ko(i.scrollHeight,i.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);let a=-r.scrollLeft+ea(t);const l=-r.scrollTop;return"rtl"===Io(n||i).direction&&(a+=Ko(i.clientWidth,n?n.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}(Jo(t)))}const ha={getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:r,strategy:n}=t;const s=[..."clippingAncestors"===i?function(t,e){const i=e.get(t);if(i)return i;let r=aa(t).filter((t=>No(t)&&"body"!==Bo(t))),n=null;const s="fixed"===Io(t).position;let o=s?ra(t):t;for(;No(o)&&!Ho(o);){const t=Io(o),e=Xo(o);(s?e||n:e||"static"!==t.position||!n||!["absolute","fixed"].includes(n.position))?n=t:r=r.filter((t=>t!==o)),o=ra(o)}return e.set(t,r),r}(e,this._c):[].concat(i),r],o=s[0],a=s.reduce(((t,i)=>{const r=la(e,i,n);return t.top=Ko(r.top,t.top),t.right=Go(r.right,t.right),t.bottom=Go(r.bottom,t.bottom),t.left=Ko(r.left,t.left),t}),la(e,o,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:i,strategy:r}=t;const n=Uo(i),s=Jo(i);if(i===s)return e;let o={scrollLeft:0,scrollTop:0},a={x:1,y:1};const l={x:0,y:0};if((n||!n&&"fixed"!==r)&&(("body"!==Bo(i)||Yo(s))&&(o=ta(i)),Uo(i))){const t=Qo(i);a=$o(i),l.x=t.x+i.clientLeft,l.y=t.y+i.clientTop}return{width:e.width*a.x,height:e.height*a.y,x:e.x*a.x-o.scrollLeft*a.x+l.x,y:e.y*a.y-o.scrollTop*a.y+l.y}},isElement:No,getDimensions:function(t){if(Uo(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=Qo(t);return{width:e.width,height:e.height}},getOffsetParent:sa,getDocumentElement:Jo,getScale:$o,getElementRects(t){return _t(this,null,(function*(){let{reference:e,floating:i,strategy:r}=t;const n=this.getOffsetParent||sa,s=this.getDimensions;return{reference:ia(e,yield n(i),r),floating:Ct({x:0,y:0},yield s(i))}}))},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===Io(t).direction};function ua(t,e,i,r){void 0===r&&(r={});const{ancestorScroll:n=!0,ancestorResize:s=!0,elementResize:o=!0,animationFrame:a=!1}=r,l=n&&!a,h=l||s?[...No(t)?aa(t):t.contextElement?aa(t.contextElement):[],...aa(e)]:[];h.forEach((t=>{l&&t.addEventListener("scroll",i,{passive:!0}),s&&t.addEventListener("resize",i)}));let u,c=null;if(o){let r=!0;c=new ResizeObserver((()=>{r||i(),r=!1})),No(t)&&!a&&c.observe(t),No(t)||!t.contextElement||a||c.observe(t.contextElement),c.observe(e)}let d=a?Qo(t):null;return a&&function e(){const r=Qo(t);!d||r.x===d.x&&r.y===d.y&&r.width===d.width&&r.height===d.height||i(),d=r,u=requestAnimationFrame(e)}(),i(),()=>{var t;h.forEach((t=>{l&&t.removeEventListener("scroll",i),s&&t.removeEventListener("resize",i)})),null==(t=c)||t.disconnect(),c=null,a&&cancelAnimationFrame(u)}}const ca=Fe('<tc-root data-tc-dropdown-container="true"></tc-root>'),da=()=>{const t=gi(),e=Jt(Wi),i=Jt($s),[r,n]=Vt(!1),[s,a]=Vt(e.account),[l,h]=Vt(!0);let u;const[c,d]=Vt(),[f,p]=Vt(),g=function(t,e,i){let r=()=>{var t;return null!=(t=null==i?void 0:i.placement)?t:"bottom"},n=()=>{var t;return null!=(t=null==i?void 0:i.strategy)?t:"absolute"},[s,o]=Vt({x:null,y:null,placement:r(),strategy:n(),middlewareData:{}}),[a,l]=Vt();Ht((()=>{let t=a();if(t)throw t.value}));let h=Gt((()=>(t(),e(),{})));function u(){let s=t(),a=e();if(s&&a){let t=h();((t,e,i)=>{const r=new Map,n=Ct({platform:ha},i),s=St(Ct({},n.platform),{_c:r});return((t,e,i)=>_t(void 0,null,(function*(){const{placement:r="bottom",strategy:n="absolute",middleware:s=[],platform:o}=i,a=s.filter(Boolean),l=yield null==o.isRTL?void 0:o.isRTL(e);if("production"!=={}.NODE_ENV){if(null==o&&console.error(["Floating UI: `platform` property was not passed to config. If you","want to use Floating UI on the web, install @floating-ui/dom","instead of the /core package. Otherwise, you can create your own","`platform`: https://floating-ui.com/docs/platform"].join(" ")),a.filter((t=>{let{name:e}=t;return"autoPlacement"===e||"flip"===e})).length>1)throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware","detected. This will lead to an infinite loop. Ensure only one of","either has been passed to the `middleware` array."].join(" "));t&&e||console.error(["Floating UI: The reference and/or floating element was not defined","when `computePosition()` was called. Ensure that both elements have","been created and can be measured."].join(" "))}let h=yield o.getElementRects({reference:t,floating:e,strategy:n}),{x:u,y:c}=Ro(h,r,l),d=r,f={},p=0;for(let i=0;i<a.length;i++){const{name:s,fn:g}=a[i],{x:m,y:v,data:y,reset:x}=yield g({x:u,y:c,initialPlacement:r,placement:d,strategy:n,middlewareData:f,rects:h,platform:o,elements:{reference:t,floating:e}});u=null!=m?m:u,c=null!=v?v:c,f=St(Ct({},f),{[s]:Ct(Ct({},f[s]),y)}),"production"!=={}.NODE_ENV&&p>50&&console.warn(["Floating UI: The middleware lifecycle appears to be running in an","infinite loop. This is usually caused by a `reset` continually","being returned without a break condition."].join(" ")),x&&p<=50&&(p++,"object"==typeof x&&(x.placement&&(d=x.placement),x.rects&&(h=!0===x.rects?yield o.getElementRects({reference:t,floating:e,strategy:n}):x.rects),({x:u,y:c}=Ro(h,d,l))),i=-1)}return{x:u,y:c,placement:d,strategy:n,middlewareData:f}})))(t,e,St(Ct({},n),{platform:s}))})(s,a,{middleware:null==i?void 0:i.middleware,placement:r(),strategy:n()}).then((e=>{t===h()&&o(e)}),(t=>{l(t)}))}}return Ht((()=>{let s=t(),o=e();if(null==i||i.middleware,r(),n(),s&&o)if(null!=i&&i.whileElementsMounted){let t=i.whileElementsMounted(s,o,u);t&&qt(t)}else u()})),{get x(){return s().x},get y(){return s().y},get placement(){return s().placement},get strategy(){return s().strategy},get middlewareData(){return s().middlewareData},update:u}}(f,c,{whileElementsMounted:ua,placement:"bottom-end"});i.connectionRestored.then((()=>h(!1)));const m=e.onStatusChange((t=>{if(!t)return n(!1),void a(null);a(t.account)})),v=t=>{if(!s()||!r())return;const e=f().contains(t.target),i=u.contains(t.target);e||i||n(!1)};var y;return y=()=>{document.body.addEventListener("click",v)},Ht((()=>Zt(y))),qt((()=>{document.body.removeEventListener("click",v),m()})),xe(Je,{component:xi,get children(){return[xe(_e,{get when(){return l()},get children(){return xe(Eo,{disabled:!0,"data-tc-connect-button-loading":"true",get children(){return xe(_o,{})}})}}),xe(_e,{get when(){return!l()},get children(){return[xe(_e,{get when(){return!s()},get children(){return xe(Co,{onClick:()=>i.connectWallet(),"data-tc-connect-button":"true",scale:"s",get children(){return[xe(Xn,{get fill(){return t.colors.connectButton.foreground}}),xe(Cn,{translationKey:"button.connectWallet",fontSize:"15px",lineHeight:"18px",fontWeight:"590",get color(){return t.colors.connectButton.foreground},children:"Connect wallet"})]}})}}),xe(_e,{get when(){return s()},get children(){return xe(Ao,{get children(){return[xe(So,{onClick:()=>n((t=>!t)),ref:p,"data-tc-dropdown-button":"true",scale:"s",get children(){return[xe(Cn,{fontSize:"15px",fontWeight:"590",lineHeight:"18px",get children(){return(()=>{const t=s();if(t){const e=ot(t.address,t.chain===o.TESTNET);return e.slice(0,4)+"…"+e.slice(-4)}return""})()}}),xe(Br,{direction:"bottom"})]}}),xe(Qe,{get children(){const t=Zt((()=>document.importNode(ca,!0)));return je(d,t),t.style.setProperty("z-index","999"),t._$owner=Dt,Ye(t,xe(kr,{onBeforeEnter:t=>{t.animate([{opacity:0,transform:"translateY(-8px)"},{opacity:1,transform:"translateY(0)"}],{duration:150})},onExit:(t,e)=>{t.animate([{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-8px)"}],{duration:150}).finished.then(e)},get children(){return xe(_e,{get when(){return r()},get children(){return xe(Po,{get hidden(){return!r()},onClose:()=>n(!1),ref(t){"function"==typeof u?u(t):u=t}})}})}}),null),Ye(t,xe(Mo,{}),null),Wt((e=>{var i,r;const n=g.strategy,s=`${null!=(i=g.y)?i:0}px`,o=`${null!=(r=g.x)?r:0}px`;return n!==e._v$&&t.style.setProperty("position",e._v$=n),s!==e._v$2&&t.style.setProperty("top",e._v$2=s),o!==e._v$3&&t.style.setProperty("left",e._v$3=o),e}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),t}})]}})}})]}})]}})},fa=vi(qr)`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 18px;
    padding-bottom: 0;

    ${wr("mobile")} {
        padding-left: 0;
        padding-right: 0;

        min-height: 364px;
    }
`,pa=vi(Dn)`
    margin-top: 12px;

    ${wr("mobile")} {
        padding: 0 10px;
    }
`,ga=vi.div`
    margin: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;

    ${wr("mobile")} {
        height: 160px;
        align-items: center;
    }
`;vi(Cn)`
    min-width: 84px;
    text-align: center;
    font-weight: 590;
`,vi((t=>{const e="tabBar"+Math.floor(1e4*Math.random());return xe(Jr,{get class(){return t.class},"data-tc-tab-bar":"true",get children(){return[xe(tn,{get right(){return 1===t.selectedTabIndex}}),xe(rn,{get isActive(){return 0===t.selectedTabIndex},get children(){return[xe(en,{type:"radio",name:e,get checked(){return 0===t.selectedTabIndex},onInput:()=>{var e;return null==(e=t.onSelectedTabIndexChange)?void 0:e.call(t,0)}}),Gt((()=>t.tab1))]}}),xe(rn,{get isActive(){return 1===t.selectedTabIndex},get children(){return[xe(en,{type:"radio",get checked(){return 1===t.selectedTabIndex},name:e,onInput:()=>{var e;return null==(e=t.onSelectedTabIndexChange)?void 0:e.call(t,1)}}),Gt((()=>t.tab2))]}})]}})}))`
    margin: 0 auto 22px;
`;const[ma,va]=or({buttonRootId:null,language:"en",returnStrategy:"back",twaReturnUrl:void 0,walletsListConfiguration:{}});function ya(t){return"jsBridgeKey"in t?St(Ct({},t),{injected:st.isWalletInjected(t.jsBridgeKey),embedded:st.isInsideWalletBrowser(t.jsBridgeKey)}):t}function xa(t,e){var i,r,n,s;return e?((null==(i=e.includeWallets)?void 0:i.length)&&(r="name",n=t,s=e.includeWallets.map(ya),t=n.map((t=>{const e=s.find((e=>e[r]===t[r]));return s=s.filter((e=>e[r]!==t[r])),void 0===e?t:e})).concat(s)),t):t}function ba(t){return t.platforms.some((t=>["macos","linux","windows"].includes(t)))}function wa(t){return t.platforms.some((t=>["ios","android"].includes(t)))}function Ta(t){return t.platforms.some((t=>["chrome","firefox","safari"].includes(t)))}function Ca(t,e){return!!e&&(t.name.toLowerCase()===e.toLowerCase()||t.appName.toLowerCase()===e.toLowerCase())}const Sa=vi.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`,Ea=vi(Dn)`
    margin-bottom: 18px;
`;vi.div`
    height: 1px;
    margin: 0 -24px;
    width: calc(100% + 48px);
    opacity: 0.12;
    background: ${t=>t.isShown?t.theme.colors.icon.secondary:"transparent"};
    transition: background 0.15s ease-in-out;

    ${wr("mobile")} {
        width: 100%;
    }
`;const _a=vi.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 92px);
    grid-template-rows: auto;
    align-content: flex-start;
    justify-content: center;
    row-gap: 8px;
    width: 100%;
    padding: 0 0 16px;
    align-self: flex-start;
    max-width: 400px;
    margin: 0 auto;

    > li {
        display: block;
        height: fit-content;
    }

    ${wr("mobile")} {
        grid-template-columns: repeat(auto-fit, 82px);
    }
`;vi(Pr)`
    display: block;
    margin: 0 auto 1px;
    font-size: 15px;
`;const Aa=vi(Nr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,Pa=vi(js)`
    height: 100%;
`,Ma=Fe("<li></li>"),ka=t=>xe(Sa,{"data-tc-wallets-modal-list":"true",get children(){return[xe(Aa,{icon:"arrow",onClick:()=>t.onBack()}),xe(Ea,{translationKey:"walletModal.wallets",children:"Wallets"}),xe(Ks,{get maxHeight(){return Hs()?void 0:510},get children(){return xe(_a,{get children(){return xe(Ee,{get each(){return Hs()?t.walletsList.filter(wa):t.walletsList},children:e=>(()=>{const i=Ma.cloneNode(!0);return Ye(i,xe(Pa,{wallet:e,onClick:()=>t.onSelect(e)})),i})()})}})}})]}}),Ra={m:"16px",s:"12px",none:"0"},Oa={m:"6px",s:"6px",none:"0"},La=vi.div`
    display: flex;
    flex-direction: column;
`,Ia=vi.div`
    flex: 1;
    margin-top: ${t=>t.qr?"0":"18px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,Ba=vi(yn)`
    margin-bottom: 24px;
`,Da=vi(Dn)`
    max-width: 288px;
    margin: 0 auto 2px;
`,Fa=vi(Un)`
    max-width: 288px;
    text-align: center;
    margin: 0 auto 20px;
`,Ua=vi(Nr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,Na=vi.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,za=vi(Na)`
    padding-bottom: 0;
`,ja=vi(Pr)`
    margin-bottom: 24px;
`,Ya=vi(is)`
    margin-bottom: 18px;
    margin-top: 2px;
`,Va=vi(Qn)`
    margin-bottom: 16px;
`,Xa=vi(Un)`
    color: ${t=>t.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,Wa=vi(Pr)`
    margin-top: -8px;
    margin-bottom: 24px;
    width: 100%;
    padding: 12px 12px 12px 20px;
    border-radius: ${t=>Ra[t.theme.borderRadius]};
    font-size: 16px;
    line-height: 20px;
`,Ha=vi(vr)`
    width: 32px;
    height: 32px;
    border-radius: ${t=>Oa[t.theme.borderRadius]};
`,Ga=t=>{const[e]=wn();return Gt((()=>{var i;return e(t.translationKey,t.translationValues,null==(i=t.children)?void 0:i.toString())}))},Ka=t=>{const[e,i]=Vt("mobile"),[r,n]=Vt(!1),[s,o]=Vt(),a=Jt(Wi);qt(a.onStatusChange((()=>{}),(()=>{t.wallet.appName!==Us&&n(!0)})));const l=()=>{o(a.connect({universalLink:t.wallet.universalLink,bridgeUrl:t.wallet.bridgeUrl},t.additionalRequest))};Ht((()=>{"extension"!==Zt(e)&&(wa(t.wallet)||ba(t.wallet))&&l()}));const h=()=>{n(!1),"extension"===e()&&l(),i("mobile"),zi(St(Ct({},t.wallet),{openMethod:"qrcode"}))},u=()=>{n(!1),"extension"===e()&&l(),i("desktop"),zi(St(Ct({},t.wallet),{openMethod:"universal-link"})),_i(Ai(s(),ma.returnStrategy))},c=()=>{zi(St(Ct({},t.wallet),{openMethod:"universal-link"})),_i(Ai(s(),{returnStrategy:ma.returnStrategy,twaReturnUrl:ma.twaReturnUrl}))},d=()=>{n(!1),i("extension"),J(t.wallet)&&(zi(t.wallet),a.connect({jsBridgeKey:t.wallet.jsBridgeKey},t.additionalRequest))};return wa(t.wallet)?h():Ta(t.wallet)?d():u(),xe(La,{"data-tc-wallets-modal-connection-desktop":"true",get children(){return[xe(Ua,{icon:"arrow",onClick:()=>t.onBackClick()}),xe(Da,{get children(){return t.wallet.name}}),xe(_e,{get when(){return"mobile"===e()},get children(){return xe(Fa,{translationKey:"walletModal.desktopConnectionModal.scanQR",get translationValues(){return{name:t.wallet.name}},get children(){return["Scan the QR code below with your phone’s or ",Gt((()=>t.wallet.name)),"’s camera"]}})}}),xe(Ia,{get qr(){return"mobile"===e()},get children(){return xe(Ae,{get children(){return[xe(Pe,{get when(){return"mobile"===e()},get children(){return xe(Ba,{disableCopy:!1,get sourceUrl(){return Ai(s(),"none")},get imageUrl(){return t.wallet.imageUrl}})}}),xe(Pe,{get when(){return r()},get children(){return[xe(Va,{size:"s"}),xe(Xa,{translationKey:"walletModal.desktopConnectionModal.connectionDeclined",children:"Connection declined"}),xe(Na,{get children(){return xe(Pr,{get leftIcon(){return xe(ps,{})},get onClick(){return"extension"===e()?d:u},get children(){return xe(Ga,{translationKey:"common.retry",children:"Retry"})}})}})]}}),xe(Pe,{get when(){return"extension"===e()},get children(){return[xe(_e,{get when(){return J(t.wallet)},get children(){return[xe(Ya,{size:"s"}),xe(Xa,{translationKey:"walletModal.desktopConnectionModal.continueInExtension",get translationValues(){return{name:t.wallet.name}},get children(){return["Continue in ",Gt((()=>t.wallet.name))," browser extension…"]}}),xe(Na,{get children(){return xe(Pr,{get leftIcon(){return xe(ps,{})},onClick:d,get children(){return xe(Ga,{translationKey:"common.retry",children:"Retry"})}})}})]}}),xe(_e,{get when(){return!J(t.wallet)},get children(){return[xe(Xa,{translationKey:"walletModal.desktopConnectionModal.dontHaveExtension",get translationValues(){return{name:t.wallet.name}},get children(){return["Seems you don't have installed ",Gt((()=>t.wallet.name))," browser extension"]}}),xe(Na,{get children(){return xe(qs,{get href(){return t.wallet.aboutUrl},blank:!0,get children(){return xe(Pr,{get rightIcon(){return xe(ms,{})},onClick:d,get children(){return xe(Ga,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:t.wallet.name}},get children(){return["Get ",Gt((()=>t.wallet.name))]}})}})}})}})]}})]}}),xe(Pe,{get when(){return"desktop"===e()},get children(){return[xe(is,{size:"m"}),xe(Xa,{translationKey:"walletModal.desktopConnectionModal.continueOnDesktop",get translationValues(){return{name:t.wallet.name}},get children(){return["Continue in ",Gt((()=>t.wallet.name))," on desktop…"]}}),xe(Na,{get children(){return[xe(Pr,{get leftIcon(){return xe(ps,{})},onClick:u,get children(){return xe(Ga,{translationKey:"common.retry",children:"Retry"})}}),xe(qs,{get href(){return t.wallet.aboutUrl},blank:!0,get children(){return xe(Pr,{get rightIcon(){return xe(ms,{})},get children(){return xe(Ga,{translationKey:"walletModal.desktopConnectionModal.getWallet",get translationValues(){return{name:t.wallet.name}},get children(){return["Get ",Gt((()=>t.wallet.name))]}})}})}})]}})]}})]}})}}),xe(_e,{get when(){return t.wallet.appName===Us},get children(){return xe(Wa,{get rightIcon(){return xe(Ha,{get src(){return zs}})},scale:"s",onClick:c,get children(){return xe(Ga,{translationKey:"walletModal.desktopConnectionModal.openWalletOnTelegram",children:"Open Wallet on Telegram on desktop"})}})}}),xe(_e,{get when(){return t.wallet.appName!==Us},get children(){return xe(za,{get children(){return[xe(_e,{get when(){return Gt((()=>"mobile"!==e()))()&&wa(t.wallet)},get children(){return xe(ja,{appearance:"secondary",get leftIcon(){return xe(us,{})},onClick:h,get children(){return xe(Ga,{translationKey:"common.mobile",children:"Mobile"})}})}}),xe(_e,{get when(){return Gt((()=>"extension"!==e()))()&&Ta(t.wallet)},get children(){return xe(ja,{appearance:"secondary",get leftIcon(){return xe(ls,{})},onClick:d,get children(){return xe(Ga,{translationKey:"common.browserExtension",children:"Browser Extension"})}})}}),xe(_e,{get when(){return Gt((()=>"desktop"!==e()))()&&ba(t.wallet)},get children(){return xe(ja,{appearance:"secondary",get leftIcon(){return xe(ds,{})},onClick:u,get children(){return xe(Ga,{translationKey:"common.desktop",children:"Desktop"})}})}})]}})}})]}})},Za=vi.div``,qa=vi(Nr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,$a=vi(Dn)`
    margin-bottom: 18px;
`,Qa=vi.div`
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`,Ja=ci`
    margin-bottom: 12px;
`,tl=vi(zn)`
    text-align: center;
    margin-bottom: 4px;
`,el=vi(Cn)`
    text-align: center;
    max-width: 352px;
    color: ${t=>t.theme.colors.text.secondary};
`,il=vi.div`
    padding: 16px 24px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`,rl=t=>xe(Za,{"data-tc-wallets-modal-info":"true",get children(){return[xe(qa,{icon:"arrow",onClick:()=>t.onBackClick()}),xe($a,{translationKey:"walletModal.infoModal.whatIsAWallet",children:"What is a wallet"}),xe(Ks,{get children(){return[xe(Qa,{get children(){return[xe(bs,{class:Ja}),xe(tl,{translationKey:"walletModal.infoModal.secureDigitalAssets",children:"Secure digital assets storage"}),xe(el,{translationKey:"walletModal.infoModal.walletProtects",children:"A wallet protects and manages your digital assets including TON, tokens and collectables."})]}}),xe(Qa,{get children(){return[xe(Ts,{class:Ja}),xe(tl,{translationKey:"walletModal.infoModal.controlIdentity",children:"Control your Web3 identity"}),xe(el,{translationKey:"walletModal.infoModal.manageIdentity",children:"Manage your digital identity and access decentralized applications with ease. Maintain control over your data and engage securely in the blockchain ecosystem."})]}}),xe(Qa,{get children(){return[xe(Ss,{class:Ja}),xe(tl,{translationKey:"walletModal.infoModal.effortlessCryptoTransactions",children:"Effortless crypto transactions"}),xe(el,{translationKey:"walletModal.infoModal.easilySend",children:"Easily send, receive, monitor your cryptocurrencies. Streamline your operations with decentralized applications."})]}}),xe(il,{get children(){return xe(qs,{get href(){return"https://ton.org/wallets?filters[wallet_features][slug][$in]=dapp-auth&pagination[limit]=-1"},blank:!0,get children(){return xe(Pr,{get rightIcon(){return xe(ys,{})},get children(){return xe(Ga,{translationKey:"walletModal.infoModal.getAWallet",children:"Get a Wallet"})}})}})}})]}})]}}),nl=vi.div``,sl=vi.div`
    flex: 1;
    margin-top: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 232px;
`,ol=vi(Dn)`
    max-width: 262px;
    margin: 0 auto 8px;
`,al=vi(Nr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,ll=vi.div`
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 0.5px solid ${t=>Ci(t.theme.colors.icon.secondary,.2)};
`,hl=vi(vr)`
    width: 36px;
    height: 36px;
    border-radius: 10px;
`,ul=vi(qs)`
    margin-left: auto;
`,cl=vi(is)`
    margin-bottom: 18px;
    margin-top: 2px;
`,dl=vi(Qn)`
    margin-bottom: 16px;
`,fl=vi(Un)`
    color: ${t=>t.theme.colors.text.secondary};
    text-align: center;
    margin-bottom: 20px;
`,pl=vi.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    padding-bottom: 16px;
`,gl=vi(Dn)`
    margin-bottom: 2px;
    padding: 0 64px;
`,ml=vi(Un)`
    margin-bottom: 20px;
    padding: 0 64px;
    min-height: 44px;
`,vl=vi.div`
    padding: 0 24px 24px;
`,yl=t=>[xe(gl,{get children(){return t.walletInfo.name}}),xe(ml,{translationKey:"walletModal.mobileConnectionModal.scanQR",get translationValues(){return{name:t.walletInfo.name}},get children(){return["Scan the QR code below with your phone’s or ",Gt((()=>t.walletInfo.name)),"’s camera"]}}),xe(vl,{get children(){return xe(yn,{get imageUrl(){return t.walletInfo.imageUrl},get sourceUrl(){return Ai(t.universalLink,"none")},disableCopy:!0})}})],xl=t=>{const e=gi(),[i,r]=Vt(!1),[n,s]=Vt(!1),o=Jt(Wi),a=o.onStatusChange((()=>{}),(()=>{s(!0)})),l=Gt((()=>o.connect({universalLink:t.wallet.universalLink,bridgeUrl:t.wallet.bridgeUrl},t.additionalRequest))),h=()=>{s(!1),zi(St(Ct({},t.wallet),{openMethod:"universal-link"})),_i(Ai(l(),ma.returnStrategy))},u=()=>{s(!1),r(!0),zi(St(Ct({},t.wallet),{openMethod:"qrcode"}))},c=()=>{i()?(r(!1),zi(St(Ct({},t.wallet),{openMethod:"universal-link"}))):t.onBackClick()};return qt(a),h(),xe(nl,{"data-tc-wallets-modal-connection-mobile":"true",get children(){return[xe(al,{icon:"arrow",onClick:c}),xe(_e,{get when(){return i()},get children(){return xe(yl,{get universalLink(){return l()},get walletInfo(){return t.wallet}})}}),xe(_e,{get when(){return!i()},get children(){return[xe(ol,{get children(){return t.wallet.name}}),xe(sl,{get children(){return[xe(_e,{get when(){return n()},get children(){return[xe(dl,{size:"s"}),xe(fl,{translationKey:"walletModal.mobileConnectionModal.connectionDeclined",children:"Connection declined"}),xe(pl,{get children(){return[xe(Pr,{get leftIcon(){return xe(ps,{})},onClick:h,get children(){return xe(Ga,{translationKey:"common.retry",children:"Retry"})}}),xe(Pr,{get leftIcon(){return xe(Os,{get fill(){return e.colors.accent}})},onClick:u,get children(){return xe(Ga,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}}),xe(_e,{get when(){return!n()},get children(){return[xe(cl,{size:"s"}),xe(fl,{translationKey:"walletModal.mobileConnectionModal.continueIn",get translationValues(){return{name:t.wallet.name}},get children(){return["Continue in ",Gt((()=>t.wallet.name)),"…"]}}),xe(pl,{get children(){return[xe(Pr,{get leftIcon(){return xe(ps,{})},onClick:h,get children(){return xe(Ga,{translationKey:"common.retry",children:"Retry"})}}),xe(Pr,{get leftIcon(){return xe(Os,{get fill(){return e.colors.accent}})},onClick:u,get children(){return xe(Ga,{translationKey:"walletModal.mobileConnectionModal.showQR",children:"Show QR Code"})}})]}})]}})]}}),xe(ll,{get children(){return[xe(hl,{get src(){return t.wallet.imageUrl}}),xe(zn,{get children(){return t.wallet.name}}),xe(ul,{get href(){return t.wallet.aboutUrl},blank:!0,get children(){return xe(Pr,{get children(){return xe(Ga,{translationKey:"common.get",children:"GET"})}})}})]}})]}})]}})},bl={m:"16px",s:"12px",none:"0"},wl={m:"6px",s:"6px",none:"0"},Tl=vi.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: fit-content;
    max-width: 100%;
    min-width: 100%;
    height: fit-content;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 13px 24px;

    &&::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    > li {
        height: fit-content;
    }
`,Cl=vi.li`
    width: 82px;
    min-width: 82px;
    height: 124px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 4px;

    text-align: center;
    cursor: pointer;

    transition: transform 0.1s ease-in-out;

    ${Cr} {
        &:hover {
            transform: scale(1.04);
        }
    }

    &:active {
        transform: scale(0.96);
    }

    ${Tr} {
        &:active {
            transform: scale(0.92);
        }
    }
`,Sl=vi.div`
    width: 1px;
    margin: 0 10px;
    height: 24px;
    position: relative;
    top: 26px;

    background-color: ${t=>t.theme.colors.icon.secondary};
    opacity: 0.2;
`,El=vi.div`
    width: 60px;
    height: 60px;
    border-radius: ${t=>bl[t.theme.borderRadius]};
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${t=>t.theme.colors.background.tint};
    margin-bottom: 8px;
`,_l=vi(Dn)`
    margin-top: 38px;
    margin-bottom: 4px;
    padding: 0 24px;
`,Al=vi(Un)`
    margin-bottom: 24px;
    padding: 0 24px;
    min-height: 44px;
`;vi(Pr)`
    display: block;
    margin: 0 auto;
`;const Pl=vi(Pr)`
    margin: 0 24px 24px;
    width: calc(100% - 48px);
    border-radius: ${t=>bl[t.theme.borderRadius]};
    padding: 14px 16px 14px 14px;
    background-color: ${t=>t.theme.colors.telegramButton};

    color: ${t=>t.theme.colors.constant.white};
    font-weight: 590;
    font-size: 16px;
    line-height: 20px;
`,Ml=vi(vr)`
    border-radius: ${t=>wl[t.theme.borderRadius]};
    width: 24px;
    height: 24px;
`,kl=vi(Nr)`
    position: absolute;
    top: 16px;
    left: 16px;
`,Rl=vi(Dn)`
    margin-bottom: 2px;
    padding: 0 64px;
`,Ol=vi(Un)`
    margin-bottom: 20px;
    padding: 0 64px;
`,Ll=vi.div`
    padding: 0 24px 24px;
`,Il=t=>[xe(Rl,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),xe(Ol,{translationKey:"walletModal.mobileUniversalModal.scan",children:"Scan with your mobile wallet"}),xe(Ll,{get children(){return xe(yn,{get imageUrl(){return Ns},get sourceUrl(){return Ai(t.universalLink,"none")},disableCopy:!0})}})],Bl=Fe("<li></li>"),Dl=Fe('<div data-tc-wallets-modal-universal-mobile="true"></div>'),Fl=t=>{const[e,i]=Vt(!1),r=ma.connector,n=()=>t.walletsList.filter((t=>wa(t)&&t.appName!==Us)),s=()=>n().length>7,o=Gt((()=>r.connect([...new Set(t.walletsList.filter(et).map((t=>t.bridgeUrl))).values()].map((t=>({bridgeUrl:t}))),t.additionalRequest)));zi({openMethod:"universal-link"});const[a,l]=Vt(void 0),h=()=>_t(void 0,null,(function*(){void 0!==a()&&clearTimeout(a()),yield mn(o());const t=setTimeout((()=>l(void 0)),1500);l(t)})),u=()=>{_i(Ai(o(),ma.returnStrategy))},c=()=>{const e=t.walletsList.find((t=>t.appName===Us));if(!e||!et(e))throw new Ei("@wallet bot not found in the wallets list");_i(Ai(r.connect({bridgeUrl:e.bridgeUrl,universalLink:e.universalLink},t.additionalRequest),{returnStrategy:ma.returnStrategy,twaReturnUrl:ma.twaReturnUrl}))},d=()=>{i(!0),zi({openMethod:"qrcode"})},f=()=>{i(!1),zi({openMethod:"universal-link"})};return(()=>{const i=Dl.cloneNode(!0);return Ye(i,xe(_e,{get when(){return e()},get children(){return[xe(kl,{icon:"arrow",onClick:f}),xe(Il,{get universalLink(){return o()}})]}}),null),Ye(i,xe(_e,{get when(){return!e()},get children(){return[xe(kl,{get icon(){return xe(Os,{})},onClick:d}),xe(_l,{translationKey:"walletModal.mobileUniversalModal.connectYourWallet",children:"Connect your wallet"}),xe(Al,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegramOrSelect",children:"Open Wallet on Telegram or select your wallet to connect"}),xe(Pl,{get leftIcon(){return xe(_s,{})},get rightIcon(){return xe(Ml,{get src(){return zs}})},onClick:c,scale:"s",get children(){return xe(Ga,{translationKey:"walletModal.mobileUniversalModal.openWalletOnTelegram",children:"Open Wallet on Telegram"})}}),xe(Tl,{get children(){return[xe(Ee,{get each(){return Gt((()=>!!s()))()?n().slice(0,4):n()},children:e=>(()=>{const i=Bl.cloneNode(!0);return Ye(i,xe(In,{get icon(){return e.imageUrl},get name(){return e.name},onClick:()=>t.onSelect(e)})),i})()}),xe(_e,{get when(){return s()},get children(){const e=Bl.cloneNode(!0);return Ye(e,xe(Fs,{labelLine1:"View all",labelLine2:"wallets",get images(){return n().slice(3,7).map((t=>t.imageUrl))},onClick:()=>t.onSelectAllWallets()})),e}}),xe(Sl,{children:" "}),xe(Cl,{onClick:u,get children(){return[xe(El,{get children(){return xe(Yn,{})}}),xe(Cn,{fontWeight:590,translationKey:"walletModal.mobileUniversalModal.openLink",children:"Open Link"})]}}),xe(Cl,{onClick:h,get children(){return[xe(El,{get children(){return Gt((()=>void 0!==a()))()?xe(Ps,{}):xe(ks,{})}}),xe(Cn,{fontWeight:590,get translationKey(){return void 0!==a()?"common.copied":"common.copyLink"},get children(){return void 0!==a()?"Copied":"Copy Link"}})]}})]}})]}}),null),i})()},Ul={m:"16px",s:"8px",none:"0"},Nl={m:"8px",s:"4px",none:"0"},zl=vi.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
`,jl=vi(Un)`
    max-width: 320px;
    margin-top: 2px;
    margin-bottom: 20px;
`,Yl=vi(Un)`
    margin-bottom: 16px;
`,Vl=vi(yn)`
    margin-bottom: 24px;
`,Xl=vi.ul`
    display: flex;
`;vi.div`
    display: flex;
    gap: 16px;
    width: 100%;
`,vi(Pr)`
    position: relative;
    font-size: 16px;
    line-height: 20px;
    width: 100%;
    padding: 0 16px;
    height: 56px;
    border-radius: ${t=>Ul[t.theme.borderRadius]};

    &:hover {
        ${t=>t.disableEventsAnimation?"transform: unset;":""}
    }

    &:active {
        ${t=>t.disableEventsAnimation?"transform: unset;":""}
    }
`,vi.ul`
    position: absolute;
    bottom: 100%;
    left: 0;
    margin: 0;
    padding: 8px;
    width: 188px;
    transform: translateY(-16px);

    background-color: ${t=>t.theme.colors.background.primary};
    border-radius: ${t=>Ul[t.theme.borderRadius]};
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.16);
`,vi.li`
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 8px;

    cursor: pointer;
    border-radius: ${t=>Nl[t.theme.borderRadius]};

    transition: background-color, transform 0.1s ease-in-out;

    &:hover {
        background-color: ${t=>t.theme.colors.background.secondary};
    }

    &:active {
        transform: scale(0.96);
    }
`,vi(vr)`
    width: 24px;
    height: 24px;

    border-radius: 6px;
`,vi.div`
    margin-top: 23px;
    margin-bottom: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`,vi(Cn)`
    color: ${t=>t.theme.colors.text.secondary};
    font-size: 16px;
`;const Wl=Fe("<li></li>"),Hl=t=>{const[e,i]=Vt(!1),r=ma.connector;zi({openMethod:"qrcode"});const n=Gt((()=>r.connect([...new Set(t.walletsList.filter(et).map((t=>t.bridgeUrl))).values()].map((t=>({bridgeUrl:t}))),t.additionalRequest)));return xe(zl,{onClick:()=>i(!1),"data-tc-wallets-modal-universal-desktop":"true",get children(){return[xe(Dn,{translationKey:"walletModal.desktopUniversalModal.connectYourWallet",children:"Connect your wallet"}),xe(jl,{translationKey:"walletModal.desktopUniversalModal.scan",children:"Scan with your mobile wallet"}),xe(Vl,{get sourceUrl(){return Ai(n(),"none")},get disableCopy(){return e()},get imageUrl(){return Ns}}),xe(Yl,{translationKey:"walletModal.desktopUniversalModal.availableWallets",children:"Available wallets"}),xe(Xl,{get children(){return[xe(Ee,{get each(){return t.walletsList.slice(0,3)},children:e=>(()=>{const i=Wl.cloneNode(!0);return Ye(i,xe(js,{wallet:e,onClick:()=>t.onSelect(e)})),i})()}),xe(Fs,{labelLine1:"View all",labelLine2:"wallets",get images(){return t.walletsList.slice(3,7).map((t=>t.imageUrl))},onClick:()=>t.onSelectAllWallets()})]}})]}})},Gl=()=>{const{locale:t}=wn()[1];Ht((()=>t(ma.language)));const e=Jt(Wi),i=Jt($s),[r]=function(t,e,i){let r,n,s;2===arguments.length&&"object"==typeof e||1===arguments.length?(r=!0,n=t,s=e||{}):(r=t,n=e,s=i||{});let o=null,a=Bt,l=null,h=!1,u="initialValue"in s,c="function"==typeof r&&Gt(r);const d=new Set,[f,p]=(s.storage||Vt)(s.initialValue),[g,m]=Vt(void 0),[v,y]=Vt(void 0,{equals:!1}),[x,b]=Vt(u?"ready":"unresolved");if(At.context){let t;l=`${At.context.id}${At.context.count++}`,"initial"===s.ssrLoadFrom?a=s.initialValue:At.load&&(t=At.load(l))&&(a=t[0])}function w(t,e,i,r){return o===t&&(o=null,u=!0,t!==a&&e!==a||!s.onHydrated||queueMicrotask((()=>s.onHydrated(r,{value:e}))),a=Bt,function(t,e){oe((()=>{void 0===e&&p((()=>t)),b(void 0!==e?"errored":"ready"),m(e);for(const t of d.keys())t.decrement();d.clear()}),!1)}(e,i)),e}function T(){const t=f(),e=g();if(void 0!==e&&!o)throw e;return Ut&&Ut.user,t}function C(t=!0){if(!1!==t&&h)return;h=!1;const e=c?c():r;if(null==e||!1===e)return void w(o,Zt(f));const i=a!==Bt?a:Zt((()=>n(e,{value:f(),refetching:t})));return"object"==typeof i&&i&&"then"in i?(o=i,h=!0,queueMicrotask((()=>h=!1)),oe((()=>{b(u?"refreshing":"pending"),y()}),!1),i.then((t=>w(i,t,void 0,e)),(t=>w(i,void 0,de(t),e)))):(w(o,i,void 0,e),i)}return Object.defineProperties(T,{state:{get:()=>x()},error:{get:()=>g()},loading:{get(){const t=x();return"pending"===t||"refreshing"===t}},latest:{get(){if(!u)return T();const t=g();if(t&&!o)throw t;return f()}}}),c?Xt((()=>C(!1))):C(!1),[T,{refetch:C,mutate:p}]}((()=>i.getWallets())),[n,s]=Vt(null),[o,a]=Vt("universal"),[l,h]=Vt(!1),u=Gt((()=>{if("ready"!==r.state)return null;let t=xa(r(),ma.walletsListConfiguration);const e=t.filter(J),i=t.filter((t=>!J(t)));t=(e||[]).concat(i);const n=ma.preferredWalletAppName,s=t.find((t=>Ca(t,n))),o=t.filter((t=>Ca(t,n))).length>=2;n&&s&&!o&&(t=[St(Ct({},s),{isPreferred:!0})].concat(t.filter((t=>!Ca(t,n)))));const a=t.find((t=>Ca(t,Us)));return a&&(t=[a].concat(t.filter((t=>!Ca(t,Us))))),t})),c=()=>{var t;return"loading"===(null==(t=ma.connectRequestParameters)?void 0:t.state)},d=Gt((()=>{var t;if(!c())return null==(t=ma.connectRequestParameters)?void 0:t.value})),f=()=>{Di(!1),s(null),h(!1)};return qt(e.onStatusChange((t=>{t&&f()}))),xe(fa,{get opened(){return Bi()},onClose:f,onClickQuestion:()=>h((t=>!t)),"data-tc-wallets-modal-container":"true",get children(){return[xe(_e,{get when(){return l()},get children(){return xe(rl,{onBackClick:()=>h(!1)})}}),xe(_e,{get when(){return!l()},get children(){return[xe(_e,{get when(){return c()||!u()},get children(){return[xe(pa,{translationKey:"walletModal.loading",children:"Wallets list is loading"}),xe(ga,{get children(){return xe(is,{size:"m"})}})]}}),xe(_e,{get when(){return Gt((()=>!c()))()&&u()},get children(){return xe(Ae,{get children(){return[xe(Pe,{get when(){return n()},get children(){return xe(Je,{get component(){return Hs()?xl:Ka},get wallet(){return n()},get additionalRequest(){return d()},onBackClick:()=>s(null)})}}),xe(Pe,{get when(){return"universal"===o()},get children(){return xe(Je,{get component(){return Hs()?Fl:Hl},onSelect:s,get walletsList(){return u()},get additionalRequest(){return d()},onSelectAllWallets:()=>a("all-wallets")})}}),xe(Pe,{get when(){return"all-wallets"===o()},get children(){return xe(ka,{get walletsList(){return u()},onBack:()=>a("universal"),onSelect:s})}})]}})}})]}})]}})},Kl=vi.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 8px;
`,Zl=vi(Dn)`
    margin-top: 16px;
`,ql=vi(Cn)`
    font-weight: 510;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    max-width: 250px;

    color: ${t=>t.theme.colors.text.secondary};
`,$l=vi(Pr)`
    margin-top: 32px;
`,Ql=t=>{const e=Ar(t),i=Jt($s);let r;(null==i?void 0:i.wallet)&&"universalLink"in i.wallet&&("universal-link"===i.wallet.openMethod||U(i.wallet.universalLink)&&Ri())&&(r=i.wallet.universalLink);const n=()=>{const t=ji(),e="returnStrategy"in t?t.returnStrategy:ma.returnStrategy;U(r)?ki(r,{returnStrategy:e,twaReturnUrl:"twaReturnUrl"in t?t.twaReturnUrl:ma.twaReturnUrl}):_i(Ai(r,e))};return xe(Kl,Ce(e,{get children(){return[Gt((()=>t.icon)),xe(Zl,{get translationKey(){return t.headerTranslationKey},get translationValues(){return t.headerTranslationValues}}),xe(ql,{get translationKey(){return t.textTranslationKey},get translationValues(){return t.textTranslationValues}}),xe(_e,{get when(){return"open-wallet"!==t.showButton},get children(){return xe($l,{onClick:()=>t.onClose(),get children(){return xe(Ga,{translationKey:"common.close",children:"Close"})}})}}),xe(_e,{get when(){return"open-wallet"===t.showButton&&r},get children(){return xe($l,{onClick:n,get children(){return xe(Ga,{translationKey:"common.openWallet",children:"Open wallet"})}})}})]}}))},Jl=t=>{const e=Jt($s),[i]=wn();return xe(Ql,{headerTranslationKey:"actionModal.confirmTransaction.header",get headerTranslationValues(){return{name:e.wallet&&"name"in e.wallet?e.wallet.name:i("common.yourWallet",{},"Your wallet")}},textTranslationKey:"actionModal.confirmTransaction.text",get icon(){return xe(is,{size:"m"})},onClose:()=>t.onClose(),showButton:"open-wallet","data-tc-confirm-modal":"true"})},th=t=>xe(Ql,{headerTranslationKey:"actionModal.transactionCanceled.header",textTranslationKey:"actionModal.transactionCanceled.text",get icon(){return xe(Qn,{size:"m"})},onClose:()=>t.onClose(),"data-tc-transaction-canceled-modal":"true"}),eh=t=>xe(Ql,{headerTranslationKey:"actionModal.transactionSent.header",textTranslationKey:"actionModal.transactionSent.text",get icon(){return xe(Kn,{size:"m"})},onClose:()=>t.onClose(),"data-tc-transaction-sent-modal":"true"}),ih=()=>xe(qr,{get opened(){var t;return Gt((()=>null!==ji()))()&&!0===(null==(t=ji())?void 0:t.openModal)},onClose:()=>Yi(null),"data-tc-actions-modal-container":"true",get children(){return xe(Ae,{get children(){return[xe(Pe,{get when(){return"transaction-sent"===ji().name},get children(){return xe(eh,{onClose:()=>Yi(null)})}}),xe(Pe,{get when(){return"transaction-canceled"===ji().name},get children(){return xe(th,{onClose:()=>Yi(null)})}}),xe(Pe,{get when(){return"confirm-transaction"===ji().name},get children(){return xe(Jl,{onClose:()=>Yi(null)})}})]}})}}),rh=t=>{const e=((t={},e=(navigator.language in t?navigator.language:Object.keys(t)[0]))=>{const[i,r]=Vt(e),[n,s]=or(t);return[(t,e,r)=>{const s=xn(n[i()],t,r||"");return"function"==typeof s?s(e):"string"==typeof s?((t,e,i=/{{(.*?)}}/g)=>t.replace(i,((t,i)=>xn(e,i,""))))(s,e||{}):s},{add(t,e){s(t,(t=>Object.assign(t||{},e)))},locale:t=>t?r(t):i(),dict:t=>xn(n,t)}]})(Vi,ma.language);return customElements.define(xi,class extends HTMLDivElement{},{extends:"div"}),document.body.hasAttribute("ontouchstart")||document.body.setAttribute("ontouchstart",""),xe(bn.Provider,{value:e,get children(){return xe($s.Provider,{get value(){return t.tonConnectUI},get children(){return xe(Wi.Provider,{get value(){return ma.connector},get children(){return[xe(Ti,{}),xe(pi,{theme:cr,get children(){return[xe(_e,{get when(){return ma.buttonRootId},get children(){return xe(Qe,{get mount(){return document.getElementById(ma.buttonRootId)},get children(){return xe(da,{})}})}}),xe(Je,{component:xi,get children(){return[xe(Gl,{}),xe(ih,{})]}})]}})]}})}})}})},nh=t=>{setTimeout((()=>Yi(t)))};var sh,oh=i(6104),ah=i(3395),lh=i(3491),hh=(sh=function(t,e){return sh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},sh(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}sh(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),uh=function(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{l(r.next(t))}catch(t){s(t)}}function a(t){try{l(r.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}l((r=r.apply(t,e||[])).next())}))},ch=function(t,e){var i,r,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(l){return function(a){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(i=1,r&&(n=2&a[0]?r.return:a[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((n=(n=o.trys).length>0&&n[n.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){o.label=a[1];break}if(6===a[0]&&o.label<n[1]){o.label=n[1],n=a;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(a);break}n[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},dh=["pipe-green","pipe-red"],fh=[0,1],ph="https://flappy.krigga.dev",gh=function(){function t(){var t,e=this;this.scoreDiv=document.getElementById("score"),this.rewardsDiv=document.getElementById("rewards"),this.spinnerDiv=document.getElementById("spinner-container"),this.connectDiv=document.getElementById("connect"),this.skinChooserDiv=document.getElementById("skin-chooser"),this.skinPrevDiv=document.getElementById("skin-prev"),this.skinCurrentDiv=document.getElementById("skin-current"),this.skinImage=document.getElementById("skin-image"),this.skinNextDiv=document.getElementById("skin-next"),this.useButton=document.getElementById("use"),this.shopButton=document.getElementById("shop"),this.playButton=document.getElementById("play"),this.buttonsDiv=document.getElementById("buttons"),this.balanceDiv=document.getElementById("balance"),this.playTextDiv=document.getElementById("play-text"),this.useTextDiv=document.getElementById("use-text"),this.balanceContainerDiv=document.getElementById("balance-container"),this.afterGameDiv=document.getElementById("after-game"),this.errorDiv=document.getElementById("error"),this.tokensAwardedDiv=document.getElementById("tokens-awarded"),this.newAchievementsDiv=document.getElementById("new-achievements"),this.currentPipeIndex=Number(null!==(t=window.localStorage.getItem("chosen-pipe"))&&void 0!==t?t:"0"),this.previewPipeIndex=this.currentPipeIndex,this.shopShown=!1,this.purchases=[],this.reloadShopTimeout=void 0,this.client=void 0,this.jettonWallet=void 0,this.skinPrevDiv.addEventListener("click",(function(){e.previewPipeIndex--,e.redrawShop()})),this.skinNextDiv.addEventListener("click",(function(){e.previewPipeIndex++,e.redrawShop()})),this.useButton.addEventListener("click",(function(){0===e.previewPipeIndex||-1!==e.purchases.findIndex((function(t){return t.systemName===e.getPreviewPipe()}))?(e.currentPipeIndex=e.previewPipeIndex,window.localStorage.setItem("chosen-pipe",e.currentPipeIndex.toString()),e.redrawShop()):e.buy(e.previewPipeIndex)})),this.shopButton.addEventListener("click",(function(){e.shopShown?e.hideShop():e.showShop()})),this.connectDiv.addEventListener("click",(function(){vh.connectWallet()}))}return t.prototype.redrawBalance=function(){return uh(this,void 0,void 0,(function(){var t,e=this;return ch(this,(function(i){switch(i.label){case 0:return[4,this.getBalance()];case 1:return t=i.sent(),this.balanceDiv.innerText=t.toString(),this.balanceContainerDiv.style.display="block",setTimeout((function(){return e.redrawBalance()}),1e4),[2]}}))}))},t.prototype.getBalance=function(){return uh(this,void 0,void 0,(function(){var t,e,i;return ch(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),[4,this.getClient()];case 1:return t=r.sent(),[4,this.getJettonWallet()];case 2:return e=r.sent(),[4,t.getLastBlock()];case 3:return i=r.sent(),[4,t.runMethod(i.last.seqno,e,"get_wallet_data")];case 4:return[2,r.sent().reader.readBigNumber()];case 5:return r.sent(),[2,BigInt(0)];case 6:return[2]}}))}))},t.prototype.getJettonWallet=function(){return uh(this,void 0,void 0,(function(){var t,e,i,r;return ch(this,(function(n){switch(n.label){case 0:return void 0!==this.jettonWallet?[3,4]:[4,this.getClient()];case 1:if(t=n.sent(),null===vh.account)throw new Error("No account");return[4,t.getLastBlock()];case 2:return e=n.sent(),[4,t.runMethod(e.last.seqno,oh.Address.parse("EQBcRUiCkgdfnbnKKYhnPXkNi9BXkq_5uLGRuvnwwaZzelit"),"get_wallet_address",[{type:"slice",cell:(0,oh.beginCell)().storeAddress(oh.Address.parse(vh.account.address)).endCell()}])];case 3:if(i=n.sent(),"slice"!==(r=i.result[0]).type)throw new Error("Bad type");this.jettonWallet=r.cell.beginParse().loadAddress(),n.label=4;case 4:return[2,this.jettonWallet]}}))}))},t.prototype.getClient=function(){return uh(this,void 0,void 0,(function(){var t,e,i;return ch(this,(function(r){switch(r.label){case 0:return void 0!==this.client?[3,2]:(t=this,e=lh.TonClient4.bind,i={},[4,(0,ah.getHttpV4Endpoint)({network:"testnet"})]);case 1:t.client=new(e.apply(lh.TonClient4,[void 0,(i.endpoint=r.sent(),i)])),r.label=2;case 2:return[2,this.client]}}))}))},t.prototype.buy=function(t){return uh(this,void 0,void 0,(function(){var e,i,r,n;return ch(this,(function(s){switch(s.label){case 0:return i=(e=vh).sendTransaction,r={validUntil:Math.floor(Date.now()/1e3)+3600},n={},[4,this.getJettonWallet()];case 1:return[4,i.apply(e,[(r.messages=[(n.address=s.sent().toString(),n.amount="50000000",n.payload=(0,oh.beginCell)().storeUint(260734629,32).storeUint(0,64).storeCoins(fh[this.previewPipeIndex]).storeAddress(oh.Address.parse("EQBb7bFnXnKAN1DNO3GPKLXPNiEyi4U6-805Y-aBkgJtK_lJ")).storeAddress(oh.Address.parse(vh.account.address)).storeMaybeRef(void 0).storeCoins(1).storeMaybeRef((0,oh.beginCell)().storeUint(0,32).storeStringTail(window.Telegram.WebApp.initDataUnsafe.user.id+":"+t)).endCell().toBoc().toString("base64"),n)],r)])];case 2:return s.sent(),[2]}}))}))},t.prototype.showLoading=function(){this.spinnerDiv.style.display="unset"},t.prototype.hideLoading=function(){this.spinnerDiv.style.display="none"},t.prototype.showMain=function(t,e){var i;if(t&&(this.playButton.classList.add("button-wide"),this.playTextDiv.innerText="Play again"),void 0!==e)if(this.afterGameDiv.style.display="block","error"in e)this.rewardsDiv.style.display="none",this.errorDiv.innerText=e.error,this.errorDiv.style.display="block";else if(this.errorDiv.style.display="none",this.rewardsDiv.style.display="flex",this.tokensAwardedDiv.innerText=e.reward.toString(),e.achievements.length>0){var r=function(t,e,i){if(i||2===arguments.length)for(var r,n=0,s=e.length;n<s;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))}([e.achievements.length>1?"New achievements!":"New achievement!"],e.achievements,!0).map((function(t){var e=document.createElement("div");return e.className="flappy-text award-text",e.innerText=t,e}));(i=this.newAchievementsDiv).replaceChildren.apply(i,r)}else this.newAchievementsDiv.replaceChildren();this.buttonsDiv.style.display="flex"},t.prototype.hideMain=function(){this.afterGameDiv.style.display="none",this.buttonsDiv.style.display="none"},t.prototype.getCurrentPipe=function(){return dh[this.currentPipeIndex]},t.prototype.getPreviewPipe=function(){return dh[this.previewPipeIndex]},t.prototype.redrawShop=function(){var t=this;this.skinImage.src="assets/"+this.getPreviewPipe()+".png",this.skinPrevDiv.style.display=this.previewPipeIndex>0?"unset":"none",this.skinNextDiv.style.display=this.previewPipeIndex<dh.length-1?"unset":"none";var e=this.purchases.findIndex((function(e){return e.systemName===t.getPreviewPipe()}))>=0;this.previewPipeIndex===this.currentPipeIndex?(this.useTextDiv.innerText="Used",this.useButton.className="button-narrow"):0===this.previewPipeIndex||e?(this.useTextDiv.innerText="Use",this.useButton.className="button-narrow"):(this.useTextDiv.innerText="Buy for "+fh[this.previewPipeIndex],this.useButton.className="button-narrow button-wide")},t.prototype.reloadPurchases=function(){return uh(this,void 0,void 0,(function(){var t,e=this;return ch(this,(function(i){switch(i.label){case 0:this.reloadShopTimeout=void 0,i.label=1;case 1:return i.trys.push([1,4,,5]),[4,fetch(ph+"/purchases?auth="+encodeURIComponent(window.Telegram.WebApp.initData))];case 2:return[4,i.sent().json()];case 3:if(t=i.sent(),!this.shopShown)return[2];if(!t.ok)throw new Error("Unsuccessful");return this.purchases=t.purchases,this.redrawShop(),[3,5];case 4:return i.sent(),[3,5];case 5:return this.reloadShopTimeout=setTimeout((function(){return e.reloadPurchases()}),1e4),[2]}}))}))},t.prototype.showShop=function(){return uh(this,void 0,void 0,(function(){var t,e=this;return ch(this,(function(i){switch(i.label){case 0:this.afterGameDiv.style.display="none",this.hideMain(),this.showLoading(),i.label=1;case 1:return i.trys.push([1,4,,5]),[4,fetch(ph+"/purchases?auth="+encodeURIComponent(window.Telegram.WebApp.initData))];case 2:return[4,i.sent().json()];case 3:if(!(t=i.sent()).ok)throw new Error("Unsuccessful");return this.hideLoading(),this.showMain(!1),this.purchases=t.purchases,[3,5];case 4:return i.sent(),this.hideLoading(),this.showMain(!1,{error:"Could not load the shop"}),[2];case 5:return this.reloadShopTimeout=setTimeout((function(){return e.reloadPurchases()}),1e4),this.shopShown=!0,this.skinChooserDiv.style.display="flex",this.useButton.style.display="flex",this.previewPipeIndex=this.currentPipeIndex,this.redrawShop(),[2]}}))}))},t.prototype.hideShop=function(){clearTimeout(this.reloadShopTimeout),this.reloadShopTimeout=void 0,this.shopShown=!1,this.skinChooserDiv.style.display="none",this.useButton.style.display="none",this.afterGameDiv.style.display="block"},t.prototype.setScore=function(t){this.scoreDiv.innerText=t.toString()},t.prototype.onPlayClicked=function(t){this.playButton.addEventListener("click",t)},t.prototype.transitionToGame=function(){this.connectDiv.style.display="none",this.scoreDiv.style.display="inline-block",this.buttonsDiv.style.display="flex"},t}(),mh=new gh,vh=new class{constructor(t){if(Et(this,"walletInfoStorage",new Oi),Et(this,"preferredWalletStorage",new Li),Et(this,"connector"),Et(this,"walletInfo",null),Et(this,"systemThemeChangeUnsubscribe",null),Et(this,"actionsConfiguration"),Et(this,"walletsList"),Et(this,"connectRequestParametersCallback"),Et(this,"connectionRestored",Promise.resolve(!1)),t&&"connector"in t&&t.connector)this.connector=t.connector;else{if(!(t&&"manifestUrl"in t&&t.manifestUrl))throw new Ei("You have to specify a `manifestUrl` or a `connector` in the options.");this.connector=new st({manifestUrl:t.manifestUrl})}this.walletsList=this.getWallets(),this.walletsList.then((t=>{return e=t.map((t=>t.imageUrl)),void[...new Set(e)].forEach((t=>{(new window.Image).src=t}));var e}));const e=this.normalizeWidgetRoot(null==t?void 0:t.widgetRootId);this.subscribeToWalletChange(),!1!==(null==t?void 0:t.restoreConnection)&&(this.connectionRestored=new Promise((t=>_t(this,null,(function*(){yield this.connector.restoreConnection(),this.connector.connected||this.walletInfoStorage.removeWalletInfo(),t(this.connector.connected)}))))),this.uiOptions=ur(t,{uiPreferences:{theme:"SYSTEM"}});const i=this.preferredWalletStorage.getPreferredWalletAppName();var r,n;va({connector:this.connector,preferredWalletAppName:i}),r=e,n=this,function(t,e,i,r={}){let n;Yt((r=>{n=r,e===document?t():Ye(e,t(),e.firstChild?null:void 0,i)}),r.owner)}((()=>xe(rh,{tonConnectUI:n})),document.getElementById(r))}static getWallets(){return st.getWallets()}get connected(){return this.connector.connected}get account(){return this.connector.account}get wallet(){return this.connector.wallet?Ct(Ct({},this.connector.wallet),this.walletInfo):null}set uiOptions(t){var e,i,r,n,s,o,a;this.checkButtonRootExist(t.buttonRootId),this.actionsConfiguration=t.actionsConfiguration,(null==(e=t.uiPreferences)?void 0:e.theme)?"SYSTEM"!==(null==(i=t.uiPreferences)?void 0:i.theme)?(null==(r=this.systemThemeChangeUnsubscribe)||r.call(this),gr(t.uiPreferences.theme,t.uiPreferences.colorsSet)):(gr(window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?ti.LIGHT:ti.DARK,t.uiPreferences.colorsSet),this.systemThemeChangeUnsubscribe||(this.systemThemeChangeUnsubscribe=function(t){const e=e=>t(e.matches?ti.DARK:ti.LIGHT);return window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),()=>window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",e)}(gr))):(null==(n=t.uiPreferences)?void 0:n.colorsSet)&&(o=t.uiPreferences.colorsSet,pr[ti.DARK]=ur(o[ti.DARK],pr[ti.DARK]),pr[ti.LIGHT]=ur(o[ti.LIGHT],pr[ti.LIGHT]),dr((t=>({colors:ur(pr[t.theme],fr[t.theme])})))),(null==(s=t.uiPreferences)?void 0:s.borderRadius)&&(a=t.uiPreferences.borderRadius,dr({borderRadius:a})),va((e=>{var i,r;const n=ur(Ct(Ct(Ct(Ct({},t.language&&{language:t.language}),!!(null==(i=t.actionsConfiguration)?void 0:i.returnStrategy)&&{returnStrategy:t.actionsConfiguration.returnStrategy}),!!(null==(r=t.actionsConfiguration)?void 0:r.twaReturnUrl)&&{twaReturnUrl:t.actionsConfiguration.twaReturnUrl}),!!t.walletsListConfiguration&&{walletsListConfiguration:t.walletsListConfiguration}),$i(e));return void 0!==t.buttonRootId&&(n.buttonRootId=t.buttonRootId),n}))}setConnectRequestParameters(t){var e;va({connectRequestParameters:t}),"ready"!==(null==t?void 0:t.state)&&t||null==(e=this.connectRequestParametersCallback)||e.call(this,null==t?void 0:t.value)}getWallets(){return _t(this,null,(function*(){return this.connector.getWallets()}))}onStatusChange(t,e){return this.connector.onStatusChange((e=>_t(this,null,(function*(){if(e){const i=yield this.getSelectedWalletInfo(e);t(Ct(Ct({},e),i||this.walletInfoStorage.getWalletInfo()))}else t(e)}))),e)}connectWallet(){return _t(this,null,(function*(){const t=(yield this.getWallets()).find(tt);if(t){const e=e=>{zi(t),this.connector.connect({jsBridgeKey:t.jsBridgeKey},e)},i=ma.connectRequestParameters;"loading"===(null==i?void 0:i.state)?this.connectRequestParametersCallback=e:e(null==i?void 0:i.value)}else setTimeout((()=>Di(!0)));return new Promise(((t,e)=>{const i=this.connector.onStatusChange((r=>_t(this,null,(function*(){if(i(),r){const e=yield this.getSelectedWalletInfo(r);t(Ct(Ct({},r),e||this.walletInfoStorage.getWalletInfo()))}else e(new Ei("Wallet was not connected"))}))),e)}))}))}disconnect(){return setTimeout((()=>Yi(null))),zi(null),this.walletInfoStorage.removeWalletInfo(),this.connector.disconnect()}sendTransaction(t,e){return _t(this,null,(function*(){if(!this.connected)throw new Ei("Connect wallet to send a transaction.");const{notifications:i,modals:r,returnStrategy:n,twaReturnUrl:s,skipRedirectToWallet:o}=this.getModalsAndNotificationsConfiguration(e),a="ios"===function(){var t,e;const i=(new(ct())).getResult(),r=null==(t=i.os.name)?void 0:t.toLowerCase();let n;switch(!0){case"ios"===r:n="ios";break;case"android"===r:n="android";break;case"mac os"===r:n="macos";break;case"linux"===r:n="linux";break;case null==r?void 0:r.includes("windows"):n="windows"}const s=null==(e=i.browser.name)?void 0:e.toLowerCase();let o;switch(!0){case"chrome"===s:o="chrome";break;case"firefox"===s:o="firefox";break;case null==s?void 0:s.includes("safari"):o="safari"}return{os:n,browser:o}}().os,l="ios"===o&&a||"always"===o;this.walletInfo&&"universalLink"in this.walletInfo&&"universal-link"===this.walletInfo.openMethod&&!l&&(U(this.walletInfo.universalLink)?ki(this.walletInfo.universalLink,{returnStrategy:n,twaReturnUrl:s}):_i(Ai(this.walletInfo.universalLink,n))),nh({name:"confirm-transaction",showNotification:i.includes("before"),openModal:r.includes("before")});try{const e=yield this.connector.sendTransaction(t);return nh({name:"transaction-sent",showNotification:i.includes("success"),openModal:r.includes("success")}),e}catch(t){throw nh({name:"transaction-canceled",showNotification:i.includes("error"),openModal:r.includes("error")}),t instanceof m?t:(console.error(t),new Ei("Unhandled error:"+t))}}))}subscribeToWalletChange(){this.connector.onStatusChange((t=>_t(this,null,(function*(){var e;t?(yield this.updateWalletInfo(t),this.setPreferredWalletAppName((null==(e=this.walletInfo)?void 0:e.appName)||t.device.appName)):this.walletInfoStorage.removeWalletInfo()}))))}setPreferredWalletAppName(t){this.preferredWalletStorage.setPreferredWalletAppName(t),va({preferredWalletAppName:t})}getSelectedWalletInfo(t){return _t(this,null,(function*(){let e,i=Ui();if(!i)return null;if("name"in i)e=i;else{const r=xa(yield this.walletsList,ma.walletsListConfiguration).find((e=>Ca(e,t.device.appName)));if(!r)throw new Ei(`Cannot find WalletInfo for the '${t.device.appName}' wallet`);e=Ct(Ct({},r),i)}return e}))}updateWalletInfo(t){return _t(this,null,(function*(){const e=yield this.getSelectedWalletInfo(t);if(e)return this.walletInfo=e,void this.walletInfoStorage.setWalletInfo(e);const i=this.walletInfoStorage.getWalletInfo();this.walletInfo=i||(yield this.walletsList).find((e=>Ca(e,t.device.appName)))||null}))}normalizeWidgetRoot(t){if(!t||!document.getElementById(t)){t="tc-widget-root";const e=document.createElement("div");e.id=t,document.body.appendChild(e)}return t}checkButtonRootExist(t){if(null!=t&&!document.getElementById(t))throw new Ei(`${t} element not found in the document.`)}getModalsAndNotificationsConfiguration(t){var e,i,r,n,s,o;const a=["before","success","error"];let l=a;(null==(e=this.actionsConfiguration)?void 0:e.notifications)&&"all"!==(null==(i=this.actionsConfiguration)?void 0:i.notifications)&&(l=this.actionsConfiguration.notifications),(null==t?void 0:t.notifications)&&(l="all"===t.notifications?a:t.notifications);let h=["before"];return(null==(r=this.actionsConfiguration)?void 0:r.modals)&&(h="all"===this.actionsConfiguration.modals?a:this.actionsConfiguration.modals),(null==t?void 0:t.modals)&&(h="all"===t.modals?a:t.modals),{notifications:l,modals:h,returnStrategy:(null==t?void 0:t.returnStrategy)||(null==(n=this.actionsConfiguration)?void 0:n.returnStrategy)||"back",twaReturnUrl:(null==t?void 0:t.twaReturnUrl)||(null==(s=this.actionsConfiguration)?void 0:s.twaReturnUrl),skipRedirectToWallet:(null==t?void 0:t.skipRedirectToWallet)||(null==(o=this.actionsConfiguration)?void 0:o.skipRedirectToWallet)||"ios"}}}({manifestUrl:"https://raw.githubusercontent.com/ton-defi-org/tonconnect-manifest-temp/main/tonconnect-manifest.json"}),yh=2400,xh={"first-time":"Played 1 time","five-times":"Played 5 times"};function bh(t){var e;return uh(this,void 0,void 0,(function(){return ch(this,(function(i){switch(i.label){case 0:return[4,fetch(ph+"/played",{body:JSON.stringify({tg_data:window.Telegram.WebApp.initData,wallet:null===(e=vh.account)||void 0===e?void 0:e.address,score:t}),headers:{"content-type":"application/json"},method:"POST"})];case 1:return[4,i.sent().json()];case 2:return[2,i.sent()]}}))}))}var wh=function(t){function e(){var e=t.call(this)||this;return e.lastJump=0,e.columnVelocity=-150,e.tracked=[],e.score=0,e.columnInterval=3e3,e.lastColumn=0,e.firstLaunch=!0,mh.onPlayClicked((function(){mh.hideShop(),mh.hideMain(),e.scene.restart()})),e}return hh(e,t),e.prototype.getRealGameWidth=function(){return yh*(this.game.canvas.parentElement.clientWidth/this.game.canvas.clientWidth)},e.prototype.preload=function(){this.load.image("pipe-green","assets/pipe-green.png"),this.load.image("pipe-red","assets/pipe-red.png"),this.load.image("bird-up","assets/bluebird-upflap.png"),this.load.image("bird-down","assets/bluebird-downflap.png"),this.load.image("bird-mid","assets/bluebird-midflap.png"),this.load.image("bg","assets/background-day.png")},e.prototype.create=function(){var t,e=this,i=this.getRealGameWidth();this.background=this.add.tileSprite(1200,300,yh,600,"bg"),this.background.tileScaleX=this.background.tileScaleY=1.171875,this.character=this.add.image(i/8,300,"bird-mid"),this.physics.add.existing(this.character),this.columnGroup=this.physics.add.group(),this.physics.add.overlap(this.character,this.columnGroup,(function(){e.onOverlapped()}));var r=this.character.body;r.setCollideWorldBounds(!0,void 0,void 0,!0),r.world.on("worldbounds",(function(){e.onOverlapped()})),r.setAccelerationY(750),r.setVelocityY(-300),this.input.on("pointerdown",(function(){return e.onInput()})),null===(t=this.input.keyboard)||void 0===t||t.on("keydown",(function(){return e.onInput()})),this.firstLaunch&&(this.firstLaunch=!1,this.scene.pause()),this.lastJump=Date.now(),this.columnVelocity=-150,this.columnInterval=3e3,this.tracked=[],this.score=0,mh.setScore(this.score),this.lastColumn=0},e.prototype.onInput=function(){var t=Date.now();t>this.lastJump+20&&(this.lastJump=t,this.character.body.setVelocityY(-300))},e.prototype.onOverlapped=function(){return uh(this,void 0,void 0,(function(){var t,e;return ch(this,(function(i){switch(i.label){case 0:this.scene.pause(),mh.showLoading(),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,bh(this.score)];case 2:if(!(t=i.sent()).ok)throw new Error("Unsuccessful");return mh.showMain(!0,{reward:t.reward,achievements:t.achievements.map((function(t){return xh[t]}))}),[3,4];case 3:return e=i.sent(),console.error(e),mh.showMain(!0,{error:"Could not load your rewards information"}),[3,4];case 4:return mh.hideLoading(),[2]}}))}))},e.prototype.update=function(t,e){this.background.tilePositionX+=1;var i=this.character.body.velocity.y;i<-50?this.character.setTexture("bird-down"):i>50?this.character.setTexture("bird-up"):this.character.setTexture("bird-mid"),this.columnInterval-=.01*e,t>this.lastColumn+this.columnInterval&&(this.lastColumn=t,this.createColumn()),this.columnVelocity-=.001*e,this.columnGroup.setVelocityX(this.columnVelocity);for(var r=0;r<this.tracked.length;r++){var n=this.tracked[r];!n.scored&&n.r1.x+39<this.character.body.x-this.character.body.width/2&&(n.scored=!0,this.score++,mh.setScore(this.score)),n.r1.x<-39&&(this.tracked.splice(r,1),r--,n.r1.destroy(!0),n.r2.destroy(!0))}},e.prototype.createColumn=function(){var t=this.getRealGameWidth(),e=100+225*Math.random(),i=125+50*Math.random(),r=this.add.image(t+39,e-240,mh.getCurrentPipe());r.scale=1.5,r.flipY=!0;var n=this.add.image(t+39,e+i+240,mh.getCurrentPipe());n.scale=1.5,this.tracked.push({r1:r,r2:n,scored:!1}),this.columnGroup.add(r),this.columnGroup.add(n)},e}(a.Scene);window.Telegram.WebApp.expand();var Th=null;vh.onStatusChange((function(t){null===Th&&null!==t&&(mh.transitionToGame(),mh.showMain(!1),mh.redrawBalance(),Th=new a.Game({type:a.AUTO,height:600,width:yh,scene:new wh,physics:{default:"arcade"},input:{keyboard:!0},scale:{mode:a.Scale.HEIGHT_CONTROLS_WIDTH,parent:document.body,height:600,width:yh,autoCenter:a.Scale.CENTER_VERTICALLY}}))}))})()})();