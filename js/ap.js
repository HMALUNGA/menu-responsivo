var menu=window.document.getElementById("menu");
var menu_ul=window.document.getElementById("menu-ul");
var img_menu=window.document.getElementById("img_menu");

menu.addEventListener('click',function(){
	if(menu_ul.classList.contains("adicionar-left")){
       menu_ul.classList.remove("adicionar-left");
       img_menu.src="icons/menu.png";
	}else{
		menu_ul.classList.add("adicionar-left")
		img_menu.src="icons/closemenu.png";
	}
});