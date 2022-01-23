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

if($_GET['id']==1){
    $table = "SELECT name FROM big_questions where id=1";
    $sql = $dbh->query($table);
    
    foreach($sql as $row){
        echo $row['name'];
    
        echo '<br>';
    
    }
}
if($_GET['id']==2){
    $table = "SELECT name FROM big_questions where id=2";
    $sql = $dbh->query($table);
    
    foreach($sql as $row){
        echo $row['name'];
    
        echo '<br>';
    
    }
}

// 接続を閉じる
$dbh = null;

// phpinfo();

