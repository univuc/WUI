<template>
    <v-container fluid>

        <v-row justify="center">
            <v-col cols="12" lg="4">
                <div class="display-1 text--primary">Clips</div>
                <v-card
                        v-for="clip in clips"
                        :key="clip.id"
                        class="my-3"
                        tile
                >
                    <v-card-text>
                        {{ clip.course }}
                        <p class="display-1 text--primary">{{ clip.title }}</p>
                        {{ clip.due }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="orange accent-4">출석처리</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" lg="4">
                <div class="display-1 text--primary">Assignments</div>
                <v-card
                        v-for="assignment in assignments"
                        :key="assignment.id"
                        class="my-3"
                        tile
                >
                    <v-card-text>
                        {{ assignment.course }}
                        <p class="display-1 text--primary">{{ assignment.title }}</p>
                        {{ assignment.due }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        name: 'LMS',

        data: () => ({
            clips: [
                {
                    id: 1234,
                    course: '비판적사고력연습',
                    title: '8주차 비대면 수업',
                    runningTime: 1400,
                    due: '2020년 5월 1일 8시 30분 ~ 2020년 5월 8일 19시 30분'
                },
                {
                    id: 1234,
                    course: '교수님미워',
                    title: '온라인강의 시러',
                    runningTime: 1400,
                    due: '2020년 5월 1일 8시 30분 ~ 2020년 5월 8일 19시 30분'
                },
                {
                    id: 1234,
                    course: '메롱',
                    title: '이히히히',
                    runningTime: 1400,
                    due: '2020년 5월 1일 8시 30분 ~ 2020년 5월 8일 19시 30분'
                },
            ],
            assignments: [
                {
                    id: 2345,
                    course: '비판적사고력연습',
                    title: '8주차 출석 확인',
                    due: '2020년 5월 1일 8시 30분 ~ 2020년 5월 8일 19시 30분',
                },
                {
                    id: 2345,
                    course: '구구내면의명령',
                    title: '푹 자기',
                    due: '2020년 5월 1일 8시 30분 ~ 2020년 5월 8일 19시 30분',
                },
            ],
        })
    }
</script>

<style scoped>

</style>
