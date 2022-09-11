<template>
  <div class="container">
    <b-row v-if="catDisplay.persian || catDisplay.burmese || catDisplay.scottish || catDisplay.maine">
      <b-col>
        <md-card v-if="catDisplay.burmese">
          <md-card-header>
            <md-avatar>
              <img
                src="https://www.freeiconspng.com/thumbs/cat-png/baby-cat-png-12.png"
                alt="Avatar"
              />
            </md-avatar>

            <div class="md-title">Burmese Cat</div>
            <div class="md-subhead">
              <b>Alternative Names:</b> American Burmese, British Burmese
            </div>
          </md-card-header>

          <md-card-media>
            <img
              src="https://www.petsworld.in/blog/wp-content/uploads/2014/07/Burmese-Cat.jpg"
              alt="Burmese Cat"
            />
          </md-card-media>

          <md-card-content class="text-left">
            <div><b>Origin:</b> Thailand</div>
            <div>
              <b>Description:</b> Appears in 2 forms - American and British. The
              British ones are slender and have a long body while the American
              ones are broader and shorter with a flat muzzle.
            </div>
            <div><b>Average Lifespan:</b> 10-17 Years</div>
          </md-card-content>

          <md-card-actions>
            <md-button @click="removeCatCard('burmese')">Remove</md-button>
          </md-card-actions>
        </md-card>
      </b-col>
      <b-col
        ><md-card v-if="catDisplay.persian">
          <md-card-media>
            <img
              src="https://www.petsworld.in/blog/wp-content/uploads/2014/07/persian-cat.jpg"
              alt="Persian Cat"
            />
          </md-card-media>

          <md-card-header>
            <div class="md-title">Persian Cat</div>
            <div class="md-subhead">
              <b>Alternative Names:</b> Longhair or Persian Longhair
            </div>
          </md-card-header>

          <md-card-actions>
            <md-button @click="removeCatCard('persian')">Remove</md-button>
          </md-card-actions>

          <md-card-content class="text-left">
            <div><b>Origin:</b> Iran Breed</div>
            <div>
              <b>Description:</b> Long haired breed of cat that has a short
              round face with a wide head. It has a thick coat , large eyes and
              a shortened muzzle.
            </div>
            <div><b>Average Lifespan:</b> 12-17 Years</div>
          </md-card-content>
        </md-card>
      </b-col>
      <b-col
        ><md-card v-if="catDisplay.scottish">
          <md-card-area>
            <md-card-media>
              <img
                src="https://www.petsworld.in/blog/wp-content/uploads/2014/07/Scottish-Fold.jpg"
                alt="Scottish Fold"
              />
            </md-card-media>

            <md-card-header>
              <div class="md-title">Scottish Fold</div>
              <div class="md-subhead">
                <b>Alternative Names:</b> Scot Fold, Lops, Folds
              </div>
            </md-card-header>

            <md-card-content class="text-left">
              <div><b>Origin:</b> Scotland</div>
              <div>
                <b>Description:</b> It is a medium sized cat weighing 4-6 kg.
                The coat can be long-haired or short-haired and ears can be
                normal or folded.
              </div>
              <div><b>Average Lifespan:</b> 11- 15 Years</div>
            </md-card-content>
          </md-card-area>

          <md-card-actions md-alignment="left">
            <md-button @click="removeCatCard('scottish')">Remove</md-button>
          </md-card-actions>
        </md-card>
      </b-col>
      <b-col
        ><div class="card-expansion">
          <md-card v-if="catDisplay.maine">
            <md-card-media>
              <img
                src="https://www.petsworld.in/blog/wp-content/uploads/2014/07/Maine-Coon.jpg"
                alt="Maine Coon"
              />
            </md-card-media>

            <md-card-header>
              <div class="md-title">Maine Coon</div>
              <div class="md-subhead">
                <b>Alternative Names:</b> American Burmese, British Burmese
              </div>
            </md-card-header>

            <md-card-expand>
              <md-card-actions md-alignment="space-between">
                <div>
                  <md-button @click="removeCatCard('maine')">Remove</md-button>
                </div>

                <md-card-expand-trigger>
                  <md-button class="md-icon-button">
                    <b-icon icon="arrow-down"></b-icon>
                  </md-button>
                </md-card-expand-trigger>
              </md-card-actions>

              <md-card-expand-content>
                <md-card-content class="text-left">
                  <div><b>Origin:</b> USA</div>
                  <div>
                    <b>Description:</b> These are the largest breeds of domestic
                    cats with soft and silky coat. They are easy to train and
                    are a loyal breed.
                  </div>
                  <div><b>Average Lifespan:</b> 12-15 Years</div>
                </md-card-content>
              </md-card-expand-content>
            </md-card-expand>
          </md-card>
        </div>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col><h1>No cards to show!</h1></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "CardsPage",
  data() {
    return {
      catDisplay: {
        persian: true,
        burmese: true,
        scottish: true,
        maine: true,
      },
    };
  },
  watch: {
    catDisplay: {
        handler() {
            this.showEmptyMessage();
        },
        deep: true
    }
  },
  methods: {
    removeCatCard(name) {
      switch (name) {
        case "persian":
          this.catDisplay.persian = false;
          break;
        case "burmese":
          this.catDisplay.burmese = false;
          break;
        case "scottish":
          this.catDisplay.scottish = false;
          break;
        case "maine":
          this.catDisplay.maine = false;
          break;
      }
    },
    showEmptyMessage() {
      if (
        this.catDisplay.persian ||
        this.catDisplay.burmese ||
        this.catDisplay.scottish ||
        this.catDisplay.maine
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>