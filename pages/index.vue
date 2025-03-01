<!-- definir layout para solo está página -->
<script setup lang="js">
    definePageMeta({
        layout: 'authentication'
    })
</script>

<template>
    <div class="container-fluid">
        <div class="row align-items-center">
            <div class="col">
                <h1>Welcome to <span>MyPost</span></h1>
            </div>
            <div class="col">
                <NuxtPage />
            </div>
        </div>
    </div>
</template>