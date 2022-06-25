<template>
    <div class="product-wait container">
        <img class="product-wait__bg" src="@/assets/img/bg-lines1.svg" alt="">
        <h2 class="title">Why do I Have to Wait <span>for my Product?</span> </h2>
        <div class="green-line product-wait__green-line"></div>
        <div class="product-wait__items">
            <div class="product-wait__item">
                    <img src="@/assets/img/wait-block-1.svg" alt="">
                    <p class="product-wait__item_text"> <span>Our manufactures say the bigger</span> <br>the oeders quantity - the less you pay</p>
            </div>
            <div class="product-wait__item">
                    <img src="@/assets/img/wait-block-2.svg" alt="">
                    <p class="product-wait__item_text"> <span>We find tou the other 100-10 000 people</span> that want the same product as you.</p>
            </div>
            <div class="product-wait__item">
                    <img src="@/assets/img/wait-block-3.svg" alt="">
                    <p class="product-wait__item_text"> <span>Once the order is placed, it will be</span> shippend out within a month.</p>
            </div>                                 
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.product-wait__bg {
    position: absolute;
    top: 7.4rem;
    width: 32rem;
    left: -1.5rem;
    z-index: -1;
}
.product-wait__green-line{
    margin-top: 1.6rem;
}
.product-wait {
    position: relative;
    margin-top: 5rem;
    svg {
        width: 1.5rem;
        height: 1.5rem;
        padding-bottom: 3.2rem;
    }
    .product-wait__dotted-line {
        height: 8.4rem;
        position: absolute;
        top: 13.4rem;
        left: 0.7rem;
    }
    .product-wait__dotted-line-2 {
        top: 25.4rem;
    }
}
.product-wait__items {
    display: flex;
    flex-direction: column;
}
.product-wait__item {
    display: flex;
    gap: 2.5rem;
    align-items: center;
    margin-top: 5rem;
    img {
        width: 3rem;
        height: 3rem;
    }
    &:nth-child(1) {
        margin-top: 2.5rem;
    }

}
.product-wait__item_text {
    span {
        font-weight: 600;
    }
    font-size: 1.2rem;
    line-height: 1.5rem;
}
</style>