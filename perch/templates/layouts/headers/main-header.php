<!-- Anything to include in head goes here  -->
</head>
	<body class="<?php perch_page_attribute('bodyClass', array('template' => 'attribute_files/bits.html' )); ?>">
<!-- Cookie Warning -->
<?php perch_content("Cookie Warning"); ?>
	<?php perch_content("Header Content"); ?>
	<div class="site-wrapper" itemscope itemtype="http://schema.org/LocalBusiness">
		<header class="header main-header">
			<!-- Skip to main content link  -->
			<a class="show-on-focus"  href="#main-content">Skip to main content</a>
			<!-- For SVG logo. Delete if not needed -->
			<?php perch_content("Hidden Logo"); ?>
			<div class="main-logo-wrapper">
				<a class="main-logo-link"  href="/">
				<?php perch_content("Main Logo"); ?>
			</a>
			</div>
			<?php perch_pages_navigation(array(
			'hide-extensions' => true,
			'levels'    => 1
			)); ?>
		</header>
