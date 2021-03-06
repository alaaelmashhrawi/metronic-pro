import Vue from 'vue'
import vNav from './template/nav/side-menu'
import TopHeader from './template/nav/top-header'
import BottomHeader from './template/nav/bottom-header'
import portlet from './template/main-portlet/portlet'
import portletHead from './template/main-portlet/portlet-components/portletHead'
import portletBody from './template/main-portlet/portlet-components/portletBody'
import portletFooter from './template/main-portlet/portlet-components/portletFooter'
import pagination from './template/pagination'
import fliter from './template/filters/fliter'
import basicTable from './table/basicTable'
import RowOfTable from './table/RowOfTable'
// import TableRow  from './template/TableRow'


// export default {
//     name: 'app',
//     components: {
//         vNav,
//         TopHeader,
//         BottomHeader,
//         portlet
//
//
//     }
// }
Vue.component('vNav', vNav)
Vue.component('TopHeader', TopHeader)
Vue.component('BottomHeader', BottomHeader)
Vue.component('portlet', portlet)
Vue.component('portletHead', portletHead)
Vue.component('portletBody', portletBody)
Vue.component('portletFooter', portletFooter)
Vue.component('fliter', fliter)
Vue.component('pagination', pagination)
Vue.component('basicTable', basicTable)
Vue.component('TableRow', RowOfTable)



