<?php
// HTTP-заголовки
header("Access-Control-Allow_Origin: *");
header("Content-Type:application/json; charset=UTF-8");

//подключение к базе
include_once '../config/database.php';
// echo 'db config included';
//файл объекта
include_once '../objects/product.php';


// соединение c базой
$database = new Database();
$db = $database->getConnection();

//инициируем объект
$product = new Product($db);

//чтение товаров
$stmt = $product->read();
$num = $stmt->rowCount();

if($num>0){
// echo "num OK";
	$products_arr=array();
	$products_arr["records"]=array();
	//получаем содержимое таблицы

	while ($row=$stmt->fetch(PDO::FETCH_ASSOC)){
		//
		extract($row);
		$product_item=array(
			"id" => $id,
			"name" => $name,
			"description" => html_entity_decode($description),
			"price" => $price,
			"category_id" => $category_id,
			"category_name" => $category_name
		);
		array_push($products_arr["records"], $product_item);
	}
	http_response_code(200);
	echo json_encode($products_arr);
}
