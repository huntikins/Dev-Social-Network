<template>
    <router-view class="scroll"/>
</template>

<style lang="scss">
@import url("https://use.typekit.net/cdt2rei.css");
html {
    background-color: #859595;
    height: 100%;
    min-width: 320px;
}
body{
    overflow: hidden;
    height: 100%;
}
.scroll {
    height: 100%;
    overflow-x: hidden;
}
</style>
