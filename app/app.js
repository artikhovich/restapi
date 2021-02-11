console.log("echo from app.js");

jQuery(function($){

    // HTML приложения 
    var app_html=`
        <div class='container'>

            <div class='page-header'>
                <h1 id='page-title'>Все товары</h1>
            </div>

            <!-- здесь будет показано содержимое -->
            <div id='page-content'></div>
        </div>`;

    // вставка кода на страницу 
    $("#app").html(app_html);

});

