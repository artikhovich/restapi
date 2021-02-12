console.log("echo from app.js");

jQuery(function($){
    // HTML приложения 
    var app_html=`
         <div class="container">
            <h1 id='page-title'>Все товары</h1>
            <div id='page-content-form'></div>
            <div id='page-content'></div>
        </div>`;

    // вставка кода на страницу 
    // $("#app").html(app_html);
    document.getElementById("app").innerHTML=app_html;

});




