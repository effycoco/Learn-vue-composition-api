<template>
  <div class="grid">
    <div class="a">a</div>
    <div class="b">b</div>
    <div class="c">c</div>
    <div class="d">d</div>
    <div class="e">e</div>
    <div class="f">f</div>
  </div>
  <div class="grid-layout">
    <header>
      <h1 class="page-heading">Ink</h1>
    </header>
    <nav>
      <ul class="site-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/support">Support</a></li>
        <li class="nav-right"><a href="/about">About</a></li>
      </ul>
    </nav>
    <main class="main tile">
      <h2>Team collaboration done right</h2>
      <p>
        Thousands of teams from all over the world turn to <b>Ink</b> to communicate and get things
        done.
      </p>
    </main>
    <div class="sidebar-top tile">
      <form class="login-form">
        <h3>Login</h3>
        <p>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
        </p>
        <p>
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </p>
        <button type="submit">Login</button>
      </form>
    </div>

    <div class="sidebar-bottom tile centered stack">
      <small>Starting at</small>
      <div class="cost">
        <span class="cost-currency">$</span>
        <span class="cost-dollars">20</span>
        <span class="cost-cents">.00</span>
      </div>
      <a href="/pricing" class="cta-button">Sign up</a>
    </div>
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* define three columns of equal width; fr stands for fraction unit */
  gap: 0.5em;
}
.grid > * {
  background-color: darkgray;
  color: white;
  padding: 2em;
  border-radius: 0.5em;
}

.grid-layout {
  display: grid;
  padding: 20px;
  margin-top: 2em;
  background-color: #709b90;
  grid-template-columns: 2fr 1fr; /*  the first column will grow twice as much as the second */
  grid-template-rows: repeat(4, auto); /* 4 rows of auto size/height */
  gap: var(--gap-size);
  align-items: stretch;
  max-inline-size: 1080px;
  margin-inline: auto;
}
header,
nav {
  grid-column: span 2;
}
main {
  grid-row: span 2;
}

ul.site-nav {
  list-style-type: none;
  background-color: #5f4b44;
  display: flex;
  padding: 0.5em;
  gap: var(--gap-size);
}
.nav-right {
  margin-inline-start: auto;
}

.site-nav > li > a {
  display: block;
  padding: 0.5em 1em;
  background-color: #cc6b5a;
  text-decoration: none;
  color: #fff;
}

.tile {
  padding: 1.5em;
  background-color: #fff;
}
.tile > :first-child {
  margin-top: 0;
}
.login-form h3 {
  text-align: right;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.9em;
}

.login-form input {
  display: block;
  width: 100%;
}
.login-form button {
  padding: 0.5em 1em;
  background-color: transparent;
  border: 1px solid #cc6b5a;
  cursor: pointer;
  margin-block-start: 1em;
}
.cost {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0.7;
}
.cost-currency {
  font-size: 2rem;
}
.cost-dollars {
  font-size: 4rem;
}
.cost-cents {
  font-size: 1.5rem;
  align-self: flex-start;
}
.cta-button {
  display: block;
  padding: 0.5em;
  background-color: #cc6b5a;
  color: #fff;
  text-decoration: none;
}
</style>
