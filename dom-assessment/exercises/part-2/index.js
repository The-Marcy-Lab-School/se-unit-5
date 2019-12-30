document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#contact')
  new EditableContactInfo(el)
})

class EditableContactInfo {
  constructor(el){
    this.el = el
    this.nameEl = this.createNameEl()
    this.state = this.setInitialState()

    this.editForm = this.createEditNameEl()
  }

  createNameEl(){
    const name = this.el.querySelector('#name')
    name.addEventListener('dblclick', () => {
      this.toggleEditing()
    })

    return name
  }

  setInitialState(){
    return {
      name: this.nameEl.innerText,
      editing: false
    }
  }

  createEditNameEl(){
    console.log("OK")
    const form = document.createElement('form')
    const input = document.createElement('input')
    input.value = this.state.name;
    const submit = document.createElement('input')
    submit.type = 'submit'

    form.appendChild(input)
    form.appendChild(submit)

    input.addEventListener('change', (e) => {
      this.state.name = e.target.value
    })

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.toggleEditing()
    })

    return form
  }

  toggleEditing(){
    if(this.state.editing){
      this.nameEl.innerText = this.state.name
      this.el.appendChild(this.nameEl)
      this.el.removeChild(this.editForm)
      this.state.editing = false
    } else {
      this.editForm[0].value = this.state.name;
      this.el.appendChild(this.editForm)
      this.el.removeChild(this.nameEl)
      this.state.editing = true
    }
  }
}
