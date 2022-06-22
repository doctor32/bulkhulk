<template>
    <div class="item__tabs">
        <div class="item__tabs_header">
            <p 
                v-for="item, i in tabs" :key="i"
                :class="item.active === true ? 'active' : ''"
                @click="clickOnTab(item, i)"
            >
            {{item.name}}
            </p>
        </div>
        <div class="container" v-if="tabIndex === 0">
            <h3 class="item__tabs_title">{{item.name}}</h3>
            <p class="item__tabs_subtitle">{{item.description}}</p>
        </div>
        <div class="container" v-if="tabIndex === 1">
            <p class="item__tabs_subtitle" v-for="subtitle, i in item.subtitle" :key="i">{{subtitle}}</p>
        </div>
        <div class="container" v-if="tabIndex === 2">
            <p class="item__tabs_subtitle">{{item.review}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
    data() {
        return {
            tabIndex: 0,
            tabs: [
                {
                    name: 'About the product',
                    active: true
                },
                {
                    name: 'Characteristics',
                    active: false
                },
                {
                    name: 'Reviews',
                    active: false
                },                    
            ],
        }
    },
    methods: {
        clickOnTab(item, i) {
            this.tabs.forEach((tab) => {
                tab.active = false
            })
            item.active = true
            this.tabIndex = i
        }
    }
}
</script>

<style lang="scss" scoped>
.item__tabs_header {
    height: 5rem;
    display: flex;
    align-items: center;
    border-bottom: .1rem solid #F0F1F3;
    border-top: .1rem solid #F0F1F3;
    gap: 1.9rem;
    justify-content: center;
    .item__tabs_header-slide {
        display: flex;
        align-items: center;
    }
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
</style>