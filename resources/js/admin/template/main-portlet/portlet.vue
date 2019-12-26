<template>

    <div class="kt-portlet kt-portlet--mobile">


        <!-- begin portlet-head-->
        <portletHead></portletHead>
        <!--end portlet-head-->

        <div class="kt-datatable kt-datatable--default kt-datatable--brand kt-datatable--loaded" id="local_data" style="">
            <fliter>
                <!--this data can binding by solot '<slot> slot tage can be in side filtrt to insert this data'-->
            </fliter>

            <!--portlet-body-->
            <portletBody  >
            </portletBody>
            <!--end portlet-body-->
            <!--portlet-body-->
            <portlet-footer></portlet-footer>
            <!--end portlet-body-->
        </div>
    </div>
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