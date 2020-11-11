<template>
    <div class="form-language">

        <div class="row">
          <h4>{{TextOption}}</h4>
          <Checkbox
            @click="(c) => handleLanguageSelect(0, c)"
            :active="languages === 0"
          />
        </div>
        <!-- <div class="row">
          <h4>
            3 months ($5.00)
          </h4>
          <Checkbox
            @click="(c) => handleLanguageSelect(1, c)"
            :active="languages === 1"
          />
        </div> -->
        <!-- <div class="row">
          <h4>
            6 months ($7.00)
          </h4>
          <Checkbox
            @click="(c) => handleLanguageSelect(2, c)"
            :active="languages === 2"
          />
        </div> -->

      </div>
</template>

<script>
import Checkbox from "../../components/atoms/Checkbox"

export default {
  name: "ModalLanguages",
  components: {
    Checkbox,
  },
  data() {
    return {
      languages: ""
    };
  },
  props: ['TextOption'],
  methods: {

    handleLanguageSelect(i, s) {
      if (s) {
        this.languages = i;
      } else {
        this.languages = undefined;
      }
    },

  },
};
</script>

<style lang="sass" scoped>
.form-language
  padding: 0 10px
  width: 100%
  box-sizing: border-box
  .apply-button
    border: 1px solid #a0a1a2
    border-radius: 24px
  h2
    font-size: 24px
    margin: 0
    margin-bottom: 28px
  .row
    display: flex
    justify-content: space-between
    margin-bottom: 16px
    font-weight: bold
    h4
      font-size: 14px
      font-weight: bold
      color: #000000
</style>