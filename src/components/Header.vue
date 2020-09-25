<template>
  <div class="header">
    <div class="header-content">
      <router-link to="/">
        <img alt="Website logo" src="../assets/logo.svg" />
      </router-link>
      <div class="header-right-side">
        <section>
          <router-link to="/consultation">
            <Button>
              <img alt="consultation icon" src="../assets/consultation.svg" />
              Consultation
            </Button>
          </router-link>
          <router-link to="/chat">
            <img alt="consultation icon" src="../assets/chat.svg" />
          </router-link>
        </section>

        <section>
          <Badge active>
            <img alt="consultation icon" src="../assets/notification.svg" />
          </Badge>
          <Button circle>
            <img alt="consultation icon" src="../assets/account.svg" />
          </Button>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./atoms/Button";
import Badge from "./atoms/Badge";

export default {
  name: "Header",
  components: {
    Button,
    Badge,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0px -4px 36px rgba(0, 0, 0, 0.129753);
  background: white;
  z-index: 999;

  a {
    img {
      opacity: 0.8;
    }

    &:hover {
     img {
      opacity: 1;
    }
    }
  }

  .header-content {
    width: 100%;
    max-width: 979px;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-right-side {
      display: flex;
      justify-content: space-between;
      align-items: center;

      section {
        display: flex;
        align-items: center;
        &:first-child {
          margin-right: 120px;
        }

        > * {
          &:first-child {
            margin-right: 40px;
          }
        }
      }
    }
  }
}
</style>
