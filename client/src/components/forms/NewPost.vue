<template>
    <div class="new-post-container">
        <form>
            <div class="input-group post_body">
                <textarea id="post" name="content_body" class="form-control" v-model="content_body" placeholder="Learn something new?"></textarea>
                <button class="input-group-addon btn post_button" @click.prevent="createPost()"><i class="fas fa-plus"></i></button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import getUrls from 'get-urls'
import moment from 'moment'
export default {
    data(){
        return{
            content_body: "",
            url: [],
            type: ""
        }
    },
    methods: {
        createPost(){
            //passes string into URL detector
            let urlSet = getUrls(this.content_body)
            //converts Set object to an interator
            let urlItter = urlSet.entries()
            //gives value of first URL in object
            this.url.push(urlItter.slice(0,1))
            if (this.url.length){
                this.type = "content"
            } else {
                this.type = "text"
            }
            const queryUrl = 'http://api.linkpreview.net/?key=5c3d58afe394c30b8a6aee93efb4be51af5e05ea3ce29&q='
            axios
            .get(queryUrl + this.url[0])
            .then(res => {
                let content = {
                    title: res.data.title,
                    url: res.data.url,
                    description: res.data.description,
                    image: res.data.image
                }
                /*axios.post(blah, {
                    body: this.content_body,
                    url: content.url,
                    description: content.description,
                    image: content.image,
                    type: this.type,
                    date: moment().format('LLL')
                }*/
            })

        }
    }
}
</script>

<style>
.new-post-container {
    border-radius: 0 25px 25px 25px;
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: #3dc0ec;
}
.post_body {
    margin: 10px;
    padding: 10px;
    margin-left: 10%;
    width: 90%;
}
textarea#post {
    height: 75px;
    resize: none;
    border-radius: 25px 0 0 25px;
}
.post_button {
    background: #3dc0ec;
    border-radius: 0 25px 25px 0;
    color: white;
    font-family: roboto, sans-serif;
    font-size: 2em;
    text-align: center;
}
.post_button:hover{
    color: white;
}
.post_button:focus{
    border: none;
    box-shadow: none;
}
.post-form-col{
    width: 100%;
}
.post-sumbit-col{
    width: 100%;
}
</style>
