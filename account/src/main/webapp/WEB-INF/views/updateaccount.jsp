<div class="login-form">&nbsp;&nbsp;Create account</div>
<br />

<div class="login-form">
	<form name="updateaccount" id="updateaccount" commandName="updateaccount"
		enctype="multipart/form-data" method="POST">
		<div class="form-group">
			<input type="text" class="form-control login-field" value=""
				placeholder="Login id" name="loginId" id="loginId" /> <label
				class="login-field-icon fui-user" for="login-name"></label>
		</div>
		<div class="form-group">
			<input type="password" class="form-control login-field" value=""
				placeholder="Password" name="password" id="password" /> <label
				class="login-field-icon fui-lock" for="login-pass"></label>
		</div>
		<div class="form-group">
			<input type="password" class="form-control login-field" value=""
				placeholder="Confirm password" name="conPassword" id="conPassword" /> <label
				class="login-field-icon fui-lock" for="login-pass"></label>
		</div>
		
		<a class="btn btn-primary btn-lg btn-block" href="#"
			onclick="submitForm('/account/updateaccountsubmission.action', 'updateaccount', 'containerdiv');">Update existing account</a> 
			<span class="login-link">All fields are mandatory</span>
	</form>
</div>