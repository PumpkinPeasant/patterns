<script setup>

</script>

<template>
  <section class="hero">
    <small class="eyebrow">Welcome</small>
    <h1>Добро пожаловать в&nbsp;<em>Brewhaus</em></h1>
    <p>
      Минималистичная кофейня, где&nbsp;вы сами подбираете ингредиенты
      и&nbsp;смотрите, как из&nbsp;простых слоёв рождается идеальный напиток.
    </p>
    <div class="hero-actions">
      <RouterLink to="/coffee" class="cta">Приготовить кофе →</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: left;
  padding: 4rem 3rem;
}

.eyebrow {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-accent);
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

.hero h1 {
  margin-bottom: 1.25rem;
}

.hero h1 em {
  font-style: italic;
  color: var(--color-accent);
}

.hero p {
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

.hero-actions {
  margin-top: 1rem;
}

.cta {
  display: inline-block;
  background: var(--color-espresso);
  color: var(--color-foam);
  padding: 0.85rem 1.75rem;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background-color var(--transition);
}

.cta:hover {
  background: var(--color-coffee);
  color: var(--color-foam);
}
</style>