(()=> {
	const template = `
		<style>
			@import url('common/css/reset.css');
			
			.tabbar {
				position: fixed;
				bottom: 0;
				left: 0;
				z-index: 30;
				display: flex;
				align-items: center;
				justify-content: space-around;
				width: 100%;
				height: 0.6rem;
				border-top: 1px solid #E6E6E6;
				background-color: #fff;
			}
			
			.tabbar-blank {
				height: 0.6rem;
			}
			
			.tabbar-item {
				text-align: center;
				font-size: 0;
			}
			
			.tabbar-item-icon {
				width: 0.2rem;
				height: 0.2rem;
			}
			
			.tabbar-item-text {
				margin-top: 0.06rem;
				font-size: 0.1rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				line-height: 0.17rem;
				color: #404040;
			}
			
			.tabbar-item_active .tabbar-item-text{
				color: #DC000C;
			}
		</style>
		
		<div class="tabbar">
			<div class="tabbar-item">
				<img src="imgs/active_tabbar_icon_1.png" class="tabbar-item-icon" />
				<p class="tabbar-item-text">首页</p>
			</div>
			<div class="tabbar-item">
				<img src="imgs/tabbar_icon_2.png" class="tabbar-item-icon" />
				<p class="tabbar-item-text">案例中心</p>
			</div>
			<div class="tabbar-item">
				<img src="imgs/tabbar_icon_3.png" class="tabbar-item-icon" />
				<p class="tabbar-item-text">电话咨询</p>
			</div>
			<div class="tabbar-item">
				<img src="imgs/tabbar_icon_4.png" class="tabbar-item-icon" />
				<p class="tabbar-item-text">在线咨询</p>
			</div>
		</div>
		<div class="tabbar-blank"></div>
	`;
	
	const currentDom = document.currentScript.ownerDocument;
	
	class Tabbar extends HTMLElement {
		static get observedAttributes() {
			return ['activeIndex', '']
		}
		
		get activeIndex() {
			return this.getAttribute('activeIndex');
		}
		
		set activeIndex(val) {
			console.log('set activeIndex');
			this.setAttribute('activeIndex', val)
		}
			
		constructor() {
		    super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			const { attributes } = shadowRoot.host;
			
			shadowRoot.innerHTML = template;
			
		}
		
		connectedCallback() {
			// 自定义元素首次插入文档dom时调用
			// 相较于constructor只会执行一次，这个生命周期每次将节点连接到dom时都会调用
			// 可能会执行多次(比如同一个自定义元素remove, append多次)
			if(this.activeIndex != null) {
				const tabbar_item_el = this.shadowRoot.querySelectorAll('.tabbar-item');
				
				// tabbar_item_el[parseInt(this.activeIndex)].className += ' tabbar-item_active';
				$(tabbar_item_el).eq(parseInt(this.activeIndex)).addClass('tabbar-item_active');
				$(tabbar_item_el).on('click', function() {
					
					$(tabbar_item_el).removeClass('tabbar-item_active');
					$(this).addClass('tabbar-item_active');
				});
			}
		}
		
		disconnectedCallback() {
			// 自定义元素从文档中删除时，调用
		}
		
		adoptedCallback() {
			// 自定义元素移动到新的文档
			// 比如使用 adoptNode 方法在多iframe下移动元素
		}
		
		attributeChangedCallback(attrName, oldVal, newVal) {
			// 当 custom element增加、删除、修改自身属性时，被调用
		}
	}
	customElements.define('tab-bar', Tabbar);
})();