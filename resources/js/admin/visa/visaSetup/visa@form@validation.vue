<template>
    <v-app>
        <div class="card main-card  element-block-example">
            <div class="card-header">
                <h3>
                    <v-icon class="header-icon lnr-laptop-phone icon-gradient bg-happy-itmeo">mdi-pencil-outline</v-icon>
                    Create A New Account
                </h3>

                <div class="btn-actions-pane-right text-capitalize">
                    <v-btn @click="toggleDarkMode" color="primary" elevation="2" raised rounded small>
                        Dark Mode
                    </v-btn>  
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
                    <template>
                        <v-data-table
                            :headers="headers"
                            :items="desserts"
                            class="responsive-table sticky-header"
                            mobile-breakpoint="null"
                        >
                            <template v-slot:header.name="{ header }">
                            {{ header.text.toUpperCase() }}
                            </template>
                        </v-data-table>
                    </template>
                    
                    <template>
                        <v-data-table
                            :headers="headers1"
                            :items="desserts1"
                            class="Mobile"
                            fixed-header
                            height="500"
                            mobile-breakpoint="null"
                        >
                            <template v-slot:header.name="{ header }">
                            {{ header.text.toUpperCase() }}
                            </template>
                        </v-data-table>
                    </template>
                </v-container>
            </div>
        </div>

    </v-app>
</template>

<style scoped>
.responsive-table /deep/ .sticky-header {
    position: sticky;
    top: 0px;
}
.responsive-table /deep/ .v-data-table__wrapper {
    overflow: unset;
}
.responsive-table /deep/ .sticky-header {
    position: sticky;
    top: 60px;
    z-index: 1;
}
.Mobile{
    display: none;
}
.responsive-table {
    width: 100%; /* Use 100% width by default */
    display: block;
}
@media screen and (max-width: 550px) {
    .responsive-table {
        display: none;
    }
    .Mobile{
        display: block;
        
        width: auto; /* Allow the table to expand beyond the viewport width */
    }
}
</style>
<script>
export default {
    data: () => ({
        headers: [
            {
                text: 'Dessert (100g serving)',
                align: 'start',
                value: 'name',
                class: 'sticky-header grey lighten-3',
            },
            { text: 'Calories', value: 'calories', class: 'sticky-header grey lighten-3',},
            { text: 'Fat (g)', value: 'fat', class: 'sticky-header grey lighten-3',},
            { text: 'Carbs (g)', value: 'carbs', class: 'sticky-header grey lighten-3',},
            { text: 'Protein (g)', value: 'protein', class: 'sticky-header grey lighten-3',},
            { text: 'Iron (%)', value: 'iron', class: 'sticky-header grey lighten-3',},
        ],
        desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: 1,
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: 1,
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: 7,
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: 8,
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: 16,
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: 0,
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: 2,
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: 45,
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: 22,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
        ],
        headers1: [
            {
                text: 'Dessert (100g serving)',
                align: 'start',
                value: 'name',
                class: 'sticky-header grey lighten-3',
            },
            { text: 'Calories', value: 'calories', class: 'sticky-header grey lighten-3',},
            { text: 'Fat (g)', value: 'fat', class: 'sticky-header grey lighten-3',},
            { text: 'Carbs (g)', value: 'carbs', class: 'sticky-header grey lighten-3',},
            { text: 'Protein (g)', value: 'protein', class: 'sticky-header grey lighten-3',},
            { text: 'Iron (%)', value: 'iron', class: 'sticky-header grey lighten-3',},
        ],
        desserts1: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: 1,
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: 1,
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: 7,
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: 8,
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: 16,
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: 0,
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: 2,
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: 45,
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: 22,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
        ],
    }),
}
</script>