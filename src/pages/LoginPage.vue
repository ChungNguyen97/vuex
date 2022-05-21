<template>

  <div class="content" :style="{ backgroundImage: `url(${backgroundLogin})` }">
    <div class="login">
      <h2>Đăng nhập</h2>
      <form action="" class="form">
        <div class="form__group">
          <label for="username">Tên đăng nhập: </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Nhập tên đăng nhập của bạn..."
          />
        </div>
        <div class="form__group">
          <label for="password">Mật khẩu: </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Nhập tên mật khẩu của bạn..."
          />
        </div>
        <input type="submit" value="Đăng nhập" class="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import backgroundLogin from '@/assets/image/background_login.jpg';

export default {
  name: "LoginPage",
  data() {
    return {
        backgroundLogin
    };
  },
};
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height:100vh;
  display: flex;
}
.login {
  margin:auto;

  width: 550px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 24px 32px;
  box-shadow: 0 1px 5px red;
  background-color: #ecf0f1;
  h2 {
    text-align: center;
    text-transform: uppercase;
  }
  .form {
    &__group {
      display: flex;
      justify-content: space-between;
      margin: 12px 0 24px;
      align-items: center;
      label {
        width: 30%;
        font-weight: 700;
        font-size: 18px;
      }
      input {
        flex: 1;
        border:1px solid #be2edd;
        padding: 5px 12px;
        border-radius:5px;
        &:focus{
          border:none;
          outline:1px solid #e74c3c;
          background: #dff9fb;
        }
      }
    }
    input.submit {
      margin: 12px auto;
      display: block;
      padding: 8px 12px;
      background-color:#4834d4 ;
      color:#fff;
      border:none;
      border-radius:5px;
    }
  }
}
</style>