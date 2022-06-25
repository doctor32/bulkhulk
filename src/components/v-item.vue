<template>
    <div class="item__body">
        <!-- <div class="item__like">
            <svg @click="favorites = !favorites" width="18" height="18" viewBox="0 0 18 18" :fill="favorites ? '#FF3838' : 'none'" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51745C1.5 4.19995 3.3675 2.32495 5.67 2.32495C7.035 2.32495 8.2425 2.98495 9 4.00495C9.7575 2.98495 10.9725 2.32495 12.33 2.32495C14.6325 2.32495 16.5 4.19995 16.5 6.51745C16.5 11.7675 11.64 14.865 9.465 15.6075Z" :stroke="favorites ? 'none' : '#252831'" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div> -->

        <item-image-slider
            :images="images"
            @nextSlide="nextSlide"
            @prevSlide="prevSlide"
            @clickOnImg="clickOnImg"
        />
        <div class="item__top_body">
            <div class="item__top container">
            <div class="item__top_line"></div>
                <div class="delivery">
                    <img src="@/assets/img/delivery.png" alt="">
                    <p class="delivery__title">Delivery time:</p>  
                    <p>20-27 days</p>
                </div>
                <div class="percents">
                    <p>0</p>
                    <div class="percents__line_body">
                        <div class="percents__line"></div>
                        <div class="percents__line"></div>           
                    </div>
                    <p>1000</p>

                    <div class="percents__top">
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
                            <div class="percents__item"><p>{{$store.state.items[this.$route.params.id - 1].price}}$</p></div>
                        </div>
                    </div> 

                </div>
            </div>
        </div>
        <item-description 
            :item="$store.state.items[this.$route.params.id - 1]"
        />

        <div class="item__footer" v-if="!this.$store.state.menuOpened">
            <div class="item__price">{{$store.state.items[this.$route.params.id - 1].price}}$</div>
            <button class="item__buy" @click="openForm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.625 5.75251V5.02501C5.625 3.33751 6.9825 1.68001 8.67 1.52251C10.68 1.32751 12.375 2.91001 12.375 4.88251V5.91751" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.74999 16.5H11.25C14.265 16.5 14.805 15.2925 14.9625 13.8225L15.525 9.3225C15.7275 7.4925 15.2025 6 12 6H5.99999C2.79749 6 2.27249 7.4925 2.47499 9.3225L3.03749 13.8225C3.19499 15.2925 3.73499 16.5 6.74999 16.5Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.6216 9H11.6283" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.37088 9H6.37762" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Add to cart
            </button>
        </div>
        <v-popular></v-popular>


        <div class="modal__body" v-if="isFormOpened">
            <subscription-form
            @close="closeForm"
            ></subscription-form>
        </div>
    </div>
</template>

