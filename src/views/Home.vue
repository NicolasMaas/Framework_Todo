<template>
    <div class="home">
        <div class="o-container">
            <div class="o-row">
                <p>{{ hour }}:{{ minutes }}:{{ seconds }}</p>
                <p>{{ day.charAt(0).toUpperCase() + day.slice(1) }} {{ dayNumber }} {{ month.charAt(0).toUpperCase() + month.slice(1) }}</p>
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
            year: ""
        };
    },

    beforeCreate() {
        // Change Standard Page Title
        document.title = "Labo - Todoist";
    },

    created() {
        let updateTime = setInterval(this.getDate, 1000);
    },

    beforeDestroy() {
        clearInterval(updateTime);
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
            this.seconds = date
                .getSeconds()
                .toLocaleString("nl-be", { second: "2-digit" });
        }
    }
};
</script>
