import { InnerBlocks } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RawHTML } = wp.element;
const ALLOWED_BLOCKS = [ 'cgb/block-story-slider-slide' ];
const TEMPLATE = [
	[ 'cgb/block-story-slider-slide', { placeholder: 'Slide' } ],
];
/**
 * Register: Story Slider Gutenberg Block.
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
			//function gets child properties and adds to parent attributes
			const parentBlockID = props.clientId;
			const innerOfParentIsSelected = useSelect( ( select ) => select( 'core/block-editor' ).hasSelectedInnerBlock( parentBlockID, true ) );
			const parentIndex = wp.data.select( 'core/block-editor' ).getBlockIndex(parentBlockID);
			const { innerBlockCount } = useSelect(select => ({
				innerBlockCount: select('core/block-editor').getBlockCount(parentBlockID)
			}));
			let navItems = [];
			
			for (let block = 0; block < innerBlockCount; block++) {
				let innerChild = wp.data.select( 'core/block-editor' ).getBlocks()[parentIndex].innerBlocks[block];
				let navItem = wp.data.select( 'core/block-editor' ).getBlocks()[parentIndex].innerBlocks[block].attributes.slideNavTitle;
				navItems.push(navItem);
			}

			if (innerOfParentIsSelected || hasSelectedInnerBlock(props)) {
				//wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( [parentBlockID], { slideNavTitles : navItems } );				
				const addTitle = ( newTitle ) => setAttributes( { slideNavTitles: newTitle } );
				addTitle(navItems);
			}
		}
		buildNavArray();
		//function to check if innerblocks have been changed
		function hasSelectedInnerBlock(props) {
			//Known bugs: This function causes a bug where if input field is currently selected
			// and user clicks "save," a message comes up asking if user wants to leave without saving
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

		return (
			<div className={ props.className }>
				<h3>Story Slider Block</h3>
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
		//console.info(slideNavTitles);
		return (
			<div className={ props.className }>
				<div className="story-slider-nav">
						{slideNavTitles.map(title => {
							return <div className="story-slider-nav_title"><RawHTML>{title}</RawHTML></div>;
						})}
				</div>
				<div className="story-slider">
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},
} ); //end parent Slider Block