<script>
import 'swiper/css';
import SubscriptionForm from './subscription-form.vue';
import ItemImageSlider from './item/item-image-slider.vue';
import ItemDescription from './item/item-description.vue';
import VPopular from './v-popular.vue';
export default {
    components: { SubscriptionForm, ItemImageSlider, ItemDescription, VPopular },
    data() {
        return {
            itemIndex: 1,
            favorites: false,
            tabs: [
                {
                    name: 'About the product',
                    title: '14K Rose Gold Filled Micro Inlaid Diamond Ring for Women Delicate White Topaz Rings Manufacturer',
                    subtitle: ['They target is to provide high quality products, short lead time, competitive price and professional solution to their customers. They goal is to keep their customer valuable and win good reputation in the market. 30 day guarantee.'],
                    active: true
                },
                {
                    name: 'Characteristics',
                    title: 'Product characteristics',
                    subtitle: ["Model Number: YJ01",
                            "Material Type: Sterling Gold",
                            "Gender:  Women's",
                            "Jewelry Type: Rings",
                            "Rings Type: Wedding Bands or Rings",
                            "Style: CLASSIC",
                            "MOQ: 3 pcs",
                            "Material: Sterling Silver 925",
                            "Stone: Moonstone Natural Opal",
                            "Keyword: Silver Ring",
                            "Testing: Eco-friendly,nickel and lead free"],
                    active: false
                },
                {
                    name: 'Reviews',
                    title: 'Product reviews',
                    subtitle: ['I received this ring as a gift from my husband in addition to the earrings with diamonds from the 585 store, which were donated earlier. When buying earrings, the store provided a discount of 10,000 rubles for the next purchase, and the husband'],
                    active: false
                },                    
            ],
            imageSrc: [require('@/assets/img/items/mattress1.webp'), require('@/assets/img/item2.png'), require('@/assets/img/item3.png'), require('@/assets/img/item4.png'), require('@/assets/img/item5.png')],
            imageIndex: 0,
            currentTab: 0,
            isFormOpened: false
        }
    },
    computed: {
        images() {
            return this.$store.state.items[this.$route.params.id - 1].images
        },

    },
    methods: {
        clickOnTab(item, i){
            this.tabs.forEach((tab) => {
                tab.active = false
            })
            this.currentTab = i
            item.active = true
        },
        nextSlide() {
            console.log('next');
            // this.$store.state.items[this.$route.params.id - 1].push(this.$store.state.items[this.$route.params.id - 1].images[0])
            // this.imageSrc.shift()
            this.images.push(this.images[0])
            this.images.shift()
        },
        prevSlide() {
            console.log('prev');
            this.images.unshift(this.images[this.images.length - 1])
            this.images.splice(this.images.length - 1, 1)
        },
        clickOnImg(img) {
            this.images.splice(this.images.indexOf(img), 1);
            this.images.unshift(img)
        },
        openForm() {
            this.isFormOpened = true
            document.body.style.overflow = 'hidden' 
        },
        closeForm() {
            this.isFormOpened = false
            document.body.style.overflow = '' 
        },
        swipe() {
            console.log('loh');
        }
    },
    mounted() {
        console.log(this.$route);
    }
}
</script>

<style lang="scss" scoped>
.modal__body {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(217, 217, 217, 0.7);
    width: 100%;
    height: 100vh;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
}
.active-swiper {
    background: red;
}
.item__body {
    padding-top: 1rem;
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
.item__footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    margin-top: 3rem;
    z-index: 5;
}
.item__price {
    background: #009D65;
    width: 18.6rem;
    height: 4rem;
    display: flex;
    align-items: center;
    padding-left: 1.4rem;
    color: white;
    font-weight: 600;
    font-size: 1.4rem;
}
.item__buy {
    height: 4rem;
    background: #058657;
    width: 13.4rem;
    font-weight: 600;
    font-size: 1.4rem;
    color: white;
    display: flex;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    align-items: center;
    justify-content: space-between;
    svg {
        width: 1.8rem;
        height: 1.8rem;
    }
}
.delivery {
    display: flex;
    width: 8.1rem;
    height: 9rem;
    flex-direction: column;
    justify-content: center;
    background: #F5F5F5;
    gap: .4rem;
        img {
            width: 2.4rem;
        }
    .delivery__title {
        font-weight: 600;
    }
}
.percents {
    position: relative;
    display: flex;
    
    gap: 1rem;
    align-items: center;
    justify-content: end;
    height: 9rem;
    width: 20.7rem;
    background: #F5F5F5;
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
        width: 10rem;
        border-radius: 10rem 0 0 10rem;
    }
        &:nth-child(2) {
        width: 2rem;
        opacity: .1;
        border-radius: 0 10rem 10rem 0;
    }
}
.percents__top {
    position: absolute;
    top: 1.3rem;
    display: flex;
    justify-content: space-between;
    right: 3.9rem;
}
.percents__bottom {
    position: absolute;
    bottom: 1.3rem;
    display: flex;
    justify-content: space-between;
    right: 3.9rem;
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
.item__top {
    display: flex;
    justify-content: space-between;
    position: relative;
    .item__top_line {
        position: absolute;
        height: 9rem;
        background: white;
        width: .2rem;
        top: 0;
        left: 9rem;
        z-index: 2;
    }
}
.item__top_body {
    background: #F5F5F5;
}
</style>