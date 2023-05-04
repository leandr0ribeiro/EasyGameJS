const leandrinho = document.querySelector('.leandrinho');
const pipe = document.querySelector('.pipe');

const jump = () => {
    leandrinho.classList.add('jump');

    setTimeout(()=> {
        leandrinho.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const leandrinhoPosition = +window.getComputedStyle(leandrinho).bottom.replace('px','');
    if (pipePosition <= 90 && pipePosition > 20 && leandrinhoPosition < 50){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        leandrinho.animation = 'none';
        leandrinho.style.bottom = `${leandrinhoPosition}px`
        leandrinho.src="./images/dead.png";

        clearInterval(loop)
    }
},10)

document.addEventListener('keydown', jump);