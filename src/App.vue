<template>
  <h1>{{ count }}</h1>
</template>

<script>
export default {
    data() {
        return {
            count: 2
        }
    },
    beforeCreate() {
        console.log('Before Create!', this.count)
    },
    created() {
        console.log('created!', this.count)
    },
    beforeMount() {
        console.log("before mount!")
        console.log(document.querySelector('h1'))
    },
    mounted() {
        console.log("mounted!")
        console.log(document.querySelector('h1'))
    }
}
</script>