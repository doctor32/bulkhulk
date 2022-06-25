<template>
    <div class="item__tabs">
        <!-- <div class="item__tabs_header">
            <p 
                v-for="item, i in tabs" :key="i"
                :class="item.active === true ? 'active' : ''"
                @click="clickOnTab(item, i)"
            >
            {{item.name}}
            </p>
        </div> -->

            <swiper class="item__tabs_header swiper__class"
                :slides-per-view="3"
                :space-between="0"
                @slideChange="swipe"
                @activeIndexChange="swipe(swiper)"
            >
                <swiper-slide 
                    style="width: 200px;"  
                    class="swiper__slide" 
                    v-for="item, i in tabs" :key="i"
                    @click="clickOnTab(item, i)"
                    >
                    <p>{{item.name}}</p>
                </swiper-slide>
                <swiper-slide class="swiper__slide"></swiper-slide>
                <swiper-slide class="swiper__slide"></swiper-slide>
            
            </swiper>

        <div class="container" v-if="tabIndex === 0">
            <h3 class="item__tabs_title">{{item.name}}</h3>
            <p class="item__tabs_subtitle">{{item.description}}</p>
                                        
        </div>
        <!-- <div class="container" v-if="tabIndex === 1">
            <p class="item__tabs_subtitle" v-for="subtitle, i in item.subtitle" :key="i">{{subtitle}}</p>
        </div> -->
        <div class="container reviews" v-if="tabIndex === 1">
            <div class="review__body">
                <div class="review__top">
                    <p class="review__name item__tabs_title">Jenny Lawrence</p>
                    <div class="review__country">
                        <img src="@/assets/img/countries/usa.png" alt="">
                        MA
                    </div>
                </div>
                <div class="review__rate">
                    <p class="review__rate_num">5/5</p>
                    <div class="review__rate_star">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                    </div>
                </div>
                <p class="item__tabs_subtitle item__tabs_subtitle">Great quality, there was no damage, and overall I found the product very useful. BulkHulk is a cool platform and I am looking forward to having more orders with them. </p>
            </div>
            <div class="review__body">
                <div class="review__top">
                    <p class="review__name item__tabs_title">Ignacio</p>
                    <div class="review__country">
                        <img src="@/assets/img/countries/usa.png" alt="">
                        FL
                    </div>
                </div>
                <div class="review__rate">
                    <p class="review__rate_num">5/5</p>
                    <div class="review__rate_star">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                    </div>
                </div>
                <p class="item__tabs_subtitle item__tabs_subtitle">I was very skeptical about working with BulkHulk, but the product has arrived very quickly. Also I got it for a super cheap price. </p>
            </div>
            <div class="review__body">
                <div class="review__top">
                    <p class="review__name item__tabs_title">Mahmud </p>
                    <div class="review__country">
                        <img src="@/assets/img/countries/usa.png" alt="">
                        NY
                    </div>
                </div>
                <div class="review__rate">
                    <p class="review__rate_num">5/5</p>
                    <div class="review__rate_star">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                        <img src="@/assets/img/review-star.svg" alt="star img">
                    </div>
                </div>
                <p class="item__tabs_subtitle item__tabs_subtitle">Very good product and very cheap. Nice platform which lets you join in on a bulk order with other people or businesses. </p>
            </div>                        
        </div>
        <div class="container" v-if="tabIndex === 2">
            <h3 class="item__tabs_title">SEMKO DERI VE TEKSTIL SAN.TIC.LTD.STI</h3>
            <div class="manufacturer__country item__tabs_subtitle">
                <p>Country: Turkey</p>
                <img src="@/assets/img/countries/turkey.png" class="manufacturer__country_img">
            </div>
            <p class="item__tabs_subtitle ">SMC BY SEMCO founded by title "SMC BY SEMCO DERI VE TEKSTIL SAN. TIC. LTD. STI" in 1986; It has acquired an important place with uncompromised quality since its establishment.SMC BY SEMCO successfully represent our country abroad with 25 years experience in confection. Attach importance to modern, stylish and comfortable design SMC BY SEMCO; "SMC by SEMCO" brands for tenacios men. SMC BY SEMCO products can easily preferred in Daily, at work, events and organizations.With producing jacket, pants and shirts for men; SMC by SEMCO offering a wide range of products for men. SMC by SEMCO pride for making an important contribution to growing Turkish economy by exporting shirts, pants and jackets to primarily Russian Federation, east and middle europe, Middle East, Nort Africa, Caucasian and Balkan countries including from the Europe to America, from Africa to Australia more than 50 countries.</p>
        </div>
        <div class="container refund" v-if="tabIndex === 3">
            <img src="@/assets/img/security.png" class="refund_img">
            <h3 class="item__tabs_title">Shop with Confidence!</h3>
            <p class="item__tabs_subtitle refund__subtitle">We want you to be completely satisfied with your purchase on Wish. Retirn all products within 30 days of delivery if they are not up to your satisfacrion.</p>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
