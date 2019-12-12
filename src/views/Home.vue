<template>
    <div class="home">
        <div class="o-container">
            <div class="o-row">
                <div class="c-time">
                    <p class="c-time--time">{{ hour }}:{{ minutes }}</p>
                    <p
                        class="c-time--day"
                    >{{ day.charAt(0).toUpperCase() + day.slice(1) }} {{ dayNumber }} {{ month.charAt(0).toUpperCase() + month.slice(1) }}</p>
                </div>

                <div class="c-clock">
                    <span class="c-clock--hand__seconds c-clock--hand"></span>
                    <span class="c-clock--hand__hours c-clock--hand"></span>
                    <span class="c-clock--hand__seconds c-clock--hand"></span>
                    <span class="c-clock--center"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",

    components: {},

    data() {
        return {
            hour: "",
            minutes: "",
            seconds: "",
            day: "",
            dayNumber: "",
            month: "",
            year: "",
            updateTime: ""
        };
    },

    beforeCreate() {
        // Change Standard Page Title
        document.title = "Labo - Todoist";
    },

    created() {
        this.updateTime = setInterval(this.getDate, 1000);
    },

    beforeDestroy() {
        clearInterval(this.updateTime);
    },

    methods: {
        getDate() {
            let date = new Date();

            this.day = date.toLocaleString("nl-be", { weekday: "long" });
            this.dayNumber = date.toLocaleString("nl-be", { day: "numeric" });
            this.month = date.toLocaleString("nl-be", { month: "long" });
            this.year = date.toLocaleString("nl-be", { year: "numeric" });

            this.hour = date.getHours().toLocaleString("nl-be");
            this.minutes = date.getMinutes().toLocaleString("nl-be");
            this.seconds = date.getSeconds().toLocaleString("nl-be");

            let hoursAngle =
                (360 * date.getHours()) / 12 + date.getMinutes() / 2;
            let minuteAngle = (360 * date.getMinutes()) / 60;
            let secAngle = (360 * date.getSeconds()) / 60;
        }
    }
};
</script>

<style lang="scss">
@import "@/assets/style/6-components/time.scss";
@import "@/assets/style/6-components/clock.scss";
</style>