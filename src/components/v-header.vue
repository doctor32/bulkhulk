<template>
    <header>
        <div class="container header">
            <!-- <div class="burger__body">
                <div class="burger"
                :class="this.$store.state.menuOpened ? 'active' : '' "
                ></div>
            </div> -->
            <a href="#" class="header__logo">
                <img src="@/assets/img/logo.svg" alt="logo img">
            </a>
            <!-- <div class="search">
                <input type="text" v-show="searchActive"
                placeholder="Search here"
                class="search__input"
                :class="searchActive ? 'active' : ''"
                >
                <svg @click="searchActive=!searchActive"
                    :class="searchActive ? 'active' : ''"
                    class="search__svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z" stroke="#252831" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.5 16.5L15 15" stroke="#252831" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div> -->
        </div>

        <div class="menu__body" v-if="this.$store.state.menuOpened">
          <ul class="menu__list">
            <li> <a href="">About</a> </li>
            <li> <a href="">Market</a> </li>
            <li> <a href="">Test Menu</a> </li>
          </ul>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
           searchActive: false 
        }
    },
    methods: {
        openMenu() {
            this.$store.state.menuOpened = !this.$store.state.menuOpened
            this.$store.state.menuOpened ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '' 
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    width: 100%;
    top: 0;
    position: fixed;
    background: white;
    border-bottom: .1rem solid #E1E1E1;
    z-index: 2;
}
.header {
    height: 6.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.burger {
    z-index: 101;
    width: 2rem;
    background: black;
    height: .15rem;
    position: relative;
    border-radius: 1rem;
    &.active {
        height: 0;
    }
    &::before {
        content: '';
        position: absolute;
        top: .6rem;
        width: 100%;
        height: .15rem;
        background-color: black;
        border-radius: 1rem;
        transition: .3s;
    }
    &::after {
        content: '';
        position: absolute;
        top: -.6rem;
        width: 100%;
        height: .15rem;
        background-color: black;
        border-radius: 1rem;
        transition: .3s;
    }
    &.active::after{
        transform: rotate(45deg);
        top: 0;
        background: white;
    }
    &.active::before{
        transform: rotate(-45deg);
        top: 0;
        background: white;
    }
}
.header__logo {
    img {
        width: 10.4rem;
        height: 1.5rem;
    }
}
.search {
    position: relative;
    display: flex;
    align-items: center;
    .search__svg  {
        width: 1.8rem;
        height: 1.8rem;
        &.active {
            position: absolute;
            top: .2rem;
            right: 0.5rem;
            width: 1.5rem;
            height: 1.5rem;
        }
    }
    .search__input {
        font-size: 1.2rem;
        width: 0;
        box-sizing: border-box;
        padding: 0 2rem 0 0;
        height: 2.2rem;
        border: none;
        border-bottom: .05rem rgb(98, 98, 98) solid;
        transition: 1s;
        &.active {
            width: 13rem;
            transition: 1s;
        }
        &:focus {
            outline: none;
            border-bottom: .05rem solid #058657;
        }
    }
}
.menu__body {
    position: fixed;
    top: 0;
    left: 0;
    background: #009D65;
    width: 100%;
    height: 100vh;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s;
}
.menu__list {
    a {
        font-size: 1.8rem;
    }
    li {
        padding-top: 2rem;
        text-align: center;
    }
}
</style>