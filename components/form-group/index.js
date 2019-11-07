import FormGroup from '../form/FormGroup'

FormGroup.install = Vue => {
  Vue.component(FormGroup.name, FormGroup)
}

export default FormGroup