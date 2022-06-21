
// // coeur
// var like = document.querySelectorAll('.glyphicon')
// console.log(like)
// like.forEach(el => {
//     el.addEventListener('click', () => {
//         console.log(el.glyphicon)
//         el.classList.toggle('like');
//     })
// })

// // close
// var clo = document.querySelectorAll('.btn-close')
// console.log(clo)
// clo.forEach(parentnode => {
//     parentnode.addEventListener('click', () => {
//         console.log('remove')
//         parentnode.parentElement.remove();
//     })
// })

// // plus

// var total = document.querySelector('.prix-total').value

// var plus = document.querySelectorAll('.plus')
// console.log(plus)
// plus.forEach(el => {
//     el.addEventListener('click', () => {
//         console.log(el.nextElementSibling)
//         el.nextElementSibling.innerHTML++
//         total.innerHTML = parseInt(total.innerHTML) + parseInt(el.previousElementSibling.previousElementSibling.innerHTML)
//         console.log(el.previousElementSibling.previousElementSibling.innerHTML)

//     })
// })






// // moins

// var minus = document.querySelectorAll('.moins')
// console.log(minus)
// minus.forEach(el => {
//     el.addEventListener('click', () => {
//         console.log(el.previousElementSibling.innerHTML)
//         if (el.previousElementSibling.innerHTML > 0) { el.previousElementSibling.innerHTML-- };
//         total.innerHTML = parseInt(total.innerHTML) - parseInt(el.previousElementSibling.innerHTML)
//         console.log(el.previousElementSibling.innerHTML)

//     })
// })



// //     function totalprice() {
// //         var totalprice1 = document.querySelectorAll('.prix-total')
// //         var qtn = document.querySelectorAll('.quantity')

// //         var prix = document.querySelectorAll('.TP')
// //         var i = 0;
// //         var sum =sum + parseInt(qtn[i] * prix[i]);
// //         return sum
// //     }
// // document.querySelector('.prix-total').value = Sum;

// var qtn = document.querySelectorAll('.quantity')
// var prix = document.querySelectorAll('.TP')
// var totalprice = document.querySelectorAll('.TP')
// totalprice.forEach(el => {
//     el.addEventListener('click', () => {
//         Math: Quantity * TP
//         el.addEventListener.innerHTML++
//     })
// })







var like = document.querySelectorAll('.glyphicon')
console.log(like)
like.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.glyphicon)
        el.classList.toggle('like');
    })
})

var cl = document.querySelectorAll('.btn-close')
console.log(cl)
cl.forEach(parentnode => {
    parentnode.addEventListener('click', () => {
        console.log('remove')
        parentnode.parentElement.remove();
    })
})


var total = document.querySelector('.prix-total')

var plus = document.querySelectorAll('.plus')
console.log(plus)
plus.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.nextElementSibling)
        el.nextElementSibling.innerHTML++
        // parseInt(el.previousElementSibling.previousElementSibling.innerHTM)
        total.innerHTML = parseInt(total.innerHTML) + parseInt(el.previousElementSibling.previousElementSibling.innerHTML)
        console.log(el.previousElementSibling.previousElementSibling.innerHTML)
    })
})

var minus = document.querySelectorAll('.minus')
console.log(minus)
minus.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.previousElementSibling.innerHTML)
        if (el.previousElementSibling.innerHTML > 0) { el.previousElementSibling.innerHTML-- };
        total.innerHTML = parseInt(total.innerHTML) - parseInt(el.previousElementSibling.innerHTML)
        console.log(el.previousElementSibling.innerHTML)

    })
})

var Quantity = document.querySelectorAll('.quantity')
var TP = document.querySelectorAll('.argent')
var totalprice = document.querySelectorAll('.TP')
totalprice.forEach(el => {
    el.addEventListener('click', () => {
        Math: Quantity * TP
        el.addEventListener.innerHTML++
    })
})