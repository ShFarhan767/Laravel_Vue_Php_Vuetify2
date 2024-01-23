<template id="">
    <span>
       <div class="card main-card  element-block-example">
           <div class="card-header">
              <h3>
                <i class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo"></i>
                Quotation Entry
              </h3>

              
              <div class="btn-actions-pane-right text-capitalize">
                  <router-link to="/quotation@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                   > < Back </router-link>
              </div>
            </div>
  
            
  
          
                <div class="table-responsive bg-white p-3">
          

                    <div id="invoice" style="padding-top:0px!important;">
    <div class="invoice overflow-auto">
        <div style="min-width: 600px">



                    <header  :style="'border-bottom-color:blue'" style="margin-bottom:5px!important;">
                <div class="row">
                    <div class="col-6">
                        <a target="_blank" href="#">
                            <img :src="'http://travelcenter.asia/images/logo.png'" style="max-height:105px;max-width:100%;" alt="Company Logo"/>
                            </a>
                    </div>
                    <div class="col-4">
                        <div> <i class="fa fa-home"></i>  15/5 (2nd Floor), Block-C, Tajmahal Road, Mohammadpur Dhaka-1207, Bangladesh </div>
                        <div> <i class="fa fa-phone" aria-hidden="true"></i>   +880248110212</div>
                        <div> <i class="fa fa-envelope" aria-hidden="true"></i>   sales@travelcenter.asia</div> 
                        <div> <i class="fa fa-globe" aria-hidden="true"></i>   www.travelcenter.asia</div>
                    </div>
                    <div class="col-2 text-center">
                        <p class="mb-0"><u>Q234A59B</u></p>
                        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'" style="max-height:105px;max-width:100%;margin-top: -8px;" alt="Company Logo"/>
                            
                    </div>
                </div>

            </header>


            <div class="row">
                <div class="col"> 
                        <span>Quote To</span>
                        <span class="badge badge-primary" data-toggle="modal" data-target="#exampleModal"> + </span>
                        <select name="" id="" class="form-control mt-2">
                            <option value=""> Select Company </option>
                        </select>
                        
                </div>
                <div class="col"> 
                    <span style="position:absolute;top:-28px;font-size:25px;background:white;padding:0 16px;right:118px;color:#00aeef;"> Quotation </span>
                    <span>Module </span>
                       <select @change="changeModule()" v-model="moduleId" name="" id="" class="form-control mt-2">
                            <option value=""> Select Module </option>
                            <option value="1"> Hotel  </option>
                            <option value="2"> Flight  </option>
                            <option value="3"> Transport  </option>
                            <option value="4"> Package Tour  </option>
                            <option value="5"> Sightseeing  </option>
                            <option value="6"> Visa Management  </option>
                        </select>
                 </div>
                <div class="col"> 
                    <table style="float:right;">
                        <tr>
                            <th>Issue Date</th>
                            <th>:</th>
                            <td><input type="date" class="form-control"></td>
                        </tr>
                        <tr>
                            <th>Valid Until</th>
                            <th>:</th>
                            <td><input type="date" class="form-control"></td>
                        </tr>
                        <tr>
                            <th> </th>
                            <th> </th>
                            <td>
                                <select name="" id="" class="form-control mt-1">
                                    <option value=""> Select Currency </option>
                                    <option value=""> BDT </option>
                                    <option value=""> USD </option>
                                    <option value=""> THB </option>
                                </select>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>


            <div class="" v-if="informationStatusBox==1">
            <div class="row">
            <div class="col-md-12">
                <table class="table table-bordered">
                    
                  <tr>
                    <td>
                      <select class="form-control" style="width: 300px">
                        <option value="">Select Country</option>
                        <option value=""></option>
                      </select>
                    </td>
                
                    <td>
                      <select class="form-control" style="width: 300px">
                        <option value="">Select City</option>
                        <option value=""> </option>
                      </select>
                    </td>
                  
                    <td>
                       
                        <div class="input-group">
                            <input type="date" class="form-control">
                            
                                <span class="input-group-text rounded-circle" id="" style="position:absolute;left:43%;z-index:11;top:1px;height:36px;">to</span>
                            
                            <input type="date" class="form-control" style="padding-left:20px;">
                        </div>
                    </td>
                  </tr>
  
                  <tr>
                    <td colspan="3">
                      <select class="form-control" style="width: 300px">
                        <option value="">Select Hotel </option>
                        <option value=""> </option>
                      </select>
                    </td>
                  </tr>
                </table>
            </div>
            </div>



            

            <div class="col-12 pb-2 pt-2 mb-3 supplier-border
                comm-form-box-back-color">

                <div class="form-group">
                <h5 class="text-center mt-0"> Hotel Information </h5>
              </div>

                <div class="form-group">
                <label> &nbsp; </label>
                <table class="table table-bordered">
                    <tr>
                      <th> 
                          <center><div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck114">
                                  <label class="custom-control-label" for="customCheck114"> &nbsp; </label>
                              </div>  </center></th>
                        <th> SL </th>
                        <th> Room Type </th>
                        <th> Bed Type </th>
                        <th> No Of Room </th>
                        <th> Adult </th>
                        <th> Child </th>
                        <th> Unit Price </th>
                        <th> Total Price </th>
                        <th> Details </th>
                    </tr>
                    <tr>
                        <td> 
                          <center><div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck113">
                                  <label class="custom-control-label" for="customCheck113"> &nbsp; </label>
                              </div>  </center></td>
                        <td> 1 </td>
                        <td> Superior </td>
                        <td> Single </td>
                        <td> <select class="form-control" name="" id=""> <option value="">Select Room</option> <option value="">1</option> <option value="">2</option> </select> </td>
                        <td> <select class="form-control" name="" id=""> <option value="">Select Adult</option> <option value="">1</option> <option value="">2</option> </select> </td>
                        <td> <select class="form-control" name="" id=""> <option value="">Select Child </option> <option value="">1</option> <option value="">2</option> </select> </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <span class="badge badge-primary" data-toggle="modal" data-target="#exampleModal">Details</span> </td>
                    </tr>
                    <tr>
                      <td> 
                          <center><div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck115">
                                  <label class="custom-control-label" for="customCheck115"> &nbsp; </label>
                              </div>  </center></td>
                        <td> 2 </td>
                        <td> Duplex  </td>
                        <td> Double </td>
                        <td> <select class="form-control" name="" id=""> <option value="">Select Room</option> <option value="">1</option> <option value="">2</option> </select> </td>
                        <td> <select class="form-control" name="" id=""> <option value="">Select Adult</option> <option value="">1</option> <option value="">2</option> </select> </td>
                        <td> <select class="form-control" name="" id=""> <option value="">Select Child </option> <option value="">1</option> <option value="">2</option> </select> </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <span class="badge badge-primary" data-toggle="modal" data-target="#exampleModal">Details</span> </td>
                    </tr>
                </table>
                </div>

                
  
              <div class="form-group">
                <label> &nbsp; </label>
                <button class="btn btn-primary float-right"> Add </button>
              </div>


              </div>



            <div
              class="col-12 pb-2 pt-2 mb-3 supplier-border
                comm-form-box-back-color">
                <div class="form-group">
                <label> &nbsp; </label>
                <table class="table table-bordered">
                  <tr>
                      <th> SL </th> 
                      <th> City </th> 
                      <th> Room Type </th> 
                      <th> Bad Type </th> 
                      <th> Details </th> 
                      <th> Unit Price  </th> 
                      <th> Total Price </th> 
                      <th> Action </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> Dhaka </td>
                      <td> Superior </td>
                      <td> Single </td>
                      <td> <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Details </button> </td>
                      <td> 100 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
  
                  <tr>
                      <td> 2 </td>
                      <td> Cox's Bazar </td>
                      <td> Duplex </td>
                      <td> Double </td> 
                      <td> <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal"> Details </button> </td>
                      <td> 100 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                  
                </table>
              </div>
              </div>
              </div>

              <!-- =================== /hotel information
              ======================================================== -->




              <!--======================================================== 
               =================== flight information -->


               <div class="" v-if="informationStatusBox==2">
            
                </div>

            <!-- =================== /flight information
            ======================================================== -->




              <!--======================================================== 
               =================== Transport information -->


               <div class="" v-if="informationStatusBox==3">
                
                <div class="row">
                    <div class="col-md-12">
                <table class="table  table-bordered">
                    <tr>
                    <td>
                      <select class="form-control" style="width: 300px">
                        <option value="">Select Type</option>
                        <option value=""> </option>
                      </select>
                    </td>
                  
                    <td>
                      <select class="form-control" style="width: 300px">
                        <option value="">Select Brand </option>
                        <option value=""> </option>
                      </select>
                    </td>
                  
                    <td>
                      <select class="form-control" style="width: 300px">
                        <option value="">Select Model </option>
                        <option value=""> </option>
                      </select>
                    </td>
                  </tr>
                </table>

                
                <div class="form-group">
                    <label for=""> Facility </label>
                    <div class="row">
                        
                        <div class="col-md-12">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label text-primary" for="customCheck1"> <b>Select All</b> </label>
                        <hr>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Air Condition</label>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Drinking Water</label>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Coffiee</label>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">CCTV</label>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Internet Service</label>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Wifi Service</label>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Relax Seat</label>
                    </div>
                        </div>

                        <div class="col-md-3 mb-2">
                            <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1">
                        <label class="custom-control-label" for="customCheck1">Wifi Service</label>
                    </div>
                        </div>

                    </div>
                </div>
                
  
              <div class="form-group">
                <label> &nbsp; </label>
                <button class="btn btn-primary float-right"> Add </button>
              </div>


              <table class="table table-bordered">
                    <tr>
                        <th> SL </th>
                        <th> Transport </th>
                        <th> Vendor Price </th>
                        <th> B2B Price </th>
                        <th> B2C Price </th>
                        <th> Facility </th>
                        <th> Delete </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> Private Car , Toyota , 2015 </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <span class="badge badge-primary">Facility</span> </td>
                        <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td> Micro , Toyota , 2015 </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                        <td> <span class="badge badge-primary">Facility</span> </td>
                        <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                       <th>  </th>
                       <th>  </th>
                       <th> 200 </th>
                       <th> 400 </th>
                       <th> 600 </th>
                       <th>  </th>
                       <th>  </th>
                    </tr>
                </table>


              </div>


                </div>
                </div>
                </div>

            <!-- =================== /Transport information
            ======================================================== -->





              <!--======================================================== 
               =================== Package Tour information -->


               <div class="" v-if="informationStatusBox==4">

                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-bordered">
                            <tr>
                    <td>
                      <select class="form-control">
                        <option value="">Select Country</option>
                        <option value=""></option>
                      </select>
                    </td>
                 
                    <td>
                      <select class="form-control">
                        <option value="">Select Package</option>
                        <option value="">City Tour </option>
                      </select>
                    </td>
                  </tr>
                </table>

                
              <div class="form-group">
               <table class="table table-bordered">
                    <tr>
                        <th> SL </th>
                        <th> City </th>
                        <th> Place </th>
                        <th> Product </th>
                        <th> Package </th>
                        <th> Facility </th>
                    </tr>
                    <tr>
                        <td> 1 </td>
                        <td> Pattaya </td>
                        <td> Coral Iceland </td>
                        <td> City Tour </td>
                        <td> Visa </td>
                        <td> <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal1">View Facility</button> </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td> Bangkok </td>
                        <td> safary world </td>
                        <td> City Tour </td>
                        <td> tour </td>
                        <td> <button type="button" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal1">View Facility</button> </td>
                     </tr>
               </table>
                    
            </div>

            
  
            <div class="form-group">
                <center><label class="badge badge-primary"><b> Extra Facility </b> </label></center>
                <div class="row">
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck12">
                                  <label class="custom-control-label" for="customCheck12">Bank Transaction</label>
                              </div>
                          </div>
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck11">
                                  <label class="custom-control-label" for="customCheck11">NID Copy</label>
                              </div>
                          </div>
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck1">
                                  <label class="custom-control-label" for="customCheck1">Bank solvency</label>
                              </div>
                          </div>
                          
                          
                </div>
              </div>


              
              <div class="form-group">
                <label> &nbsp; </label>
                <table class="table table-bordered">
                  <tr>
                      <th> SL </th>
                      <th> Product </th>
                      <th> Package </th>
                      <th> Sales Price </th> 
                      <th> Discount  </th> 
                      <th> Total Price  </th> 
                      <th>  </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> Tour </td>
                      <td> City Tour  </td>
                      <td> <input type="text" class="form-control" disabled value="200"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Discount"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Total Price"> </td> 
                      <td> <button class="btn btn-primary float-right">Add</button> </td> 
                     
                  </tr>
                  <tr>
                      <td> 2 </td>
                      <td> Tour </td>
                      <td> Market Tour </td>
                      <td> <input type="text" class="form-control" disabled value="500"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Discount"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Total Price"> </td> 
                      <td> <button class="btn btn-primary float-right">Add</button> </td> 
                     
                  </tr>
                </table>
              </div>


              <table class="table table-bordered">
                  <tr>
                      <th> SL </th> 
                      <th> Country </th> 
                      <th> Package </th> 
                      <th> Details </th> 
                      <th> Sales  </th> 
                      <th> Discount </th> 
                      <th> Total </th> 
                      <th> Action </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> Thailand </td>
                      <td> City Tour </td>
                      <td> <button class="btn btn-primary"> Details </button> </td>
                      <td> 100 </td>
                      <td> 10 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                  <tr>
                      <td> 2 </td>
                      <td> Thailand </td>
                      <td> City Tour </td>
                      <td> <button class="btn btn-primary"> Details </button> </td>
                      <td> 100 </td>    
                      <td> 10 </td>
                      <td> 90 </td>
                      
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                </table>



                    </div>
                </div>
            
                </div>

            <!-- =================== /Package Tour information
            ======================================================== -->




              <!--======================================================== 
               =================== Sightseeing information -->


               <div class="" v-if="informationStatusBox==5">
                
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-bordered">
                            
                  <tr>
                    <td>
                      <select class="form-control">
                        <option value="">Select Country</option>
                        <option value=""></option>
                      </select>
                    </td>
                  
                    <td>
                      <select class="form-control">
                        <option value="">Select City</option>
                        <option value=""> </option>
                      </select>
                    </td>
                  
                    <td>
                      <select class="form-control">
                        <option value="">Select Event </option>
                        <option value=""> </option>
                      </select>
                    </td>
                  
                    <td>
                      <select class="form-control">
                        <option value="">Select Product </option>
                        <option value=""> </option>
                      </select>
                    </td>
                  </tr>
                </table>

                <div class="form-group">
                    <table class="table table-bordered">
                    <tr>
                      <th> 
                          <center><div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck114">
                                  <label class="custom-control-label" for="customCheck114"> &nbsp; </label>
                              </div>  </center></th>
                        <th> SL </th>
                        <th> Activity </th>
                        <th> Vendor Price </th>
                        <th> B2B Price </th>
                        <th> B2C Price </th>
                    </tr>
                    <tr>
                        <td> 
                          <center><div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck113">
                                  <label class="custom-control-label" for="customCheck113"> &nbsp; </label>
                              </div>  </center></td>
                        <td> 1 </td>
                        <td> Cinema Hall </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                    </tr>
                    <tr>
                      <td> 
                          <center><div class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input" id="customCheck115">
                                  <label class="custom-control-label" for="customCheck115"> &nbsp; </label>
                              </div>  </center></td>
                        <td> 2 </td>
                        <td> Ticket  </td>
                        <td> 100 </td>
                        <td> 200 </td>
                        <td> 300 </td>
                    </tr>
                </table>
                </div>

                
  
              <div class="form-group">
                <label> &nbsp; </label>
                <button class="btn btn-primary float-right"> Add </button>
              </div>



              <table class="table table-bordered">
                  <tr>
                      <th> SL </th> 
                      <th> City </th> 
                      <th> Event </th> 
                      <th> Product </th> 
                      <th> Details </th> 
                      <th> Vendor  </th> 
                      <th> Customer </th> 
                      <th> Action </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> Dhaka </td>
                      <td> Jamuna Future Park </td>
                      <td> Cinema Hall </td>
                      <td> <button class="btn btn-primary"> Details </button> </td>
                      <td> 100 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
  
                  <tr>
                      <td> 2 </td>
                      <td> Dhaka </td>
                      <td> Jamuna Future Park </td>
                      <td> Sky Ride Jump </td>
                      <td> <button class="btn btn-primary"> Details </button> </td>
                      <td> 100 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                  
                </table>

                
                    </div>
                </div>
                </div>

            <!-- =================== /Sightseeing information
            ======================================================== -->


            

            <!-- ========================================================
                 =================== Visa information -->

                

               <div class="" v-if="informationStatusBox==6">
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table table-bordered">
                                
                  <tr>
                    <td>
                      <select class="form-control">
                        <option value="">Select Customer</option>
                        <option value=""></option>
                      </select>
                    </td>
                   
                    <td>
                      <select class="form-control">
                        <option value="">Select Passport</option>
                        <option value="">B00668809</option>
                      </select>
                    </td>
                   
                    <td>
                    <input type="text" class="form-control" disabled placeholder="Name" />
                    </td>
                   
                    <td>
                        <select class="form-control" disabled>
                      <option value="">Select Gender</option>
                    </select>
                    </td>
                  </tr>
                </table>


                
              <div class="form-group">
                <center><label class="text-primary"><b>Received Document </b> </label></center>
                <div class="row">
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck12">
                                  <label class="custom-control-label" for="customCheck12">Bank Transaction</label>
                              </div>
                          </div>
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck11">
                                  <label class="custom-control-label" for="customCheck11">NID Copy</label>
                              </div>
                          </div>
                          <div class="col-md-4 mb-2">
                              <div class="custom-control custom-checkbox">
                                  <input type="checkbox" disabled class="custom-control-input" id="customCheck1">
                                  <label class="custom-control-label" for="customCheck1">Bank solvency</label>
                              </div>
                          </div>
                          
                          
                </div>
              </div>



              <table class="table table-bordered">
                  <tr>
                      <th> SL </th>
                      <th> Passport No </th>
                      <th> Product </th>
                      <th> Sales Price </th> 
                      <th> Discount  </th> 
                      <th> Total Price  </th> 
                      <th>  </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> 3434289897 </td>
                      <td> Student Visa </td>
                      <td> <input type="text" class="form-control" disabled value="200"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Discount"> </td> 
                      <td> <input type="text" class="form-control" placeholder="Total Price"> </td> 
                      <td> <button class="btn btn-primary float-right">Add</button> </td> 
                     
                  </tr>
                </table>


                <table class="table table-bordered">
                  <tr>
                      <th> SL </th>
                      <th> Name </th>
                      <th> Passport No </th>
                      <th> Country </th>
                      <th> Visa Type </th> 
                      <th> Sales  </th> 
                      <th> Discount </th> 
                      <th> Total </th> 
                      <th> Action </th> 
                  </tr>
  
                  <tr>
                      <td> 1 </td>
                      <td> Md Saiful </td>
                      <td> 3434289897 </td>
                      <td> Thailand </td>
                      <td> Student Visa </td>
                      <td> 100 </td>
                      <td> 10 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                  <tr>
                      <td> 2 </td>
                      <td> Md kashem </td>
                      <td> Bd923874329874 </td>
                      <td> Thailand </td>
                      <td> Student Visa </td>
                      <td> 100 </td>    
                      <td> 10 </td>
                      <td> 90 </td>
                      <td> 
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary btn-hover-shine"><i class="fa fa-eye"></i></button>
                            <button type="button" class="btn btn-outline-danger btn-hover-shine"><i class="fa fa-trash"></i></button>
                        </div>
                      </td>
                     
                  </tr>
                </table>


                
                        </div>
                    </div>
                </div>

            <!-- =================== /Visa information 
            ======================================================== -->


            <div class="row">
                <div class="col table-responsive">
                    <hr>
                    <table class="table table-bordered">
                        <tr>
                            <th> SL </th>
                            <th> Module </th>
                            <th> Amount </th>
                            <th> Details </th>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> Hotel </td>
                            <td> 180 </td>
                            <td> <span class="badge badge-primary">Details</span> </td>
                        </tr>
                    </table>
                </div>
            </div>




            <div class="row">
                <div class="col-md-7">
                    <span> Note </span>
                    <textarea class="form-control mb-3 "></textarea>
                
                    <span> Payment Condition </span>
                    <div class="input-group">
                        <select type="text" class="form-control">
                            <option value=""> Select Payment </option>
                        </select>
                        <input type="button" class="btn btn-primary" value="Add">
                    </div>
                    
                    <h5 class="mt-4 pt-4 mb-3">
                        <u> Authorize Sign </u>
                    </h5>

                    <button class="btn btn-primary float-right ml-3"> Submit </button>
                    <select class="form-control float-right ml-3" style="width:100px;"> 
                        <option value=""> Status </option>    
                    </select>
                    <button class="btn btn-primary float-right" data-toggle="modal" data-target="#previewModal"> Preview </button>
                </div>
                <div class="col-md-5">
                    <table class="table table-bordered">
                        <tr>
                            <th> Sub Total </th>
                            <td> <input type="text" class="form-control" value="180" disabled> </td>
                        </tr>
                        <tr>
                            <th> Discount </th>
                            <td> <input type="text" class="form-control" placeholder="Discount"> </td>
                        </tr>
                        <tr>
                            <th> Payable </th>
                            <td> <input type="text" class="form-control" value="180" > </td>
                        </tr>
                        <tr>
                            <th> vat </th>
                            <td> <input type="text" class="form-control" value="80" > </td>
                        </tr>
                        <tr>
                            <th> Total </th>
                            <td> <input type="text" class="form-control" value="260" disabled> </td>
                        </tr>
                    </table>
 

                </div>
              </div>
          
                </div>
                </div>
                </div>
                </div>
       
        </div>

