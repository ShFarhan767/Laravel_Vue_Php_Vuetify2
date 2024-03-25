<template id="">
    <span>
        <div class="card">
            <div class="card-header-tab card-header alert-info">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-pencil icon-gradient bg-premium-dark"></i>
                    <h4 id="productName">Entry</h4>
                </div>
            </div>

            <form action="" method="post" @submit.prevent="contactDetailsEntry()">
                <div class="product-entry">
                    <div class="supplier-entry py-4 px-2 comm-form-back-img">
                        <div
                            class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color  pt-4 pb-4">
                            <!-- ---------- input field -->
                            <div class="form-group">
                                <label> Title <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.title" class="form-control" placeholder="Enter Title"
                                    :class="{ 'is-invalid': form.errors.has('title') }">
                                <has-error :form="form" field="title"></has-error>
                            </div>



                            <div class="form-group">
                                <label> Number <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.number" class="form-control" placeholder="Enter Number"
                                    :class="{ 'is-invalid': form.errors.has('number') }">
                                <has-error :form="form" field="number"></has-error>
                            </div>



                            <div class="form-group">
                                <label> EmailAdress <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.emailAdress" class="form-control"
                                    placeholder="Enter EmailAdress"
                                    :class="{ 'is-invalid': form.errors.has('emailAdress') }">
                                <has-error :form="form" field="emailAdress"></has-error>
                            </div>



                            <div class="form-group">
                                <label> OfficeAddress <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.officeAddress" class="form-control"
                                    placeholder="Enter OfficeAddress"
                                    :class="{ 'is-invalid': form.errors.has('officeAddress') }">
                                <has-error :form="form" field="officeAddress"></has-error>
                            </div>
                            <!-- ---------- /input field -->
                        </div>
                    </div>
                </div>

                <!-- -----------------------------   card footer  -->

                <div class="d-block pt-3 pb-4 card-footer overflow-hidden">
                    <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
                        <button type="reset"
                            class="btn-pill btn-shadow btn-wide fsize-1 btn btn-outline-danger btn-lg float-left">
                            <span class="mr-2 opacity-7">
                                <i class="fa fa-undo "></i>
                            </span>
                            <span class="mr-1"> Clear </span>
                        </button>

                        <button type="submit"
                            class="btn-pill btn-shadow btn-wide fsize-1 btn btn-primary btn-lg float-right"
                            :disabled="loading">
                            <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
                                aria-hidden="true"></span>

                            <span v-else class="mr-2 opacity-7">
                                <i class="fa fa-paper-plane"></i>
                            </span>
                            <span class="mr-1"> Submit </span>
                        </button>
                    </div>
                </div>

                <!-- -----------------------------   // card footer  -->
            </form>
        </div>

        <div class="card main-card  element-block-example mt-5">
            <div class="card-header">
                <h3 style="color:black">List</h3>
            </div>
        </div>

        <div class="supplier-entry py-1 px-1">
            <div class="card-body table-responsive bg-white">
                <table style="width: 100%;" id="example" class="table table-hover table-striped table-bordered">
                    <thead>
                        <tr style="background:rgba(242, 242, 242, 0.47)">
                            <th>SN</th>
                            <th>Title</th>
                            <th>Number</th>
                            <th>Email Address</th>
                            <th>Office Address</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(singleList, index) in contactDetailsLists " :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ singleList.title }}</td>
                            <td>{{ singleList.number }}</td>
                            <td>{{ singleList.emailAdress }}</td>
                            <td>{{ singleList.officeAddress }}</td>

                            <td>

                                <span>
                                    <button @click.prevent="
                                        contactDetailsDelete(
                                            singleList.id
                                        )
                                        " class="mb-2 mr-2 btn-hover-shine btn btn-shadow btn-danger">
                                        Delete
                                    </button>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </span>
</template>
<script>
export default {
    data() {
        return {
            form: new Form({
                title: '',
                number: '',
                emailAdress: '',
                officeAddress: '',
            }),
            loading:false,
            contactDetailsLists:[],
        };
    },
    mounted() {
        this.contactDetailsShow();
    },
    methods: {
        
        contactDetailsEntry() {

            this.form.post("contactDetails").then((response) => {
                if (response.data.changePurchaseType) {
                    this.exit = true;
                    this.mess = response.data.changePurchaseType;
                    // Toast.fire({
                    //     icon: 'error',
                    //     title: 'Change Your Admin Type Name'
                    // })
                } else {
                    Toast.fire({
                        icon: "success",
                        title: "Data Entry Successful",
                    }),

                        this.form.reset();

                    this.contactDetailsShow();
                }
            });
        },

        contactDetailsShow() {

            this.form.get("/contactDetails").then((res) => {
                this.contactDetailsLists = res.data.data;
            });

        },

        contactDetailsDelete($id) {
            axios.delete("/contactDetails/" + $id).then((res) => {
                Toast.fire({
                    icon: "success",
                    title: "Data Deleted  successfully",
                });
                this.contactDetailsShow();
            });
        },


    }
};
</script>
