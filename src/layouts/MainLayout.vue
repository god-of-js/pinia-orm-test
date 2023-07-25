<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Leaving this so the page does not look empty. -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Test App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>
