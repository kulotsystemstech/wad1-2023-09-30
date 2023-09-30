const app = Vue.createApp({
    /** DATA */
    data() {
        return {
            counter: null,
            count  : 1,
            running: false,
            counts: []
        }
    },

    /** COMPUTED PROPERTIES */
    computed: {
        /**
         * Computed total counts.
         * Example: counts = [1, 2, 3, 5] will return 11
         * @returns {number}
         */
        totalCounts() {
            let t = 0;
            for(let i=0; i<this.counts.length; i++) {
                t += this.counts[i];
            }
            return t;
        }
    },

    /** METHODS */
    methods: {
        /**
         * @method startCounter
         * @description Start the counter that increments counter every specified interval.
         */
        startCounter() {
            if(!this.running) {
                this.counter = setInterval(() => {
                    this.count += 1;
                }, 250);

                this.running = true;
            }
        },

        /**
         * @method stopCounter
         * @description Stop the counter.
         */
        stopCounter() {
            clearInterval(this.counter);
            this.running = false;

            // push count to counts
            this.counts.push(this.count);
        },

        /**
         * @method resetCount
         * @description Reset count to 1.
         */
        resetCount() {
            this.count = 1;
            this.counts = [];
        }
    },

    /** CREATED LIFECYCLE HOOK */
    created() {
        console.log('App is created.');
    },

    /** MOUNTED LIFECYCLE HOOK */
    mounted() {
        console.log('App is mounted to DOM.');

        // start counter (uncomment to enable this)
        // this.startCounter();
    }
});

app.mount('#app');
