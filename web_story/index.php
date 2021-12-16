<?php
require 'includes/header.php';


$page = $_GET['page'] ?? 'home';


switch ($page) {
    case 'home':
        require 'includes/home.php';
        break;

    default:
        require 'includes/error.php';
        break;
}


require 'includes/footer.php';
