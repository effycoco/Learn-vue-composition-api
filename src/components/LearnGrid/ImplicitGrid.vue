<template>
  <h2>Implicit Grid</h2>
  <div class="portfolio">
    <figure class="featured">
      <img src="@/assets/img/monkey.jpg" alt="monkey" />
      <figcaption>Monkey</figcaption>
    </figure>
    <figure>
      <img src="@/assets/img/eagle.jpg" alt="eagle" />
      <figcaption>Eagle</figcaption>
    </figure>

    <figure class="featured">
      <img src="@/assets/img/bird.jpg" alt="bird" />
      <figcaption>Bird</figcaption>
    </figure>
    <figure>
      <img src="@/assets/img/bear.jpg" alt="bear" />
      <figcaption>Bear</figcaption>
    </figure>
    <figure class="featured">
      <img src="@/assets/img/swan.jpg" alt="swan" />
      <figcaption>Swan</figcaption>
    </figure>

    <figure>
      <img src="@/assets/img/elephants.jpg" alt="elephants" />
      <figcaption>Elephants</figcaption>
    </figure>
    <figure>
      <img src="@/assets/img/owl.jpg" alt="owl" />
      <figcaption>Owl</figcaption>
    </figure>
  </div>
</template>
<style scoped>
/* implicit grid */
.portfolio {
  background-color: #709b90;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  gap: 1em;
  grid-auto-flow: dense;
}
.portfolio figure {
  margin: 0;
  display: flex;
  flex-direction: column;
}
.featured {
  grid-column: span 2;
  grid-row: span 2;
}
.portfolio img {
  max-inline-size: 100%;
  flex: 1; /* make the image fill
the available space in the flex container */
  object-fit: cover; /* expand the image to fill the box without distorting its aspect ratio */
}
.portfolio figcaption {
  padding: 0.3em 0.8em;
  background-color: rgb(0 0 0 / 0.5);
  color: #fff;
  text-align: right;
  /* height: 30px; */
}
</style>
