$(document).ready(function() {

		//Declare Variables

//Price variables
var ApplesPrice = parseFloat($("#ApplesPrice").text());
var OrangesPrice = parseFloat($("#OrangesPrice").text());
var BananasPrice = parseFloat($("#BananasPrice").text());
var PearsPrice = parseFloat($("#PearsPrice").text());

//Average Variables
var ApplesPurchased = parseFloat($("#ApplesPurchased").text());
var OrangesPurchased = parseFloat($("#OrangesPurchased").text());
var BananasPurchased = parseFloat($("#BananasPurchased").text());
var PearsPurchased = parseFloat($("#PearsPurchased").text());


// Budget Variable
var Budget = 100;




//Function to 
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}


function randomFloat() {
	 return ((Math.random() * (.5 - .01) + .01).toFixed(2)*1); 
	
}


var LowestPrice = 0.5;
var HighestPrice = 9.99;

function ChangePrice() {
	// 0 = price down, 1 = price up
	
///Assign Random Prices to Fruits

//APPLES
	if (randomNumber(0, 1) == 1) {
		ApplesPrice += randomFloat();
		if(ApplesPrice > HighestPrice){
			ApplesPrice = HighestPrice;
			}
		} else {
			ApplesPrice -= randomFloat();
			if (ApplesPrice < LowestPrice) {
				ApplesPrice = LowestPrice;
			}

		}
		$("#ApplesPrice").text(ApplesPrice);

//ORANGES

	if (randomNumber(0, 1) == 1) {
		OrangesPrice += randomFloat();
		if(OrangesPrice > HighestPrice){
			OrangesPrice = HighestPrice;
			}
		} else {
			OrangesPrice -= randomFloat();
			if (OrangesPrice < LowestPrice) {
				OrangesPrice = LowestPrice;
			}

		}
		$("#OrangesPrice").text(OrangesPrice);

//BANANAS		
	if (randomNumber(0, 1) == 1) {
		BananasPrice += randomFloat();
		if(BananasPrice > HighestPrice){
			BananasPrice = HighestPrice;
			}
		} else {
			BananasPrice -= randomFloat();
			if (BananasPrice < LowestPrice) {
				BananasPrice = LowestPrice;
			}

		}
		$("#BananasPrice").text(BananasPrice);

//PEARS
	if (randomNumber(0, 1) == 1) {
		PearsPrice += randomFloat();
		if(PearsPrice > HighestPrice){
			PearsPrice = HighestPrice;
			}
		} else {
			PearsPrice -= randomFloat();
			if (PearsPrice < LowestPrice) {
				PearsPrice = LowestPrice;
			}

		}
		$("#PearsPrice").text(PearsPrice);
	
}

//INTERVAL//

setInterval(function(){	ChangePrice(); }, 500);

//BUTTON that adds up Purchased Apples//

$("button").on("click", function(){
	if($(this).attr("class")=="purchasebuttonApples"){
		if(Budget<0){
	
	//Stop Purchased fruits to keep increasing if Budget is gone //
	$("#ApplesPurchased").text(ApplesPurchased); 
		}
		else{
	$("#ApplesPurchased").text(ApplesPurchased+=1);
}
//Calculates AVERAGE Apple price //	

	var ApplesFinalPrice = (ApplesPurchased * ApplesPrice);
	
	
	
//Calculates our BUDGET so far// (Apples)
		
	Budget = (Budget - ApplesFinalPrice);
	$("#cash").text("$ " + Budget);
	

//Verifies if we still have Budget left
	if(Budget < 0){
		$("#cash").addClass("broke").text("Uh-oh! You're broke!");
		
		

		$("#ApplesPurchased").addClass("nomore").text( "You've bought " 
			+ ApplesPurchased + " apples"); //Prints out the final amount of fruits bought
	}
	else{
		$("#ApplesAverage").text(ApplesFinalPrice);
	}
	return Budget;
	}

//BUTTON that adds up Purchased Oranges//

	if($(this).attr("class")=="purchasebuttonOranges"){
	if(Budget<0){
	
	//Stop Purchased fruits to keep increasing if Budget is gone //
	$("#OrangesPurchased").text(OrangesPurchased); 
		}
		else{
	$("#OrangesPurchased").text(OrangesPurchased+=1);
}

//Calculates AVERAGE Oranges' price //		
	
	var OrangesFinalPrice = (OrangesPurchased * OrangesPrice);
	

//Calculates our BUDGET so far// (Oranges)
	
	Budget = (Budget- OrangesFinalPrice);
	$("#cash").text("$ " + Budget);
	
//Verifies if we still have Budget left
	if(Budget < 0){
		$("#cash").addClass("broke").text("Uh-oh! You're broke!");
		
		$("#OrangesPurchased").addClass("nomore").text( "You've bought " 
			+ OrangesPurchased + " Oranges"); //Prints out the final amount of fruits bought
	}
	else{
		$("#OrangesAverage").text(OrangesFinalPrice);
	}
	return Budget;
	}

//BUTTON that adds up Purchased Bananas//	
	
	if($(this).attr("class")=="purchasebuttonBananas"){
		if(Budget<0){
	
	//Stop Purchased fruits to keep increasing if Budget is gone //
	$("#BananasPurchased").text(BananasPurchased); 
		}
		else{
	$("#BananasPurchased").text(BananasPurchased+=1);
}

//Calculates AVERAGE Bananas' price //	
	
	var BananasFinalPrice = (BananasPurchased * BananasPrice);
	$("#BananasAverage").text(BananasFinalPrice);

//Calculates our BUDGET so far// (bananas)	
	Budget = (Budget- BananasFinalPrice);
	$("#cash").text("$ " + Budget);
	
//Verifies if we still have Budget left
	if(Budget < 0){
		$("#cash").addClass("broke").text("Uh-oh! You're broke!");
	$("#BananasPurchased").addClass("nomore").text( "You've bought " 
			+ BananasPurchased + " Bananas"); //Prints out the final amount of fruits bought
	}
	else{
		$("#BananasAverage").text(BananasFinalPrice);
	}
	return Budget;
	}

//BUTTON that adds up Purchased Pears//
	
	if($(this).attr("class")=="purchasebuttonPears"){
		if(Budget<0){
	
	//Stop Purchased fruits to keep increasing if Budget is gone //
	$("#PearsPurchased").text(PearsPurchased); 
		}
		else{
	$("#PearsPurchased").text(PearsPurchased+=1);
}

//Calculates AVERAGE Pears' price //	
	
	var PearsFinalPrice = (PearsPurchased * PearsPrice);
	$("#PearsAverage").text(PearsFinalPrice);
	
//Calculates our BUDGET so far// (Pears)
	Budget = (Budget- PearsFinalPrice);
	$("#cash").text("$ " + Budget);
	
//Verifies if we still have Budget left
	if(Budget < 0){
		$("#cash").addClass("broke").text("Uh-oh! You're broke!");
	
		$("#PearsPurchased").addClass("nomore").text( "You've bought " 
			+ PearsPurchased + " Pears"); //Prints out the final amount of fruits bought
	}
	else{
		$("#PearsAverage").text(PearsFinalPrice);
	}
	return Budget;
	}

});



});


