<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/css/main.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/main.css');?>">
		<link rel="stylesheet" href="/css/blog.css?v=<?= filemtime($_SERVER['DOCUMENT_ROOT'].'/css/blog.css');?>">
		<!-- Typekit -->
		<!-- TODO: Typekit link goes here. Delete/change as needed.  -->
		<!-- Perch Meta -->
	 	<?php perch_blog_post_meta(perch_get('s')); ?>
		<!-- TODO: Delete if no analytics -->
		<?php perch_content("Analytics"); ?>
		<!-- Head end tag in relevant header file  -->