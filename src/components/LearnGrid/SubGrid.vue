<template>
  <h2>Subgrid</h2>
  <div class="author-bios">
    <div class="card">
      <h3>Sir Arthur Ignatius Conan Doyle</h3>
      <div>
        <p>A British writer and physician who created the fictional detective Sherlock Holmes.</p>
      </div>
      <div class="read-more"><a href="/conan-doyle">Read more</a></div>
    </div>
    <div class="card">
      <h3>Mark Twain</h3>
      <div>
        <p>
          An American author famous for <i>The Adventures of Tom Sawyer</i> and
          <i>Adventures of Huckleberry Finn</i>. He has been called “the father of American
          literature.”
        </p>
      </div>
      <div class="read-more"><a href="/mark-twain">Read more</a></div>
    </div>
    <div class="card">
      <h3>Homer</h3>
      <div>
        <p>Author of the Greek epic poems <i>The Iliad</i> and <i>The Odyssey</i>.</p>
      </div>
      <div class="read-more"><a href="/homer">Read more</a></div>
    </div>
  </div>
</template>
<style scoped>
/* subgrid */
.author-bios {
  padding: 1.5em;
  background-color: #eee;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  max-inline-size: 850px;
  margin-inline: auto;
}
.card {
  padding: 1rem;
  border-radius: 0.5rem;
  grid-row: span 3;
  display: grid;
  gap: 0;
  grid-template-rows: max-content auto max-content; /* set fallback row sizing for browsers that don't support subgrid */
  grid-template-rows: subgrid; /* use the parent grid's rows */
}
.card > h3 {
  margin-block: 0;
  padding-block-end: 0.5rem;
  border-block-end: 1px solid #eee;
  align-self: end;
}
.read-more {
  margin-block-start: 1em;
  text-align: right;
}
</style>
