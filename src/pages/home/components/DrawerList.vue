<template>
    <v-list two-line nav dense>
        <v-list-item-group v-model="service">
            <v-list-item
                    v-for="service in services"
                    :key="service.name"
                    :to="service.name"
                    link
            >
                <v-list-item-action>
                    <v-icon>{{ service.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>{{ service.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ service.subtitle }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
    import config from '../../../../config';

    export default {
        name: 'Drawer',

        data: () => ({
            services: config.services,
        }),
    }
</script>

<style scoped>

</style>
