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
    $notDiv = array();

    for ($i = $num - 1; $i >= 2; $i--) {
        if ($num % $i != 0) {
            array_push($notDiv, $i);
        }
    }
    $result = implode(" ", $notDiv);
    echo $result;
}
?>
</body>
</html>