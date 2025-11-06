// setInterval - белгилуу бир убакытын ичинде кандайдыр бир функцияны аткарат 
// setInterval (alert ,5000)

// setInterval(() => {
//     console.log(`hi barch`)
// }, 3000);

// setInterval(() => {
//     alert(`barch`)
// }, 2000);

// let vlow =0
// setInterval(() => {
//     vlow++
//      let p = document.getElementById('timer') 
//      p.innerHTML=vlow
//     if (vlow > 1){
//         p.style.backgroundColor="red"
//     }
//     if (vlow >= 3){

//         p.style.backgroundColor="aqua"

//     }if (vlow >= 5){
//         p.style.backgroundColor="rgb(255, 234, 0)"
//     }
    
    
// }, 2000);

// setTimeout(() => {
//     alert(`big boy`)
// }, 3000);


        let fly = 0;
        let intervalId = null;

        const startfly = () => {
            if (intervalId === null) { 
                intervalId = setInterval(() => {
                    fly++;
                    document.getElementById('sum').innerHTML = fly;
                }, 400);
            }
        };

        const stopfly = () => {
            clearInterval(intervalId);
            intervalId = null;
        };

        const clearfly = () => {
            clearInterval(intervalId);
            intervalId = null;
            fly = 0;
            document.getElementById('sum').innerHTML = fly;
        };