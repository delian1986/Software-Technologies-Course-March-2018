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
    if ($num==1){
        echo "1";
        return;
    }else if ($num==2){
        echo "1 1";
        return;
    }
    $fib = array(1, 1, 2);

    for ($i = 3; $i <= $num; $i++) {
        $fibCurr = $fib[$i - 1] + $fib[$i - 2]+$fib[$i - 3];
        $fib[] = $fibCurr;
        if (count($fib) == $num) {
            $result = implode(" ", $fib);
            echo $result;
            return;
        }
    }
}
?>
</body>
</html>