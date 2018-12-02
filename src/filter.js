const fs = require('fs');
const athlete = require('./datasets/athlete_events.json');
const countries = require('./datasets/noc_regions.json')

// // ------------------ LeaderBoard ---------------------------------------------------------------------------
var players = {};

athlete.map((data)=>{
	if(!players[data.Name]) players[data.Name] = {Medal:{Gold:0,Silver:0,Bronze:0}};
	else {
		if(data.Medal !== "NA"){
			 players[data.Name].Medal[data.Medal]++;
		}
	}
});

delete players.NA;
// console.log(players)

 fs.writeFile('./datasets/leaderboardMVP.json', JSON.stringify(players), (err)=>{
	if(err) console.log(err);
	console.log('saved')
});








// // ------------------ Events in Summer and Winter ---------------------------------------------------------------------------
// var events = {
// 	Summer:{},
// 	Winter:{}
// };

// athlete.map((data)=>{
// 	// if(!events[data.Sport])	events[data.Sport] = 1;
// 	// else events[data.Sport]++
// 	if(data.Season === "Summer"){
// 		if(!events.Summer[data.Sport])	events.Summer[data.Sport] = 1;
// 		else events.Summer[data.Sport]++
// 	}	
// 	else {
// 		if(!events.Winter[data.Sport])	events.Winter[data.Sport] = 1;
// 		else events.Winter[data.Sport]++;
// 	}
// });

// delete events.NA;
// console.log(events);

//  fs.writeFile('./datasets/events.json', JSON.stringify(events), (err)=>{
// 	if(err) console.log(err);
// 	console.log('saved')
// });





// // ------------------ height  ---------------------------------------------------------------------------
// var height = {};

// athlete.map((data)=>{
// 	if(!height[data.Height])	height[data.Height] = 1;
// 	else height[data.Height]++
// })
// delete height.NA;
// console.log(height);

//  fs.writeFile('./datasets/height.json', JSON.stringify(height), (err)=>{
// 	if(err) console.log(err);
// 	console.log('saved')
// });



// // ------------------ age groups  ---------------------------------------------------------------------------
// var age = {};

// athlete.map((data)=>{
// 	if(!age[data.Age])	age[data.Age] = 1;
// 	else age[data.Age]++
// })
// delete age.NA;
// console.log(age);

//  fs.writeFile('./datasets/age.json', JSON.stringify(age), (err)=>{
// 	if(err) console.log(err);
// 	console.log('saved')
// });


// // ------------------- no. of participants & medals won by each country in given years ----------------------
// var country = {};
// var participants = [];
// athlete.map((data)=>{
// 	if(!country[data.NOC])	
// 		country[data.NOC] = 1;
// 	else 
// 		country[data.NOC]++;
// });

// for(var k in country){
// 	participants.push({NOC: k})
// }
// // console.log(participants)
// athlete.map((data)=>{
// 	for(var i=0; i<participants.length; i++){
// 		if(participants[i].NOC === data.NOC){
// 			if(!participants[i][data.Year]){
// 				participants[i][data.Year] = 1;
// 			} else {
// 				participants[i][data.Year]++;
// 			}

// 			if(!participants[i][data.Medal]){
// 				participants[i][data.Medal] = 1;
// 			} else {
// 				participants[i][data.Medal]++;
// 			}
// 		}
// 	}
// });


// for(var i=0; i<participants.length; i++){
// 	for(var j=0; j<countries.length; j++){
// 		if(participants[i].NOC === countries[j].NOC){

// 			var obj = {};
// 			var noc = participants.NOC;
// 			delete participants.NOC;
// 			obj.year = participants[i];
// 			delete participants[i];
// 			obj.country = countries[j].region;
// 			participants[i] = obj;
// 			delete participants[i].year.NOC;
// 			obj.medal = {};
// 			obj.medal.gold = participants[i].year.Gold;
// 			obj.medal.silver = participants[i].year.Silver;
// 			obj.medal.bronze = participants[i].year.Bronze;
// 			delete participants[i].year.Gold;
// 			delete participants[i].year.Silver;
// 			delete participants[i].year.Bronze;
// 			delete participants[i].year.NA;
// 		}
// 	}		
// }

// console.log(participants)

// fs.writeFile('./datasetage/participants.json', JSON.stringify(participants), (err)=>{
// 	if(err) console.log(err);
// 	console.log('saved')
// });







// ------------------- male female ratio ----------------------
// var mf_ratio = {};
// var sexRatio = [];
// athlete.map((data)=>{
// 	if(!mf_ratio[data.Year])	
// 		mf_ratio[data.Year] = 1;
// 	else 
// 		mf_ratio[data.Year]++;
// });

// for(var k in mf_ratio){
// 	sexRatio.push({year: k})
// }

// athlete.map((data)=>{
// 	for(var i=0; i<sexRatio.length; i++){
// 		if(sexRatio[i].year === data.Year){
// 			if(!sexRatio[i][data.Sex]){
// 				sexRatio[i][data.Sex] = 1;
// 				break;
// 			} else {
// 				sexRatio[i][data.Sex]++;
// 			}
// 		}
// 	}
// });

// fs.writeFile('./datasets/sexRatio.json', JSON.stringify(sexRatio), (err)=>{
// 	if(err) console.log(err);
// 	console.log('saved')
// });