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
  margin-top: 2%;
}

.copyright-holder {
  display: inline-flex;
  align-items: center;
  margin-left: 10px;
}

.copyright {
  padding-left: 15px;
}
</style>
