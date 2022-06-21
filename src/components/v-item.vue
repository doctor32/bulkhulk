<template>
    <div class="item__body">
        <div class="container">
            <div class="item__like">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51745C1.5 4.19995 3.3675 2.32495 5.67 2.32495C7.035 2.32495 8.2425 2.98495 9 4.00495C9.7575 2.98495 10.9725 2.32495 12.33 2.32495C14.6325 2.32495 16.5 4.19995 16.5 6.51745C16.5 11.7675 11.64 14.865 9.465 15.6075Z" stroke="#252831" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <img src="@/assets/img/item1.png" alt="" class="item__general_img">
            <div class="slider">
                <svg class="slider__left-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.71289 8.29995L6.42956 5.58328C6.75039 5.26245 6.75039 4.73745 6.42956 4.41662L3.71289 1.69995" stroke="#C6C6C6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <img src="@/assets/img/item2.png" alt="" class="slider_img">
                <img src="@/assets/img/item3.png" alt="" class="slider_img">
                <img src="@/assets/img/item4.png" alt="" class="slider_img">
                <img src="@/assets/img/item5.png" alt="" class="slider_img">
                <svg class="slider__right-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.71289 8.29995L6.42956 5.58328C6.75039 5.26245 6.75039 4.73745 6.42956 4.41662L3.71289 1.69995" stroke="#C6C6C6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
            <div class="item__tabs">
                    <div class="item__tabs_header">
                        <p v-for="item, i in tabs" :key="i"
                        :class="item.active === true ? 'active' : ''"
                        @click="clickOnTab(item, i)"
                        >{{item.name}}</p>
                    </div>
                    <div class="container">
                        <h3 class="item__tabs_title">{{tabs[currentTab].title}}</h3>
                        <p class="item__tabs_subtitle">{{tabs[currentTab].subtitle}}</p>
                    </div>
            </div>
            <div class="percents container">
                <p>0</p>
                <div class="percents__line_body">
                    <div class="percents__line"></div>
                    <div class="percents__line"></div>
                    <div class="percents__line"></div>
                    <div class="percents__line"></div>               
                </div>
                <p>1000</p>

                <div class="percents__top">
                    <div class="percents__item_body">
                        <div class="percents__item"><p>25%</p></div>
                        <svg class="percents__item_triangle" width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M3 3L0 0H6L3 3Z" fill="#009D65"/>
                        </svg>
                    </div>
                    <div class="percents__item_body">
                        <div class="percents__item"><p>50%</p></div>
                        <svg class="percents__item_triangle" width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M3 3L0 0H6L3 3Z" fill="#009D65"/>
                        </svg>
                    </div>
                    <div class="percents__item_body">
                        <div class="percents__item"><p>85%</p></div>
                        <svg class="percents__item_triangle" width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M3 3L0 0H6L3 3Z" fill="#009D65"/>
                        </svg>
                    </div>
                </div>

                <div class="percents__bottom">
                    <div class="percents__item_body">
                        <svg class="percents__item_triangle" width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M3 3L0 0H6L3 3Z" fill="#009D65"/>
                        </svg>
                        <div class="percents__item"><p>42$</p></div>
                    </div>
                    <div class="percents__item_body">
                        <svg class="percents__item_triangle" width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M3 3L0 0H6L3 3Z" fill="#009D65"/>
                        </svg>
                        <div class="percents__item"><p>55.99$</p></div>
                    </div>
                    <div class="percents__item_body">
                        <svg class="percents__item_triangle" width="6" height="3" viewBox="0 0 6 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.1" d="M3 3L0 0H6L3 3Z" fill="#009D65"/>
                        </svg>
                        <div class="percents__item"><p>68$</p></div>
                    </div>
                </div>                
            </div>
            <div class="item__footer">
            <div class="item__price">1 119 $</div>
                <button class="item__buy">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.625 5.75251V5.02501C5.625 3.33751 6.9825 1.68001 8.67 1.52251C10.68 1.32751 12.375 2.91001 12.375 4.88251V5.91751" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.74999 16.5H11.25C14.265 16.5 14.805 15.2925 14.9625 13.8225L15.525 9.3225C15.7275 7.4925 15.2025 6 12 6H5.99999C2.79749 6 2.27249 7.4925 2.47499 9.3225L3.03749 13.8225C3.19499 15.2925 3.73499 16.5 6.74999 16.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.6216 9H11.6283" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.37088 9H6.37762" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Add to cart
                </button>
            </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {
                    name: 'About the product',
                    title: '14K Rose Gold Filled Micro Inlaid Diamond Ring for Women Delicate White Topaz Rings Manufacturer',
                    subtitle: 'They target is to provide high quality products, short lead time, competitive price and professional solution to their customers. They goal is to keep their customer valuable and win good reputation in the market.',
                    active: true
                },
                {
                    name: 'Characteristics',
                    title: 'Product characteristics',
                    subtitle: 'test test tess test test tess test test tess test test tess test test tess'
                },
                {
                    name: 'Reviews',
                    title: 'Product reviews',
                    subtitle: 'test test tess test test tess test test tess test test tess test test tess test test tess test test tess test test tess test test tess test test tess'
                },                    
            ],
            currentTab: 0
        }
    },
    methods: {
        clickOnTab(item, i){
            this.tabs.forEach((tab) => {
                tab.active = false
            })
            this.currentTab = i
            item.active = true
        }
    }
}
</script>

