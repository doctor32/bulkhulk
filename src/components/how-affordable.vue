<template>
    <div class="affordable container">
        <img class="affordable-wait__bg" src="@/assets/img/bg-lines2.svg" alt="" />
        <div class="green-line affordable__green-line"></div>
        <h2 class="title">How are our products the most affordable <span>on the market?</span> </h2>
        <div class="affordable__items">
            <div class="affordable__item">
                <div class="affordable__item__img_body"><img src="@/assets/img/affordable1.svg" alt="" class="affordable__img"></div>
                <p class="affordable__item_text">   <span>We source our products directly from</span>  the manufacturer and buy in bulk.</p>
            </div>
            <div class="affordable__item">
                <div class="affordable__item__img_body"><img src="@/assets/img/affordable2.svg" alt="" class="affordable__img"></div>      
                <p class="affordable__item_text">   <span>Once the minimum order quantity is</span>  hit- we order the product.</p>
            </div>
            <div class="affordable__item">
                <div class="affordable__item__img_body"><img src="@/assets/img/affordable3.svg" alt="" class="affordable__img"></div>         
                <p class="affordable__item_text">   <span>You can see expected ship out time</span> by clicking on the product.</p>
            </div>
            <div class="affordable__item">
                <div class="affordable__item__img_body"><img src="@/assets/img/affordable4.svg" alt="" class="affordable__img"></div>         
                <p class="affordable__item_text">   <span>Ready to wait a little bit?</span> <br> Get your product for the cheapest price possible!</p>
            </div>
              
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.affordable__green-line {
    margin-bottom: 1.2rem;
}
.affordable {
    margin-top: 9.5rem;
    position: relative;
}
.affordable-wait__bg{
    position: absolute;
    left: -1.5rem;
    width: 32rem;
    z-index: -1;
    bottom: -3rem;
}
.affordable__items {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
.affordable__item {
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    align-items: center;
    text-align: center;
    &:nth-child(1){
        margin-top: 2.8rem;
    }
}
.affordable__img {
    width: 2.4rem;
}
.affordable__item_text {
    width: 21rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
    span {
        font-weight: 600;
    }
}
.affordable__item__img_body {
        background: #009D65;
        border-radius: .5rem;
        box-shadow: 0 .4rem 1.4rem rgba(0, 157, 101, 0.2);
        padding: .8rem;
    }
</style>