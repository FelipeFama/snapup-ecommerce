<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

<template>
  <header className="header text-white">
    <nav className="container">
      <div className="header-cnt">
        <section className="header-cnt-top fs-13 py-2 flex align-center justify-between">
          <aside className="header-cnt-top-l">
            <ul className="flex top-links align-center">
              <li>
                <router-link to="/seller">Seller Center</router-link>
              </li>
              <li className="vert-line"></li>
              <li>
                <router-link to="/download">Download</router-link>
              </li>
              <li className="vert-line"></li>
              <li className="flex align-center">
                <span className="fs-13">Follow us on</span>
                <ul className="social-links flex align-center">
                  <li className="mx-2">
                    <a href="www.facebook.com" className="fs-15">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="www.instagram.com" className="fs-15">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>
          <aside className="header-cnt-top-r">
            <ul className="top-links flex align-center">
              <li>
                <router-link to="/" className="top-link-itm">
                  <span className="top-link-itm-ico mx-2">
                    <i className="bi bi-question-circle-fill"></i>
                  </span>
                  <span className="top-link-itm-txt">Support</span>
                </router-link>
              </li>
              <li className="vert-line"></li>
              <li>
                <router-link to="/">
                  <span className="top-link-itm-txt">Register</span>
                </router-link>
              </li>
              <li className="vert-line"></li>
              <li>
                <router-link to="/">
                  <span className="top-link-itm-txt">Log in</span>
                </router-link>
              </li>
            </ul>
          </aside>
        </section>

        <section className="header-cnt-bottom">
          <Navbar />
        </section>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.header {
  background: rgb(249, 78, 48);
  background: linear-gradient(180deg, rgba(249, 78, 48, 1) 0%, rgba(255, 100, 51, 1) 100%);

  .header-cnt-top {
    border-bottom: 1px solid adjust-color($clr-orange, $lightness: 10%);
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
