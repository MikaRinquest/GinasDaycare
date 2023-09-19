<template>
  <div class="vision">
    <h2>Our Vision</h2>
    <div class="p-holder1">
      <p class="text">
        Every child need to be cared by a family with LOVE, RESPECT &
        SECURITY.We visualise this role.
      </p>
      <img src="https://i.postimg.cc/zX7m6qbZ/Pic-1.jpg" class="image" />
    </div>
  </div>
  <div class="mission">
    <div class="p-holder2">
      <h2>Our Mission</h2>
      <p class="text">
        At Ginas Day-Educare we build children from different backgrounds,
        especially those in need. We help them to be disciplined, confident to
        shape their own future and be part of their community development.
      </p>
      <img src="https://i.postimg.cc/c40yFvJB/Pic-2.jpg" class="image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image {
  width: 35%;
  transform: rotate(-5deg);
}

.p-holder1,
.p-holder2 {
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-bottom: 4%;
}

.p-holder2 {
  flex-direction: row-reverse;
}

.text {
  max-width: 300px;
}

p + img:nth-child(2) {
  transform: rotate(5deg);
}
</style>
