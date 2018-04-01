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
    $num = intval($_GET['num']);
    $numA = 1;
    $numB = 1;
    $fib = array(1, 1);
    var_dump($fib);

    for ($i = 2; $i <= $num; $i++) {
        $fibCurr = $fib[$i - 1] + $fib[$i - 2];
        $fib[]=$fibCurr;
        if(count($fib)==$num){
            $result=implode(" ",$fib);
            echo $result;
            return;
        }
    }
}
?>
</body>
</html>