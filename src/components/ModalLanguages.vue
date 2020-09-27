<template>
  <Modal>
    <ModalContent close="right" rounded @close="handleClose">
      <div class="form-language">
        <div class="header">
          <h2>Select language</h2>
        </div>
        <div class="row">
          Arabic
          <Checkbox
            @click="(c) => handleLanguageSelect(0, c)"
            :active="languages === 0"
          />
        </div>
        <div class="row">
          English
          <Checkbox
            @click="(c) => handleLanguageSelect(1, c)"
            :active="languages === 1"
          />
        </div>
        <div class="row">
          Spanish
          <Checkbox
            @click="(c) => handleLanguageSelect(2, c)"
            :active="languages === 2"
          />
        </div>
        <div class="apply-button">
          <Button big transparent fullWidth fullRounded>Apply</Button>
        </div>
      </div>
    </ModalContent>
  </Modal>
</template>

<script>
import Checkbox from "../components/atoms/Checkbox";
import Button from "../components/atoms/Button";
import Modal from "../components/atoms/Modal";
import ModalContent from "../components/atoms/ModalContent";

export default {
  name: "ModalLanguages",
  components: {
    Checkbox,
    Button,
    Modal,
    ModalContent,
  },
  data() {
    return {
      languages: 0,
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
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

<style lang="scss" scoped>
.form-language {
  padding: 24px;
  width: 391px;
  box-sizing: border-box;
  h2 {
    font-size: 24px;
    margin: 0;
    margin-bottom: 28px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    font-weight: bold;
  }
}
</style>