<template>
    <div class="display-user">
        <div class="display-user-item" v-for="(result, index) in results" :key="index">
            <router-link :to="`/user/${result._id}`" class="result-link-wrapper">
                <img v-if="result.picture" :src="result.picture" :alt="result.fullName || result.email" class="result-image img-fluid">
                <img v-else src="@/assets/user-icon.png" :alt="result.fullName" class="result-image img-fluid">
                <p class="result-link">{{ result.fullName || result.email }}</p>
            </router-link>
        </div>
        <h1 class="nothing-found" v-if="!results.length">No results</h1>
    </div>
</template>

<script>
export default {
    props: ['results']
}
</script>

<style>
.display-user {
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    /* top: 6px; */
    /* margin: 5% 2% 1% 4%; */
    /* padding-top: 3%; */
    border-radius: 25px;
    padding: 10px;
}
.display-user::-webkit-scrollbar {
    width: 0;
    background: transparent;
}
.display-user-item {
    position: relative;
    float: left;
    width: calc(50% - 5px);
}
.display-user-item:first-child {
    margin-right: 10px;
}
.result-link-wrapper {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    display: inline-block;
}
.result-image {
    width: 100%;
    height: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.result-link {
    color: white;
    position: relative;
    display: block;
    font-family: roboto, sans-serif;
    font-size: .75em;
    text-align: center;
}
.result-link-wrapper:hover{
   color: white;
   text-decoration: none; 
}
.nothing-found {
    color: rgba(54, 59, 59, .6);
    position: relative;
    display: block;
    font-family: roboto, sans-serif;
    font-size: .75em;
    text-align: center;
}
/* higher resolution laptops */
/* @media (min-width: 1281px) and (max-width: 1600px)  {
    .result-image {
        width: 60px;
        height: 60px;
    }
    .result-link {
        font-size: .5em;
        text-align: center;
    }
} */
/* Laptops, Desktops */
/* @media (min-width: 1025px) and (max-width: 1280px) {
    .result-image {
        width: 100px;
        height: 100px;
    }
    .result-link {
        font-size: .75em;
        text-align: center;
    }
} */
</style>
