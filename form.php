<html>
<body>

<?php
$servername = "192.168.0.4";
$username = "AStoica";
$password = "karmaakabane28";
$dbname = "AStoica";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully <br>";

$sql = "INSERT INTO MyGuests (nume, email, telefon, mesaj) 
VALUES ('".$_POST["name"]."', '".$_POST["email"]."', '".$_POST["phone"]."', '".$_POST["mesaj"]."')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

</body>
</html>
