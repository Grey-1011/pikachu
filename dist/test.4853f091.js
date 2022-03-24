const $6d7061d7c053ca0f$var$string = `*{margin: 0; padding: 0; box-sizing: border-box;}
*::after,*::before{box-sizing: border-box;}
.skin{
    position: relative;
    background:#ffe600;
    min-height: 50vh;
}
.nose{
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 14px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    margin-left: -14px;
    top: 120px;
}
.nose:hover{
    transform-origin: center bottom;
    animation: wave 230ms infinite linear;
}
.eye{
    border: 3px solid #000;
    background: #2e2e2e;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -32px;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid black;
    background: #fff;
    width: 32px;
    height: 32px;
    position: absolute;
    top: 0px;
    left: 8px;
    border-radius: 50%;
}
.eye.left{
    transform: translateX(-120px); 
}
.eye.right{
    transform: translateX(120px);
}
.lip{
    border: 3px solid #000;
    width: 88px;
    height: 32px;
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -44px;
    border-top: none;
    z-index: 3;
    background: #ffe600;
}
.lip.left{
    transform: rotate(-25deg) translateX(-50px);
    border-radius: 0px 0 0 90%;
    border-right: none;
}
.lip.right{
    transform: rotate(25deg) translateX(50px);
    border-radius: 0 0 90% 0;
    border-left: none;
}
.mouth{
    width: 180px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -90px;
    top: 152px;
    overflow: hidden;
    background: #ffe600;
}
.mouth > .up{
    border: 3px solid #000;
    width: 160px;
    height: 600px;
    position: absolute;
    left: 50%;
    margin-left: -80px;
    bottom: 30px;
    border-radius: 50%;
    background: #9b000a;
    overflow: hidden;
}
.mouth > .up::after{
    content: '';
    display: block;
    border: 1px solid red;
    width: 180px;
    height: 160px;
    position: absolute;
    left: 50%;
    margin-left: -90px;
    bottom: -20px;
    border-radius: 50% 50% 0 0;
    background: #ff485f;
}
.face{
    border: 3px solid #000;
    width: 88px;
    height: 88px;
    position: absolute;
    left: 50%;
    margin-left: -44px;
    top: 176px;
    border-radius: 50%;
    background: #f00;
}
.face.left{
    transform: translateX(-160px);
}
.face.left > img{
    transform-origin:42px;
    transform:rotateY(180deg)
}
.face.right{
    transform: translateX(160px);
}
@keyframes wave{
    0%{transform: rotate(0deg);}
    33%{transform: rotate(5deg);}
    67%{transform: rotate(-5deg);}
    100%{transform: rotate(0deg);}
}`;
var $6d7061d7c053ca0f$export$2e2bcd8739ae039 = $6d7061d7c053ca0f$var$string;


const $1e794a95daaf229a$var$player = {
    id: undefined,
    time: 100,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    n: 1,
    init: ()=>{
        $1e794a95daaf229a$var$player.ui.demo.innerText = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $1e794a95daaf229a$var$player.n);
        $1e794a95daaf229a$var$player.ui.demo2.innerHTML = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $1e794a95daaf229a$var$player.n);
        $1e794a95daaf229a$var$player.play();
        $1e794a95daaf229a$var$player.bindEvents();
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        // 等价于如下 btnSlow.onclick = () => {slow()}
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    bindEvents: ()=>{
        for(let key in $1e794a95daaf229a$var$player.events)if ($1e794a95daaf229a$var$player.events.hasOwnProperty(key)) {
            // const value = hashTable[key] 只用了一次就没必要声明
            const value = $1e794a95daaf229a$var$player.events[key];
            document.querySelector(key).onclick = $1e794a95daaf229a$var$player[value];
        }
    },
    run: ()=>{
        $1e794a95daaf229a$var$player.n += 1;
        if ($1e794a95daaf229a$var$player.n > $6d7061d7c053ca0f$export$2e2bcd8739ae039.length) {
            window.clearInterval($1e794a95daaf229a$var$player.id);
            return;
        }
        $1e794a95daaf229a$var$player.ui.demo.innerText = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $1e794a95daaf229a$var$player.n);
        $1e794a95daaf229a$var$player.ui.demo2.innerHTML = $6d7061d7c053ca0f$export$2e2bcd8739ae039.substring(0, $1e794a95daaf229a$var$player.n);
        $1e794a95daaf229a$var$player.ui.demo.scrollTop = demo.scrollHeight;
    },
    play: ()=>{
        $1e794a95daaf229a$var$player.id = setInterval($1e794a95daaf229a$var$player.run, $1e794a95daaf229a$var$player.time);
    // 等价于 setInterval(()=>{run()},time)
    },
    pause: ()=>{
        return window.clearInterval($1e794a95daaf229a$var$player.id);
    },
    slow: ()=>{
        $1e794a95daaf229a$var$player.pause();
        $1e794a95daaf229a$var$player.time = 300;
        $1e794a95daaf229a$var$player.play();
    },
    normal: ()=>{
        $1e794a95daaf229a$var$player.pause();
        $1e794a95daaf229a$var$player.time = 100;
        $1e794a95daaf229a$var$player.play();
    },
    fast: ()=>{
        $1e794a95daaf229a$var$player.pause();
        $1e794a95daaf229a$var$player.time = 0;
        $1e794a95daaf229a$var$player.play();
    }
};
$1e794a95daaf229a$var$player.init();


//# sourceMappingURL=test.4853f091.js.map
