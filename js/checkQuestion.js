function CheckQuestion(name, value) {
        if (value == 'C') {
            document.getElementById(name.replace('Q', 'A') + 'C').style.display = 'block';
            document.getElementById(name.replace('Q', 'A') + 'I').style.display = 'none';
        } else {
            document.getElementById(name.replace('Q', 'A') + 'C').style.display = 'none';
            document.getElementById(name.replace('Q', 'A') + 'I').style.display = 'block';
        }
        GiveResults();
    }
    function GiveResults() {
        var readyForAnswer = true;
        var correctAnwers = 0;
        for (var i = 1; i < 6; i++) {
            if (!(document.getElementById('Q' + i + 'C').checked || document.getElementById('Q' + i + 'I').checked)) {
                readyForAnswer = false;
            } else {
                if (document.getElementById('Q' + i + 'C').checked) {
                    correctAnwers++;
                }
            }
        }
        if (readyForAnswer == true) {
            document.getElementById('scoreval').innerHTML = correctAnwers;
            document.getElementById('scoresheet').style.display = 'block';
        }
    }