
<script setup lang="ts">
import darkPrimaryLogo from '/images/logos/DarkLogo2.svg';
</script>
<template>
    <div class="logo lh-normal">
        <NuxtLink to="/" aria-label="Raisul R. — Home" class="d-inline-flex">
            <img :src="darkPrimaryLogo" alt="" height="44" width="148" />
        </NuxtLink>
    </div>
</template>