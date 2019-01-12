<template>
    <div class="list-feed">
        <div class="list-item">
            <h3></h3>
            <h6></h6>
            <a>More info</a>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    data(){
        return {
        }
    }
}
</script>

<style>
.list-feed {
    background-color: white;
    padding: 10px 0px 50% 10px;
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