<!-- preview Modal -->
<div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style="width:137%;margin-left:-107px;">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> Preview </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
        <div id="invoice" style="padding-top:0px!important;">
    <div class="invoice overflow-auto">
        <div style="min-width: 600px">



                    <header  :style="'border-bottom-color:blue'" style="margin-bottom:5px!important;">
                <div class="row">
                    <div class="col-6">
                        <a target="_blank" href="#">
                            <img :src="'http://travelcenter.asia/images/logo.png'" style="max-height:105px;max-width:100%;" alt="Company Logo"/>
                            </a>
                    </div>
                    <div class="col-4">
                        <div> <i class="fa fa-home"></i>  15/5 (2nd Floor), Block-C, Tajmahal Road, Mohammadpur Dhaka-1207, Bangladesh </div>
                        <div> <i class="fa fa-phone" aria-hidden="true"></i>   +880248110212</div>
                        <div> <i class="fa fa-envelope" aria-hidden="true"></i>   sales@travelcenter.asia</div> 
                        <div> <i class="fa fa-globe" aria-hidden="true"></i>   www.travelcenter.asia</div>
                    </div>
                    <div class="col-2 text-center">
                        <p class="mb-0"><u>Q234A59B</u></p>
                        <img :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'" style="max-height:105px;max-width:100%;margin-top: -8px;" alt="Company Logo"/>
                            
                    </div>
                </div>

            </header>


            
            <div class="row">
                <div class="col"> 
                        <b>Quote To</b></br>
                         Company Name
                        
                </div>
                <div class="col"> 
                    <span style="position:absolute;top:-28px;font-size:25px;background:white;padding:0 16px;right:118px;color:#00aeef;"> Quotation </span>
                     
                    <b style="position:absolute;">Module </b>
                    </br>
                       Hotel <br>
                       Welcome Plaza Hotel
                 </div>
                <div class="col"> 
                    <table style="float:right;">
                        <tr>
                            <th>Issue Date</th>
                            <th>:</th>
                            <td> 3 Jan 2022</td>
                        </tr>
                        <tr>
                            <th>Valid Until</th>
                            <th>:</th>
                            <td>29 jan 2022</td>
                        </tr>
                        <tr>
                            <th> </th>
                            <th> </th>
                            <td> USD </td>
                        </tr>
                    </table>
                </div>
            </div>



            <div class="row">
                <div class="col table-responsive">
                    <table class="table table-bordered">
                        <tr>
                            <th> SL </th>
                            <th> Product Type </th>
                            <th> Product Name </th>
                            <th> Description </th>
                            <th> Unit </th>
                            <th> Unit Price </th>
                            <th> Quantity </th>
                            <th> Discount </th>
                            <th> Total </th>
                        </tr>
                        <tr>
                            <td> 1 </td>
                            <td> Hotel </td>
                            <td> welcome plaza hotel </td>
                            <td> the welcome plaza hotel is most popular in the world. </td>
                            <td> 1 </td>
                            <td> 2000 </td>
                            <td> 2 </td>
                            <td> 30 </td>
                            <td> 1970 </td>
                        </tr>
                    </table>
                </div>
            </div>



            

            <div class="row">
                <div class="col-md-7">
                    <b> Note : </b>
                    <br>
                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                
                    <hr>
                    <b> Payment Condition :</b>
                    <br>
                    <ul>
                      <li> paragraphs </li>
                      <li> words </li>
                      <li> bytes </li>
                      <li> lists </li>

                    </ul>
                    
                    <h5 class="mt-4 pt-4 mb-3">
                        <u> Authorize Sign </u>
                    </h5>

                </div>
                <div class="col-md-5">
                    <table class="table table-bordered">
                        <tr>
                            <th> Sub Total </th>
                            <td> 2000 </td>
                        </tr>
                        <tr>
                            <th> Discount </th>
                            <td> 20 </td>
                        </tr>
                        <tr>
                            <th> Payable </th>
                            <td> 2000 </td>
                        </tr>
                        <tr>
                            <th> vat </th>
                            <td> 5% </td>
                        </tr>
                        <tr>
                            <th> Total </th>
                            <td> 1500</td>
                        </tr>
                    </table>
 

                </div>
              </div>


            </div>
            </div>
            </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal"> Close </button>
      </div>
    </div>
  </div>
