import { createRouter, createWebHistory } from 'vue-router'
import vItem from '@/components/v-item.vue'
import vTest from '@/components/v-test.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
        {
            path: '/:id',
            component: vItem,
            name: 'item',
        },
        {
            path: '/test',
            component: vTest,
            name: 'test'
        }
    ]
})

export default router
