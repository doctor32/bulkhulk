<template>
    <div class="preview__item" 
    @click="clickOnPreviewItem">
        <div class="preview__item_img_body"><img :src="src" alt="img"></div>
        <p class="preview__item_count">54/1000</p>
        <p class="preview__item_title">{{newTitle}}</p>
        <p class="preview__item_price">{{price}} $</p>
    </div>
</template>

<script>
    export default {
        props: ['title', 'price', 'src', 'id'],
        computed: {
            newTitle() {
                if (this.title.length > 30) {
                    return this.title.substr(0, 30) + '...'
                }
                return this.title
            }
        },
        methods: {
            clickOnPreviewItem() {
                this.$emit('clickOnPreviewItem')
            }
        }
    }
</script>

<style lang="scss" scoped>
.preview__item {
    width: 14rem;
    background: #FFFFFF;
    border-radius: .5rem;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    .preview__item_img_body {
        height: 13rem;
    }
    img {
        width: 100%;
    }
.preview__item_count {
    font-size: 1.2rem;
    padding: .9rem 0 .6rem 0;
    color: #C6C6C6;
}
.preview__item_title {
    font-size: 1.2rem;
    padding-bottom: .9rem;
}
.preview__item_price {
    font-weight: 600;
    font-size: 1.4rem;
}
}
</style>