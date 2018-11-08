<template>
  <nav>
    <router-link :to="{ name: 'home' }" exact>Home</router-link>
    <router-link :to="{ name: 'clientInsuranceRisks' }" exact>Client insurance risks</router-link>
  </nav>
</template>

<style>
  .router-link-active {
    color: #1FC7E9;
  }
</style>
