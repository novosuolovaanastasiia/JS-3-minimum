/* Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних. */

let age = prompt('How old are you?')

if (age > 0 && age < 11) {
    alert('Hi, kid!')
} else if (age > 12 && age < 17) {
    alert('Hi, teen!')
} else if (age > 18 && age < 59) {
    alert('Hi, adult!')
} else if (age > 60 && age < 100) {
    alert('Hi, retiree!')
} else {
    alert('What an unusual age!')
}

/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д). */

let num = prompt("Enter some number from 0 to 9 ")

function changeNumberToChar() {
    if (num == 1) {
        alert("!");
    }
    else if (num == 2) {
        alert("@")
    }
    else if (num == 3) {
        alert("#")
    }
    else if (num == 4) {
        alert("$")
    }
    else if (num == 5) {
        alert("%")
    }
    else if (num == 6) {
        alert("^")
    }
    else if (num == 7) {
        alert("&")
    }
    else if (num == 8) {
        alert("*")
    }
    else if (num == 9) {
        alert("(")
    }
    else if (num == 0) {
        alert(")")
    }
    else {
        alert("Please enter the correct number")
    }

}
changeNumberToChar()


// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let sumOfNumAndAge = +age + +num;

alert(`The sum of the numbers entered earlier ${sumOfNumAndAge}`)


// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let num1 = prompt("Enter some number")
let num2 = prompt("Enter one more some other number")
let num3

GCD(num1, num2)
alert(`GCD of numbers ${+ num1} and ${+ num2}  is: ${+num3}`)

function GCD(a, b) {
    if (num1 < 0 || num2 < 0) {
        alert("Please enter a positive number")
    }
    let c;
    while (a != b) {
        if (a > b) {
            a = a - b;
        }
        else if (a < b) {
            c = a;
            a = b;
            b = c;
        }

    }
    return num3 = a
}

// Запитай у користувача число і виведи всі дільники цього числа.
let numDivisor = prompt('Enter the number'),
    divisor = [],
    i = 1

while (i < numDivisor) {
    if (numDivisor % i == 0) divisor.push(i)

    i++
}

alert(divisor)