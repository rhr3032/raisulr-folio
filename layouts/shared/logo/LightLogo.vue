<script setup lang="ts">
import LightLogo from '/images/logos/WhiteLogo.svg';
</script>
<template>
    <div class="logo lh-normal">
        <NuxtLink to="/" aria-label="Raisul R. — Home" class="d-inline-flex">
            <img :src="LightLogo" alt="" height="44" width="148" />
        </NuxtLink>
    </div>
</template>