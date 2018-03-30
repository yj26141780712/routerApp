import { Link } from './link';

export const Links = [
    { id: 4, path: "home/container/user", name: '用户管理', links: null },
    { id: 3, path: "home/container/charts", name: 'Echart表格控件', links: null },
    {
        id: 1, path: "#", name: '常用组件', links: [
            { id: 1, path: "home/container/table-show", name: '表格简易封装', links: null },
            { id: 1, path: "home/container/ngx-tabletest", name: 'ngx-table举例', links: null },
            { id: 1, path: "home/container/upload-demo", name: '文件上传', links: null },
        ]
    }, {
        id: 2, path: "#", name: '应用页面', links: [
            { id: 1, path: "home/container/http", name: 'Http请求验证', links: null }
        ]
    },
    {
        id: 2, path: "#", name: '测试页面', links: [
            {
                id: 1, path: "#", name: '三级菜单', links: [
                    { id: 1, path: "#", name: '三级菜单1', links: null },
                    { id: 1, path: "#", name: '三级菜单2', links: null },
                    { id: 1, path: "#", name: '三级菜单3', links: null },
                ]
            },
            { id: 1, path: "home/container/left-tree-test", name: '左边菜单', links: null },
            {
                id: 3, path: "#", name: "模板和数据绑定", links: [
                    { id: 1, path: "home/container/test", name: '模板和数据绑定', links: null },
                    { id: 1, path: "home/container/dynamic-list", name: '动态组件', links: null },
                    { id: 1, path: "home/container/derective-list", name: '指令', links: null },
                ]
            },
            { id: 1, path: "#", name: '表单', links: [
                { id: 1, path: "home/container/form-list", name: '表单输入', links:null},
                { id: 1, path: "home/container/form-submit", name: '表单提交', links:null},
                { id: 1, path: "home/container/form-dynamic", name: '动态表单', links:null},
            ] },
            {
                id: 1, path: "#", name: '其他', links: null  
            }
        ]
    }
]


