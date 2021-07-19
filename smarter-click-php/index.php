<?php
  // set_time_limit(0);
  // $pass = 'db.php';
  // $salt = 'ThisIs-A-Salt123'; //TODO use SALT for decrypting
  //   foreach($pass as $password) {
  //    $start = time(); //time took to decript: Start time
  //    echo decrypt(trim($password), '');
  //    $end = time();// End time
  //    echo "(it took ".($end - $start). "seconds) <br/>"; // displaying results
  //   }

  // function decrypt($pass, $answer) {
  //  $array = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' );
  //  // TODO parse dictionary for dictionary attack

  //  $maxNum = 3; // max string length
  //  if(strlen($answer) > $maxNum) {
  //   return; // bigger than maxNum end
  //  }

  //  for($i = 0; $i < count($array); $i++) {
  //   $temp = $answer.$array[i];
  //   if(md5($temp.$salt) == $pass) { // checking against hashed $temp with added SALT
  //    return $temp;
  //   }
  
  //   $result = decrypt($pass, $temp);
  //   if(strlen($result) > 0) {
  //    return $result;
  //   }
  //  }
  // }







set_time_limit (0);
ini_set ('memory_limit', '1G');
$salt = 'ThisIs-A-Salt123'; 
$myAnyText = md5("opa".$salt);
echo "this is encripted opa <br>".$myAnyText;
$pass = array($myAnyText); // array($myAnyText)
foreach($pass as $passwords) {
     $start = time();
    echo "<br> password is:" .decrypt(trim($passwords), "");
    $end = time();
    echo "<br> it took:". ($end - $start). "seconds <br>";
}
 function decrypt ($pass, $answer)
 {
     $array = array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' );     
     $maxNum = 2;
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
        if (md5($temp.$salt) == $pass) {
             return $temp;
        }
         $result = decrypt($pass, $temp);
        if (strlen($result) > 0) {
             return $result;
        }
     }
 }
?>