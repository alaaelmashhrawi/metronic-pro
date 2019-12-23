<template>
    <div class="kt-portlet__head kt-portlet__head--lg">
        <slot :title="title">

            <div class="kt-portlet__head-label">
										<span class="kt-portlet__head-icon">
											<i class="kt-font-brand flaticon2-line-chart"></i>
										</span>
                <h3 class="kt-portlet__head-title">
                    {{ title }}
                </h3>
            </div>

        </slot>
    </div>
</template>
<script>

    export default {
        // inject: ['count', 'cc'],
        props: {
            title: {
                type: String,
                default: 'here titel can binding this props  in  slot'
            }
        },
        mounted() {

        }
    }



</script>

