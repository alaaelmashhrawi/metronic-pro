<template>
    <!--<div>-->
    <!--<slot></slot>-->
    <!--<table class="kt-datatable__table" style="display: block;">-->
        <!--<thead class="kt-datatable__head">-->
        <!--<tr class="kt-datatable__row" style="left: 0px;">-->
            <!--<th data-field="RecordID"-->
                <!--class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"><span-->
                    <!--style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;all kt-checkbox&#45;&#45;solid"><input-->
                    <!--type="checkbox">&nbsp;<span></span></label></span></th>-->
            <!--<th data-field="OrderID" class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort"><span-->
                    <!--style="width: 134px;">Order ID</span></th>-->
            <!--<th data-field="Country" class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort"><span-->
                    <!--style="width: 134px;">Country</span></th>-->
            <!--<th data-field="ShipDate" class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort"><span-->
                    <!--style="width: 134px;">Ship Date</span></th>-->
            <!--<th data-field="CompanyName" class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort"><span-->
                    <!--style="width: 134px;">Company Name</span></th>-->
            <!--<th data-field="Status" class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort"><span-->
                    <!--style="width: 134px;">Status</span></th>-->
            <!--<th data-field="Type" data-autohide-disabled="false"-->
                <!--class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort"><span style="width: 134px;">Type</span></th>-->
            <!--<th data-field="Actions" data-autohide-disabled="false"-->
                <!--class="kt-datatable__cell kt-datatable__cell&#45;&#45;sort"><span style="width: 110px;">Actions</span>-->
            <!--</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody class="kt-datatable__body" style="">-->
        <!--<tr data-row="0" class="kt-datatable__row" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="1">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">0374-5070</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">China CN</span></td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">8/27/2017</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;">Kris-Wehner</span></td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge  kt-badge&#45;&#45;danger kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Danger</span></span></td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;primary kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-primary">Retail</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->
        <!--<tr data-row="1" class="kt-datatable__row kt-datatable__row&#45;&#45;even" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="2">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">63868-257</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;">Philippines PH</span></td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">9/3/2017</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span style="width: 134px;">Stanton, Friesen and Grant</span>-->
            <!--</td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;brand kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Pending</span></span></td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;primary kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-primary">Retail</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->
        <!--<tr data-row="2" class="kt-datatable__row" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="3">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">49288-0815</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">Paraguay PY</span>-->
            <!--</td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">4/23/2016</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span style="width: 134px;">Cartwright, Hilpert and Hartmann</span>-->
            <!--</td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge  kt-badge&#45;&#45;info kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Info</span></span></td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;danger kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-danger">Online</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->
        <!--<tr data-row="3" class="kt-datatable__row kt-datatable__row&#45;&#45;even" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="4">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">49288-0039</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">Azerbaijan AZ</span>-->
            <!--</td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">9/6/2017</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;">Bednar-Grant</span></td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;brand kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Pending</span></span></td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;primary kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-primary">Retail</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->
        <!--<tr data-row="4" class="kt-datatable__row" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="5">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">59762-0009</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">Brazil BR</span>-->
            <!--</td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">10/28/2017</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;">Feeney Inc</span></td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge  kt-badge&#45;&#45;info kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Info</span></span></td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;danger kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-danger">Online</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->
        <!--<tr data-row="5" class="kt-datatable__row kt-datatable__row&#45;&#45;even" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="6">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">43419-020</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">Honduras HN</span>-->
            <!--</td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">4/6/2017</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span style="width: 134px;">Bechtelar, Wisoky and Homenick</span>-->
            <!--</td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge  kt-badge&#45;&#45;info kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Info</span></span></td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;success kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-success">Direct</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->
        <!--<tr data-row="6" class="kt-datatable__row" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="7">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">33261-641</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">China CN</span></td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">4/15/2017</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span style="width: 134px;">Towne, MacGyver and Greenholt</span>-->
            <!--</td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge  kt-badge&#45;&#45;primary kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Canceled</span></span>-->
            <!--</td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;primary kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-primary">Retail</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->
        <!--<tr data-row="7" class="kt-datatable__row kt-datatable__row&#45;&#45;even" style="left: 0px;">-->
            <!--<td class="kt-datatable__cell&#45;&#45;center kt-datatable__cell kt-datatable__cell&#45;&#45;check"-->
                <!--data-field="RecordID"><span style="width: 20px;"><label-->
                    <!--class="kt-checkbox kt-checkbox&#45;&#45;single kt-checkbox&#45;&#45;solid"><input type="checkbox"-->
                                                                                      <!--value="8">&nbsp;<span></span></label></span>-->
            <!--</td>-->
            <!--<td data-field="OrderID" class="kt-datatable__cell"><span style="width: 134px;">68462-221</span>-->
            <!--</td>-->
            <!--<td data-field="Country" class="kt-datatable__cell"><span style="width: 134px;">France FR</span>-->
            <!--</td>-->
            <!--<td data-field="ShipDate" class="kt-datatable__cell"><span style="width: 134px;">6/13/2016</span>-->
            <!--</td>-->
            <!--<td data-field="CompanyName" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;">Lubowitz Inc</span></td>-->
            <!--<td data-field="Status" class="kt-datatable__cell"><span style="width: 134px;"><span-->
                    <!--class="kt-badge  kt-badge&#45;&#45;danger kt-badge&#45;&#45;inline kt-badge&#45;&#45;pill">Danger</span></span></td>-->
            <!--<td data-field="Type" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="width: 134px;"><span-->
                    <!--class="kt-badge kt-badge&#45;&#45;primary kt-badge&#45;&#45;dot"></span>&nbsp;<span-->
                    <!--class="kt-font-bold kt-font-primary">Retail</span></span></td>-->
            <!--<td data-field="Actions" data-autohide-disabled="false" class="kt-datatable__cell"><span-->
                    <!--style="overflow: visible; position: relative; width: 110px;">						<div-->
                    <!--class="dropdown">							<a href="javascript:;"-->
                                                                    <!--class="btn btn-sm btn-clean btn-icon btn-icon-md"-->
                                                                    <!--data-toggle="dropdown">                                <i-->
                    <!--class="la la-cog"></i>                            </a>						  	<div-->
                    <!--class="dropdown-menu dropdown-menu-right">						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>						    	<a-->
                    <!--class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>						  	</div>						</div>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit details">							<i-->
                    <!--class="la la-edit"></i>						</a>						<a-->
                    <!--href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">							<i-->
                    <!--class="la la-trash"></i>						</a>					</span></td>-->
        <!--</tr>-->

        <!--</tbody>-->
    <!--</table>-->
    <!--</div>-->

    <table class="kt-datatable__table">
        <slot name='table-header'>
            <thead class="kt-datatable__head">
            <tr class="kt-datatable__row">
                <th v-for="field in fields" :key="field.name" class="kt-datatable__cell">
                    <sorting-icon
                            @sort="requestOrderByChange(field)"
                            :resource-name="resourceName"
                            :uri-key="field.name"
                            v-if="field.sortable"
                    >
                        {{ field.name }}
                    </sorting-icon>

                    <span v-else> {{ field.name }} </span>
                </th>

                <th v-if="actions">Actions</th>

            </tr>

            </thead>
        </slot>
        <tbody class="kt-datatable__body">
        <table_row v-for="resource in resources" :fields="fields" :resource="resource" :actions="actions" :key="resource.name" class="kt-datatable__row" style="left: 0px;">

        </table_row>
        </tbody>

    </table>


</template>
<script>
    export default {
        props: {
            fields: {
                required: true,

            },
            actions: {
                required: true,

            },
            resources: {
                required: true,
            },

            resourceName: {
                required: true,
                default: 'resource'
            }
        },

        methods: {
            requestOrderByChange(field) {
                this.$emit('order', field)
            },
        },



    }


</script>