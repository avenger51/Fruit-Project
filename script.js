const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 
'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen',
  'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 
  'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum',
   'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 
   'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {

return fruit.filter(fruitName => 
	fruitName.toLowerCase().includes(str.toLowerCase()));  //need to ensure lower case for searching strings
}


function searchHandler(e) {
const inputValue = e.target.value;  
const filteredFruits = search(inputValue);
showSuggestions(filteredFruits);
}
//was working: search(inputValue); 
//showSuggestions(fruit, inputValue)  but this calls fruit directly...

function showSuggestions(results) {
	const suggestions = document.querySelector('.suggestions ul');
	suggestions.innerHTML = '';  
	results.forEach((result) => {  
		  const li = document.createElement('li');
		  li.textContent = result;
		  suggestions.appendChild(li);
		
		});
	}


function useSuggestion(e) {
const targetLi = e.target.textContent;
const input = document.getElementById('fruit');
input.value = targetLi;

const blankLiCreated = []; //HAD TO PASS AN EMPTY ARRAY 
return showSuggestions(blankLiCreated); //USED TO PASS A BLANK VALUE INTO THE LI

}

//the hover location is:  document.querySelector('.suggestions')
//<div class=​"suggestions">​<ul>​<li>​::marker​"Yuzu"</li>​</ul>​</div>​

suggestions.addEventListener('click', useSuggestion);
input.addEventListener('keyup', searchHandler); 

//: input.addEventListener('input', searchHandler);  //for on input but keyup is fine w/e



