<template>
    <span>
        
                        <!-- =================================== facility  -->
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    
                    <div class="row" >
                        
                        <div class="col-md-12">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" v-model="selectAll" id="customCheck">
                        <label class="custom-control-label text-primary" for="customCheck"> <b> Select All </b> </label>
                        <hr>
                    </div>
                        </div>

                        <div class="col-md-4 mb-2"  v-for="user in users">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" :id="`customCheck`+user.id" v-model="selected" :value="user.id" number>
                        <label class="custom-control-label" :for="`customCheck`+user.id">{{ user.name }}</label>
                    </div>
                        </div>


                    </div>
                </div>
                    <!-- =================================== //facility  -->


                    <!-- =================================== meta  -->
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="form-group">
                        <label> Meta Title  </label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label> Meta Keyword  </label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label> Meta Description  </label>
                        <textarea class="form-control"></textarea>
                    </div>
                </div>
                    <!-- =================================== //meta  -->



                    <!-- =================================== policy  -->
                <div class="tab-pane fade" id="pills-policy" role="tabpanel" aria-labelledby="pills-policy-tab">
                    
                    
                    <div class="form-group">
                        
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="">Check In</span>
                            </div>
                            <input type="time" class="form-control">

                            <div class="input-group-prepend">
                                <span class="input-group-text" id="">Check Out</span>
                            </div>

                            <input type="time" class="form-control">
                        </div>  
                        </div>
                        <div class="form-group">
                        <label> Payment Option
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                        </label>
                        <select class="form-control">
                        <option value=""> Select Payment Option </option>
                        <option value=""> Paypal </option>
                        <option value=""> Skrill </option>
                        <option value=""> Master Card </option>
                        <option value=""> Bank </option>
                        </select>  
                        </div>

                        <div class="form-group">
                        <label> Policy & Terms  </label>
                        <textarea class="form-control"></textarea>
                        </div>
                </div>
                        <!-- =================================== //policy  -->


                    <!-- =================================== Bank Info  -->
                <div class="tab-pane fade" id="pills-bankInfo" role="tabpanel" aria-labelledby="pills-bankInfo-tab">
                    
                    
                    
                        <div class="form-group">
                        <label> Payment Option
                        <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                        </label>
                        <select class="form-control">
                        <option value=""> Select Payment Option </option>
                        <option value=""> Paypal </option>
                        <option value=""> Skrill </option>
                        <option value=""> Master Card </option>
                        <option value=""> Bank </option>
                        </select>  
                        </div>

                        <div class="form-group">
                        <label> Account Information  </label>
                        <textarea class="form-control"></textarea>
                        </div>
                </div>
                        <!-- =================================== //Bank Info  -->


                    <!-- =================================== contact Info  -->
                <div class="tab-pane fade" id="pills-contactInfo" role="tabpanel" aria-labelledby="pills-contactInfo-tab">
                    
                    <div class="row">
                        <div class="col-12 table-respondive">
                            <table class="table table-bordered">
						      						<tbody><tr class="table-primary">
						      							<td class="text-left" colspan="2"> 
                                                        <select name="" id="" class="form-control">
                                                            <option value=""> Main Contact </option>
                                                            <option value=""> Reservation </option>
                                                            <option value=""> Accounting / Payment </option>
                                                        </select>    
                                                        </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> FULL NAME <font class="text-danger"> * </font></td>
						      							<td> <input type="text" class="form-control" placeholder="" name="main_contact_full_name"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> E-MAIL ADDRESS <font class="text-danger"> * </font></td>
						      							<td> <input type="text" class="form-control" placeholder="" name="main_contact_email"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> MOBILE NUMBER  <font class="text-danger"> * </font></td>
						      							<td> <input type="text" class="form-control" placeholder="" name="main_contact_mobile_no"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> OFFICE PHONE NUMBER <font class="text-danger"> * </font></td>
						      							<td> <input type="text" class="form-control" placeholder="" name="main_contact_office_phone_no"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> EXTENSION </td>
						      							<td> <input type="text" class="form-control" placeholder="" name="main_contact_extension"> </td>
						      						</tr>
						      						<tr>
						      							<td class="p-1 pl-3"> POSITION </td>
						      							<td> <select name="main_contact_position" class="form-control" id="HotelContact0Position" required="required">
										<option value="">Select Position</option>
										<option value="1">General Manager</option>
										<option value="2">Hotel Manager</option>
										<option value="3">Executive Assistant Manager</option>
										<option value="4">Director of Sales and Marketing</option>
										<option value="5">Director of Sales</option>
										<option value="6">Director of Revenue</option>
										<option value="7">Senior Sales Manager</option>
										<option value="8">Sales Manager</option>
										<option value="9">Assistant Sales Manager</option>
										<option value="10">Sales Executive</option>
										<option value="11">Front Office Manager</option>
										<option value="12">Assistant Front Office Manager</option>
										<option value="13">Front Desk Agent</option>
										<option value="14">Reservation Manager</option>
										<option value="15">Reservation</option>
										<option value="16">Ecommerce Manager</option>
										<option value="17">Ecommerce Executive</option>
										<option value="18">Revenue Manager</option>
										<option value="19">Financial Controller</option>
										<option value="20">Chief Accountant</option>
										<option value="21">Credit Manager</option>
										<option value="22">Finance Manager</option>
										<option value="23">Account Receivable</option>
										<option value="24">Corporate Director of Revenue</option>
										<option value="25">Corporate Director of Sales and Marketing</option>
										<option value="26">Corporate Director of Ecommerce</option>
										<option value="27">Corporate Ecommerce Manager</option>
										<option value="28">Corporate Digital Marketing Manager</option>
										<option value="29">E-Commerce &amp; Digital Marketing Manager</option>
										<option value="30">Regional Revenue Manager</option>
										<option value="31">Regional Director of Revenue</option>
										<option value="32">Regional Ecommerce Manager</option>
										<option value="33">Ecommerce Consultant</option>
										<option value="34">Others</option>
										</select> </td>
						      						</tr>

						      						<tr>

						      							<td colspan="2"> 
                                                            <div class="input-group">
                                                                <label for=""> Contactable Hour</label><br>
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="">From </span>
                                                                </div>
                                                                <input type="time" class="form-control">

                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="">To</span>
                                                                </div>

                                                                <input type="time" class="form-control">
                                                            </div>  
                      
                                                             </td>
						      						</tr>

						      					</tbody></table>
                        </div>
                    </div>
                </div>
                        <!-- =================================== //Bank Info  -->


                        
                    <!-- =================================== translate  -->
                <div class="tab-pane fade" id="pills-translate" role="tabpanel" aria-labelledby="pills-translate-tab">
                    
                    
                    
                    <div class="form-group">
                    <label> Language
                    <i class="fa fa-star text-danger text-10 cursor-pointer" title="Mandatory Field" data-placement="top" data-toggle="tooltip" data-original-title="Mandatory Field"></i>
                    </label>
                    <select class="form-control">
                    <option value=""> Select Language </option>
                    <option value=""> Bangla </option>
                    <option value=""> Hindi </option>
                    <option value=""> Turkish </option>
                    <option value=""> Arabic </option>
                    </select>  
                    </div>

                    <div class="form-group">
                    <label> Hotel Name </label>
                    <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                    <label> Hotel Description  </label>
                    <textarea class="form-control"></textarea>
                    </div>

                    <div class="form-group">
                    <label> Meta Title </label>
                    <input type="text" class="form-control">
                    </div>

                    <div class="form-group">
                    <label> Meta Keyword  </label>
                    <textarea class="form-control"></textarea>
                    </div>

                    <div class="form-group">
                    <label> Meta Description  </label>
                    <textarea class="form-control"></textarea>
                    </div>
            </div>
                    <!-- =================================== //translate  -->

    </span>
</template>








(NULL, 'Hotel Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Executive Assistant Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Director of Sales and Marketing', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Director of Sales', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Director of Revenue', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Senior Sales Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Sales Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Assistant Sales Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Sales Executive', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Front Office Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Assistant Front Office Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Front Desk Agent', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Reservation Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Reservation', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Ecommerce Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Ecommerce Executive', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Revenue Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Financial Controller', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Chief Accountant', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Credit Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Finance Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Account Receivable', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Corporate Director of Revenue', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Corporate Director of Sales and Marketing', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Corporate Director of Ecommerce', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Corporate Ecommerce Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Corporate Digital Marketing Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'E-Commerce &amp; Digital Marketing Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Regional Revenue Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Regional Director of Revenue', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Regional Ecommerce Manager', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Ecommerce Consultant', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000'),
(NULL, 'Others', '1', '1', '1', '1', NULL, NULL, NULL, NULL, '2023-01-04 13:49:16.000000');