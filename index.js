(function () {
	const template = document.createElement('template')
	template.innerHTML = `
		<style>
		</style>
		<div id="root" style="width: 100%; height: 100%;">
		커스텀위젯테스트
		</div>
	`

	class Main extends HTMLElement{
		constructor () {
			super()

			this._shadowRoot = this.attachShadow({mode: 'open'})
			this._shadowRoot.appendChild(template.content.cloneNode(true))

			this._root = this._shadowRoot.getElementById('root')
		}

		onCustomWidgetResize(width, height) {
			this.render()
		}

		onCustomWidgetAfterUpdate(changedProps){
			// this.render()
		}

		onCustomWidgetDestroy() {

		}

		async render() {
			this._root.textContent = `너비: ${this.clientWidth}  높이: ${this.clientHeight}`
			// const dataBinding = this.dataBinding
			// if (!dataBinding || dataBinding.state !== 'success') {
			// 	return
			// }
			// this._root.textContent = JSON.stringify(dataBinding)
		}
	}

	customElements.define('donut-chart', Main)
})()
