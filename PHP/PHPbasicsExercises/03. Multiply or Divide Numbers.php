<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num1" />
		M: <input type="text" name="num2" />
        <input type="submit" />
    </form>
	<!--Write your PHP Script here-->
    <?php
    if (isset($_GET['num1'])&&isset($_GET['num2'])){
        $num1=floatval($_GET['num1']);
        $num2=floatval($_GET['num2']);
        $result="";
        if ($num1<=$num2){
            $result= $num1*$num2;
            echo intval($result);
        }
        else if($num1>$num2&&$num2!=0){
            $result= $num1/$num2;
            echo  floatval(round($result,1));
        }
    }
    ?>
</body>
</html>