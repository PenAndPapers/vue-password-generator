<template>
  <div class="password-generator-form">
    <form>
      <div class="form-group checkboxes">
        <div @click="validateAvailableChars(hasUpperCase = !hasUpperCase)">
          <label for="hasUpperCase">Uppercase</label>
          <div
            class="checkbox"
            :class="[hasUpperCase ? 'checked' : '']"
          />
        </div>
        <div @click="validateAvailableChars(hasLowerCase = !hasLowerCase)">
          <label for="hasLowerCase">Lowercase</label>
          <div
            class="checkbox"
            :class="[hasLowerCase ? 'checked' : '']"
          />
        </div>
        <div @click="validateAvailableChars(hasNumber = !hasNumber)">
          <label for="hasNumber">Number</label>
          <div
            class="checkbox"
            :class="[hasNumber ? 'checked' : '']"
          />
        </div>
        <div  @click="validateAvailableChars(hasSymbol = !hasSymbol)">
          <label for="hasSymbol">Symbol</label>
          <div
            class="checkbox"
            :class="[hasSymbol ? 'checked' : '']"
          />
        </div>
      </div>
      <div class="form-group">
        <div class="slidecontainer">
          <input
            type="range"
            class="slider"
            :min="minLength"
            :max="maxLength"
            v-model="passwordLength"
            @input="generatePassword"
          >
          <span>{{passwordLength}}</span>
        </div>
      </div>
    </form>
    <div class="password">
      <div class="password__action">
        <span
          class="lnr lnr-sync"
          title="Generate"
          @click="generatePassword($event)"
        />
        <span
          class="lnr lnr-book"
          title="Copy"
          @click="copyToClipBoard"
        />
      </div>
      <h4 class="password__generated">{{password}}</h4>
    </div>
    <VSnackBar :message="'Copied password'" :is-show="isShowSnackbar" />
  </div>
</template>

<script>
import VSnackBar from '@common/VSnackBar'
export default {
  name: 'VgeneratePasswordForm',
  components: {
    VSnackBar
  },
  data () {
    return {
      upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXTZ',
      lowerCase: 'abcdefghiklmnopqrstuvwxyz',
      numbers: '0123456789',
      symbols: '!@#$%^&*_+=~?{}[]()<>|/-:;',
      passwordChars: '',
      password: '',
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSymbol: true,
      minLength: 10,
      maxLength: 150,
      passwordLength: 30,
      disabledCharsCount: 0,
      isShowSnackbar: false
    }
  },
  methods: {
    copyToClipBoard () {
      const copyIcon = document.querySelector('.lnr-book')
      const passwordElem = document.querySelector('.password__generated')
      const copyPassword = passwordElem.innerHTML

      if (copyPassword) {
        window.navigator.clipboard.writeText(copyPassword)
          .then(() => {
            copyIcon.classList.add('copy')
            this.isShowSnackbar = true
            setTimeout(() => {
              copyIcon.classList.remove('copy')
              this.isShowSnackbar = false
            }, 1500)
          })
      }
    },
    validateAvailableChars (status) {
      (status) ? this.disabledCharsCount -= 1 : this.disabledCharsCount += 1

      // make sure that at least one password chars is available
      if (this.disabledCharsCount > 3) return false

      this.limitPasswordCharacters()
    },
    limitPasswordCharacters () {
      // add or remove uppercase
      const upperCase = (!this.hasUpperCase) ? '' : this.upperCase
      // add or remove lowercase
      const lowerCase = (!this.hasLowerCase) ? '' : this.lowerCase
      // add or remove numbers
      const number = (!this.hasNumber) ? '' : this.numbers
      // add or remove symbols
      const symbol = (!this.hasSymbol) ? '' : this.symbols

      // construct new password characters
      this.passwordChars = upperCase + lowerCase + number + symbol
      this.generatePassword()
    },
    async generatePassword ($event = null) {
      const isGenerate = ($event && $event.target.tagName === 'SPAN')
      let password = ''
      let loop = 0

      if (isGenerate) $event.target.classList.add('rotate')

      await new Promise((resolve, reject) => {
        for (loop; password.length < this.passwordLength; loop++) {
          const num = Math.floor(Math.random() * this.passwordChars.length)
          password += this.passwordChars.substring(num, num + 1)
        }
        setTimeout(() => resolve(password), 200)
      }).then(result => {
        if (result) {
          if (isGenerate) $event.target.classList.remove('rotate')
          this.password = password
        }
      })
    }
  },
  mounted () {
    this.passwordChars = this.upperCase + this.lowerCase + this.numbers + this.symbols
    this.generatePassword()
  }
}
</script>
