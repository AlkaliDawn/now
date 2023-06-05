<script setup>

</script>

<template>
    <div id="navbar">
        <router-link id="logo" to="/"> Now. </router-link>
    </div>
</template>

<style scoped>

#navbar {
    position: sticky;

    font-family: 'Tsukimi Rounded', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 100px;

    /* Main Color */
    color: #1E62B2;

    width: 100vw;
    height: 78px;

    /* Cream */
    background: #fffef7;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
}

#logo.router-link-active {
    text-decoration-line: none;
    position: relative;
    font-size: 50px;
    left: 2.0%;
    bottom: 17%;
    color: #1E62B2;
}

#navbar {
    position: fixed;
}

</style>