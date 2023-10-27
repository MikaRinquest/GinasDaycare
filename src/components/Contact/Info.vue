<template>
  <div class="contact-holder">
    <div id="icon-holder">
      <span class="span">
        <fa :icon="['fas', 'phone']" class="icon" />
        <p class="contact-info">073 283 6633</p>
      </span>
      <span class="span">
        <fa :icon="['fas', 'envelope']" class="icon" />
        <p class="contact-info">georginalukas1@gmail.com</p>
      </span>
      <span class="span">
        <fa :icon="['fas', 'clock']" class="icon" />
        <div class="op-holder">
          <p class="contact-info weekday">
            Operating hours: Mon - Thurs 06:30 - 17:15
          </p>
          <p class="contact-info">Operating hours: Fridays 06:30 - 16:00</p>
        </div>
      </span>
      <span class="span">
        <fa :icon="[fas, 'location-dot']" class="icon" />
        <p class="contact-info">Come find us</p>
      </span>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.6595071098363!2d18.723184975400372!3d-33.87266491925846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc536c01e2579b%3A0x8075589bd9bc99ba!2sGina%20DayCare!5e0!3m2!1sen!2sza!4v1695104469361!5m2!1sen!2sza"
        width="300"
        height="250"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        class="map"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#icon-holder {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;
}

.span {
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 20px;
  width: 250px;
}

.op-holder {
  display: flex;
  flex-direction: column;
}

.contact-info {
  padding-left: 25px;
}

.weekday {
  padding-bottom: 20px;
}

.icon {
  width: 25px;
  height: 25px;
}

.map-holder {
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 2%;
  padding-bottom: 2%;
}

/* Medium Devices */
@media only screen and (min-width: 600px) and (max-width: 1000px) {
  .map {
    align-self: center;
  }
}
/* Small devices */
@media only screen and (max-width: 600px) {
  .span {
    padding-top: 15px;
  }

  .contact-info {
    font-size: 15px;
  }

  .op-holder {
    flex-direction: column;
  }
  .map {
    align-self: center;
  }
}
</style>
