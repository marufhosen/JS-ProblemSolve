//https://github.com/marufhosen/JS-ProblemSolve

//Kilometer to meter

function kilometerToMeter(km){
    if(km < 0){
        return "Opps!! Enter a positive value.";
    }
    else{
        return km*1000;
    }
}

//Budget Calculator

function budgetCalculator(ghuriPrice, phonePrice, laptopPrice){
    var budgetForGhhuri = ghuriPrice * 50;
    var budgetForPhone = phonePrice * 100;
    var budgetForLaptop = laptopPrice * 500;

    var totalBudget = budgetForGhhuri + budgetForPhone + budgetForLaptop;

    return totalBudget;
}

//Hotel Cost

function hotelCost(howManyDays){

    if(howManyDays >=1 && howManyDays <=10){
       var totalHotelCost = howManyDays * 100;
       return totalHotelCost;
    }

    else if(howManyDays >=11 && howManyDays <=20){
        var totalHotelCost = (10*100) + (howManyDays-10)*80;
        return totalHotelCost;
    }

    else if(howManyDays >= 21){
        var totalHotelCost = (10*100) + (10*80) + (howManyDays -20)*50;
        return totalHotelCost;
    }

    else{
        return "Enter a valid number!!!"
    }
}

// Mega Friends

function megaFriend(friendList){
    var megaOne = friendList[0].length;
    for(var i=0; i < friendList.length; i++){
        if(friendList[i].length > megaOne){
            megaOne = friendList[i];
        }
    }
    return megaOne;
}