const resultDiv = document.querySelector("#result");
const btnGetTema = document.querySelector('#getTema');

let searchQuery = document.querySelector('#searchQuery');
let youthName;
let result = '';
let id;


btnGetTema.addEventListener('click', () => {
	if(searchQuery.value === null || searchQuery.value === '') {
		alert("You must enter a valid name or id");
	} 
	for (var i = 0; i < youth.length; i++) {
		youthName = youth[i];
		if(youthName.first_name === searchQuery.value){
			id = youthName.tema_id;
			console.log(youthName.first_name);
			console.log(tema[id - 1].content);
		}
	}
});

