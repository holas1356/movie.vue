<template>
    <MovieDetails :movieId="movieId" />
   </template>
   
   <script setup lang="ts">
   import { useRoute } from 'vue-router'
   import MovieDetails from '@/components/movies/detailMovie.vue'
   
   const route = useRoute()
   const movieId = route.params.id as string
   </script>
   
   <style lang="scss" scoped>
   h1 {
       color: white;
       text-align: center;
       margin-top: 50px;
   }
   </style>