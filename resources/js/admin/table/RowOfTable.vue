<template>
    <div>

        <tr   v-for="(row, index)   in dataRows"  :row="row" data-row="0" class="kt-datatable__row" style="left: 0px;">


            <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
                v-for="(value, key) in row">
                <!--{{ key }} : {{ value }}--> {{ value }}
            </td>
            <td  data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span
                    style="overflow: visible; position: relative; width: 110px;">						<div
                    class="dropdown">							<a href="javascript:;"
                                                                    class="btn btn-sm btn-clean btn-icon btn-icon-md"
                                                                    data-toggle="dropdown">                                <i
                    class="la la-cog"></i>                            </a>						  	<div
                    class="dropdown-menu dropdown-menu-right">						    	<a class="dropdown-item"
                                                                                                 href="#"><i
                    class="la la-edit"></i> Edit Details</a>						    	<a class="dropdown-item"
                                                                                               href="#"><i
                    class="la la-leaf"></i> Update Status</a>						    	<a class="dropdown-item"
                                                                                                href="#"><i
                    class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a
                    href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i
                    class="la la-edit"></i>						</a>						<a href="javascript:;"
                                                                                                  class="btn btn-sm btn-clean btn-icon btn-icon-md"
                                                                                                  title="Delete">							<i
                    class="la la-trash" v-on:click="deleteEvent"  ></i>						</a>					</span></td>
        </tr>
    </div>
</template>

<script>
    export default {
        inject: ['dataRows'],


        methods: {
            deleteEvent: function (index) {
                 console.log("delet this  row");
                 //console.log("delet this  row");
                   this.dataRows.splice(index, 1);

            }
            },

        // props: {
        //     dataRows: {
        //         required: true,
        //         // default: [
        //         //     {
        //         //         name: 'Jim',
        //         //         age: 35,
        //         //     },
        //         //     {
        //         //         name: 'Jill',
        //         //         age: 45,
        //         //     },
        //         //     {
        //         //         name: 'John',
        //         //         age: 55,
        //         //     },
        //         // ],
        //
        //
        //     },

        //},
    }
</script>