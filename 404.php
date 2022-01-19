<?php include('perch/runtime.php'); ?>
<?php perch_layout('/heads/main-head'); ?>
<?php perch_layout('headers/main-header'); ?>
<main class="main-content error-page-main-content" id="main-content">
	<?php perch_content("404 Page Content"); ?>
</main>
<?php perch_layout('footers/main-footer'); ?>
<?php perch_layout('footer/ends/error-page-footer-end'); ?>
<!-- TODO: Remove debug -->
<!-- <?php PerchUtil::output_debug(); ?> -->
<!-- TODO: Validate HTML -->

