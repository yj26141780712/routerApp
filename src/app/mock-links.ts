import { Link } from './link';

export const Links = [
    { id: 4, path: "home/user", name: '用户管理', links: null },
    { id: 3, path: "home/charts", name: 'Echart表格控件', links: null },
    {
        id: 1, path: "#", name: '表格组件', links: [
            { id: 1, path: "home/table-show", name: '表格组件', links: null } 
        ]
    },
    {   id: 2, path: "#", name: '测试页面', links: [
        { id: 1, path: "#", name: '表格组件', links: [
            { id: 1, path: "home/table-show", name: '表格组件', links: null }, 
            { id: 1, path: "home/table-show", name: '表格组件', links: null },
            { id: 1, path: "home/table-show", name: '表格组件', links: null }, 
        ] },
        { id: 1, path: "home/table-show", name: '表格组件', links: null }, 
        { id: 1, path: "home/table-show", name: '表格组件', links: null }, 
    ] }
]


