<template>
    <div>
        <router-link :to="{path: `/${service.name}`}">{{ service.name }}</router-link>
    </div>
</template>

<script>
    export default {
        name: 'NavigationBarItem',
        props: {
            service: {
                type: Object,
                required: true,
            },
        },
    };
</script>

<style scoped>

</style>