<style lang="scss" scoped>
.item__body {
    padding-top: 7.5rem;
    position: relative;
}
.item__general_img {
    display: block;
    height: 15.7rem;
    margin: 0 auto;
    text-align: center;
}
.item__like {
    position: absolute;
    right: 1.5rem;
    top: 7.5rem;
    svg {
        width: 1.8rem;
        height: 1.8rem;
    }
}
.slider {
    margin: 1rem auto 1.2rem auto;
    width: 27rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        width: 1rem;
        height: 1rem;
    }
}
.slider__left-arrow {
    transform: rotate(180deg);
    path {
    stroke: #009D65;
    }

}
.slider_img {
    width: 5rem;
}
.slider__right-arrow {
}
.item__tabs {
    
}
.item__tabs_header {
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: .1rem solid #F0F1F3;
    border-top: .1rem solid #F0F1F3;
    gap: 1.9rem;
    padding-left: 1.5rem;
    p {
        position: relative;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.7rem;
        &.active {
            font-weight: 600;
            color: #009D65;
        }
    }
    p.active::before{
        content: '';
        background: #009D65;
        position: absolute;
        top: 3.4rem;
        height: .1rem;
        width: 100%;
    }
    
}
.item__tabs_title {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    width: 28rem;
    padding: 1.2rem 0;
}
.item__tabs_subtitle {
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-bottom: 1.2rem;
}
.percents {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.8rem;
    p {
        font-size: 1.2rem;
        line-height: 1.5rem;
    }
}
.percents__line_body {
    display: flex;
}
.percents__line {
    height: .6rem;
    background: #009D65;
    width: 5rem;
    &:nth-child(1) {
        width: 3.9rem;
        border-radius: 10rem 0 0 10rem;
    }
        &:nth-child(4) {
        width: 3.9rem;
        opacity: .1;
        border-radius: 0 10rem 10rem 0;
    }
    &:nth-child(2) {
        width: 8.1rem;
        opacity: .5;
    }
    &:nth-child(3) {
        width: 7.7rem;
        opacity: .2;
    }
}
.percents__top {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 19.8rem;
    left: 3.5rem;
}
.percents__bottom {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 19.8rem;
    left: 3.5rem;
    .percents__item_triangle {
        transform: rotate(180deg);
        path {
            opacity: 1;
        }
    }
    .percents__item {
        background: #009D65;
        p {
            color: white;
        }
    }
}
.percents__item_body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:nth-child(1) {
        margin-left: 1rem;
    }
}
.percents__item {
    background: #E6F5F0;
    border-radius: 10rem;
    padding: .2rem .7rem;
    p {
        color: #009D65;
    }
}
.percents__item_triangle {
        width: .6rem;
        height: .3rem;
}
.percents__top {
    .percents__item_body {
    &:nth-child(1), &:nth-child(2) {
        margin-left: .2rem;
    }
}
}
.percents__bottom {
    .percents__item_body {
    &:nth-child(1) {
        margin-left: .4rem;
    }
    &:nth-child(2) {
        margin-left: .4rem;
    }
        &:nth-child(3) {
        margin-right: .2rem;
    }
}
}
.item__footer {
    width: 100%;
    display: flex;
    height: 4rem;
    margin-top: 3rem;
}
.item__price {
    background: #009D65;
    width: 18.6rem;
    display: flex;
    align-items: center;
    padding-left: 1.4rem;
    color: white;
    font-weight: 600;
    font-size: 1.4rem;
}
.item__buy {
    background: #058657;
    width: 13.4rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: white;
    display: flex;
    padding: 0 1.4rem;
    align-items: center;
    justify-content: space-between;
}
</style>