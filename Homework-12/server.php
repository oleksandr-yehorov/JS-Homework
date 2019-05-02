<?php 
header('Access-Control-Allow-Origin: null');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: content-type');
echo $_SERVER[‘REMOTE_ADDR‘];