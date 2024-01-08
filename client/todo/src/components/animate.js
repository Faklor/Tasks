import anime from 'animejs'

const deleteTask = (index)=>{
    anime({
        targets:'.task',
        scale:function(el, i){
            if(index === i){
                return 0
            }
            
        },
        transformX:function(el,i){

        },
        easing: 'easeInOutExpo',
    })
}

export {
    deleteTask
}