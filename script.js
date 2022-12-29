const btn = document.getElementById('calculate');

btn.addEventListener('click', function () {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == '') {
        alert('Proszę uzupełnij puste pola');
        return;
    }

    height = height / 100

    let bmi = (weight / (height * height));

    bmi = bmi.toFixed(2);

    document.querySelector('#result').innerHTML = bmi;

    let status = '';
    if (bmi < 18.5) {
        status = "Masz niedowagę"
    }
    if (bmi >= 18.5 && bmi < 25) {
        status = "Twoja waga jest prawidłowa"
    }
    else if (bmi > 25) {
        status = "Masz nadwagę"
    }

    document.querySelector('#comment').innerHTML = status;

});