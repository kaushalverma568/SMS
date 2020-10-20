<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="391px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn  class="sign__btn" v-bind="attrs" v-on="on"> Sing in </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Log in</span>
          <v-btn  text @click="dialog = false">
            <img :src="close" alt="close icon">
          </v-btn>

        </v-card-title>
        <v-card-text>

            <v-row>


              <form>
                <v-col  sm="12">
                <v-text-field
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  placeholder="Password"

                  hint="At least 8 characters"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  placeholder="Email"
                ></v-text-field>
              </v-col>
              <div class="wrap_button">
                 <v-btn class="" @click="submit"> Log in </v-btn>
                  <v-btn> Sign up </v-btn>
              </div>
              </form>
            </v-row>

        </v-card-text>

      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>
import { validationMixin } from "vuelidate"
import { required, maxLength, email } from "vuelidate/lib/validators"
import close from '../assets/close.svg'


export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    email: "",
    password: "",
    close: close,

    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match",
    },

    dialog: false,
    show1: false,
  }),

  computed: {
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },

    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
      this.dialog = false
    },
  },
};
</script>


<style lang="sass" >
.v-dialog
  width: 391px
  height: 410px
  border-radius: 27px !important
  border: 1px solid #979797
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.230769) !important
  background: #fff

  .v-sheet.v-card:not(.v-sheet--outlined)
    box-shadow: none
  .v-card__title
    position: relative
    .headline
      font-size: 24px
      font-weight: bold
    .v-btn
      position: absolute
      top: 9px
    .v-btn:not(.v-btn--round).v-size--default
      padding: 0
      bottom: 0
      right: 23px
      width: 28px !important
      min-width: 28px !important

      height: 28px !important
      background:  #E9E9EA
      border-radius: 14px

  form
    width: 100%
    .wrap_button
      display: flex
      flex-direction: column
      button
        background-color: transparent !important
        height: 46px !important
        border-radius: 24px
      button:nth-child(1)
        margin-bottom: 23px
        opacity: 0.5
        border: 1px solid #BDBEBF
      .sign_up_btn
        button
          border: none
          width: 100%
          &::before
            background-color: transparent !important
            // font-size: 100px
      .v-btn--contained
        box-shadow: none



.sign__btn
  background-color: transparent !important
  margin-top: 20px
.v-btn--contained
  box-shadow: none !important
  &::before
    background-color: transparent !important
</style>