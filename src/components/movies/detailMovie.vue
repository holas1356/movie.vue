<template>
  <section class="movie-details">
    <div class="back-button">
      <router-link to="/" class="button">←</router-link>
    </div>

    <div class="container-info">
      <div class="poster-container">
        <img :src="movie?.Poster" :alt="movie?.Title" class="poster-image">
      </div>
      
      <div class="info-movie">
        <h2>{{ movie?.Title }}</h2>
        <div class="movie-details-list">
          <p><strong>Plot:</strong> {{ movie?.Plot }}</p>
          <p><strong>Genre:</strong> {{ movie?.Genre }}</p>
          <p><strong>Actors:</strong> {{ movie?.Actors }}</p>
          <p><strong>Language:</strong> {{ movie?.Language }}</p>
          <p><strong>Year:</strong> {{ movie?.Year }}</p>
          <p><strong>Runtime:</strong> {{ movie?.Runtime }}</p>
        </div>
        <router-link to="/" class="back-link">Volver a la búsqueda</router-link>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import HTTP from '@/api/client-http';
import type { Movie } from '@/model/movie.model';

const route = useRoute();
const movieId = route.params.id as string;

const movie = ref<Movie>();

onMounted(async () => {
  const response = await HTTP.get('', {
    params: { i: movieId }
  });
  movie.value = response.data;
});
</script>
  
<style scoped lang="scss">
.movie-details {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: $secondary;
  border: 5px solid $secondary;
  border-radius: 13px;
  max-width: 800px;
  margin: 2% auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  .back-button {
    .button {
      background-color: $primary;
      border-radius: 10px;
      border: 2px solid $primary;
      padding: 8px 12px;
      text-align: center;
      text-decoration: none;
      color: white;
      font-weight: bold;
      transition: background-color 0.3s ease, transform 0.3s ease;
      
      &:hover {
        background-color: darken($primary, 10%);
        transform: scale(1.05);
      }
    }
  }

  .container-info {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;

    .poster-container {
      width: 35%;
      
      .poster-image {
        max-width: 90%;
        height: auto;
        border-radius: 8px;
        transition: transform 0.3s ease;
        margin-top: 30px;
        
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .info-movie {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      width: 60%;

      h2 {
        margin-bottom: 20px;
        color: $primary;
        font-size: 24px;
      }

      .movie-details-list {
        p {
          margin: 10px 0;
          color: $white;

          strong {
            color: $primary;
            display: inline-block;
            width: 90px; // Adjust as needed
          }
        }
      }

      .back-link {
        background-color: $primary;
        color: white;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 15px;
        margin-top: 20px;
        display: inline-block;
        font-weight: bold;
        transition: background-color 0.3s ease, transform 0.3s ease;
        justify-content: center;
        align-items: center;
       
        
        &:hover {
          background-color: darken($primary, 10%);
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>
