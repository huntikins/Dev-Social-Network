<template>
  <div class="profile-info">
    <div class="profile-header">
      <div class="user-name">
        <h1 class="name-first">{{ user.firstName | firstCap }}</h1>
        <h1 class="name-last">{{ user.lastName | firstCap }}</h1>
      </div>
      <div class="user-stat">
        <span class="stat-item">
          <i class="stat-icon fas fa-map-marker-alt"></i>
          {{ user.location.city || user.location.state ? `${user.location.city}, ${user.location.state}` : user.zipCode }}
        </span>
        <span class="stat-item" v-if="user.jobTitle || user.jobCompany">
          <i class="stat-icon fas fa-building"></i>
          {{ user.jobTitle || "Works" }}{{ user.jobCompany ? ` at ${user.jobCompany}` : '' }}
        </span>
        <div class="stat-item-group">
          <span class="stat-item-group">
            <i class="stat-icon-group fas fa-users" title="Friends"></i>
            {{ friend_count }}
          </span>
          <span></span>
          <span class="stat-item-group">
            <i class="stat-icon-group far fa-eye" :title="isCurrentUser ? 'Users you follow' : `Users ${user.firstName} follows`"></i>
            {{ following_count }}
          </span>
          <span></span>
          <span class="stat-item-group">
            <i class="stat-icon-group fas fa-eye" :title="isCurrentUser ? 'Users following you' : `Users following ${user.firstName}`"></i>
            {{ follower_count }}
          </span>
        </div>
      </div>
      <div v-if="isCurrentUser === false" class="follow-wrapper">
        <button class="btn btn-follow" v-if="followusr === false" @click.prevent="$emit('follow')"><i class="stat-icon-follow far fa-eye"></i> follow</button>
        <button class="btn btn-following" v-else @click.prevent="$emit('unfollow')"><i class="stat-icon-follow far fa-eye"></i> following</button>
      </div>
    </div>
    <div class="profile-footer">
      <div class="user-interest">
        <h4 class="interest-title">Interests</h4>
        <ul class="interest-list">
          <li
            class="interest-list-item"
            v-for="interest in user.interests"
            :key="interest"
          >{{ interest }}</li>
        </ul>
      </div>
      <div class="user-bio">
        <p class="bio-text">{{ user.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "isCurrentUser", "followusr"],
  filters: {
    firstCap(value) {
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  computed: {
    friend_count: function() {
      if (this.$props.user) {
        let count = 0;
        this.$props.user.followers.forEach(user => {
          if (this.$props.user.following.indexOf(user) > -1) count++;
        });
        return count;
      }
      else return '';
    },
    follower_count: function() {
      return this.$props.user ? this.$props.user.followers.length : '';
    },
    following_count: function() {
      return this.$props.user ? this.$props.user.following.length : '';
    }
  }
};
</script>

<style>
.profile-info {
  height: 87vh;
  width: 14%;
  background-color: #f39121;
  position: fixed;
}
.user-name {
  margin-top: 15px;
  margin-left: 10px;
}
.name-first {
  font-family: alternate-gothic-no-1-d, sans-serif;
  font-size: 4em;
  padding: 0;
  margin: 0;
  line-height: 0.75;
}
.name-last {
  font-family: alternate-gothic-no-1-d, sans-serif;
  font-size: 5em;
  padding: 0;
  margin: 0;
  line-height: 1;
}
.user-stat {
  margin: 10px;
}
.stat-item {
  font-family: roboto, sans-serif;
  display: block;
  margin-left: 10px;
  font-size: 0.85em;
  color: #859595;
}
.stat-item-group {
  text-align: center;
  font-family: roboto, sans-serif;
  margin-right: 10px;
  font-size: 1em;
  color: #859595;
  margin-top: 10px;
}
span.stat-item-group {
  white-space: nowrap;
}
.stat-icon {
  color: #3dc0ec;
}
.stat-icon-group {
  color: #3dc0ec;
  font-size: 1em;
}
.btn-follow{
    background-color:#3dc0ec;
    border-radius: 100px;
    color: white;
    font-family: roboto, sans-serif;
    text-align: center;
}
.btn-follow:hover{
    text-decoration: none;
    color: white;
}
.btn-following{
    background-color:#859595;
    border-radius: 100px;
    color: white;
    font-family: roboto, sans-serif;
    text-align: center;
}
.btn-following:hover{
    text-decoration: none;
    color: white;
}
.stat-icon-follow {
    color: white;
}
.follow-wrapper {
    text-align: center;
}
.profile-header {
  border-bottom-right-radius: 25px;
  background-color: white;
  padding: 10px;
  overflow: scroll;
}
.profile-footer {
  margin-top: 10px;
  border-radius: 0 25px 25px 0;
  background-color: white;
  padding: 0 10px 10px 0;
  overflow: scroll;
}
.profile-header::-webkit-scrollbar,
.profile-footer::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}
.user-interest {
  padding-top: 10px;
}
.interest-title {
  font-family: alternate-gothic-no-1-d, sans-serif;
  text-align: center;
  font-size: 2em;
}
.interest-list {
  list-style-type: none;
  padding-left: 15%;
  overflow-y: scroll;
  height: 11vh;
}
.interest-list::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.interest-list-item {
  text-align: center;
  font-family: roboto, sans-serif;
  color: white;
  background-color: #3dc0ec;
  border: 1px solid #3dc0ec;
  padding: 2px;
  border-radius: 100px;
  margin: 4px;
  width: 75%;
}
.user-bio {
  height: 40vh;
  padding: 4px 4px 4px 10px;
  background-color: #859595;
  border-radius: 0 25px 25px 0;
  overflow-y: scroll;
}
.user-bio::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
.bio-text {
  font-family: roboto, sans-serif;
  color: white;
  padding: 4px;
}
/* higher resolution laptops */
/* @media (min-width: 1025px) and (max-width: 1600px)  { */
.profile-info {
  height: 87vh;
  background-color: #f39121;
}
.bio-text {
  font-size: 0.75em;
}
.interest-list-item {
  font-size: 0.75em;
}
.user-name {
  margin-top: 15px;
  margin-left: 10px;
}
.name-first {
  font-family: alternate-gothic-no-1-d, sans-serif;
  font-size: 3em;
  padding: 0;
  margin: 0;
  line-height: 0.75;
}
.stat-item-group {
  font-size: 0.85em;
}
.stat-item {
  font-size: 0.7em;
}
.name-last {
  font-family: alternate-gothic-no-1-d, sans-serif;
  font-size: 3em;
  padding: 0;
  margin: 0;
  line-height: 1;
}
/* } */
@media (max-width: 769px) {
  .profile-info {
    width: 180px;
    height: 100vh;
  }
  .profile-header {
    padding-top: 40px;
  }
}
@media (max-width: 612px) {
  .profile-info {
    width: 100%;
  }
}
</style>