<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
/* Default variable colours */
:root {
  --dark-blue: hsl(209, 23%, 22%); /* Dark Mode Elements */
  --very-dark-blue: hsl(207, 26%, 17%); /* Dark Mode Background */
  --very-dark-blue-light: hsl(200, 15%, 8%); /* Light Mode Text */
  --dark-gray: hsl(0, 0%, 52%); /* Light Mode Input */
  --very-light-gray: hsl(0, 0%, 98%); /* Light Mode Background */
  --white: hsl(0, 0%, 100%); /* Dark Mode Text & Light Mode Elements  */
}

/* Global reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.light-text {
  font-weight: 300;
}
</style>
