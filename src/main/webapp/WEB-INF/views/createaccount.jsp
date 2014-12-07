<div class="login-form">&nbsp;&nbsp;Create account</div>
<br />

<div class="login-form">
	<form name="createaccount" id="createaccount" commandName="createaccount"
		enctype="multipart/form-data" method="POST">
		<div class="form-group">
			<input type="text" class="form-control login-field" value=""
				placeholder="Login id" name="loginId" id="loginId" /> <label
				class="login-field-icon fui-user" for="login-name"></label>
		</div>
		<div class="form-group">
			<input type="text" class="form-control login-field" value=""
				placeholder="Display name" name="displayName" id="displayName" /> <label
				class="login-field-icon fui-user" for="login-name"></label>
		</div>
		<div class="form-group">
			<select class="form-control login-field" id="userRole" name="userRole" placeholder="Role">
			    <option class="login-field-icon fui-user" value="HealthCenterUser">HealthCenterUser</option>
			    <option class="login-field-icon fui-user" value="DistrictUser">DistrictUser</option>
			    <option class="login-field-icon fui-user" value="StateUser">StateUser</option>
			    <option class="login-field-icon fui-user" value="Administrator">Administrator</option>
			  </select>
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
			onclick="submitForm('/account/createaccountsubmission.action', 'createaccount', 'containerdiv');">Create new account</a> 
			<span class="login-link">All fields are mandatory</span>
	</form>
</div>