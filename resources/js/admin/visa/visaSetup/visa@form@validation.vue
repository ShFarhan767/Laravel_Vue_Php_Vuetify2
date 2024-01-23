<template>
    <v-app>
        <div class="card main-card  element-block-example">
            <div class="card-header">
                <h3>
                    <v-icon class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo">mdi-pencil-outline</v-icon>
                    Create A New Account
                </h3>

                <div class="btn-actions-pane-right text-capitalize">
                    <router-link to="/visa@type@entry"> 
                        <v-btn
                            elevation="2"
                            outlined
                            rounded
                            small
                            color="primary"
                        >Back
                        </v-btn>
                    </router-link>
                <!-- <router-link to="/visa@type@entry" class="btn-wide btn-outline-2x mr-md-2 btn btn-primary btn-sm"
                >  Back </router-link> -->
              </div>
                
            </div>

            <div class="bg-white p-3">
                <v-container>
                    <v-form ref="form" v-model="form" class="pa-4 pt-6">
                        <v-row class="custom-row">
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="firstname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="First name"
                                    required
                                    outlined
                                    filled
                                    dense
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="lastname"
                                    :rules="nameRules"
                                    :counter="10"
                                    label="Last name"
                                    required
                                    outlined
                                    filled
                                    dense
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row class="custom-row">
                            <v-col cols="12" md="6">
                            <v-text-field
                                v-model="email"
                                :rules="[rules.email]"
                                filled
                                outlined
                                dense  
                                color="deep-purple"
                                label="Email Address"
                                type="email"
                            ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="confirmEmail"
                                    :rules="[rules.confirmEmail]"
                                    filled
                                    outlined
                                    dense  
                                    color="deep-purple"
                                    label="Confirm Email"
                                    type="email"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row class="custom-row">
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="password"
                                    :rules="[rules.password, rules.length(8)]"
                                    filled
                                    outlined
                                    dense  
                                    color="deep-purple"
                                    label="Password"
                                    style="min-height: 96px"
                                    type="password"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="confirmPassword"
                                    :rules="[rules.confirmPassword, rules.length(8), rules.matchPassword]"
                                    filled
                                    outlined
                                    dense  
                                    color="deep-purple"
                                    label="Confirm Password"
                                    style="min-height: 96px"
                                    type="password"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row class="custom-row">
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formattedPhone"
                                    label="Phone number"
                                    required
                                    outlined
                                    dense
                                    filled
                                    :rules="[rules.validPhoneNumber]"
                                    @input="formatPhoneNumber"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-combobox
                                    v-model="select"
                                    :items="items"
                                    label="Gender"
                                    multiple
                                    filled
                                    outlined
                                    dense  
                                    color="deep-purple"
                                ></v-combobox>
                            </v-col>

                            <v-col cols="12" md="3">
                                <v-menu
                                    ref="menu1"
                                    v-model="menu1"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="auto"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="dateFormatted"
                                            label="Date"
                                            filled
                                            outlined
                                            dense
                                            persistent-hint
                                            color="deep-purple"
                                            prepend-icon="mdi-calendar"
                                            v-bind="attrs"
                                            @blur="date = parseDate(dateFormatted)"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date"
                                        no-title
                                        @input="menu1 = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="4">
                                <v-label for="country" class="ma-2">
                                    Country
                                </v-label>
                                <v-btn class="ma-2" color="primary" dark    x-small @click="openCountryModal">
                                    <v-icon dark x-small>
                                        mdi-pencil-outline
                                    </v-icon>
                                </v-btn>
                                <v-select
                                    id="country"
                                    v-model="selectedCountry"
                                    :items="items1"
                                    label="Country"
                                    color="deep-purple"
                                    outlined
                                    filled
                                    dense
                                ></v-select>

                                <v-dialog v-model="countryModal" max-width="500">
                                    <v-card>
                                        <v-card-title>
                                        <span class="headline">{{ editingCountry ? 'Edit' : 'Add' }} Country</span>
                                        </v-card-title>
                                        <v-card-text class="Text">
                                        <!-- Form for adding/editing country -->
                                        <v-text-field v-model="countryName" label="Country Name" filled outlined dense color="deep-purple"></v-text-field>
                                        </v-card-text>
                                        <v-card-actions>
                                        <v-btn
                                            @click="saveCountry" 
                                            class="ma-2"
                                            color="primary"
                                            dark
                                            small
                                        >
                                            Save
                                            <v-icon
                                                dark
                                                right
                                            >
                                                mdi-check-circle
                                            </v-icon>
                                        </v-btn>
                                        <v-btn
                                            @click="closeCountryModal"
                                            class="ma-2"
                                            color="red"
                                            dark
                                            small
                                        >
                                            Close
                                            <v-icon
                                                dark
                                                right
                                            >
                                                mdi-cancel
                                            </v-icon>
                                        </v-btn>
                                        </v-card-actions>

                                        <div class="countryNames">
                                            <h4>Country Names</h4>
                                                <v-simple-table v-if="items1.length > 0">
                                                <template v-slot:default>
                                                    <tbody>
                                                    <tr v-for="(country, index) in items1" :key="index">
                                                        <td class="Names">{{ country }}</td>
                                                        <td>
                                                            <v-btn @click="deleteCountry(index)" color="error" small>
                                                                <v-icon>mdi-delete</v-icon>
                                                            </v-btn>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                        </div>
                                    </v-card>
                                </v-dialog>


                            </v-col>

                            <v-col cols="12" md="4">
                                <v-label for="city" class="ma-2">
                                    City
                                </v-label>
                                <v-btn class="ma-2" color="primary" dark x-small>
                                    <v-icon dark x-small>
                                        mdi-pencil-outline
                                    </v-icon>
                                </v-btn>
                                <v-select
                                    id="city"
                                    v-model="selectedCity"
                                    :items="items2"
                                    label="City"
                                    color="deep-purple"
                                    outlined
                                    filled
                                    dense
                                ></v-select>
                            </v-col>

                            <v-col cols="12" md="4">
                                <v-label for="Salary" class="ma-2">
                                    Salary
                                </v-label>
                                <v-btn class="ma-2" color="primary" dark x-small>
                                    <v-icon dark x-small>
                                        mdi-pencil-outline
                                    </v-icon>
                                </v-btn>
                                <v-text-field
                                    ref="salary"
                                    v-model="formattedSalary"
                                    label="Salary"
                                    required
                                    placeholder="10,000"
                                    outlined
                                    dense
                                    filled
                                    :rules="[rules.onlyNumbers]"
                                    @input="formatSalary"
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col cols="12" md="12">
                                <v-textarea
                                    v-model="bio"
                                    name="input-7-1"
                                    filled
                                    outlined
                                    dense  
                                    label="Bio"
                                    auto-grow
                                    rows="4"
                                    color="deep-purple"
                                    :counter="300"
                                    :maxlength="300"
                                ></v-textarea>
                            </v-col>
                        </v-row>

                        <v-checkbox
                            v-model="agreement"
                            :rules="[rules.required]"
                            color="deep-purple"
                        >
                            <template v-slot:label>
                            I agree to the&nbsp;
                            <a
                                href="#"
                                @click.stop.prevent="dialog = true"
                            >Terms of Service</a>
                            &nbsp;and&nbsp;
                            <a
                                href="#"
                                @click.stop.prevent="dialog = true"
                            >Privacy Policy</a>*
                            </template>
                        </v-checkbox>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-btn
                                text
                                @click="$refs.form.reset()"
                            >
                                Clear
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn
                                :disabled="!form"
                                :loading="isLoading"
                                class="white--text"
                                color="deep-purple accent-4"
                                depressed
                                @click.stop="dialog = true"
                            >
                                Submit
                            </v-btn>
                                <v-dialog v-model="dialog" max-width="290" class="bg-white">
                                    <v-card-title class="text-h5">
                                       <v-btn
                                            class="mx-2"
                                            fab
                                            dark
                                            small
                                            color="primary"
                                            >
                                            <v-icon dark>
                                                mdi-check-outline
                                            </v-icon>
                                        </v-btn>
                                        Registration Sucessfully
                                    </v-card-title>
                                </v-dialog>
                        </v-card-actions>
                    </v-form>
                </v-container>
            </div>
        </div>

        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <template>
                        <v-card color="basil">
                            <v-card-title class="text-center justify-center py-6">
                            <h1 class="font-weight-bold text-h2 basil--text">
                                BASiL
                            </h1>
                            </v-card-title>

                            <v-tabs
                                v-model="tab"
                                background-color="transparent"
                                color="green darken-2"
                                grow

                                >
                                <v-tab
                                    v-for="item in items"
                                    :key="item"
                                >
                                    {{ item }}
                                </v-tab>
                            </v-tabs>

                            <v-tabs-items v-model="tab">
                                <v-tab-item
                                    v-for="item in items"
                                    :key="item"
                                >
                                    <v-card
                                    color="basil"
                                    flat
                                    >
                                    <v-card-text>{{ text }}</v-card-text>
                                    </v-card>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-card>
                    </template>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<style scoped>

