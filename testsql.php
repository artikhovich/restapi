<?php
echo "Test mysql";

$link = mysqli_connect("localhost", "admin", "12345","restapi_db");

if ($link == false){
    print("Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error());
}
else {
    print("<br>Соединение установлено успешно<br><br>");
}


$sql = 'SELECT id, name FROM categories';

$result = mysqli_query($link, $sql);

while ($row = mysqli_fetch_array($result)) {
	print("ID:" . $row['id'] . " Категория: " . $row['name'] . "<br>");
}

?>