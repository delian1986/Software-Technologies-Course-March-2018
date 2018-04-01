<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num"/>
    <input type="submit"/>
</form>
<!--Write your PHP Script here-->
<?php
if (isset($_GET['num'])) {
    $num=intval($_GET['num']);
    $primes=array();

     for($i=1;$i<=$num;$i++){  //numbers to be checked as prime

          $counter = 0;
          for($j=1;$j<=$i;$j++){ //all divisible factors


                if($i % $j==0){

                      $counter++;
                }
          }

        //prime requires 2 rules ( divisible by 1 and divisible by itself)
        if($counter==2){

               $primes[]=$i;
        }
    }
    $res=implode(" ",array_reverse($primes));
     echo ($res);
}
?>
</body>
</html>