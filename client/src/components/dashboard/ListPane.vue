<template>
    <div class="list-feed">
        <div class="list-item" v-for="(event, index) in events" :key="index">
            <h1>{{ event.title }}</h1>
            <h3>{{ event.date }}</h3>
            <h3><i class="stat-icon fas fa-map-marker-alt"></i> {{ event.location }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            events: [{
                title: "Vue boys of America",
                date: "01/01/2019",
                location: "Kansas City, Kansas"
            },
            {
                title: "Vue boys of America",
                date: "01/01/2019",
                location: "Kansas City, Kansas"
            },
            {
                title: "Vue boys of America",
                date: "01/01/2019",
                location: "Kansas City, Kansas"
            },
            {
                title: "Vue boys of America",
                date: "01/01/2019",
                location: "Kansas City, Kansas"
            },
            {
                title: "Vue boys of America",
                date: "01/01/2019",
                location: "Kansas City, Kansas"
            },
            {
                title: "Vue boys of America",
                date: "01/01/2019",
                location: "Kansas City, Kansas"
            },
            {
                title: "Vue boys of America",
                date: "01/01/2019",
                location: "Kansas City, Kansas"
            }
            ]
        }
    }
}
</script>

<style>
.list-feed {
    background-color: white;
    padding: 10px 0px 10px 10px;
    border-radius: 25px 0 0 25px;
    height: 100%;
    overflow: scroll;
}
.list-item {
    margin: 10px;
    padding: 10px;
    border-radius: 25px 0 0 25px;
    background-color:#859595; 
}
</style>
