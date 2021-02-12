// console.log("echo from app.js");
function loadCssStyle(url){
    var cssStyle = document.createElement("link");
    cssStyle.rel="stylesheet";
    cssStyle.href=url;
    document.head.appendChild(cssStyle);
}

function loadJsScript(url){
    var script = document.createElement("script");
    script.src=url;
    document.head.appendChild(script);
}

function changePageTitle(page_title) {
    document
        .getElementById("page-title")
        .innerText = page_title;
    document.title = "RestAPI - " + page_title;
}

loadCssStyle('app/assets/css/bootstrap.min.css');
loadCssStyle('app/assets/css/style.css');

// loadJsScript('app/assets/js/jquery.min.js');
// loadJsScript('app/assets/js/bootstrap.min.js');

jQuery(function($){
    // HTML приложения 
    var app_html=`
         <div class="container">
            <h1 id='page-title'></h1>
            <div id='page-content-form'></div>
            <div id='page-content'></div>
            <p><a class="btn btn-primary" href="api/product/read.php">ссылка на Json</a></p>
            <p><a class="link" href="https://only-to-top.ru/blog/programming/2019-11-11-jquery-ajax-json-php.html">Frontend</a></p>
            <p><a class="link" href="https://only-to-top.ru/blog/programming/2019-11-06-rest-api-php.html">Backend</a></p>
            <p><a class="btn btn-default create-product-button">Create</a></p>
            <p><a class="btn btn-default read-products-button">Все товары</a></p>
        </div>`;

    // вставка кода на страницу 
    // $("#app").html(app_html);
    document.getElementById("app").innerHTML=app_html;
});
