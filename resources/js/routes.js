import AdminHome from './components/admin/AdminHome.vue'
import CategoryList from './components/admin/category/List.vue'
import AddCategory from './components/admin/category/New.vue'
import EditCategory from './components/admin/category/Edit.vue'



import PublicHome from './components/public/PublicHome.vue'
import BlogPost from './components/public/blog/BlogPost.vue'
import SinglePost from './components/public/blog/SingleBlog.vue'

import PostList from './components/admin/post/List.vue'
import AddPost from './components/admin/post/New.vue'
import EditPost from './components/admin/post/Edit.vue'






export const routes = [
    {
        path:'/home',
        component:AdminHome
    },
    {
        path:'/category-list',
        component:CategoryList
    },
    {
        path:'/add-category',
        component:AddCategory
    },
    {
        path:'/edit-category/:categoryid',
        component:EditCategory
    },



    {
        path:'/post-list',
        component:PostList
    },
    {
        path:'/add-post',
        component:AddPost
    },
    {
        path:'/edit-post/:postid',
        component:EditPost
    },



    {
        path:'/',
        component:PublicHome
    },
    {
        path:'/blog',
        component:BlogPost
    },
    {
        path:'/blog/:id',
        component:SinglePost
    },
    {
        path:'/categories/:id',
        component:BlogPost
    },
    
];