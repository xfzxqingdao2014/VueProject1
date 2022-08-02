 <!-- components/Home.vue -->
<template>
<div class="hello">
    <h1>
        This is the Home Page!!!
    </h1>
    <h2>List</h2>
    <ul>
    <router-link id="Part1" to="/Home/Part1">FirstPart </router-link>&nbsp; &nbsp;
    <router-link id="Part2" to="/Home/Part2">SecondPart </router-link>
    </ul>
    <hr>
    <router-view> </router-view>
</div>
</template>