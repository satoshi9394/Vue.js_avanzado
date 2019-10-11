<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                .notification.is-danger(v-show="notification")
                    slot(name="body") Algo esta mal
                .notification.is-info(v-show="!notification")
                    slot(name="body") Algo salio mal
</template>


<script>
export default {
    props: {
        notification: { type: Boolean, }
    },
}
</script>

<style lang="scss" scoped>

    .notification
    {
        margin: 10px;
        text-align: center;
    }

</style>