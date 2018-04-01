<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
    <form>
        N: <input type="text" name="num" />
        <input type="submit" />
    </form>
	<!--Write your PHP Script here-->
    <?php
    if (isset($_GET['num'])){
        $arr=array();
        $num=intval($_GET['num']);
        for ($i=$num;$i>=1;$i--){
            array_push($arr,$i);
        }
        $result=implode(" ",$arr);
        echo $result;
    }
    ?>
</body>
</html>