</div>


<!-- new company Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Company</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




    </span>
  </template>
  <style>
  
  </style>
  <script>
  import datatable from "datatables.net-bs4";
  import pdfMake from 'pdfmake/build/pdfmake'
  import pdfFonts from 'pdfmake/build/vfs_fonts'
  import jsZip from 'jszip'
   
  // below you should only import what you need
  // Example: import buttons and plugins
  import 'datatables.net-buttons/js/dataTables.buttons.js'
  import 'datatables.net-buttons/js/buttons.html5.js'
  import 'datatables.net-buttons/js/buttons.print.js'
  // import the rest for your specific theme
  import 'datatables.net-buttons-bs4'
   
  import 'datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css'
      export default {
          data(){
              return{
                  gets:'',
                  moduleId:'',
                  informationStatusBox:0,
              }
          },
          mounted(){
            this.getInvoiceSetupInformation();
          },
          methods:{

    changeModule(){
        this.informationStatusBox=this.moduleId;
    },
  
      getInvoiceSetupInformation() {
     
        this.assetBrandList();
      
    },
  
  
              assetBrandList(){
                
                    var companyName = this.gets.companyName;
                    var address = this.gets.address;
                    var contact = this.gets.mobileNo+', '+this.gets.email+', '+this.gets.website;
                    var pageTitle = 'Asset Brand List';
  
                   $(document).ready(function () {
                    
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  window.pdfMake = pdfMake;
  window.JSZip = require('jszip')
  
  
         var table = $("#sampleTable").DataTable({
           lengthMenu: [[10, 25, 50, 100, 200, 500, -1], [10, 25, 50, 100, 200, 500, "All"]],
            processing: true,
            language: 
                        {          
                        "processing": "<div style='color:white;position:fixed;top:35%;left:8%;width:90%;min-height:150px;max-height:80%;background:url(/dashboard/assets/images/pre-loader.gif),rgba(0,0,0,.2);background-repeat:no-repeat;background-position:center top;z-index:10;'>Processing..</div>",
                        },
            serverSide: true,
            columnDefs: [
              // { orderable: false, targets: [ 1 ] },
            ],
            dom: 
          "<'row'<'col-sm-6 col-md-4 text-left'l> <'col-sm-6 col-md-4 text-center'B> <'col-sm-12 col-md-4 text-right'f>>"+
          "<'row'<'col-sm-12'tr>>"+
          "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
      buttons: [ 
   
             
        {
          extend: 'excelHtml5',
          text: '<i class="fa fa-file-excel-o"></i> Excel',
          title: companyName,
          filename: pageTitle,
          selectorOpts: {filter: 'applied', order: 'current'},
          createEmptyCells : true,
          sheetName: pageTitle,
          messageTop: pageTitle,
          exportOptions: {
                          columns: [0,1]
                      },
          customize: function( xlsx ) {
          //my code
          }
          },
          {
                      extend: "pdf",
                      className: "btn export-pdf",
                      text: '<i class="fa fa-file-pdf-o"></i> PDF',
                      titleAttr: 'PDF',
  customize : function(doc){ 
      doc.defaultStyle.alignment = 'center';
      doc.styles.tableHeader.alignment = 'center';
      
          },
          
                      title: companyName,
                      messageTop:address+', Contact:- '+contact,
                      fileName: pageTitle+".pdf",
                      exportOptions: {
                  columns: [0,1]
              }
              },
        {
              extend: "print",
              className: "btn btn-primary",
              text: '<i class="fa fa-print"></i> Print',
              titleAttr: 'Print',
              oSelectorOpts: {
               page: 'all'
           },
           bShowAll: true,
              title: '',
              messageTop: '<h3 class="text-center">'+companyName+
              '</h3><h5 class="text-center">'+address+
              '</h5><h5 class="text-center border-bottom">'+contact+
              '</h5><center><span class="badge badge-light border border border-secondary">'+pageTitle+
              '</span></center>',
              exportOptions: {
                  columns: [0,1]
              }
          }
      ],
  
            ajax: "/shopAssetBrandReportAlvl",
  
            columns: [
              
             
              {
          "title": "SN",
          render: function (data, type, row, meta) {
          return meta.row + meta.settings._iDisplayStart + 1;
          }
          }, 
              {
                data: "assetBrandName",
              },
            
              
            ],
          });
          $( table.table().container() ).removeClass( 'form-inline' );
          $('.col-xs-12').addClass('col-12').removeClass( 'col-xs-12' );
        });
              },
        
          },
         
      }
  
  </script>
  