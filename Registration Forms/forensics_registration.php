<?php
	$servername = "localhost";
	$username = "root";
	$password = "betastar123";
	$dbname = "biofest2017";

	$conn = mysqli_connect($servername, $username, $password, $dbname);

	if(!$conn) {
		die ("Connection failed: " . mysql_connect_error());
	}

	if (isset($_POST['teammember1']) && isset($_POST['teammember2']) && isset($_POST['teammember3']) && isset($_POST['email']) && isset($_POST['phn'])) {

		$teammember1 = $_POST['teammember1'];
		$teammember2 = $_POST['teammember2'];
		$teammember3 = $_POST['teammember3'];
		$email = $_POST['email'];
		$phn = $_POST['phn'];

	$sql = "INSERT INTO forensics (teammember1, teammember2, teammember3, email, phn) VALUES ('$teammember1', '$teammember2', '$teammember3', '$email', '$phn')";

	if (mysqli_query($conn, $sql)) {
		echo "Registered Successfully";
	}

	else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}
}

mysqli_close($conn);

?>