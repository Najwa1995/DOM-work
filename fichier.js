
// coeur
var like = document.querySelectorAll('.glyphicon')
console.log(like)
like.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.glyphicon)
        el.classList.toggle('like');
    })
})

// close
var clo = document.querySelectorAll('.btn-close')
console.log(clo)
clo.forEach(parentnode => {
    parentnode.addEventListener('click', () => {
        console.log('remove')
        parentnode.parentElement.remove();
    })
})

// plus

var total = document.querySelector('.prix-total').value

var plus = document.querySelectorAll('.plus')
console.log(plus)
plus.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.nextElementSibling)
        el.nextElementSibling.innerHTML++
        total.innerHTML = parseInt(total.innerHTML) + parseInt(el.previousElementSibling.previousElementSibling.innerHTML)
        console.log(el.previousElementSibling.previousElementSibling.innerHTML)

    })
})




// moins

var minus = document.querySelectorAll('.moins')
console.log(minus)
minus.forEach(el => {
    el.addEventListener('click', () => {
        console.log(el.previousElementSibling.innerHTML)
        if (el.previousElementSibling.innerHTML > 0) { el.previousElementSibling.innerHTML-- };
        total.innerHTML = parseInt(total.innerHTML) - parseInt(el.previousElementSibling.innerHTML)
        console.log(el.previousElementSibling.innerHTML)

    })
})

// prix-total

var totalprice = document.querySelectorAll('.prix-total')
totalprice.forEach(el => {
    el.addEventListener('click', () => {
        Math: Quantity * totalprice
        el.addEventListener.innerHTML++
    })
})