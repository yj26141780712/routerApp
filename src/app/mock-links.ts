import { Link } from './link';

export const Links = [
    { id: 4, path: "home/container/user", name: '用户管理', links: null },
    { id: 3, path: "home/container/charts", name: 'Echart表格控件', links: null },
    {
        id: 1, path: "#", name: '常用组件', links: [
            { id: 1, path: "home/container/table-show", name: '表格简易封装', links: null },
            { id: 1, path: "home/container/ngx-tabletest", name: 'ngx-table举例', links: null },
            { id: 1, path: "home/container/upload-demo", name: 'ngx-table举例', links: null },
            { id: 1, path: "home/container/upload-demo", name: 'ngx-table举例', links: null },
            { id: 1, path: "home/container/upload-demo", name: 'ngx-table举例', links: null },
            { id: 1, path: "home/container/upload-demo", name: 'ngx-table举例', links: null }
        ]
    }, {
        id: 2, path: "#", name: '应用页面', links: [
            { id: 1, path: "home/container/http", name: 'Http请求验证', links: null }
        ]
    },
    {
        id: 2, path: "#", name: '测试页面', links: [
            {
                id: 1, path: "#", name: '表格组件2', links: [
                    { id: 1, path: "home/container/left-tree-test", name: '左边菜单', links: null },
                    { id: 1, path: "home/container/http", name: '表格组件22', links: null },
                    { id: 1, path: "home/container/table-show", name: '表格组件23', links: null },
                ]
            },
            { id: 1, path: "home/container/table-show", name: '表格组件24', links: null },
            { id: 1, path: "home/container/table-show", name: '表格组件25', links: null },
        ]
    }
]