.custom-row {
  height: 90px; /* Set your desired height */
}
.countryNames{
    width: 90%;
    margin-left: 25px;
    padding-bottom: 25px;
}
.Names{
    background-color: #e9e9e9;
}
.Text{
    height: 60px;
}
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
<script>
export default {
    data() {
        const currentDate = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
        return {
            date: '',
            dateFormatted: this.formatDate(''),
            menu1: false,
            menu2: false,
            agreement: false,
            bio: 'Discribe us about yourself',
            dialog: false,
            email: undefined,
            confirmEmail: undefined,
            form: false,
            isLoading: false,
            dialog: false,
            password: '',
            confirmPassword: '',
            formattedPhone: '(+)',
            formattedSalary: '',
            valid: false,
            firstname: '',
            lastname: '',
            country: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            countryRules: [
                v => !!v || 'This field is required',
                v => v.length <= 20 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            confirmEmail: '',
            confirmEmailRules: [
                v => (v === this.email) || 'Emails should match',
            ],
            select: [],
            items: [
                'Male',
                'Female',
                'Custom'
            ],
            items1: ['Bangladesh', 'Palestine', 'Iran'],
            selectedCountry: '',
            countryModal: false,
            editingCountry: false,
            countryName: '',

            items2: ['Dhaka', 'California', 'Ley Ladak'],
            selectedCity: '',
            // cityModal: false,
            // editingCity: false,
            // cityName: '',
            cityName: '',
            
            email: '',
            confirmEmail: '',
            rules: {
                email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
                confirmEmail: v => (v === this.email) || 'Emails should match',
                length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
                password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
                    'Password must contain an upper case letter, a numeric character, and a special character',
                confirmPassword: [
                    v => !!v || 'Confirm Password is required',
                ],
                matchPassword: v => v === this.password || 'Passwords do not match',
                onlyNumbers: value => /^[0-9,]+$/.test(value) || 'Only numbers are allowed',
                validPhoneNumber: value => /^\(\+\d{3}\) \d{4} \d{4} \d{2}$/.test(value) || 'Invalid phone number',
                required: v => !!v || 'This field is required',
            },
            // ... other properties
            tab: null,
            items: [
                'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            
        };
    },

    mounted() {
        // Load countries from local storage when the component is mounted
        const storedCountries = localStorage.getItem('countries');
        this.items1 = storedCountries ? JSON.parse(storedCountries) : [];
    },
    // mounted() {
    //     // Load countries from local storage when the component is mounted
    //     const storedCity = localStorage.getItem('cities');
    //     this.items2 = storedCity ? JSON.parse(storedCity) : [];
    // },

    methods: {
        openCountryModal() {
            this.countryName = '';
            this.editingCountry = false;
            this.countryModal = true;
        },
        closeCountryModal() {
            this.countryModal = false;
        },
        saveCountry() {
            if (this.editingCountry) {
                // Update logic
                // ...
            } else {
                this.items1.push(this.countryName);
                // Save the updated list to local storage
                localStorage.setItem('countries', JSON.stringify(this.items1));
            }
            this.closeCountryModal();
        },
        deleteCountry(index) {
            // Implement delete logic
            this.items1.splice(index, 1);
            // Save the updated list to local storage
            localStorage.setItem('countries', JSON.stringify(this.items1));
        },

        formatDate(date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${month}/${day}/${year}`
        },
        parseDate(date) {
            if (!date) return null

            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        formatPhoneNumber() {
            // Extract only numeric characters from the input
            const numericValue = this.formattedPhone.replace(/\D/g, '');

            // Add "(+)" if the input is empty
            const countryCode = numericValue.length === 0 ? '(+)' : `(+${numericValue.slice(0, 3)})`;

            // Apply the desired format
            this.formattedPhone = `${countryCode} ${numericValue.slice(3, 7)} ${numericValue.slice(7, 11)} ${numericValue.slice(11, 13)}`;
        },
        formatSalary() {
            // Extract only numeric characters from the input
            const numericValue = this.formattedSalary.replace(/\D/g, '');

            // Apply comma formatting to the numeric value
            this.formattedSalary = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
    },

    watch: {
        date(val) {
            this.dateFormatted = this.formatDate(this.date)
        },
    },

    computed: {
        computedDateFormatted() {
            return this.formatDate(this.date)
        },
    },
}
</script>