<template>
    <div class="dropdown">
        <span @click="dropdown" class="dropbtn"><i class="fas fa-ellipsis-v"></i></span>
        <div id="myDropdown" class="dropdown-content" :class="{'show': isSelected}">
            <a @click="selectEdit">Edit</a>
            <a @click="selectDelete">Delete</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isSelected: false
        }
    },
    methods: {
        dropdown(){
            this.isSelected = !this.isSelected
        },
        selectEdit(){
            this.$emit('edit')
            this.isSelected = false
        },
        selectDelete(){
            this.$emit('remove')
            this.isSelected = false
        }
    }
}
</script>

<style>
.dropbtn {
    color: black;
    padding: 16px;
    font-size: 16px;
}
.dropbtn:hover, .dropbtn:focus {
    color: #859595;
}
.dropdown {
    float: right;
    position: relative;
}
.dropdown-content {
    font-family: roboto, sans-serif;
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    right: 0;
    z-index: 1;
}
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
.dropdown a:hover {
    background-color: rgba(61,192,236, 0.5) ;
}
.show {
    display: block;
}
</style>
