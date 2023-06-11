var menu=window.document.getElementById("menu");
var menu_ul=window.document.getElementById("menu-ul");

menu.addEventListener('click',function(){
	if(menu_ul.classList.contains("adicionar-left")){
       menu_ul.classList.remove("adicionar-left")
	}else{
		menu_ul.classList.add("adicionar-left")
	}
});