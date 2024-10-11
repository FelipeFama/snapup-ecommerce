<script setup lang="ts"></script>

<template>
  <header class="header text-white">
    <div class="container">
      <div class="header-cnt">
        <div class="header-cnt-top fs-13 py-2 d-flex align-items-center justify-content-between">
          <div class="header-cnt-top-l">
            <ul class="d-flex top-links align-items-center">
              <li>
                <!-- Dummy links -->
                <router-link to="/seller">Seller Center</router-link>
              </li>
              <li class="vert-line"></li>
              <li>
                <!-- Dummy links -->
                <router-link to="/download">Download</router-link>
              </li>
              <li class="vert-line"></li>
              <li class="d-flex align-items-center">
                <span class="fs-13">Follow us on</span>
                <ul class="social-links d-flex align-items-center">
                  <li class="mx-2">
                    <a href="https://www.facebook.com" class="fs-15">
                      <i class="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li class="mx-2">
                    <a href="https://www.instagram.com" class="fs-15">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="header-cnt-top-r">
            <ul class="top-links d-flex align-items-center">
              <li>
                <router-link to="/" class="top-link-itm">
                  <span class="top-link-itm-ico mx-2">
                    <i class="fa-solid fa-circle-question"></i>
                  </span>
                  <span class="top-link-itm-txt">Support</span>
                </router-link>
              </li>
              <li class="vert-line"></li>
              <li>
                <router-link to="/">
                  <span class="top-link-itm-txt">Register</span>
                </router-link>
              </li>
              <li class="vert-line"></li>
              <li>
                <router-link to="/">
                  <span class="top-link-itm-txt">Log in</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="header-cnt-bottom">
          <Navbar />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.header {
  background: rgb(249, 78, 48);
  background: linear-gradient(180deg, rgba(249, 78, 48, 1) 0%, rgba(255, 100, 51, 1) 100%);

  .header-cnt-top {
    border-bottom: 1px solid lighten($clr-orange, 10%);
  }

  @media screen and (max-width: 992px) {
    .header-cnt-top {
      flex-direction: column;
      .header-cnt-top-l {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
