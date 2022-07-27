// Задания 1 \\

let cars = [
    {
        name: 'captiva',
        price: 35000
    },
    {
        name: 'malibu',
        price: 37000
    },
    {
        name: 'elatra',
        price: 36000
    },
    {
        name: 'lada',
        price: 15000
    },
    {
        name: 'matiz',
        price: 3500
    },
    {
        name: 'camaro',
        price: 52000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'nexia',
        price: 10000
    },
    {
        name: 'gentra',
        price: 15000
    }
]

let cheap = []

let filteredOne = cars.filter(item => {
    if (item.price <= 35000) {
        cheap.push(item)
    }
})

console.log('Задание 1', cheap);



// Задания 2 \\

let arrOne = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
let index = prompt(arrOne)
let idx = arrOne.indexOf(index)

if (idx !== -1) {
    alert(`Вы удалили ${arrOne.splice(idx, 1)}
Остались ${arrOne}`)
} else {
    alert('Таких нет')
}



// Задания 3 \\

let arrTwo = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22]
let num = []

let filteredTwo = arrTwo.filter(item => {
    if(typeof(item) === 'number' ){
        num.push(item)
    }
})

console.log('Задание 3', num);

if(num.length >= 5){
    console.log('Задание 3','good');
}else{
    console.log('Задание 3','bad');
}

