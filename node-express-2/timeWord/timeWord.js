function timeWord(time) {
    let hours = parseInt(time.substr(0,2));
    let minutes = parseInt(time.substr(3,2));
    let hourWords = "";
    let minuteWords = "";
    let period = "";

    if (hours === 0 && minutes === 0) {
        return "midnight";
    } else if (hours === 12 && minutes === 0) {
        return "noon";
    }

    if( hours >= 12) {
        period = "pm";
        if (hours > 12) {
            hours -= 12;
        }
    } else {
        period = "am";
        if (hours === 0) {
            hours = 12;
        }
    }

    switch (hours) {
        case 1: 
            hourWords = "one";
            break;
        case 2 : 
            hourWords = "two";
            break;
        case 3: 
            hourWords = "three";
            break;
        case 4: 
            hourWords = "four";
            break;
        case 5 : 
            hourWords = "five";
            break;
        case 6: 
            hourWords = "six";
            break;
        case 7: 
            hourWords = "seven";
            break;
        case 8 : 
            hourWords = "eight";
            break;
        case 9: 
            hourWords = "nine";
            break;
        case 10: 
            hourWords = "ten";
            break;
        case 11 : 
            hourWords = "eleven";
            break;
        case 12: 
            hourWords = "twelve";
            break;
    }

    if ( minutes === 0){
        minuteWords = "o clock";
    } else if (minutes < 10){
        minuteWords = "oh" + time.substr(3,1);
    } else if (minutes < 20 ) {
        switch (minutes) {
            case 10:
                minuteWords = "ten";
                break;
            case 11:
                minuteWords = "eleven";
                break;
            case 12:
                minuteWords = "twelve";
                break;
            case 13:
                minuteWords = "thirteen";
                break;
            case 14:
                minuteWords = "fourteen";
                break;
            case 15:
                minuteWords = "fifteen";
                break;
            case 16:
                minuteWords = "sixteen";
                break;
            case 17: 
                minuteWords = "seventeen";
                break;
            case 18:
                minuteWords = "eighteen";
                break;
            case 19:
                minuteWords = "nineteen";
                break;       
        }
    } else {
        switch (Math.floor(minutes / 10 )) {
            case 2:
                minuteWords = "twenty";
                break;
            case 3: 
                minuteWords = "thirty";
                break;
            case 4: 
                minuteWords = "fourty";
                break;
            case 5:
                minuteWords = "fifty";
                break;
        } if (minutes % 10 !==0 ){
        minuteWords += ' ' + time.substr(4,1);
        }
    }

    return hourWords + " " + minuteWords + " " + period;

}
console.log(timeWord("01:30"));

module.exports = timeWord;