export default {
    components: { Swiper, SwiperSlide },
    props: ['item'],
    data() {
        return {
            tabIndex: 0,
            tabs: [
                {
                    name: 'Item Description',
                    active: true
                },
                // {
                //     name: 'Characteristics',
                //     active: false
                // },
                {
                    name: 'Customer Reviews',
                    active: false
                },
                {
                    name: 'Manufacturer Information',
                    active: false
                },
                {
                    name: '30 Day Return & Refund',
                    active: false
                }                  
            ],
        }
    },
    methods: {
        clickOnTab(i) {
            console.log(i);
        },
        swipe(swiper) {
           const swiperObj = Object.assign({}, swiper)
           this.tabIndex = swiperObj.activeIndex
        }
    }
}
</script>

<style lang="scss" scoped>

.swiper-slide-active{
    p {
        color: #009D65;
    }
    &::before {
        content: '';
        background: #009D65;
        position: absolute;
        top: 4.9rem;
        height: .1rem;
        width: 90%;
    }
}
.swiper-slide {
    width: auto !important;
    padding-right: 1.3rem;
    display: flex;
    align-items: center;
    &:first-child {
        margin-left: 1.5rem;
    }
}
.item__tabs {
    margin-bottom: 2.5rem;
}
.item__tabs_header {
    height: 5rem;
    border-bottom: .1rem solid #F0F1F3;
   // border-top: .1rem solid #F0F1F3;
    p {
        position: relative;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.7rem;
        white-space: nowrap;
        &.active {
            color: #009D65;
        }
    }

    
}
.item__tabs_title {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    width: 28rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
}
.item__tabs_subtitle {
    &:first-child {
        padding-top: 1.2rem;
    }
    padding-bottom: .5rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
}
.manufacturer__country {
    display: flex;
    gap: .4rem;
    align-items: center;
}
.manufacturer__country_img {
    width: 1.9rem;
    height: 1.2rem;
}
.refund {
    text-align: center;
    .refund_img {
        width: 3.7rem;
        margin-top: 2rem;
    }
    .refund__subtitle {
        margin-top: .7rem;
    }
}
.reviews {
    margin-top: 1.2rem;
}
.review__body {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding-bottom: 1.2rem;
    border-bottom: .1rem solid #F0F1F3;
;
}
.review__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}
.review__name {
    padding: 0;
}
.review__country {
    font-size: 1.2rem;
    display: flex;
    gap: .6rem;
    img {
        width: 1.9rem;
        height: 1.3rem;
    }
}
.review__rate {
    margin-bottom: .7rem;
    display: flex;
    align-items: center;
    gap: .5rem;
}
.review__rate_num {
    font-size: 1.4rem;
    line-height: 1.7rem;
}
.review__rate_star {
    img {
        width: 1.5rem;
        padding-right: .4rem;
    }
}

</style>