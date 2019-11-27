<template>
  <fragment>
    <Navbar />

    <main>
      <div class="back-button-wrapper">
        <button class="back-button" @click="goBack">
          <i class="material-icons-round">arrow_back</i>
          <strong>Back</strong>
        </button>
      </div>

      <!-- Country Details -->

      <!-- <p>{{country}}</p> -->

      <div class="country" v-for="item in country" :key="item.name">
        <div class="country-flag">
          <img :src="item.flag" :alt="item.name" />
        </div>

        <div class="country-content">
          <div class="country-name">
            <h1>{{ item.name }}</h1>
          </div>

          <div class="country-details">
            <ul>
              <li>
                <h4>
                  Native Name:
                  <span class="light-text">{{ item.nativeName }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Population:
                  <span class="light-text">{{ item.population }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Region:
                  <span class="light-text">{{ item.region }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Sub Region:
                  <span class="light-text">{{ item.subregion }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Capital:
                  <span class="light-text">{{ item.capital }}</span>
                </h4>
              </li>
            </ul>
          </div>

          <div class="country-details">
            <ul>
              <li>
                <h4>
                  Top Level Domain:
                  <span class="light-text">{{ item.topLevelDomain.toString() }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Currency:
                  <span class="light-text">
                    {{ item.currencies[0].name }}(
                    {{ item.currencies[0].code }})
                  </span>
                </h4>
              </li>

              <li>
                <h4>
                  Languages:
                  <span class="light-text">{{ item.languages[0] }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Time Zone:
                  <span class="light-text">{{ item.timezones.toString() }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Calling Code:
                  <span class="light-text">{{ item.callingCodes.toString() }}</span>
                </h4>
              </li>

              <li>
                <h4>
                  Alpha Code:
                  <span class="light-text">{{ item.alpha3Code.toString() }}</span>
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="details">
        <code>
          Developed with ❤️ by
          <a href="https://github.com/kelvinblaze">Ifeanyi Kelvin Ossai</a>
        </code>
      </div>
    </main>
  </fragment>
</template>

<script>
import axios from "axios";

export default {
  name: "about",
  data() {
    return {
      country: null
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let countryName = this.$route.params.query;

    axios
      .get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
      .then(response => (this.country = response.data));
  }
};
</script>

<style lang="scss" scoped>
.details {
  text-align: center;
  background: var(--dark-blue);
  color: var(--white);
  padding: 1em;

  a {
    color: white;
    font-weight: bold;
  }
}
main {
  padding: 16px;
  background: var(--very-light-gray);
}
.back-button-wrapper {
  .back-button {
    display: flex;
    align-items: center;
    padding: 1em;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: var(--white);
    border: none;
    cursor: pointer;
    outline: none;
    strong {
      margin-left: 8px;
    }
  }
}

.country,
.country-content,
.country-details {
  margin: 24px 0;
}

.country-content {
  @media (min-width: 900px) {
    margin: 0;
  }
}

.country {
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
}
.country-flag {
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
}

.country-content {
  .country-details {
    ul {
      list-style: none;
      li {
        margin-bottom: 8px;
      }
    }
  }
}
</style>
