<?php
$dsn      = 'mysql:dbname=quizy;host=db';
$user     = 'ugg';
$password = 'secret';

// DBへ接続
try{
    $dbh = new PDO($dsn, $user, $password);

    // クエリの実行
    // $query = "SELECT * FROM big_questions";
    // $stmt = $dbh->query($query);

    // 表示処理
    // while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    //     echo $row["name"];
    // }
    // $stmt=$stmt->fetch();
    // print_r($stmt);
    // echo $stmt[1]["id"];

}catch(PDOException $e){
    print("データベースの接続に失敗しました".$e->getMessage());
    // die();
    exit;
}

// echo $_GET['id'];

// if($_GET['id']==1){
//     $table = "SELECT name FROM big_questions where id=1";
//     $sql = $dbh->query($table);
    
//     foreach($sql as $row){
//         echo $row['name'];
    
//         echo '<br>';
    
//     }
// }
// if($_GET['id']==2){
//     $table = "SELECT name FROM big_questions where id=2";
//     $sql = $dbh->query($table);
    
//     foreach($sql as $row){
//         echo $row['name'];
    
//         echo '<br>';
    
//     }
// }

if (isset($_GET['id'])){
    $id=$_GET['id'];
}
echo $id;

$title_value="select * from big_questions where id=$id";
$question_value="select image from questions where big_questions_id=$id";
$choice_value="select * from choices inner join questions on choices.questions_id=questions.id";

$title = $dbh->query($title_value)->fetch();
$question = $dbh->query($question_value)->fetchAll();
$choice = $dbh->query($choice_value)->fetchAll();

// print_r($title);
?>


<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>quizy</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="quizyphp.css">
</head>
<body>
    <h1><?php echo $title["name"]; ?></h1>
</body>
</html>



