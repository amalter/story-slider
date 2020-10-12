import { InnerBlocks } from '@wordpress/block-editor';

const { RichText } = wp.blockEditor;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks


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