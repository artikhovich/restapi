<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Rest Api App</title>
</head>
<body>🅰️ртихович Сергей</body>

<?php 
//phpinfo(); 
echo "\nRequire script:";

require_once __DIR__ . '/config/database.php';
// соединение c базой
$database = new Database();
$db = $database->getConnection();

$result = mysql_query("SELECT * FROM categories ");
$row = mysql_fetch_assoc($result);
echo $row;
/*
$selectCat=$mConnect->prepare("SELECT * FROM categories ");

$selectCat->execute();
while ($row = $selectCat->fetch(PDO::FETCH_LAZY)) {
	echo 'Category : '.$row->name;
}
*/

Database::Close();
?>
</html>