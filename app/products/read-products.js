var pageContentProducts = `
    <form id='create-product-form' action='#' method='post' border='0'>
        <input type='text' placeholder='* Введите Имя' name='name' class='form-control' required />
        <input type='number' min='1' name='price' class='form-control' required />
        <textarea name='description' class='form-control' required></textarea>
        <input type='submit' class='btn btn-primary' value='Создать товар'>
        <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>Все товары</div>
        <div id='read-category' class='btn btn-primary pull-right m-b-15px read-category-button'>Категория</div>
    </form>
`;

// function changePageTitle(page_title){
//     $("#page-title").text(page_title);
//     document.title = "RestAPI - " + page_title;
// }

// функция для показа списка товаров 
function showProducts(){
    let read_products_html=``;
    $.getJSON("api/product/read.php", function(data){
        read_products_html+=`<table class="read-products read-products table table-bordered table-hover"><tbody>`;
        read_products_html+=`<tr>
         <th class='w-15-pct'>ID</th>
         <th class='w-15-pct'>Название</th>
         <th class='w-15-pct'>Описание</th>
         <th class='w-15-pct'>Категория</th>
         <th class='w-15-pct'>Цена</th>
     </tr>`;

    // let row=data.records[id];
        $.each(data.records, function(key,val){
            read_products_html+=`
                    <tr>
                        <td>`+val.id+`</td>
                        <td>`+val.name+`</td>
                        <td>`+val.description+`</td>
                        <td>`+val.category_name+`</td>
                        <td>`+val.price+`</td>
            <!-- кнопки 'действий' -->
            <td>
                <!-- кнопка чтения товара -->
                <button class='btn btn-primary m-r-10px read-one-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-eye-open'></span> Просмотр
                </button>

                <!-- кнопка редактирования -->
                <button class='btn btn-info m-r-10px update-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-edit'></span> Редактирование
                </button>

                <!-- кнопка удаления товара -->
                <button class='btn btn-danger delete-product-button' data-id='` + val.id + `'>
                    <span class='glyphicon glyphicon-remove'></span> Удаление
                </button>
            </td>
                    </tr>`;
        });

    read_products_html+=`</tbody></table>`;
    $("#page-content").html(read_products_html);
    changePageTitle("Перечень товаров: ");

    });
    //return read_products_html;
};



// изменяем заголовок страницы 
// changePageTitle("Все товары");
// changePageTitle('Rest Api App: JSON данные');

jQuery(function($){
     $("a.read-products-button").click (function(){
         showProducts();

     });
});