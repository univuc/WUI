<template>
    <div>
        <ul v-if="services.length">
            <NavigationBarItem
                v-for="service in services"
                :key="service.name"
                :service="service"
            />
        </ul>
        <p v-else>
            No services!
        </p>
    </div>
</template>

<script>
    import NavigationBarItem from './NavigationBarItem';

    export default {
        name: 'NavigationBar',
        components: {NavigationBarItem},
        data() {
            return {
                services: [
                    {
                        name: 'LMS',
                    },
                    {
                        name: 'SNL',
                    },
                ],
            };
        },
    }
</script>

<style scoped>

</style>
