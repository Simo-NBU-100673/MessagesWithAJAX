<?php

//echo $_POST['title'];
//echo $_POST['description'];

// make an object to store the data and send it back to the client
$data = array(
    'title' => $_POST['title'],
    'description' => $_POST['description'],
    'time' => date('Y-m-d H:i:s')
);

// send the data back to the client
echo json_encode($data);