<template>
    <footer>
        <div class="constrainer wrapper">
            <div class="left">
                <p class="bodyText bold alternate-color">Support This Website</p>
                <div class="icon-container">
                    <a href="https://www.google.com" class="patreonLogo">
                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.717 0C31.043 0 37 6.247 37 13.9015C37 21.5367 31.043 27.7452 23.717 27.7452C16.3725 27.7452 10.3785 21.5367 10.3785 13.9015C10.3785 6.247 16.3725 0 23.717 0ZM0 37H6.475V0H0V37Z"/>
                        </svg>
                    </a>
                    
                    <a href="https://www.google.com" class="buyCoffeeLogo">
                        <svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.77778 37H20.2222C20.5698 37.0001 20.9058 36.8396 21.1684 36.548C21.4311 36.2565 21.6029 35.8534 21.6522 35.4127L24.3634 11.1H26V7.4H24.0038L21.5136 1.02305C21.3939 0.71553 21.2097 0.456854 20.9816 0.276119C20.7535 0.0953833 20.4905 -0.000241611 20.2222 4.58451e-07H5.77778C5.23033 4.58451e-07 4.73056 0.3959 4.485 1.02305L1.99622 7.4H0V11.1H1.63656L4.34778 35.4127C4.39714 35.8534 4.56891 36.2565 4.83157 36.548C5.09424 36.8396 5.43019 37.0001 5.77778 37ZM20.826 16.65H5.174L4.55433 11.1H21.4442L20.826 16.65ZM7.03011 33.3L6.41044 27.75H19.5881L18.9684 33.3H7.03011ZM6.67044 3.7H19.3296L20.774 7.4H5.226L6.67044 3.7Z"/>
                        </svg>
                    </a>

                </div>
            </div>
            <div class="right">
                <p class="bodyText bold alternate-color">Subscribe To The News Letter</p>
                <div class="inputBox">
                    <input type="text" placeholder="Enter Email Id" class="bodyText">
                    <a class="button" href="https://www.google.com">
                        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 23L33 12L19 1" stroke="#F4F3EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33 12L1 12" stroke="#F4F3EE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
                <a href="https://www.google.com" class="bodyText bold accent-color">Contact Me</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/setting' as *;
@import '../../assets/scss/constrainer.scss';

footer{
    background-color: map-get($dark,"dark");
    padding: 0 var(--spacing-normal);

    @include for-tablet-portrait-up{
        height: 125px;
    }
}

.wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: var(--spacing-large);

    @include for-tablet-portrait-up{
        flex-direction: row;
        justify-content: space-between;

        gap: 0px;

        align-items: center;

        height: 100%;
    }
}

.left{
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);

    text-align: center;
    @include for-tablet-portrait-up{
        text-align: left;
    }

    .icon-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: var(--spacing-large);

        a{
            cursor: pointer;
            svg{
                fill: map-get($light,"light");
            }
            &:hover{
                svg{
                    fill: $accent;
                }
            }
        }
    }
}
.right{
    text-align: center;
    @include for-tablet-portrait-up{
        text-align: left;
    }

    .inputBox{
        display: flex;
        height: 37px;

        input{
            width: 80%;
            height: 100%;
            padding-left: var(--spacing-small);

            outline: none;
        }
        .button{
            flex: 0 0 20%;

            display: flex;
            justify-content: center;
            align-items: center;

            height: 100%;
            background-color: $accent;
        }
    }
}
</style>