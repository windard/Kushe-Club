<?php 
	require_once "MyDB_class.php";
	header("Content-Type:text/html;charset=utf-8");
	$myDb = new MyDB();
?>

<!DOCTYPE html>
<html>
<head lang="zh-cn">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>动漫-酷设</title>
	<!--<link rel="stylesheet" href="bootstrap.min.css">-->
	<link href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="../../css/layout.css">
	<link rel="stylesheet" href="../../css/format.css">
	<script src="../../jquery-2.1.1.min.js"></script>
	<!--<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>-->
</head>
<body>
	<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid"> 
				<div class="navbar-header">
					<a class="navbar-brand" href="#">酷设联盟</a>
				</div>
				<div class="collapse navbar-collapse">
					<div class="dropdown nav-list">
			          	<button href="#" class="dropdown-toggle btn btn-default" data-toggle="dropdown" aria-expanded="false">分类 <span class="caret"></span></button>
				        <ul class="dropdown-menu" role="menu">
				        	<li>
				        		<a href="#">一级主题</a>
				        		<div class="nav-line"></div>
				        		<a href="">一级主题</a>
				        		<div class="nav-line"></div>
				        		<a href="">一级主题</a>
				        	</li>
				            <li>
								<a href="#">一级主题</a>
				        		<div class="nav-line"></div>
				        		<a href="">一级主题</a>
				        		<div class="nav-line"></div>
				        		<a href="">一级主题</a>
				            </li>
				            <li>
				            	<a href="#">一级主题</a>
				        		<div class="nav-line"></div>
				        		<a href="">一级主题</a>
				        		<div class="nav-line"></div>
				        		<a href="">一级主题</a>
				            </li>
			          	</ul>
			        </div>
					<form class="navbar-form navbar-left" role="search">
					  <div class="input-group">
					    <input type="text" class="form-control" placeholder="Search">
					    <span class="input-group-btn">
	        				<button class="btn btn-default" type="button">搜索</button>
	      				</span>
					  </div>
					</form>
					<ul class="nav navbar-nav navbar-right">
						<li>
							<button type="button" class="btn btn-danger nav-reg">注册</button>
						</li>
						<li>
							<a href="" class="nav nav-login">登录</a>
						</li>
						<li>
							<p class="navbar-text">
								关联账号登录：<span>QQ</span><span>新浪微博</span>
							</p>
						</li>
					</ul>	
				</div>
			</div>
	</nav>
	<div class="container wrap-content">
		<div class="row dir">
			<div class="col-md-3 first">
				<h2>动漫</h2>
			</div>
			<div class="col-md-3 sencond">
				<p>海贼王</p>
			</div>
			<div class="col-md-3 sencond">
				<p>海贼王</p>
			</div>
			<div class="col-md-3 sencond">
				<p>海贼王</p>
			</div>
		</div>
		<div class="curDir">
			<p>分类&nbsp;&gt;&nbsp;<a href="" class="highDir">动漫</a></p>
		</div>
		<div class="wrap-show">
			<?php  echo $myDb->fillData(); ?>
			<script src="../../scripts/showSort.js"></script>
		</div>
		<div class="loading"></div>
			<div class="page">
				<ul class="pagination pagination-lg">
				    <li>
				      <a href="#" aria-label="Previous">
				        <span aria-hidden="true">&laquo;</span>
				      </a>
				    </li>
				    <li class="active"><a href="#">1</a></li>
				    <li><a href="#">2</a></li>
				    <li><a href="#">3</a></li>
				    <li><a href="#">4</a></li>
				    <li><a href="#">5</a></li>
				    <li>
				      <a href="#" aria-label="Next">
				        <span aria-hidden="true">&raquo;</span>
				      </a>
				    </li>
				</ul>
			</div>
	</div>
</body>
</html>