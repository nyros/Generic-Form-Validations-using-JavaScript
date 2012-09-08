
//global variables
	i=0;j=0;
	radio_list = [];
	checkbox_list = [];
	
//function to validate textboxes
function validation_for_textbox(element){
	
	if(element.value.length == 0){
		alert(" " +element.name+"  not be empty" );
		element.focus();
		return false;
	}else if(element.name == "email"){
		
		var positionofatrate = element.value.indexOf("@");
		var positionofdot = element.value.lastIndexOf(".");
		if(positionofatrate<1 ||   positionofdot<positionofatrate+2 || positionofatrate+2 >= element.value.length){
			alert("please enter valid email address");
			element.focus();
			return false;
		}else{
			return true;
		}
	}else if(element.value.length >=10 || element.value.length <=2){
		alert(" " +element.name+" field length be between 3 to 10" );
		element.focus();
		return false;
	}else{
		return true;
	}
}
//function to validate radio buttons
function validation_for_radio_buttons(element){
	var temp = i;
	temp--;
	if(element.checked !=true && element.name ==""){
		alert("please select"+element.value);
		return false;
	}
	if(element.checked == true){
		return true;
	}else{
		while(temp !=-1 ){
			if(element.name == radio_list[temp].name){
				if((element.checked == true)|| (radio_list[temp].checked == true))
					return true;
			}
			temp--;
		}
	}
	alert("please select "+element.name);
	return false;
}
//function to validate select boxes
function validation_for_select_boxes(element){
	if(element.value != "Default")
		return true;
	else{
		alert("please select "+ element.name);
		return false;
	}
}
//function to validate checkboxes		
function validation_for_checkboxes(element){
	
	var temp = j;
	var flag = 0;
	temp--;
	if(element.checked !=true && element.name ==""){
		alert("please select"+element.value);
		return false;
	}
	
	if(element.checked == true){
		return true;
	}else{
		while(temp !=-1 ){
			if(element.name == checkbox_list[temp].name){
				if((element.checked == false)&& (checkbox_list[temp].checked == false)){
					flag++;
					
				}
			}
			temp--;
		}
	}
	if(flag == j){
		alert("please select "+element.name);
		return false;
	}else{
		return true;
	}
}
//to get a number of checkbox elements in globally declared array
function toGetCheckbox_list(root){
	//var root = document.registration.elements;
	var elementNumber;
	for(elementNumber = 0;elementNumber<document.registration.elements.length;elementNumber++){
		if(root[elementNumber].type == "checkbox"){
			if(root[elementNumber].name != ""){
				checkbox_list[j]=root[elementNumber];
				j++;
			}
		}
	}
}
//to get a number of checkbox elements in globally declared array
function toGetRadio_list(root){
	//var root = document.registration.elements;
	var elementNumber;
	for(elementNumber = 0;elementNumber<document.registration.elements.length;elementNumber++){
		if(root[elementNumber].type == "radio"){
			if(root[elementNumber].name != ""){
				radio_list[i]=root[elementNumber];
				i++;
			}
		}
	}
}
