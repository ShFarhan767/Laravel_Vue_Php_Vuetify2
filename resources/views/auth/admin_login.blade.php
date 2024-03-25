@extends('layouts.app')

@section('content')
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    	integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Roboto+Flex:opsz,wght@8..144,400;8..144,500&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

    <!-- Links -->
		
		
	<div class="container Head">
        <div class="row">
            <div class="col-md-6 DetailsBox">
                <div class="fh5co-cta">
                    <div class="overlay"></div>

                    <div class="Details">
                        <div class="Logo">
                            <img src="https://siyamholidays.netlify.app/assets/Header-672de651.png" alt="logo" style="width:50%;background:white;margin-top:20px;padding:10px;border-radius:10px;">
                        </div>

                        <h1>Welcome</h1>

                            <h2>Back!</h2>

                        <p>We don't want to push our ideas on to customers, <br> we simply want to make what they want.</p>

                        <div class="List">
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Login Side  -->

            <div class="col-md-6 LoginBox">
                <div class="LoginTitle">
                    <h2>Sign In</h2>
                </div>
                    

                <div class="LoginOption">

                    <form method="POST" onsubmit="return LoginUser()">
                        @csrf
						<input type="text" id="userName" name="userName" class="Email_Input" placeholder="username or email" required>
                        <div id="emailError" class="error-message"></div>

                        <div class="password-container">
                            <input type="password" id="password" name="password" class="Password_Input" placeholder="Enter your password" required>
                            <i class="fa-solid fa-eye" id="togglePassword"></i>
                            <div id="passwordError" class="error-message"></div>
                        </div>

                        <div class="Button">
							<div class="form-group">
								<input class="Login_Button" type="submit" value="Login" class="btn float-right login_btn main_login_button">
								<!-- <button style="display:none;"  type="button" class="btn float-right login_btn loading_login_button"> <i class="fa fa-spinner fa-2x fa-spin fa-fw"></i>
									<span class="sr-only">Loading...</span> 
								</button> -->
							</div>
                            <!-- <input class="Login_Button" type="submit" value="Submit"></input> -->
                        </div>

                        <div class="Login_Icons">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4 Icons">
                                        <div class="Google">
                                            <a href="#"><i class="fa-brands fa-google"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-md-4 Icons">
                                        <div class="Google">
                                            <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                        </div>
                                    </div>

                                    <div class="col-md-4 Icons">
                                        <div class="Google">
                                            <a href="#"><i class="fa-brands fa-apple"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>Don't have an account ? <a href="#"> Sign Up</a></p>
						<div class="card-footer">
				          
							@if (Route::has('password.request'))
							<div class="d-flex justify-content-center"></div>
							@endif
						</div>
                    </form>

                </div>
            </div>
        </div>
    </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

<script type="text/javascript">
    function LoginUser()
    {
        $('.main_login_button').hide();
        $('.loading_login_button').show();
           
        var userName    = $("input[name=userName]").val();
        var shopSiralId    = $("input[name=shopSiralId]").val();
        var password = $("input[name=password]").val();
        var remember = $("input[name=remember]").val();
        var data = {
            userName:userName,
            shopSiralId:shopSiralId,
            password:password,
            remember:remember
        };
        // Ajax Post 
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: "post",
            url: "/shop/login",
            data: data,
            cache: false,
            success: function (msg)
            {
                //alert(msg.message);
                window.location.replace('{{route('shop')}}');
                      
            },
            error: function (referenceCompanyName){
                //alert('Fail to run Login..');
                $('.main_login_button').show();
                $('.loading_login_button').hide();
            }
        });
        return false;
    }

</script>
@endsection

<style>
* {
    margin: 0;
    padding: 0;
}
.Head{
	margin-top: -8.5%;
	height: auto !important;
}

.DetailsBox {
    height: 600px;
    margin: 0;
    padding: 0;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    overflow: hidden;
    box-shadow: 0 17px 35px #00000022;
	padding-right:0px !important;
}

.fh5co-cta {
    height: 600px;
    background: transparent;
    background-repeat: no-repeat;
    background-size: cover !important;
    margin-left: -210px;
}

.fh5co-cta .overlay {
    background: rgb(0, 0, 0, 0.6);
    opacity: 0.9;
    height: 600px;
}

.Details {
    width: 40%;
    height: 550px;
    position: absolute;
    top: 100px;
    left: 100px;
}

.Logo {
    position: absolute;
    margin-left: 20px;
    z-index: 999;
}

.Logo img {
    width: 180px;
    height: auto;
}

.Details h1 {
    margin-top: 150px;
    margin-left: 25px;
    color: #fff;
    font-size: 60px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1px;
}

.Details h2 {
    margin-top: 15px;
    margin-left: 25px;
    color: #fff;
    font-size: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 0.5px;
}

.Details p {
    margin-top: 10px;
    margin-left: 25px;
    color: #fff;
    font-size: 19px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
}

.List {
    margin-left: -30px;
    margin-top: 140px;
}

.Details ul {
    margin-left: 5px;
}

.Details ul li {
    margin-left: 25px;
    float: left;
    color: #fff;
    font-size: 10px;
}

.Details ul li a {
    color: #fff;
    font-size: 10px;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}

ul li:first-child {
    list-style-type: none;
}

.LoginBox {
    height: 600px;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0 17px 35px #00000022;
    background-color: #d5d4d4;
}

.icon{
    position: absolute;
    margin-left: 139px;
    margin-top: 3px;
    font-size: 24px;
}
.LoginBox h2 {
    margin-top: 60px;
    color: #464242;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    line-height: 1;
}

.LoginOption {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}

.Email_Input {
    width: 300px;
    height: 45px;
    border-radius: 10px;
    outline: none;
    border: none;
    background: #f3f3f3;
    padding: 15px;
}

::placeholder {
    color: #696969;
    text-align: start;
    font-family: 'Poppins', sans-serif;
    font-size: 13px;
}

.password-container {
    position: relative;
    margin-top: 40px;
}

.Password_Input {
    width: 300px;
    height: 45px;
    border-radius: 10px;
    outline: none;
    border: none;
    background: #f3f3f3;
    padding: 15px;
}

.fa-eye {
    position: relative;
    right: 35px;
    top: 10px;
    transform: translateY(-50%);
    cursor: pointer;
}

.Button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.Login_Button {
    width: 180px;
    height: 45px;
    background: #3b73f8;
    color: #fbfcfe;
    border: none;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
}

.error-message {
    color: red;
    font-size: 12px;
    margin-top: 15px;
}

.Login_Icons {
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Icons {
    width: auto!important;
    float: left;
}

.Google {
    width: 40px;
    height: 40px;
    margin-left: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3f3f3;
    border-radius: 8px;

}

.fa-google {
    background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
}

.fa-facebook {
    color: #0165E1;
    background-color: #fff;
    font-size: 24px;
}

.fa-apple {
    font-size: 28px;
    color: #000;
}

.LoginOption p {
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    text-align: center;
    margin-top: 20px;
}

.LoginOption a {
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    .DetailsBox {
        border-radius: 0;
    }
    .Logo img{
        width: 100% !important;
        margin-top: 80px !important;
    }
    .Details {
        width: 80%;
        left: 10px;
    }

    .Details h1 {
        font-size: 52px;
        margin-top: 190px;
    }

    br {
        display: none;
    }

    .Details h2 {
        font-size: 40px;
    }

    .Details p {
        font-size: 15px;
        margin-top: 25px;
    }

    .List {
        margin-top: 160px;
    }
    .LoginBox{
        border-radius: 0;
    }
}
</style>