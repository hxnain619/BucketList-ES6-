
/*
		
		const div = document.getElementsByClassName("col");
		const button = document.getElementsByClassName("btn")[0];

	button.onclick = add => {
		

		let p = document.createElement("p");		
		let itemAdd = [];
		let text = document.getElementById("txt").value;
		let itemCount = div[3].childElementCount;
			
	itemAdd.push(text);
	p.innerHTML = itemAdd;
	div[3].appendChild(p);
	div[1].getElementsByClassName("itemCount")[0].innerHTML = `Your Bucket List ( ${itemCount + 1} ) `;
	
	p.onclick = removeItem => {
			
			itemAdd.pop(this);	
		   p.innerHTML = itemAdd;
			
		div[1].getElementsByClassName("itemCount")[0].innerHTML = `Your Bucket List ( ${itemCount} ) `;
			
			
	
	}
		

}

	
*/




const button = document.getElementsByClassName("btn")[0];
const crossIcon = document.getElementsByClassName("crossIcon");	
const itemCount = document.getElementsByClassName("itemCount")[0];
const itemAdd = document.getElementsByClassName("col")[3];

class BucketList {
	
	AddItem() {

		let message = document.getElementById('message');
		let text = document.getElementById("txt");
		let p = document.createElement("p");
		let btn2 = document.getElementById("btn2");
		
		
		
	if( text.value == ""  ) {
			
			message.style= " display:block; animation : show 1s linear 1";
			
				btn2.onclick = () => {
				
					message.style= " display : block; animation : fadeOut 1s linear 1";
					window.setTimeout(() => message.style.display = "none" , 900 );	
					
				}
				
			}
		
	else {
			
			
		 	p.setAttribute("class","life-container");
			p.innerHTML = `${ text.value }<img class ="crossIcon" src="./plus-icon.png">`;
			itemAdd.appendChild(p);
			itemCount.innerText = `Your Bucket List ( ${ itemAdd.childElementCount } )`;
			p.style.animation = "add 0.6s linear 1";
				
			text.value = "";
			
			p.onclick = bucketListApp.TerminateList;
			
			}
		
		}

 TerminateList() {
	 		
	
	this.style.animation = "remove .3s ease-in 1 ";
	
	itemCount.innerText = `Your Bucket List ( ${itemAdd.childElementCount - 1} )`;
	
	window.setTimeout(() => itemAdd.removeChild(this),300);
	 
	}
	
}



	
	const bucketListApp = new BucketList();

	button.onclick = bucketListApp.AddItem;
