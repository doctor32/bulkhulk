<template>
    <div class="popular">
        <div class="green-line popular__green-line"></div>
        <h3 class="title">Popular in your area</h3>
            <div class="popular__items container">
                <preview-item v-for="item, i in $store.state.otherItems" :key="item.id"
                    @clickOnPreviewItem="clickOnPreviewItem($store.state.otherItems[i].id)"
                    :src="$store.state.otherItems[i].images[0]"
                    :title="$store.state.otherItems[i].name"
                    :price="$store.state.otherItems[i].price"
                    :id="$store.state.otherItems[i].id"
                ></preview-item>
                <button class="popular__pagination_btn"
                @click="itemsPagination"
                >See more</button>
            </div>
            
    </div>
</template>

<script>
import PreviewItem from './item/preview-item.vue';
    export default {
    components: { PreviewItem },
    data() {
        return {
            popularItems: [
                {
                    name: 'test',
                    price: 0,
                    images: ['https://vodo.lviv.ua/wp-content/themes/vodo/img/image-not-found.jpg'],
                    id: null
                },
                {
                    name: 'test',
                    price: 0,
                    images: ['https://vodo.lviv.ua/wp-content/themes/vodo/img/image-not-found.jpg'],
                    id: null
                }
            ]
        }
    },
    methods: {
        itemsPagination() {
            console.log('work');
        },
        clickOnPreviewItem(id) {
            console.log(id);
            this.$store.dispatch('SET_OTHER_ITEMS', id)
            this.$router.push('/' + id)
        }
    },
    mounted() {
        this.$store.dispatch('SET_OTHER_ITEMS', this.$route.params.id)
        console.log(this.$store.state.otherItems);
    }
}
</script>

<style lang="scss" scoped>
.popular {
    padding: 3.4rem 0;
    background: #F0F1F3;
}
.popular__green-line {
    margin-bottom: .6rem;
}
.popular__items {
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}
.popular__pagination_btn {
    font-weight: 600;
    font-size: 1.4rem;
    color: #009D65;
    height: 4rem;
    background: #FFFFFF;
    border-radius: .5rem;
    width: 100%;

}
</style>