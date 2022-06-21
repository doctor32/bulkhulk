<template>
    <div class="affordable container">
        <h2 class="title">How are our products the most affordable on the market?</h2>
        <div class="affordable__items">
            <div class="affordable__item">
                <img src="@/assets/img/affordable1.svg" alt="" class="affordable__img">
                <p class="affordable__item_text">We source our products directly from the manufacturer and buy in bulk.</p>
            </div>
            <div class="affordable__item">
                <img src="@/assets/img/affordable2.svg" alt="" class="affordable__img">         
                <p class="affordable__item_text">Once the minimum order quantity is hit- we order the product.</p>
            </div>
            <div class="affordable__item">
                <img src="@/assets/img/affordable3.svg" alt="" class="affordable__img">           
                <p class="affordable__item_text">You can see expected ship out time by clicking on the product.</p>
            </div>
            <div class="affordable__item">
                <img src="@/assets/img/affordable4.svg" alt="" class="affordable__img">           
                <p class="affordable__item_text">Ready to wait a little bit? Get your product for the cheapest price possible!</p>
            </div>
              
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.affordable {
    margin-top: 4.3rem;
}
.affordable__items {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.affordable__item {
    display: flex;
    gap: 1.7rem;
    &:nth-child(1) {
        margin-top: 2.5rem;
    }
}
.affordable__img {
    width: 2.4rem;
}
.affordable__item_text {
    width: 21rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
}
</style>