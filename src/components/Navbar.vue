<template>
  <fragment>
    <nav>
      <div class="header-text">
        <router-link :to="'/'">
          <h3>Where in the world?</h3>
        </router-link>
      </div>
      <div class="toggle-btn">
        <i class="material-icons-round">brightness_2</i>
        <p>Dark Mode</p>
      </div>
    </nav>
  </fragment>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="scss" scoped>
nav {
  background: var(--white);
  padding: 2em 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9999;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    padding: 1.5em;
  }
  .header-text {
    a {
      text-decoration: none;
      color: var(--very-dark-blue);
      h3 {
        font-weight: 800;
      }
    }
  }
  .toggle-btn {
    display: flex;
    align-items: center;
    p {
      margin-left: 1px;
    }
  }
}
</style>
