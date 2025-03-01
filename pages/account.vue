<template>
    <div>
        <TargetAccount :data="data"/>
    </div>
</template>

<script setup>
import { getUserById }from '../graphql/userQueries.gql'

const { data } = await useAsyncQuery(getUserById, { id: 2}) //id estatico por temas de loggeo
</script>