function getSleepHours (day) {
    if(day === 'Monday'){
      return 8;
    } else if (day === 'Tuesday'){
        return 7;
    }else if(day === 'Wednesday'){
       return 6;
    }else if(day === 'Thursday'){
        return 5;
    }else if(day === 'Friday'){
        return 4;
    }else if(day === 'Saturday'){
        return 10;
    }else if(day === 'Sunday'){
        return 9;
    }else {
        return 0;
    }
    }
    console.log(getSleepHours('Wednesday'));
    
    function getActualSleepHours(){
        return 8 + 7 + 6 + 5 + 4 + 10 + 9;
    }
    
    function getIdealSleepHours(){
         const idealHours = 8;
        return idealHours * 7;
    };
    console.log(getActualSleepHours());
    console.log(getIdealSleepHours());
    
    function calculateSleepDebt(){
        const actualSleepHours = getActualSleepHours();
        const idealSleepHours = getIdealSleepHours();
        if(actualSleepHours === idealSleepHours){
            console.log('You got the perfect amount of sleep');
        }else if(actualSleepHours > idealSleepHours){
            console.log('You got more sleep');
        }else if(actualSleepHours < idealSleepHours){
            console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest');
            }else{
                console.log('You did not sleep');
            }
        }
      calculateSleepDebt();