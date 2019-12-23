<template>
    <div class="kt-portlet__body">
        <!--<slot></slot>-->
        <!--begin: Search Form -->
        <div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
            <div class="row align-items-center">
                <div class="col-xl-8 order-2 order-xl-1">
                    <div class="row align-items-center">
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                            <div class="kt-input-icon kt-input-icon--left">
                                <input type="text" class="form-control" placeholder="Search..." id="generalSearch">
                                <span class="kt-input-icon__icon kt-input-icon__icon--left">
																<span><i class="la la-search"></i></span>
															</span>
                            </div>
                        </div>
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                            <div class="kt-form__group kt-form__group--inline">
                                <div class="kt-form__label">
                                    <label>Status:</label>
                                </div>
                                <div class="kt-form__control">
                                    <div class="dropdown bootstrap-select form-control dropup"><select
                                            class="form-control bootstrap-select" id="kt_form_status"
                                            tabindex="-98">
                                        <option value="">All</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Delivered</option>
                                        <option value="3">Canceled</option>
                                        <option value="4">Success</option>
                                        <option value="5">Info</option>
                                        <option value="6">Danger</option>
                                    </select>
                                        <button type="button" class="btn dropdown-toggle btn-light"
                                                data-toggle="dropdown" role="combobox" aria-owns="bs-select-1"
                                                aria-haspopup="listbox" aria-expanded="false"
                                                data-id="kt_form_status"
                                                title="Info">
                                            <div class="filter-option">
                                                <div class="filter-option-inner">
                                                    <div class="filter-option-inner-inner">Info</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div class="dropdown-menu"
                                             style="max-height: 277.188px; overflow: hidden; min-height: 144px; min-width: 186px;">
                                            <div class="inner show" role="listbox" id="bs-select-1" tabindex="-1"
                                                 aria-activedescendant="bs-select-1-5"
                                                 style="max-height: 251.188px; overflow-y: auto; min-height: 118px;">
                                                <ul class="dropdown-menu inner show" role="presentation"
                                                    style="margin-top: 0px; margin-bottom: 0px;">
                                                    <li class="selected active"><a role="option"
                                                                                   class="dropdown-item active selected"
                                                                                   id="bs-select-1-0" tabindex="0"
                                                                                   aria-setsize="7"
                                                                                   aria-posinset="1"
                                                                                   aria-selected="true"><span
                                                            class="text">All</span></a></li>
                                                    <li><a role="option" class="dropdown-item" id="bs-select-1-1"
                                                           tabindex="0"><span class="text">Pending</span></a></li>
                                                    <li><a role="option" class="dropdown-item" id="bs-select-1-2"
                                                           tabindex="0" aria-setsize="7" aria-posinset="3"><span
                                                            class="text">Delivered</span></a></li>
                                                    <li><a role="option" class="dropdown-item" id="bs-select-1-3"
                                                           tabindex="0" aria-setsize="7" aria-posinset="4"><span
                                                            class="text">Canceled</span></a></li>
                                                    <li><a role="option" class="dropdown-item" id="bs-select-1-4"
                                                           tabindex="0" aria-setsize="7" aria-posinset="5"><span
                                                            class="text">Success</span></a></li>
                                                    <li class="selected active"><a role="option"
                                                                                   class="dropdown-item active selected"
                                                                                   id="bs-select-1-5" tabindex="0"
                                                                                   aria-setsize="7"
                                                                                   aria-posinset="6"
                                                                                   aria-selected="true"><span
                                                            class="text">Info</span></a></li>
                                                    <li><a role="option" class="dropdown-item" id="bs-select-1-6"
                                                           tabindex="0" aria-setsize="7" aria-posinset="7"><span
                                                            class="text">Danger</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
                            <div class="kt-form__group kt-form__group--inline">
                                <div class="kt-form__label">
                                    <label>Type:</label>
                                </div>
                                <div class="kt-form__control">
                                    <div class="dropdown bootstrap-select form-control dropup"><select
                                            class="form-control bootstrap-select" id="kt_form_type" tabindex="-98">
                                        <option value="">All</option>
                                        <option value="1">Online</option>
                                        <option value="2">Retail</option>
                                        <option value="3">Direct</option>
                                    </select>
                                        <button type="button" class="btn dropdown-toggle btn-light"
                                                data-toggle="dropdown" role="combobox" aria-owns="bs-select-2"
                                                aria-haspopup="listbox" aria-expanded="false" data-id="kt_form_type"
                                                title="Retail">
                                            <div class="filter-option">
                                                <div class="filter-option-inner">
                                                    <div class="filter-option-inner-inner">Retail</div>
                                                </div>
                                            </div>
                                        </button>
                                        <div class="dropdown-menu"
                                             style="max-height: 277.188px; overflow: hidden; min-height: 144px;">
                                            <div class="inner show" role="listbox" id="bs-select-2" tabindex="-1"
                                                 aria-activedescendant="bs-select-2-2"
                                                 style="max-height: 251.188px; overflow-y: auto; min-height: 118px;">
                                                <ul class="dropdown-menu inner show" role="presentation"
                                                    style="margin-top: 0px; margin-bottom: 0px;">
                                                    <li class="selected active"><a role="option"
                                                                                   class="dropdown-item active selected"
                                                                                   id="bs-select-2-0" tabindex="0"
                                                                                   aria-setsize="4"
                                                                                   aria-posinset="1"
                                                                                   aria-selected="true"><span
                                                            class="text">All</span></a></li>
                                                    <li><a role="option" class="dropdown-item" id="bs-select-2-1"
                                                           tabindex="0" aria-setsize="4" aria-posinset="2"><span
                                                            class="text">Online</span></a></li>
                                                    <li class="selected active"><a role="option"
                                                                                   class="dropdown-item active selected"
                                                                                   id="bs-select-2-2" tabindex="0"
                                                                                   aria-setsize="4"
                                                                                   aria-posinset="3"
                                                                                   aria-selected="true"><span
                                                            class="text">Retail</span></a></li>
                                                    <li><a role="option" class="dropdown-item" id="bs-select-2-3"
                                                           tabindex="0" aria-setsize="4" aria-posinset="4"><span
                                                            class="text">Direct</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
                    <a href="#" class="btn btn-default kt-hidden">
                        <i class="la la-cart-plus"></i> New Order
                    </a>
                    <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"></div>
                </div>
            </div>
        </div>

        <!--end: Search Form -->
    </div>
</template>