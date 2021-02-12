jQuery(function($){

    // показать html форму при нажатии кнопки «создать товар» 
    $(document).on('click', '.create-product-button', function(){
        // загрузка списка категорий 
		$.getJSON("http://rest-api/api/category/read.php", function(data){

		});
    });

    // здесь будет обработчик «создать форму товара» 
});