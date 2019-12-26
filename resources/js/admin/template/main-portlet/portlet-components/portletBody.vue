<template>

    <basicTable :dataRows ="dataRows"  >
        can add any content in solt tag in bascik-table teplate
    </basicTable>
</template>
<script>
    export default {
        props: {
            dataRows: {
                required: true,



            },

        },
    }
</script>