<template>
    <div class="slider">
        <div class="item__hot">Hot</div>
        <svg 
            @click="prevSlide"
            class="slider__left-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.71289 8.29995L6.42956 5.58328C6.75039 5.26245 6.75039 4.73745 6.42956 4.41662L3.71289 1.69995" stroke="#C6C6C6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <img v-for="img, i in images" :key="i"
            :src="img" alt=""
            class="slider_img"
            :class="i === 0 ? 'active' : ''"
            @click="clickOnImg(img, i)"
        >
        <svg 
            @click="nextSlide"
            class="slider__right-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.71289 8.29995L6.42956 5.58328C6.75039 5.26245 6.75039 4.73745 6.42956 4.41662L3.71289 1.69995" stroke="#C6C6C6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script>
    export default {
        props: ['images'],
        methods: {
            nextSlide() {
                this.$emit('nextSlide')
            },
            prevSlide() {
                this.$emit('prevSlide')
            },
            clickOnImg(img) {
                this.$emit('clickOnImg', img)
            }
        }
    }
</script>

<style lang="scss" scoped>
.slider {
    margin: 1rem auto 1.2rem auto;
    width: 27rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-top: 16.8rem;
    svg {
        width: 1rem;
        height: 1rem;
        &:hover {
            path {
                stroke: #009D65;
            }
        }

    }
    .item__hot{
        position: absolute;
        top: 0;
        width: 4rem;
        height: 2rem;
        background: #FF3838;
        border-radius: .3rem;
        color: white;
        font-weight: 600;
        font-size: 1.2rem;   
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
.slider__left-arrow {
    transform: rotate(180deg);
}
.slider_img {
    width: 5rem;
    &.active {
        position: absolute;
        height: 15.7rem;
        width: 16.9rem;
        top: 0;
        left: 5rem;
        right: 0;
        
    }
}
</style>