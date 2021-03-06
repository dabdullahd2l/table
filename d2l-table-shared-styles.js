import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
	<style is="custom-style">
		html {
			--d2l-table-border-color: var(--d2l-color-mica);
			--d2l-table-border: 1px solid var(--d2l-table-border-color);
			--d2l-table-border-radius: 0.3rem;
			--d2l-table-header-background-color: var(--d2l-color-regolith);
			--d2l-table-body-background-color: #fff;
			--d2l-table-row-background-color-active: var(--d2l-color-celestine-plus-2);
			--d2l-table-row-border-color-active-selected: var(--d2l-color-celestine-plus-1);
			--d2l-table-row-background-color-active-selected: #EBF5FC;
			--d2l-table-row-border-color-selected: var(--d2l-color-celestine-plus-1);
			--d2l-table-row-background-color-selected: var(--d2l-color-celestine-plus-2);

			--d2l-table-cell:{
				border-top:var(--d2l-table-border);
				border-right:var(--d2l-table-border);
				display:table-cell;
				vertical-align:middle;
				padding: 0.5rem 1rem;
				height: 41px; /* min-height to be 62px including border */
			};
			--d2l-table-header: {
				color:var(--d2l-color-ferrite);
				font-size:.7rem;
				line-height:1rem;
				background-color:var(--d2l-table-header-background-color);
				margin:1rem 0;
				padding: 0.5rem 1rem;
				height: 27px; /* min-height to be 48px including border */
			};
			--d2l-table: {
				background-color:transparent;
				border-collapse:separate!important;
				border-spacing:0;
				display:table;
				font-size: 0.8rem;
				font-weight: 400;
				width:100%;
			};
			--d2l-table-head: {
				display:table-header-group;
			};
			--d2l-table-foot: {
				display:table-footer-group;
				background-color:var(--d2l-table-body-background-color);
			};
			--d2l-table-body: {
				display: table-row-group;
				background-color:var(--d2l-table-body-background-color);
			};
			--d2l-table-row: {
				display:table-row;
			};
		}
	</style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
