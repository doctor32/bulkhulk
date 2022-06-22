<template>
    <form @submit.prevent>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        @click="closeForm"
        >
            <path d="M9.16992 14.83L14.8299 9.17004" stroke="#B1B1B1" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.8299 14.83L9.16992 9.17004" stroke="#B1B1B1" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#B1B1B1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <img src="@/assets/img/form__success.png" alt="" class="form__img" v-if="formFilled">
        <h3 class="form__title">{{formFilled ? 'Thank you!!!' : 'Subscription'}}</h3>
        <p class="form__subtitle">{{formFilled ? 'Your application has been accepted' : 'We will send you similar products at a discount'}}</p>
        <div class="form__control" v-if="!formFilled">
            <input type="text" placeholder="Name and surname" v-model="name">
            <p class="form__error"></p>
        </div>
        <div class="form__control" v-if="!formFilled">
            <input type="tel" placeholder="Phone number" v-model="phone">
            <p class="form__error"></p>
        </div>
        <div class="form__control" v-if="!formFilled">
            <input @input="emailValidation" type="email" placeholder="E-mail" v-model="email">
            <p v-if="isEmailInvalid" class="form__error">You entered your email incorrectly</p>
        </div>
        <button @click="sendForm" v-if="!formFilled"
        :disabled="isEmailInvalid"
        >Send</button>
        <button @click="closeForm" v-else>Continue purchase</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                formFilled: false,
                name: '',
                email: '',
                phone: '',
                isEmailInvalid: false,
                // eslint-disable-next-line
                emailRegex: new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
            }
        },
        methods: {
            sendForm() {
                this.emailValidation()
                if (!this.isEmailInvalid) {
                    this.formFilled = true
                }

            },
            closeForm() {
                this.$emit('close')
            },
            emailValidation() {
                if (this.emailRegex.test(this.email)) {
                    this.isEmailInvalid = false
                } else {
                    this.isEmailInvalid = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
form {
    svg {
        align-self: flex-end;
        padding: 1.5rem;
        &:hover {
            path {
                stroke: green;
            }
        }
    }
    background: white;
    min-height: 43rem;
    width: 29rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        &:disabled {
            background: gray;
        }
        width: 24rem;
        height: 4rem;
        background: #009D65;
        border-radius: .5rem;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.7rem;
        color: #FFFFFF;
        margin-bottom: 6.5rem;
    }
}
.form__img {
    padding-top: 5rem;
    width: 5rem;
    height: 5rem;
}
.form__title {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.5rem;
    padding-top: 2rem;
}
.form__subtitle {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    text-align: center;
    padding: 1.4rem 0 1.9rem 0;
    width: 22rem;
}
.form__control {
    margin-bottom: 1.5rem;
    input {
        box-sizing: border-box;
        width: 24rem;
        height: 4rem;
        border: .1rem solid #D3D3D3;
        border-radius: .5rem;
        padding-left: 1.8rem;
        &::placeholder {
            font-weight: 400;
            font-size: 1.4rem;
            line-height: 1.7rem;
            color: #B1B1B1;
        }
        &:focus {
            outline: none;
        }
    }
}
.form__error {
    padding-top: .5rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: #FF3838;
}
</style>