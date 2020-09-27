<template>
  <div class="profile">
    <h1>Profile</h1>
    <div
      class="profile-picture"
      style="
        background-image: url(https://www.figma.com/file/k4olwFa1E3KVbZyx0lJETm/image/dfbf9e395c49936d67dc888ded63307f72bd8b44);
      "
    />
    <div class="profile-infos">
      <div class="name-email">
        <div class="name">Sophia Alcocar</div>
        <div class="email">sophia.alcocar@gmail.com</div>
      </div>
      <div class="see-details">
          <Button transparent>Details</Button>
      </div>
    </div>

    <div class="profile-actions">
      <div class="row">
        <div class="col">
          <img src="../assets/ref.svg" class="action-icon" />
          Referal code
        </div>
        <div class="col">
          <img src="../assets/arrow-right.svg" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <img src="../assets/language.svg" class="action-icon" />
          Language
        </div>
        <div class="col">
          <img src="../assets/arrow-right.svg" />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <img src="../assets/settings.svg" class="action-icon" />
          Settings
        </div>
        <div class="col">
          <img src="../assets/arrow-right.svg" />
        </div>
      </div>

      <Button danger fullWidth big fullRounded>Log out</Button>
    </div>
  </div>
</template>

<script>
import Button from '../components/atoms/Button'
export default {
    name: 'Profile',
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 120px 0;
  width: 475px;
  margin: auto;

  h1 {
    font-size: 30px;
    color: #25282b;
    margin: 0 0 30px 0;
  }

  .profile-picture {
    position: relative;
    height: 138px;
    width: 138px;
    background-size: cover;
    border-radius: 23px;
    margin-bottom: 30px;
  }

  .profile-infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .name {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 16px;
    }
    .email {
      font-size: 16px;
    }
  }

  .profile-actions {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.147755);
    border-radius: 32px;
    padding: 24px;
    font-weight: 600;
    font-size: 18px;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      .col {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .action-icon {
      margin-right: 20px;
    }
  }
}
</style>