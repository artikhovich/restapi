<?php
class Database{
	private $host = "localhost";
	private $dbname = "restapi_db";
	private $username = "admin";
	private $password = "12345";
	public $conn;

	// подключение к БД
	public function getConnection(){
		$this->conn = null;
		
		try {
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->dbname,$this->username, $this->password);
			$this->conn->exec("set names utf8");
			} catch(PDOException $exception){
				echo "connection error: " . $exception->getMessage();
			}
		return $this->conn;
	}
}
?>