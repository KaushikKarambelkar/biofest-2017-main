<?php

$teammember1 = $_POST['teammember1'];
$teammember1 = $_POST['teammember2'];
$teammember1 = $_POST['teammember3'];
$email = $_POST['email'];
$phn = $_POST['phn'];

$output = $teammember1 ."," . $teammember2 . "," . $teammember3 . "," . $email . "," . $phn . "/n";

$fp = fopen("streax.csv", "a");
fwrite($fp, $output);
fclose($fp);

?>