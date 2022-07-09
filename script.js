Swal.fire({
    title: "Hi",
    confirmButtonText: "Hi"
})
.then(()=>{
    const audio = document.querySelector(`audio`)
    audio.volume = 0.5
    audio.play()
    document.getElementById(`page-1`).style.display = "block"
    anime({
        targets: '#page-1',
        opacity: [0, 1],
        duration: 3000,
        easing: 'linear',
        complete: () => {
            anime({
                targets: '#page-1',
                opacity: [1, 0],
                duration: 1000,
                delay: 3000,
                easing: 'linear',
            })
    
            setTimeout(() => {
                document.getElementById(`page-1`).style.display = "none"
                document.getElementById(`page-2`).style.display = "block"
            }, 4000);
        }
    })
    anime({
        targets: '#page-2',
        opacity: [0, 1],
        duration: 3000,
        easing: 'linear',
        delay: 7100,
        complete: () => {
            anime({
                targets: '#page-2',
                opacity: [1, 0],
                duration: 1000,
                delay: 20000,
                easing: 'linear',
            })
    
            setTimeout(() => {
                document.getElementById(`page-2`).style.display = "none"
                document.getElementById(`page-3`).style.display = "block"
            }, 21000);
        }
    })
    anime({
        targets: '#page-3',
        opacity: [0, 1],
        duration: 8000,
        easing: 'linear',
        delay: 28300,
        complete: () => {
            anime({
                targets: '#page-3',
                opacity: [1, 0],
                duration: 1000,
                delay: 90000,
                easing: 'linear',
            })
    
            setTimeout(() => {
                document.getElementById(`page-3`).style.display = "none"
                document.getElementById(`page-4`).style.display = "block"
            }, 91000);
        }
    })
    anime({
        targets: '#page-4',
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        delay: 119400,
    })
    anime({
        targets: '#f1',
        opacity: 1,
        duration: 3000,
        easing: 'linear',
        delay: 17100,
        complete: () => {
            anime({
                targets: '#f2',
                opacity: 1,
                duration: 3000,
                delay: 100,
                translateY: [-100, 0],
                easing: 'linear',
                complete: () => {
                    anime({
                        targets: '#f3',
                        opacity: 1,
                        duration: 3000,
                        delay: 100,
    translateY: [100, 0],
                        easing: 'linear'
                    })
                }
            })
        }
    })
})