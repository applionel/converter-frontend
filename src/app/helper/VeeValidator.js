import Vue from 'vue';
import VeeValidate from 'vee-validate';

const dictionary = {
    en: {
        attributes: {
            'password confirmation': 'password'
        }
    },
};

export default Vue.use(VeeValidate, {
    events: 'blur',
    dictionary: dictionary
});