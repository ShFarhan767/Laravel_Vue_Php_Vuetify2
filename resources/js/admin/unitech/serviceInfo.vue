<template id="">
    <span>
        <div class="card">
            <div class="card-header-tab card-header alert-info">
                <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i class="header-icon lnr-pencil icon-gradient bg-premium-dark"></i>
                    <h4 id="productName">Entry</h4>
                </div>
            </div>

            <form action="" method="post" @submit.prevent="serviceInfoEntry()">
                <div class="product-entry">
                    <div class="supplier-entry py-4 px-2 comm-form-back-img">
                        <div
                            class="col-lg-8 px-lg-5 col-sm-8 offset-sm-2 col-12 supplier-border comm-form-box-back-color  pt-4 pb-4">
                            <!-- ---------- input field -->
                            <div class="form-group">
                                <label> Image <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.image" class="form-control" placeholder="Enter Image"
                                    :class="{ 'is-invalid': form.errors.has('image') }">
                                <has-error :form="form" field="image"></has-error>
                            </div>



                            <div class="form-group">
                                <label> SmallQuote <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.smallQuote" class="form-control"
                                    placeholder="Enter SmallQuote"
                                    :class="{ 'is-invalid': form.errors.has('smallQuote') }">
                                <has-error :form="form" field="smallQuote"></has-error>
                            </div>



                            <div class="form-group">
                                <label> Title <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.title" class="form-control" placeholder="Enter Title"
                                    :class="{ 'is-invalid': form.errors.has('title') }">
                                <has-error :form="form" field="title"></has-error>
                            </div>



                            <div class="form-group">
                                <label> Description <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.description" class="form-control"
                                    placeholder="Enter Description"
                                    :class="{ 'is-invalid': form.errors.has('description') }">
                                <has-error :form="form" field="description"></has-error>
                            </div>



                            <div class="form-group">
                                <label> ButtonName <i class="fa fa-star text-danger text-10 cursor-pointer"
                                        title="Mendatory Field" data-placement="top" data-toggle="tooltip"
                                        data-original-title="Mendatory Field"></i></label>
                                <input type="text" v-model="form.buttonName" class="form-control"
                                    placeholder="Enter ButtonName"
                                    :class="{ 'is-invalid': form.errors.has('buttonName') }">
                                <has-error :form="form" field="buttonName"></has-error>
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
                            <th>Image</th>
                            <th>Small Quote</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Button Name</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(singleList, index) in serviceInfoLists " :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ singleList.image }}</td>
                            <td>{{ singleList.smallQuote }}</td>
                            <td>{{ singleList.title }}</td>
                            <td>{{ singleList.description }}</td>
                            <td>{{ singleList.buttonName }}</td>

                            <td>

                                <span>
                                    <button @click.prevent="
                                        serviceInfoDelete(
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
                image: '',
                smallQuote: '',
                title: '',
                description: '',
                buttonName: '',
            }),
            loading: false,
            serviceInfoLists: [],
        };
    },
    mounted() {
        this.serviceInfoShow();
    },
    methods: {

        serviceInfoEntry() {

            this.form.post("serviceInfo").then((response) => {
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

                    this.serviceInfoShow();
                }
            });
        },

        serviceInfoShow() {

            this.form.get("/serviceInfo").then((res) => {
                this.serviceInfoLists = res.data.data;
            });

        },

        serviceInfoDelete($id) {
            axios.delete("/serviceInfo/" + $id).then((res) => {
                Toast.fire({
                    icon: "success",
                    title: "Data Deleted  successfully",
                });
                this.serviceInfoShow();
            });
        },


    }
};
</script>
