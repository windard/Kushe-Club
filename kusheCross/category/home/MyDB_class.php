<?php  
	class MyDB{
		private $mysqli;

		public function __construct(){
			$this->mysqli = new mysqli("localhost","root","lampdick","test");
			if(mysqli_connect_errno()){
				echo "连接失败，原因是：".mysqli_connect_error();
				$this->mysqli = false;
				exit();
			}
		}

		public function __destruct(){
			$this->close();
		}

		public function close(){
			if($this->mysqli)
				$this->mysqli->close();
			$this->mysqli = false;
		}

		public function fillData(){
			$sql = "select id,imgId,imgHeight,description,imgSrc from tshirt";
			$col = 1; $str="";
			if($result = $this->mysqli->query($sql)){
				while($row = $result->fetch_assoc()){
					$str .= '<div class="show col_0'.$col.'">';
					$str .= '<div class="show-img" style="height:'.$row["imgHeight"].';">';
					$str .= '<a href=""><img src='.$row["imgSrc"].' alt='.$row["description"].'></a>';
					$str .= '</div>';
					$str .= '<div class="desc">';
					$str .= '<p>'.$row["description"].'</p>';
					$str .= '</div></div>';
					$col ++;
					if($col == 5){
						$col = 1;
					}
				}
				return $str;
			}else{
				return false;
			}	
		}
	}
?>