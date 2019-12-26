<template>

    <table class="kt-datatable__table" style="display: block;">
        <thead class="kt-datatable__head">
        <tr class="kt-datatable__row" style="left: 0px;">
            <th data-field="OrderID" class="kt-datatable__cell kt-datatable__cell--sort"><span
                    style="width: 134px;">Order ID</span></th>
            <th data-field="Country" class="kt-datatable__cell kt-datatable__cell--sort"><span
                    style="width: 134px;">Country</span></th>
            <th data-field="ShipDate" class="kt-datatable__cell kt-datatable__cell--sort"><span
                    style="width: 134px;">Ship Date</span></th>
            <th data-field="CompanyName" class="kt-datatable__cell kt-datatable__cell--sort"><span
                    style="width: 134px;">Company Name</span></th>
            <th data-field="Status" class="kt-datatable__cell kt-datatable__cell--sort"><span
                    style="width: 134px;">Status</span></th>
            <th data-field="Type" data-autohide-disabled="false"
                class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 134px;">Type</span></th>
            <th data-field="Actions" data-autohide-disabled="false"
                class="kt-datatable__cell kt-datatable__cell--sort"><span style="width: 110px;">Actions</span>
            </th>
        </tr>
        </thead>
        <tbody class="kt-datatable__body" style="">

        <TableRow :dataRows ="dataRows">

        </TableRow>
        </tbody>
    </table>




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
<!--<script>-->
<!--export default {-->
<!--props: {-->
<!--fields: {-->
<!--required: true,-->

<!--},-->
<!--actions: {-->
<!--required: true,-->

<!--},-->
<!--resources: {-->
<!--required: true,-->
<!--},-->

<!--resourceName: {-->
<!--required: true,-->
<!--default: 'resource'-->
<!--}-->
<!--},-->

<!--methods: {-->
<!--requestOrderByChange(field) {-->
<!--this.$emit('order', field)-->
<!--},-->
<!--},-->


<!--}-->


<!--</script>-->