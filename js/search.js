// crear los años
const years = document.createElement('option');
const  maxyear = new Date().getFullYear();
let  minyear = maxyear - 10;

for(let i = maxyear; i >  minyear; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars() {
    return [
        {
            make: 'BMW',
            carmodel: 'Series 3',
            year: 2012,
            price: 32000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A4', 
            year: 2018, 
            price: 40000, 
            doors: 4, 
            color: 'Black', 
            transmission: 'automatic' 
        },
        {
            make: 'Ford',
            carmodel: 'Mustang',
            year: 2015,
            price: 20000,
            doors: 2,
            color: 'White',
            transmission: 'automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A6', 
            year: 2010, 
            price: 35000, 
            doors: 4, 
            color: 'Black', 
            transmission: 'automatic' },
        {
            make: 'BMW',
            carmodel: 'Serie 5',
            year: 2016,
            price: 70000,
            doors: 4,
            color: 'Red',
            transmission: 'automatic'
        },
        {
            make: 'Mercedes Benz',
            carmodel: 'Clase C',
            year: 2015,
            price: 25000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        {
            make: 'Chevrolet',
            carmodel: 'Camaro',
            year: 2018,
            price: 60000,
            doors: 2,
            color: 'Red',
            transmission: 'manual'
        },
        { 
            make: 'Ford', 
            carmodel: 'Mustang', 
            year: 2019, 
            price: 80000, 
            doors: 2, 
            color: 'Red', 
            transmission: 'manual' },
        {
            make: 'Dodge',
            carmodel: 'Challenger',
            year: 2017,
            price: 40000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A3', 
            year: 2017, 
            price: 55000, 
            doors: 2, 
            color: 'Black', 
            transmission: 'manual' 
        },
        {
            make: 'Dodge',
            carmodel: 'Challenger',
            year: 2012,
            price: 25000,
            doors: 2,
            color: 'Red',
            transmission: 'manual'
        },
        {
            make: 'Mercedes Benz',
            carmodel: 'Clase C',
            year: 2018,
            price: 45000,
            doors: 4,
            color: 'Blue',
            transmission: 'automatic'
        },
        {
            make: 'BMW',
            carmodel: 'Serie 5',
            year: 2019,
            price: 90000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { 
            make: 'Ford',
            carmodel: 'Mustang',
            year: 2017,
            price: 60000,
            doors: 2,
            color: 'Black',
            transmission: 'manual' 
        },
        {
            make: 'Dodge',
            carmodel: 'Challenger',
            year: 2015,
            price: 35000,
            doors: 2,
            color: 'Blue',
            transmission: 'automatic'
        },
        {
            make: 'BMW',
            carmodel: 'Serie 3',
            year: 2018,
            price: 50000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        {
            make: 'BMW',
            carmodel: 'Serie 5',
            year: 2017,
            price: 80000,
            doors: 4,
            color: 'Black',
            transmission: 'automatic'
        },
        {
            make: 'Mercedes Benz',
            carmodel: 'Clase C',
            year: 2018,
            price: 40000,
            doors: 4,
            color: 'White',
            transmission: 'automatic'
        },
        { 
            make: 'Audi', 
            carmodel: 'A4', 
            year: 2016, 
            price: 30000, 
            doors: 4, 
            color: 'Blue', 
            transmission: 'automatic'
        }
    ];
}

// Search terms object
letsearchFields = {
    make: '',
    year: '',
    min: '',
    max: '',
    doors: '',
    transmission: '',
    color: ''
}

// Event listener for DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    const cars = getCars();
    showCars(cars);

});

function showCars(cars) {

    // get the coontainer
    const container  = document.querySelector('#result');


    // Build the HTML and print the data inthe container
    cars.forEach(car => {
        const carHTML = document.createElement('p');
        carHTML.innerHTML = `
            ${car.make} - ${car.year} - ${car.carmodel} - ${car.doors} -Transmission: ${car.transmission} - ${car.price} - ${car.color}
        `;
        container.appendChild(carHTML);
    })
}

// {
//     make: 'BMW',
//     carmodel: 'Serie 5',
//     year: 2017,
//     price: 80000,
//     doors: 4,
//     color: 'Black',
//     transmission: 'automatic'
// },