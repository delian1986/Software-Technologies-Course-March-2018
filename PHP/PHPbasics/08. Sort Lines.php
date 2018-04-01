<form>
      <textarea rows="10" name="lines"><?= $sortedLines
          ?></textarea> <br>
    <input type="submit" value="Sort">
</form>

<?php $sortedLines="";
if (isset($_GET['lines'])){
  $lines=explode("\n",$_GET['lines']);
    $lines=array_map('trim',$lines);
  var_dump(array($lines));
    sort($lines,SORT_STRING);
    $sortedLines=implode("\n",$lines);
}
?>