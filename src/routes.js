import update from './components/Wrap'
import upExcel from './components/upExcel'
import viewLog from './components/viewLog'
import downData from './components/downData'
import upLog from './components/upLog'
import userManage from './components/userManage'

export default [
    {path:'/update',component:update},
	{path:'/upExcel',component: upExcel},
	{path:'/viewLog',component: viewLog},
	{path:'/downData',component: downData},
	{path:'/upLog',component: upLog},
	{path:'/userManage',component: userManage}
]