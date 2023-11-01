<template>
  <div class="footer">
    <span class="copyright-holder">
      <fa :icon="['fas', 'copyright']" class="icon" />
      <p class="copyright">2023 Gina's Daycare</p>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #acac9a;
  height: 3vh;
  display: flex;
}

.copyright-holder {
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
}

.icon {
  width: 25px;
  aspect-ratio: 1/1;
}

.copyright {
  padding-left: 15px;
}
</style>
