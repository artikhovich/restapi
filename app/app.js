// console.log("echo from app.js");

jQuery(function($){
    // HTML приложения 
    var app_html=`
         <div class="container">
            <h1 id='page-title'>Все товары</h1>
            <div id='page-content-form'></div>
            <div id='page-content'></div>
            <p><a class="btn btn-primary" href="api/product/read.php">ссылка на Json</a></p>
            <p><a class="link" href="https://only-to-top.ru/blog/programming/2019-11-11-jquery-ajax-json-php.html">Frontend</a></p>
            <p><a class="link" href="https://only-to-top.ru/blog/programming/2019-11-06-rest-api-php.html">Backend</a></p>
            <p><a class="btn btn-default create-product-button">Create</a></p>
        </div>`;

    // вставка кода на страницу 
    // $("#app").html(app_html);
    document.getElementById("app").innerHTML=app_html;
});




