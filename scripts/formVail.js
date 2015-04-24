$(function(){
	var formVail = function(){
		$('.wrap-form input').focus(function(){
			var $parent = $(this).parents('.form-group');
			$parent.find('.formtip').remove();

			if($(this).is('#username')){
				if(this.value === ""){
					var msg_user_tip = '<span class="formtip tip">请至少输入6位的用户名</span>';
					$parent.append(msg_user_tip);
				} else if (this.value.length < 6){
					var msg_user_error = '<span class="formtip error">请至少输入6位的用户名</span>';
					$parent.append(msg_user_error);
				} else{
					var msg_user_succ = '<span class="formtip success">请至少输入6位的用户名</span>';
					$parent.append(msg_user_succ);
				}
			}

			else if($(this).is('#email')){
				if(this.value === ""){
					var msg_email_tip = '<span class="formtip tip">请输入正确格式的邮箱</span>';
					$parent.append(msg_email_tip);
				} else if (/@/.test(this.value)&&/.com/.test(this.value)){
					var msg_email_succ = '<span class="formtip success">请输入正确格式的邮箱</span>';
					$parent.append(msg_email_succ);
				} else {
					var msg_email_error = '<span class="formtip error">请输入正确格式的邮箱</span>';
					$parent.append(msg_email_error);
				}
			}

			else if ($(this).is('#password')){
				if (this.value === ""){
					var msg_pass_tip = '<span class="formtip tip">密码由6-18位字符组成, 区分大小写</span>';
					$parent.append(msg_pass_tip);
				} else if (this.value.length < 6 || this.value.length > 18){
					var msg_pass_error = '<span class="formtip error">密码由6-18位字符组成, 区分大小写</span>';
					$parent.append(msg_pass_error);
				} else{
					var msg_pass_succ = '<span class="formtip succ">密码由6-18位字符组成, 区分大小写</span>';
					$parent.append(msg_pass_succ);
				}
			}

			else if ($(this).is('#pass-confirm')){
				if (this.value ===""){} else if (this.value === $('#password').attr('value')){
					var msg_confirm_succ = '<span class="formtip succ"></span>';
					$parent.append(msg_confirm_succ);
				} else{
					var msg_confirm_error = '<span class="formtip error">两次输入密码不一致</span>';
					$parent.append(msg_confirm_error);
				}
			}
		}).blur(function(){
			var $parent = $(this).parents('.form-group');
			$parent.find('.formtip').remove();

			if($(this).is('#username')){
				if(this.value === "" || this.value.length < 6){
					var msg_user_error = '<span class="formtip error">请至少输入6位的用户名</span>';
					$parent.append(msg_user_error);
				} else{
					var msg_user_succ = '<span class="formtip success">请至少输入6位的用户名</span>';
					$parent.append(msg_user_succ);
				}
			}

			else if($(this).is('#email')){
				if (/@/.test(this.value)&&/.com/.test(this.value)){
					var msg_email_succ = '<span class="formtip success">请输入正确格式的邮箱</span>';
					$parent.append(msg_email_succ);
				} else {
					var msg_email_error = '<span class="formtip error">请输入正确格式的邮箱</span>';
					$parent.append(msg_email_error);
				}
			}

			else if ($(this).is('#password')){
				if (this.value === "" || this.value.length < 6 || this.value.length > 18){
					var msg_pass_error = '<span class="formtip error">密码由6-18位字符组成, 区分大小写</span>';
					$parent.append(msg_pass_error);
				} else{
					var msg_pass_succ = '<span class="formtip succ">密码由6-18位字符组成, 区分大小写</span>';
					$parent.append(msg_pass_succ);
				}
			}

			else if ($(this).is('#pass-confirm')){
				if (this.value === $('#password').attr('value') && this.value !== ""){
					var msg_confirm_succ = '<span class="formtip succ"></span>';
					$parent.append(msg_confirm_succ);
				} else{
					var msg_confirm_error = '<span class="formtip error">两次输入密码不一致</span>';
					$parent.append(msg_confirm_error);
				}
			}
		}).keyup(function(){
			$(this).triggerHandler('focus');
		});
	};

	formVail();
});