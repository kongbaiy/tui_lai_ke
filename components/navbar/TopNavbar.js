(()=> {
	const template = `
		<style>
			@import url('common/css/reset.css');
			
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
				border-bottom: 1px solid #E6E6E6;
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
			
			.menu-popup-bg {
				display: none;
				position: fixed;
				top: 0;
				left: 0;
				z-index: 30;
				width: 100%;
				height: 100%;
				background-color: rgba(0,0,0,0.5);
			}
			
			.menu-popup {
				transition: all 200ms;
				box-sizing: border-box;
				overflow-y: scroll;
				-webkit-overflow-scrolling: touch;
				position: fixed;
				top: 0.44rem;
				right: -1.97rem;
				z-index: 30;
				padding: 0 0.15rem;
				width: 1.97rem;
				max-height: calc(100% - 1.05rem);
				background-color: #fff;
			}
			
			.menu-nav-list {
				margin-top: 0.2rem;
			}
			
			.menu-nav-listItem {
				padding: 0.15rem 0;
				border-bottom: 1px solid #CBCBCB;
			}
			
			.menu-nav-listItem a {
				font-size: 0.15rem;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #333;
			}
			
			.menu-nav-slogan {
				padding: 0.18rem 0;
				font-size: 0.14rem;
				font-family: FZZhengHeiS-EB-GB;
				font-weight: bold;
				color: #333;
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
		
		<div class="menu-popup-bg"></div>
		<div class="menu-popup">
			<ul class="menu-nav-list">
				<li class="menu-nav-listItem">
					<a href="home.html">网站首页</a>
				</li>
				<li class="menu-nav-listItem">
					<a href="website.html">网站建设</a>
				</li>
				<li class="menu-nav-listItem">
					<a href="website-optimization.html">网站优化</a>
				</li>
				<li class="menu-nav-listItem">
					<a href="plane-designs.html">平面设计</a>
				</li>
				<li class="menu-nav-listItem">
					<a href="case">成功案例</a>
				</li>
				<li class="menu-nav-listItem">
					<a href="news.html">新闻资讯</a>
				</li>
				<li class="menu-nav-listItem">
					<a href="about-us.html">关于我们</a>
				</li>
			</ul>
			<p class="menu-nav-slogan">专注 ▪ 专业 ▪ 精准 ▪ 效果</p>
		</div>
	`;
	
	class TopNavbar extends HTMLElement {
		static get observedAttributes() {
		}
			
		constructor() {
		    super();
			const shadowRoot = this.attachShadow({ mode: 'open' });
			
			shadowRoot.innerHTML = template;
			this._root = shadowRoot;

			const menu_el = shadowRoot.querySelector('.menu-icon');
			const menu_popupbg_el = shadowRoot.querySelector('.menu-popup-bg');

			menu_el.addEventListener('click', this.onMenu.bind(this));
			menu_popupbg_el.addEventListener('click', this.onPopupBg.bind(this));
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
		
		attributeChangedCallback() {
			// 当 custom element增加、删除、修改自身属性时，被调用
		}

		onMenu() {
			const men_popupbg_el = this._root.querySelector('.menu-popup-bg');
			const men_popup_el = this._root.querySelector('.menu-popup');

			men_popupbg_el.setAttribute('style', 'display: block');
			men_popup_el.setAttribute('style', 'right:0;');
			this.setPageStopScroll(true);
		}

		onPopupBg() {
			const men_popupbg_el = this._root.querySelector('.menu-popup-bg');
			const men_popup_el = this._root.querySelector('.menu-popup');

			men_popupbg_el.setAttribute('style', 'display: none;');
			men_popup_el.setAttribute('style', 'right: -2.5rem;');
			this.setPageStopScroll(false);
		}

		/**
		 * 设置页面停止滑动
		 * @param {Boolean} status
		 * */ 
		setPageStopScroll(status) {
			const body = document.body;
			const body_style = body.getAttribute('style');

			if(status) {
				body.setAttribute('style', (body_style || '') + 'overflow:hidden;');
			} else {
				body.setAttribute('style', body_style.replace('overflow:hidden;', ''));
			}
		}

		/**
		 * 获取url参数
		 * @param {string} name
		 * */ 
		getQueryString(name) { 
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
			var r = window.location.search.substr(1).match(reg);

			if (r != null) return unescape(r[2]); 

			return null; 
		} 
	}
	customElements.define('top-navbar', TopNavbar);
})();