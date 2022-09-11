<template>
  <div class="container">
    <b-row>
      <b-col md="4"
        ><md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">Table</div>
              <div class="md-subhead">
                A table with sticky headers and first sticky column
              </div>
            </md-card-header-text>

            <md-card-media>
              <b-icon icon="table" variant="primary" font-scale="3"></b-icon>
            </md-card-media>
          </md-card-header>

          <md-card-content class="text-left"> Total Rows: {{totalRecords}} </md-card-content>

          <md-card-actions>
            <md-button @click="getTableData()">Fetch Data</md-button>
            <md-button @click="items = []">Clear Data</md-button>
          </md-card-actions>
        </md-card>
      </b-col>
      <b-col md="8">
        <b-table
          striped
          hover
          outlined
          sticky-header
          no-border-collapse
          show-empty
          :items="items"
          :fields="fields"
          :busy="isBusy"
          class="bg-white"
        >
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <br />
              <br />
              <i>Data loading from the API</i>
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      fields: [
        { key: "API", stickyColumn: true },
        "Description",
        "Auth",
        "HTTPS",
        "Cors",
        "Link",
        "Category",
      ],
      items: [],
      isBusy: false,
      totalItems: 0,
      currentPage: 1,
      perPage: 20,
      filterSearch: null,
    };
  },
  computed: {
    totalRecords() {
        const total = this.items.length;
        return total;
    }
  },
  methods: {
    async getTableData() {
      this.isBusy = true;
      const response = await fetch("https://api.publicapis.org/entries");
      const result = response.json();
      result
        .then((data) => {
          this.isBusy = false;
          this.items = data.entries;
          this.totalItems = data.count;
        })
        .catch((error) => {
          this.isBusy = false;
          alert(error.message);
          return [];
        });
    },
  },
};
</script>