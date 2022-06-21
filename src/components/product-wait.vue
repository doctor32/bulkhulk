<template>
    <div class="product-wait container">
        <img src="@/assets/img/dotted-line.svg" alt="" class="product-wait__dotted-line">
        <img src="@/assets/img/dotted-line.svg" alt="" class="product-wait__dotted-line product-wait__dotted-line-2">
        <h2 class="title">Why do I Have to Wait for my Product?</h2>
        <div class="product-wait__items">
            <div class="product-wait__item">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="6.5" r="5.5" stroke="#009D65" stroke-width="2"/>
                </svg>
                <div class="product-wait__item_right">
                    <p class="product-wait__item_num">01</p>
                    <p class="product-wait__item_text">Our manufactures say the bigger the oeders quantity - the less you pay</p>
                </div>
            </div>
            <div class="product-wait__item">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="6.5" r="5.5" stroke="#009D65" stroke-width="2"/>
                </svg>
                <div class="product-wait__item_right">
                    <p class="product-wait__item_num">02</p>
                    <p class="product-wait__item_text">We find tou the other 100-10 000 people that want the same product as you.</p>
                </div>
            </div>
            <div class="product-wait__item">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="6.5" r="5.5" stroke="#009D65" stroke-width="2"/>
                </svg>
                <div class="product-wait__item_right">
                    <p class="product-wait__item_num">03</p>
                    <p class="product-wait__item_text">Once the order is placed, it will be shippend out within a month.</p>
                </div>
            </div>                        
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.product-wait {
    position: relative;
    margin-top: 9.5rem;
    svg {
        width: 1.5rem;
        height: 1.5rem;
        padding-bottom: 3.2rem;
    }
    .product-wait__dotted-line {
        height: 8.4rem;
        position: absolute;
        top: 11.8rem;
        left: 0.4rem;
    }
    .product-wait__dotted-line-2 {
        top: 22.8rem;
    }
}
.product-wait__items {
    display: flex;
    flex-direction: column;
}
.product-wait__item {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 3.3rem;

}
.product-wait__item_right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.product-wait__item_num {
    font-weight: 600;
    font-size: 3rem;
    line-height: 3.7rem;
    color: #009D65;
}
.product-wait__item_text {
    font-size: 1.2rem;
    line-height: 1.5rem;
}
</style>