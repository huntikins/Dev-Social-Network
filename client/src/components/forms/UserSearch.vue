<template>
    <div class="search-container">
        <div class="input-warpper">
            <div class="form-group has-feedback has-search">
                <span class="fas fa-search form-control-feedback"></span>
                <input type="text" class="form-control search-field" placeholder="Search" v-model="query" @keypress.enter="searchUsers()">
            </div>
        </div>
        <div class="search-result-wrapper">
            <div class="search-results">
                <app-search-result-item :results="results"/>
            </div>
        </div>
    </div>
</template>

<script>
import SearchResultItem from '@/components/menus/SearchResultItem'
export default {
    data(){
        return{
            query: "",
            results: [
                        {image: 'https://via.placeholder.com/150', username: 'Hunter Trammell', link: '#'},
                        {image: 'https://via.placeholder.com/150', username: 'David Knittel', link: '#'},
                        {image: 'https://via.placeholder.com/150', username: 'Ryan Freeman', link: '#'},
                        {image: 'https://via.placeholder.com/150', username: 'Mark Cuban', link: '#'},
                    ]
        }
    },
    components: {
        appSearchResultItem: SearchResultItem
    },
    methods: {
        searchUsers() {
            //pass query into search call, then foreach push username, link to profile, & user image into results array as an object
            //results are passed into child component and info is shown
        }
    }
}
</script>

<style>
    .search-container {
        height: 30vh;
        margin: 10%;
    }
    .input-wrapper {
        width: 50%;
        margin: 50px auto;
    }
    .has-search .form-control {
        padding-left: 2.375rem;
        border: none;
     }
    input.search-field{
        background-color: rgba(54, 59, 59, .2);
        border-radius: 100px;
    }
    input.search-field::placeholder{
        color: rgba(54, 59, 59, .2);
    }
    input.search-field:focus {
        background-color: rgba(54, 59, 59, .7);
        color: white;
        box-shadow: none;
        border: none;
    }
    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: white; 
    }
    .search-result-wrapper {
        width: 100%;
        height: 20vh;
        border-radius: 25px;
        border: 1px solid transparent;
        border-top: none;
        border-bottom: 2px solid rgba(54, 59, 59, .2);
        box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px rgba(54, 59, 59, .2), 0 1px 0 rgba(54, 59, 59, .2);
        outline: 0;
        background-color: rgba(54, 59, 59, .2)
    }
</style>
