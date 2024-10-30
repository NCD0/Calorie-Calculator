let res = document.getElementById('totals');
let sub = document.getElementById('sub');

sub.onclick = function() { 
    let age = parseFloat(document.getElementById("age").value);
    let gender = document.querySelector('input[name="gender"]:checked'); 
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let activity = document.getElementById("activity").value;

    let tot = 0;

    if (!age) {
        res.textContent = 'Please select a valid age'
        return;
    }

    if (!height) {
        res.textContent = 'Please select a valid height'
        return;
    }

    if (!weight) {
        res.textContent = 'Please select a valid weight'
        return;
    }

    if (gender) { 
        if (gender.value === 'Male') {
            tot = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender.value === 'Female') {
            tot = 10 * weight + 6.25 * height - 5 * age - 161;
        }
    } else {
        res.textContent = 'Please select a valid gender';
        return;
    }

    if (activity === 'light') {
        tot *= 1.375;
    } else if (activity === 'mod') {
        tot *= 1.55;
    } else if (activity === 'active') {
        tot *= 1.725;
    } else {
        res.textContent = 'Please select a valid activity';
        return;
    }

    res.textContent = `${tot.toFixed(2)} Calories`;
};