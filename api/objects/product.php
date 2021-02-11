<?php

class Product {
// подключение к базе данных и таблице
	private $conn;
	private $table_name = "products";

// свойства объекта
	public $id;
	public $name;
	public $description;
	public $price;
	public $category_id;
	public $category_name;
	public $created;

// конструктор для соединения с базой данных

	public function __construct($db){
		$this->conn = $db;
	}

// метод read() - чтение товаров
	function read(){
	//выбор записей
	$query = "SELECT * FROM " . $this->table_name;
	$stmt = $this->conn->prepare($query);
	$stmt->execute();
	return $stmt;
	}
}

// echo ' object product included';
?>
