<template id="">
  <span>
  

    <div class="card">
      <div class="card-header-tab card-header alert-info">
        <div
          class="
            card-header-title
            font-size-lg
            text-capitalize
            font-weight-normal
          "
        >
          <i class="header-icon lnr-pencil icon-gradient bg-premium-dark"></i>
          <h4> Form Design</h4>
        </div>
      </div>

      <form @submit.prevent="create()">
        <div class="supplier-entry py-4 px-2 comm-form-back-img">
          <div
            class="
              col-lg-7
              px-lg-5
              col-sm-8
              offset-sm-2
              col-12
              supplier-border
              comm-form-box-back-color
            "
          >
            
            <div class="form-group">
              <label>
                Type
                <i
                  class="fa fa-star text-danger text-10 cursor-pointer"
                  title="Mendatory Field"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Mendatory Field"
                ></i
              ></label>

              <select
                type="text"
                v-model="form.type"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('type') }"
              >
                <option value="1">Form Variable</option>
                <option value="2">Table Variable</option>
                <option value="3">Migration / Controller </option>
                <option value="4"> Controller Insert Function </option>
              </select>
              <has-error :form="form" field="type"></has-error>
            </div>

            <div class="form-group">
              <label>
                Variable List (var,var,var,var,...........)<i
                  class="fa fa-star text-danger text-10 cursor-pointer"
                  title="Mendatory Field"
                  data-placement="top"
                  data-toggle="tooltip"
                  data-original-title="Mendatory Field"
                ></i
              ></label>

              <textarea
                @keyup="textchange()"
                v-model="form.variableList"
                class="form-control"
                :class="{ 'is-invalid': form.errors.has('variableList') }"
              ></textarea>
              <has-error :form="form" field="variableList"></has-error>
            </div>
          </div>
        </div>

        <!-- -----------------------------   card footer  -->

        <div class="d-block pt-3 pb-4 card-footer overflow-hidden">
          <div class="col-lg-7 px-lg-5 col-sm-8 offset-sm-2 col-12">
            <button
              type="reset"
              class="
                btn-pill btn-shadow btn-wide
                fsize-1
                btn btn-outline-danger btn-lg
                float-left
              "
            >
              <span class="mr-2 opacity-7">
                <i class="fa fa-undo"></i>
              </span>
              <span class="mr-1"> Clear </span>
            </button>

            <button
              :disabled="loading"
              type="submit"
              class="
                btn-pill btn-shadow btn-wide
                fsize-1
                btn btn-primary btn-lg
                float-right
              "
            >
              <span class="mr-2 opacity-7">
                <i class="fa fa-paper-plane"></i>
              </span>
              <span class="mr-1"> Add New Entry </span>
              <div v-if="loading == true" class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </div>
        </div>

        <!-- -----------------------------   // card footer  -->
      </form>
    </div>

    <div class="card mt-5">
      <div class="card-header-tab card-header alert-info">
        <h4>
          <i
            class="header-icon lnr-laptop-phone icon-gradient bg-premium-dark"
          ></i>
          View Information
        </h4>
      </div>

      <div class="card-body table-responsive bg-white">
        <pre class="code" v-html="showDataentry"></pre>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  data() {
    return {
      form: new Form({
        brandName: "",
        type: "1",
        variableList: "",
      }),
      showDataentry: {},
      loading: false,
    };
  },
  mounted() {},
  methods: {
      textchange(){
         
          this.form.variableList = this.form.variableList.replace(/(\r\n|\n|\r)/gm, "");
          this.form.variableList = this.form.variableList.trim();
      },
    create() {
      this.form.post("/formDesign").then((res) => {
        this.showDataentry = res.data.data;
      });
    },
    ShowDataList() {
      axios.get("/purchaseBrandEntry").then((res) => {
        this.showDataentry = res.data.showdata;
      });
    },
    changeStatus(id) {
      let uri = `purchaseBrandEntry/changeStatus/${id}`;
      axios.get(uri).then((response) => {
        Toast.fire({
          icon: "success",
          title: "Status Change Successfully",
        });
        this.ShowDataList();
      });
    },
    deleteBrandProduct($brandId) {
      axios.delete("/purchaseBrandEntry/" + $brandId).then((res) => {
        Toast.fire({
          icon: "success",
          title: "Deleted BrandEntry successfully",
        });
        this.ShowDataList();
      });
    },
   
  },
};
</script>
