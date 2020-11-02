(()=> {
	const template = `
		<style>
			.top-navbar {
				position: fixed;
				top: 0;
				left: 0;
				z-index: 60;
				display: flex;
				align-items: center;
				justify-content: space-between;
				box-sizing: border-box;
				padding: 0 0.13rem;
				width: 100%;
				height: 0.44rem;
				background-color: #fff;
			}
			
			.top-navbar-left {
				display: flex;
				align-items: center;
				justify-content: center;
				
			}
			
			.logo-img {
				width: 0.9rem;
			}
			
			.location-info {
				margin-left: 0.1rem;
				padding: 0 0.1rem;
				display: flex;
				align-items: center;
				height: 0.22rem;
				border-left: 1px solid rgba(206,206,206,1);
				font-size: 0.13rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #262626;
			}
			
			.location-icon {
				margin-right: 0.05rem;
				width: 0.10rem;
				height: 0.13rem;
			}
			
			.bottom-arrow-icon {
				margin-left: 0.05rem;
				width: 0.09rem;
				height: 0.06rem;
			}
			
			.top-navbar-right {
				display: flex;
				align-items: center;
			}
			
			.phone-icon, .menu-icon {
				width: 0.2rem;
				height: 0.2rem;
			}
			
			.menu-icon {
				margin-left: 0.15rem;
			}
			
			.top-navbar-blank {
				height: 0.44rem;
			}
		</style>
		
		<div class="top-navbar">
			<div class="top-navbar-left">
				<img src="imgs/logo@2x.png" class="logo-img" />
				<div class="location-info">
					<img src="imgs/20-26@2x.png" class="location-icon" />成都
					<img src="imgs/18-12@2x.png" class="bottom-arrow-icon" />
				</div>
			</div>
			<div class="top-navbar-right">
				<a href="tel:10086"><img src="imgs/phone_icon.png" class="phone-icon" /></a>
				<img src="imgs/40-40@2x.png" class="menu-icon" />
			</div>
		</div>
		<div class="top-navbar-blank"></div>
	`;
	
	class TopNavbar extends HTMLElement {
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
	customElements.define('top-navbar', TopNavbar);
})();