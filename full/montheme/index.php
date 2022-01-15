<?php get_header() ?>
<?php
$page = $_GET['page'] ?? 'home';
switch ($page) {
    case 'home':
        require 'inc/home.php';
        break;
    case 'categories':
        require 'inc/categories.php';
        break;
    default:
        require 'inc/error.php';
        break;
}
?>
<?php get_footer() ?>