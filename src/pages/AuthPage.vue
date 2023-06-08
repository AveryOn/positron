<template>
    <div class="auth">

        <div class="auth__block-auth">

            <div class="stick"></div>

            <form class="auth__form" @submit.prevent method="post">
                <div class="form-content">
                    <input-comp class="auth__form-input" :placeholder="'Hash / UUID'" v-model="uuid">
                    </input-comp>
                    <input-comp class="auth__form-input" id="auth_pass-id" :placeholder="'password'" v-model="pass"
                        type="password">
                    </input-comp>
                    <button-comp class="auth__form-btn" @click='manag'>Auth</button-comp>
                </div>
            </form>

        </div>

    </div>
</template>

<script setup>
import AuthController from '@/controllers/auth_controller';
import { onMounted, ref } from 'vue';
import { enc_hex } from '@/crypto_alg/encrypte_controller';
import { PosholNaxuiZaebalBlyatSukaEbuchay } from '@/plugins/pluginState';
import { computed } from 'vue';
import { useStore } from 'vuex';


const store = useStore();
function manag() {
    const theme = computed(() => store.state.theme.theme);
    console.log(theme.value);
    // const {auth} = ParseStateManager();
    // console.log(auth.value);
    // console.log(PosholNaxuiZaebalBlyatSukaEbuchay(useStore, computed));

}

const pass = ref('');
const uuid = ref('');
function verify() {
    AuthController.uuid_hex = uuid.value;
    AuthController.password = pass.value;
    // const reulst_verify = AuthController.verify();

    // if (reulst_verify) {
    //     document.cookie = `user_uuid=${uuid.value}`;
    //     document.cookie = `use_pass=${pass.value}`;
    //     console.log(enc_hex(pass.value));
    // } else {
    //     document.cookie = `user_uuid=undefined`;
    //     document.cookie = `use_pass=undefined`;
    // }
}

///////////////////////////////////////////////////////////////////////////// Legacy code ///////////////////////////////////////////////////////
// import { useStore } from 'vuex';
// import { computed} from 'vue';
// const store = useStore()
// function parseState() {
//     let dynamic_array = Object
//         .keys(store.state)
//         .map(
//             it => [it, computed(() => store.state[it])]
//         )
//     return Object.fromEntries(dynamic_array)
// }
// const {count, some} = parseState()
///////////////////////////////////////////////////////////////////////////// Legacy code ///////////////////////////////////////////////////////



</script>

<style lang="scss" scoped>
.auth {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100vh;
    background-color: #fff;
    background-color: var(--main-color);
    font-family: var(--font-family);
    letter-spacing: calc(var(--auto-size) * 0.16);
    font-weight: 500;
}

.auth__block-auth {
    position: relative;
    width: calc(var(--auto-size) * 30);
    height: calc(var(--auto-size) * 22);
    background-color: var(--block-color);
    border-radius: var(--radius);
}

.stick {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 170px;
    height: 20px;
    border-radius: var(--radius);
    background-color: var(--green-light);
}

.auth__form {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .form-content {
        display: flex;
        flex-direction: column;
    }
}

.auth__form-input {
    margin: 10px 0;
    color: rgba(255, 255, 255, 0.5);
    padding: calc(var(--auto-size));
}

.auth__form-btn {
    align-self: flex-end;
    margin-top: 30px;
}
</style>