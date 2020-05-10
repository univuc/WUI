<template>
    <v-list two-line nav dense>
        <v-list-item link v-for="service in services" :key="service.name">
            <v-list-item-action>
                <v-icon>{{ service.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{ service.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ service.subtitle }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
    export default {
        name: 'Drawer',

        data: () => ({
            services: [
                {
                    name: 'LMS',
                    icon: 'mdi-application',
                    subtitle: 'LMS Management System',
                },
                {
                    name: 'AICRO',
                    icon: 'mdi-sword-cross',
                    subtitle: 'AI Course Registration Operator',
                },
            ],
        }),
    }
</script>

<style scoped>

</style>
