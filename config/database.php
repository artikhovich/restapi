<?php
echo "\nText from script";

class Database{
	private $host = "localhost";
	private $db_name = "restapi_db";
	private $username = "admin";
	private $password = "12345";

	public $conn;
	// public static $mSelectDB;

	// подключение к БД
	public function getConnection(){
		$this->conn = null;
		echo "text from getConnection function";
		try {
			$this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			$this->conn->exec("set names utf8");
			} catch(PDOException $exception){
				echo "connection error: " . $exception->getMessage();
			}
			// echo  "return conn...";
		return $this->conn;
	}

	public function Close(){
		echo "Close database...";
		return mysql_close(self::$conn);
	}
}
?>