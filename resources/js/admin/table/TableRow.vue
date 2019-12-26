<template>

    <tr data-row="0" class="kt-datatable__row" style="left: 0px;">
        <td class="kt-datatable__cell--center kt-datatable__cell kt-datatable__cell--check"
            data-field="RecordID"><span style="width: 20px;"><label
                class="kt-checkbox kt-checkbox--single kt-checkbox--solid"><input type="checkbox"
                                                                                  value="1">&nbsp;<span></span></label></span>
        </td>
        <td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">0374-5070</span>
        </td>
        <td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">China CN</span></td>
        <td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">8/27/2017</span>
        </td>
        <td data-field="CompanyName" class="kt-datatable__cell"><span
                style="width: 134px;">Kris-Wehner</span></td>
        <td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span
                class="kt-badge  kt-badge--danger kt-badge--inline kt-badge--pill">Danger</span></span></td>
        <td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span
                style="width: 134px;"><span
                class="kt-badge kt-badge--primary kt-badge--dot"></span>&nbsp;<span
                class="kt-font-bold kt-font-primary">Retail</span></span></td>
        <td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span
                style="overflow: visible; position: relative; width: 110px;">						<div
                class="dropdown">							<a href="javascript:;"
                                                                class="btn btn-sm btn-clean btn-icon btn-icon-md"
                                                                data-toggle="dropdown">                                <i
                class="la la-cog"></i>                            </a>						  	<div
                class="dropdown-menu dropdown-menu-right">						    	<a
                class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a
                class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a
                class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a
                href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i
                class="la la-edit"></i>						</a>						<a
                href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i
                class="la la-trash"></i>						</a>					</span></td>
    </tr>

</template>

<script>
    export default {
        props: {
            resource: {
                required: true,
            },
            fields: {
                required: true,
            },
            actions: {
                required: true,
            }
        },
    }
</script>