<template>
<div>

    <tr  v-for="row in dataRows" data-row="0" class="kt-datatable__row" style="left: 0px;">


        <td   class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check" v-for="(value, key) in row">
            <!--{{ key }} : {{ value }}--> {{ value }}
        </td>
    </tr>
</div>
</template>

<script>
    export default {
        inject: ['dataRows'],
        props: {
            dataRows: {
                required: true,
                // default: [
                //     {
                //         name: 'Jim',
                //         age: 35,
                //     },
                //     {
                //         name: 'Jill',
                //         age: 45,
                //     },
                //     {
                //         name: 'John',
                //         age: 55,
                //     },
                // ],


            },

        },
    }
</script>