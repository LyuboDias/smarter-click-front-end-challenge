<?php
  
set_time_limit (0);
ini_set ('memory_limit', '1G');
// $pass = 'db.php';
$salt = md5('ThisIs-A-Salt123'); // TODO use SALT for decrypting
// echo "this is SALT ".$salt; 
$myDb = array("key" => '6f564129305a9f1fe6bdee84336399a6', 'key2' => 'fdb3562cdb0746c94cc0c9cb098527a1'); // md5("12345")
$pass = array($myDb); 
foreach($pass as $x => $passwords) { // TODO use foreach() with key value pairs
     $start = time();//time took to decript: Start time
    echo "<br> password is:" .decrypt(trim($passwords), "");
    $end = time();// end time
    echo "<br> it took:". ($end - $start). "seconds <br>";// displaying results
}
 function decrypt ($pass, $answer)
 {
     // TODO parse dictionary for dictionary attack
     $array = array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9' );      // 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
     $maxNum = 5;
    if (!isset($answer)) {
         $answer = "";
    }
     if (!isset($pass)) {
         $pass = "";
    }
     if (strlen($answer) > $maxNum) {
         return;
    }
     for($i = 0; $i <count($array); $i++) {
       $temp = $answer.$array[$i];
        if (md5($temp) == $pass) { // TODO check against hashed $temp with added SALT
         echo $temp;
             return $temp;
        }
         $result = decrypt($pass, $temp);
        if (strlen($result) > 0) {
             return $result;
        }
     }
 }
?>