(()=> {
	const template = `
		<style>
			@import url('common/css/reset.css');
			
			.footer-info {
				background-color: #404040;
			}
			
			.company-information {
				padding: 0.25rem 0.38rem 0.2rem;
				text-align: center;
			}
			
			.company-information-title {
				font-size: 0.18rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #fff;
			}
			
			.company-information-text {
				margin-top: 0.05rem;
				font-size: 0.1rem;
				font-family: Source Han Sans CN;
				font-weight: 300;
				line-height: 0.2rem;
				color: #fff;
			}
			
			.address-information {
				padding: 0.15rem 0.38rem 0.35rem;
				border-top: 1px solid #fff;
				text-align: center;
			}
			
			.address-information-text {
				font-size: 0.1rem;
				font-family: Source Han Sans CN;
				font-weight: 300;
				line-height: 0.2rem;
				color: #fff;
			}
			
			.address-information-text:nth-child(n + 2) {
				margin-top: 0.04rem;
			}
		</style>
		
		<div class="footer-info">
			<div class="company-information">
				<p class="company-information-title">四川推来客网络科技有限公司</p>
				<p class="company-information-text">Sichuan Pushcom Network Technology Co., Ltd.</p>
			</div>
			<div class="address-information">
				<p class="address-information-text">公司地址: 成都市环球中心w1区2132室</p>
				<p class="address-information-text">©Copyright 2017-2018 All Right Reserved 四川推来客科技有限公司 [ 蜀ICP备18011460号]</p>
			</div>
		</div>
	`;
	
	class FooterInfo extends HTMLElement {
		static get observedAttributes() {
		}
			
		constructor() {
		    super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			
			shadowRoot.innerHTML = template;
		}
		
		connectedCallback() {
			// 自定义元素首次插入文档dom时调用
			// 相较于constructor只会执行一次，这个生命周期每次将节点连接到dom时都会调用
			// 可能会执行多次(比如同一个自定义元素remove, append多次)
		}
		
		disconnectedCallback() {
			// 自定义元素从文档中删除时，调用
		}
		
		adoptedCallback() {
			// 自定义元素移动到新的文档
			// 比如使用 adoptNode 方法在多iframe下移动元素
		}
	}
	customElements.define('footer-info', FooterInfo);
})();