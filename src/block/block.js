/**
 * BLOCK: story-slider
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';
import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
const { RichText } = wp.blockEditor;


const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const ALLOWED_BLOCKS = [ 'cgb/block-story-slider-slide' ];
const TEMPLATE = [
	[ 'cgb/block-story-slider-slide', { placeholder: 'Slide' } ],
];

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

 /**
 * Registering Parent for the Story Slider block
 */
registerBlockType( 'cgb/block-story-slider', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Story Slider' ), // Block title.
	icon: 'slides', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'layout', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes:{
		slideNavTitles: {
			type: 'array',
			default: []
		}
	},
	keywords: [
		__( 'Story Slider' ),
		__( 'Carousel' ),
	],

	/**
	 * 
	 * Edit function for Parent Slider Block
	 * 
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	
	edit: ( props ) => {
		//console.info(wp.data.select( 'core/block-editor' ).getBlocks()[0].innerBlocks[0].attributes.slideNavTitle);
		const { 
			attributes, 
			setAttributes 
		} = props;
		const { slideNavTitles } = attributes;

		const buildNavArray = () =>{
			const parentBlockID = props.clientId;
			const parentIndex = wp.data.select( 'core/block-editor' ).getBlockIndex(parentBlockID);
			const { innerBlockCount } = useSelect(select => ({
				innerBlockCount: select('core/block-editor').getBlockCount(parentBlockID)
			}));
			let navItems = [];
			
			for (let block = 0; block < innerBlockCount; block++) {
				let navItem = wp.data.select( 'core/block-editor' ).getBlocks()[parentIndex].innerBlocks[block].attributes.slideNavTitle;
				navItems.push(navItem);
			}
			if (hasSelectedInnerBlock(props)) {
				//wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( [parentBlockID], { slideNavTitles : navItems } );				
				const addTitle = ( newTitle ) => setAttributes( { slideNavTitles: newTitle } );
				addTitle(navItems);
			}
		}
		buildNavArray();
		return (
			<div className={ props.className }>
				<p>Story Slider Block</p>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					renderAppender={ () => (
						<InnerBlocks.DefaultBlockAppender />
					) }
				/>
			</div>
		);
	},

	/**
	 * 
	 * Save function for Parent Slider Block
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const {
			attributes: { slideNavTitles }
		} = props;
		console.info(slideNavTitles);
		return (
			<div className={ props.className }>
				<div className="story-slider-nav">
						Slider Navigation
						<ul>
						{slideNavTitles.map(title => {
							return <li className="title">{title}</li>;
						})}
						</ul>	
				</div>
				<div className="story-slider">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} ); //end parent Slider Block

/**********************************************************
 * Registering Child Innerblock for the Story Slider block
 **********************************************************/
registerBlockType( 'cgb/block-story-slider-slide', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Story Slider Slide' ), // Block title.
	icon: 'welcome-add-page', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	parent: [ 'cgb/block-story-slider' ],
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	attributes: {
		slideNavTitle: {
			type: 'string',
			source: 'html',
			selector: '.slide-nav-title'
		}
	},
	keywords: [
		__( 'Slide' ),
		__( 'Add slide' ),
	],

	/**
	 * 
	 * Edit function for Child Slide Block
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		//console.info(props);
		const { 
			attributes: { slideNavTitle }, 
			setAttributes 
		} = props;

		const onChangeNavTitle = newNavTitle => {
			setAttributes({ slideNavTitle: newNavTitle});
		};
		return (
			<div className={ props.className }>
				<h2>Slide</h2>
				<div class="slide-nav-title">
				<label class="slide-nav-title_label ">Slide Navigation Title: </label>
					<RichText 
						className={ "slide-nav-title_input" }
						value={slideNavTitle}
						onChange={onChangeNavTitle}
						placeholder="Add slide navigation title"
					/>
				</div>
				<InnerBlocks />
			</div>
		);
	},

	/**
	 *
	 * Save function for Child Slide Block
	 * 
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const {
			attributes: { slideNavTitle }
		} = props;
		return (
			<div className="story-slider_slide">
				
				<p className="slide-nav-title"><RichText.Content value={slideNavTitle} /></p>
					<InnerBlocks.Content />
			</div>
		);
	},
} );

//function to check if innerblocks have been changed
function hasSelectedInnerBlock(props) {
	const select = wp.data.select( 'core/block-editor' );
	const selected = select.getBlockSelectionStart();
	const inner = select.getBlock(props.clientId).innerBlocks;
	for (let i = 0; i < inner.length; i++) {
		if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
			return true;
		}
	}
	return false;
};