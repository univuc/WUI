<template>
    <div>
        <div class="display-1 text--primary">Clips</div>
        <v-card v-for="(clip, index) in clips" :key="clip.id"
                class="my-3" raised ripple :loading="clip.loading">

            <!-- Texts -->
            <v-card-text>
                {{ clip.course }}
                <p class="display-1 text--primary">{{ clip.title }}</p>
                {{ clip.due }}
            </v-card-text>

            <!-- Action -->
            <v-card-actions>
                <v-btn text color="orange accent-4" @click="onClickAttend(index)">출석처리</v-btn>
                <v-btn text color="grey accent-4" @click="onClickDetails(index)">자세히</v-btn>
            </v-card-actions>

        </v-card>
    </div>
</template>

<script>
    import Vue from 'vue';

    function updateInternal(obj, prop, val) {
        Vue.set(obj, prop, val);
    }

    export default {
        name: 'Clips',

        data: () => ({
            clips: [
                {
                    id: 1,
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
        }),

        methods: {
            onClickAttend: this._clearClip,

            async _clearClip(clipIndex) {
                this._setClipLoading(clipIndex, true);

                await new Promise((resolve) => {setTimeout(() => {resolve();}, 1500);});

                this._setClipLoading(clipIndex, false);

                this._removeClip(clipIndex);
            },

            _setClipLoading(clipIndex, loadingOrNot) {
                updateInternal(this.clips[clipIndex], 'loading', loadingOrNot);
            },

            _removeClip(clipIndex) {
                this.clips.splice(clipIndex, 1);
            },

            onClickDetails: this._showClipInfo,

            _showClipInfo(clipIndex) {
                alert(this.clips[clipIndex]);
            },
        },
    };
</script>

<style scoped>

</style>
